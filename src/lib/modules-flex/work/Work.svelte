<script>
  import { isFilled } from "@prismicio/helpers"
  import Slices from "$lib/modules-flex/sliders/slider-slices/slider-slices.svelte"
  import Caption from "./Caption.svelte"
  import MobileCaption from "./MobileCaption.svelte"

  export let work

  let hasZoom = false
  let clientWidth

  const minRatio = Math.min(...work.data.body.filter(s => s.slice_type === 'image_full_width').map(s => s.primary.image.dimensions.height / s.primary.image.dimensions.width))

  const onIndex = (e, work) => {
    const index = e.detail

    const slice = work.data.body[index]
    
    hasZoom = isFilled.image(slice.primary.zoom_image)
  }
</script>

<div
  bind:clientWidth
  class="w-full"
>
  {#if clientWidth}
    <div style:min-height="{clientWidth * minRatio}px">
      {#if minRatio}
        <Slices
          slices={work.data.body}
          noMargin
          on:index={(e) => { onIndex(e, work) }}
        />
      {/if}
    </div>
    <Caption {work} {hasZoom} />
    <MobileCaption {work} {hasZoom} />
  {/if}
</div>
