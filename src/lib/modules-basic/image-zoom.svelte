<script>
  import { uncompressed } from "$lib/functionality/prismic/functions"
  import { vh } from "$lib/functionality/store/layout"
  import { createEventDispatcher } from "svelte"

  export let image

  let zooming = false

  const dispatch = createEventDispatcher()

  export const toggle = () => {
    dispatch(zooming ? 'zoomout' : 'zoomin', image)
    zooming = !zooming
  }
</script>

<svelte:head>
  <link rel="preload" as="image" href={uncompressed(image.url)} />
</svelte:head>

<div class:zooming>
  {#if !zooming}
    <div
      class="w-full h-auto bg-white"
    >
      <img
        class="w-full bg-white"
        src={uncompressed(image.url)}
        alt={image.alt}
      />
    </div>
  {/if}  
</div>