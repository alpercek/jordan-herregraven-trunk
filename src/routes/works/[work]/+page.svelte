<script>
  import { isFilled } from "@prismicio/helpers"
  import { scrollThrough, panThrough } from "$lib/functionality/ui"
  import { uncompressed } from "$lib/functionality/prismic/functions"

  import { onMount } from "svelte"

  // Import the Splide slider library
  import { SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/dist/css/splide.min.css';

  // Import all components which will be used on this page
  import Cursor from "$lib/modules-basic/cursor.svelte"
  import Seo from '$lib/functionality/seo/seo.svelte'
  import ImageZoom from "$lib/modules-basic/image-zoom.svelte"
  import MobileCaption from "$lib/modules-flex/work/MobileCaption.svelte"
  import SliderCursorArrows from "$lib/modules-flex/sliders/slider-cursor-arrows/slider-cursor-arrows.svelte"


  // Get the data from above
  export let data

  let zoomSrc
  let zoomFunctions = []
  let zooming = false
  let slider
  let index = 0
  let mouseover = false
  let mouseEvent

  let zoomImages = data.document.data.body.filter(slice => slice.slice_type === 'image_full_width' && isFilled.image(slice.primary.zoom_image))
  
  const attrs = {}

  attrs.controls = zoomImages.length > 1

  const setMouseEvent = (e) => mouseEvent = e

  const handleIndex = (e) => {
    index = e.detail
    slider.go(index)
  }
  const toggle = () => {
    const fn = zoomFunctions[index]
    if (fn) fn()
    zooming = !zooming
  }
  const onSliderClick = () => {
    toggle()
  }
  const onZoomIn  = (e) => { zoomSrc = e.detail }
  const onZoomOut = (e) => {
    zoomSrc = undefined
    mouseover = false
    toggle()
  }

  onMount(() => {
    document.body.addEventListener('click', setMouseEvent)
  })
</script>

<Seo setup={data.setup} document={data.document} />

<svelte:window on:mousemove={setMouseEvent} />

<div class="mb-12">
  <MobileCaption
    on:next={slider.next}
    on:prev={slider.prev}
    on:index={handleIndex}
    work={data.document}
    {...attrs}
    {zoomImages}
    always
  />
</div>

{#if zoomSrc}
  <div
    use:scrollThrough={mouseEvent}
    use:panThrough
    on:click={onZoomOut}
    class="w-screen h-screen fixed inset-0 overflow-hidden border-red-100 z-40">
    <div
      style="min-width: {zoomSrc.dimensions.width}px; min-height: {zoomSrc.dimensions.height}px;" class="hide-scrollbars"
    >
      <img
        class=""
        src={uncompressed(zoomSrc.url)}
        alt=""
      >
    </div>
  </div>
{/if}

<div
  class:zooming={zooming}
  class="bg-white"
  on:mouseenter={() => mouseover = true}
  on:mouseleave={() => mouseover = false}
>
  {#if zoomImages.length <= 1}
    {#each zoomImages as zoom, i}
      <div on:click={toggle}>
        <ImageZoom
          bind:toggle={zoomFunctions[i]}
          on:zoomin={onZoomIn}
          image={zoom.primary.zoom_image}>
        </ImageZoom>
      </div>
      {/each}
      {:else}
      <SliderCursorArrows
        on:click={onSliderClick}
        bind:this={slider}
        noArrows
      >
      {#each zoomImages as zoom, i}
        <SplideSlide>
          <div class="relative">
              <ImageZoom
                bind:toggle={zoomFunctions[i]}
                on:zoomin={onZoomIn}
                image={zoom.primary.zoom_image}
              />
          </div>
        </SplideSlide>
      {/each}
    </SliderCursorArrows>
    {/if}
  </div>

  {#if mouseover}
    <Cursor bare>
      {#if zooming}
        <svg class="w-3 hidden md:block" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.03 66.03"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><path class="cls-1" d="M11.34,31.24H54.68v3.54H11.34v-3.54ZM32.92,0c18.21,0,33.11,14.9,33.11,33.01s-14.9,33.01-33.11,33.01S0,51.13,0,33.01,14.8,0,32.92,0Zm0,63.47c16.79,0,30.55-13.76,30.55-30.45S49.71,2.56,32.92,2.56,2.56,16.32,2.56,33.01s13.66,30.45,30.36,30.45Z"/></svg>
      {:else}
        <svg class="w-3 hidden md:block" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.03 66.03"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><path class="cls-1" d="M32.91,0c18.21,0,33.1,14.89,33.1,33.01s-14.89,33.01-33.1,33.01S0,51.13,0,33.01,14.8,0,32.91,0Zm0,63.45c16.79,0,30.54-13.75,30.54-30.45S49.7,2.56,32.91,2.56,2.56,16.31,2.56,33.01s13.66,30.45,30.35,30.45ZM11.34,31.23H31.34V11.34h3.54V31.23h19.79v3.54h-19.79v19.9h-3.54v-19.9H11.34v-3.54Z"/></svg>
      {/if} 
    </Cursor>
  {/if}