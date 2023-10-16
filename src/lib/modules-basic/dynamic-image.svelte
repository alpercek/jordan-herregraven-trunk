<script>
  import { fade } from "svelte/transition"
  import { uncompressed } from "$lib/functionality/prismic/functions"

  export let field
  export let classes = ""
  export let fixedSize = false
  export let staticImage = false

  let vw, url, clientWidth, style
  let size = 'Medium'

  const ratio = field.dimensions.height / field.dimensions.width

  if (fixedSize) size = fixedSize

  $: {
    if (!fixedSize && clientWidth)  {
      if (clientWidth < 768) {
        size = 'Small'
      } else if (clientWidth < 1200) {
        size = 'Medium'
      } else if (clientWidth < 1600) {
        size = 'Big'
      } else {
        size = 'Original'
      }
    }
  }

  $: url = size === 'Original' ? uncompressed(field.url) : field[size].url

  $: {
    if (clientWidth) {
      // style = `min-height: ${clientWidth * ratio}px`
    }
  }
</script>

<svelte:window bind:innerWidth={vw} />

<div bind:clientWidth {style} class={classes}>
  {#if !staticImage} 
    <img
      transition:fade
      src={url}
      alt={field.alt}
    >
  {:else}
    <img
      transition:fade
      src={url}
      alt={field.alt}
    >
  {/if}
</div>  
