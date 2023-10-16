<script>
    // Import hamburger library
    import Hamburger from 'svelte-hamburgers'
    import Link from "$lib/modules-basic/link.svelte"
  import Text from "$lib/modules-basic/text.svelte"
	import { fade } from 'svelte/transition'

    // Get data from parent component. Probably from the setup page
    export let data

    // Define variable for the open and closed state of the menu and set it to closed
    let open = false

    // Classes which are connected to the height of the navigation
    let height = 'h-16'

    // Function which opens the menu
	function close() {
        open = false
    }
</script>

<!-- Embed the CSS of the hamburger menu -->
<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head>

<div
  class="{height} sm:hidden flex top-0 fixed w-screen z-50 justify-between cursor-pointer px-4 py-4"
  class:open={open}
>
    <!-- Title -->
    <a data-sveltekit-prefetch on:click="{close}" class="text-xl tracking-tight opacity-100 transition-opacity" class:opacity-0={!open} href="/">
      {data.website_title[0].text}
    </a>

    <!-- Burger -->
    <div class="pt-0.5">
      <Hamburger
        bind:open
        type="collapse"
        --padding="0px"
        --layer-height="2.5px"
        --layer-width="25px"
        --layer-spacing="3.5px"
        --border-radius="0px"
        />
    </div>
</div>

<!-- Menu which can open or close -->
{#if open}
  <div class="flex sm:hidden top-16 h-screen fixed w-screen z-50 flex-col justify-start px-4 bg-white/70" transition:fade>
      <div class="flex flex-col xs:flex-row text-center justify-center text-lg">
        {#each data.navigation_top as navItem}
        <Link on:click={close} document={navItem.link}>
          <Text classes="px-4 text-2xl tracking-tight" inline text={navItem.title} />
        </Link>
      {/each}
    </div>
  </div>
{/if}

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div class="{height} block sm:hidden">
	&nbsp;
</div>

<style>
  .open {
    @apply bg-white/70;
  }
</style>