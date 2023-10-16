<!-- Internal and external links -->
<!-- Deals with empty ones -->

<script>
  import linkResolver from "$lib/functionality/prismic/linkResolver"
  import { page } from "$app/stores"
  import { createEventDispatcher } from "svelte"

  export let document
  export let href = false

  export let classes = ""
  export let prefetch = true
  export let reload = false
  export let noscroll = true

  // Remove attributes completely if they are present on the object. 
  // Otherwise sveltekit will still interpret them as true regardless
  const attributes = {
    'data-sveltekit-prefetch': prefetch,
    'sveltekit:reload': reload,
    'data-sveltekit-noscroll': noscroll
  }

  // Deletion
  Object.entries(attributes).forEach(entry => entry[1] || delete attributes[entry[0]])

  const dispatch = createEventDispatcher()

  if (document) {
    href = linkResolver(document)
  }
  
  const handleClick = (e) => {
    dispatch('click', e)
  }

  let active = false

  $: active = href === $page.url.pathname
</script>


{#if href}
  <a
    {href}
    class:active
    class="cursor-pointer {classes}"
    on:click={handleClick}
    {...attributes}
    >
    <slot></slot>
  </a>
{:else}
  <slot></slot>
{/if}

<style lang="postcss">
  .active {
    /* @apply underline; */
  }
</style>
