<script>
  export let slices

  import Slice from "$lib/functionality/modules-slices/modules-slice.svelte"
  import Cursor from "$lib/modules-basic/cursor.svelte"
  import Arrow from "$lib/modules-basic/arrow.svelte"

  	// Import the Splide slider library
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

  import { vw } from "$lib/functionality/store/layout"
  import { createEventDispatcher, onMount } from "svelte"

  // Props for the Slice
  export let noMargin = false

  // Create event dispatcher
  const dispatch = createEventDispatcher()

  let height
  let clientWidth
  let slider
  let self
  let activeIndex = 0
  let first = false

  let direction = null

  const onMouseMove = (e) => {
    const { left } = self.getBoundingClientRect();
    let x = e.clientX - left

    if (x < clientWidth / 2) {
      direction = '<'
    } else {
      direction = '>'
    }
  }

  const onClick = () => {
    slider.splide.go(direction)
  }
  
  const onActive = (e) => {
    dispatch('ready')
    activeIndex = slider.splide.index
    dispatch('index', slider.splide.index)

    const slice = e.detail.Slide.slide.querySelector('.slice')

    const { height } = slice.getBoundingClientRect()
  }
    
  const onMouseLeave = () => direction = null

  // Check if the single slice is a zoomable
  onMount(() => {
    if (slices.length === 1) {
      dispatch('index', 0)
    }
  })
</script>

{#if direction !== null}
  <div class="hidden sm:block">
    <Cursor bare>
      {#if direction === '>'}
        <Arrow />
      {:else}
        <Arrow direction="left" />
      {/if}
    </Cursor>
  </div>
{/if}

{#if slices.length > 1}
  <div
    bind:this={self}
    bind:clientWidth
    on:mousemove={onMouseMove}
    on:mouseleave={onMouseLeave}
    on:click={onClick}
    style="height: {height}px"
    class="overflow-hidden relative"
  >
    <div class="absolute bottom-0 left-0 z-10 text-white p-4 text-sm lg:hidden">
      <span>
        {activeIndex + 1}/{slices.length}
      </span>
    </div>

    <Splide
      bind:this={slider}
      on:active={onActive}
      options={{
        autoHeight: true,
        drag: $vw < 640,
        type: 'loop',
        focus: 'center',
        pagination: false,
        arrows: false
      }}
      >
      {#each slices as slice}
        <SplideSlide>
          <Slice {slice} {noMargin} inSlider={true} />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
{:else}
  {#each slices as slice}
    <Slice {slice} {noMargin} />
  {/each}
{/if} 
