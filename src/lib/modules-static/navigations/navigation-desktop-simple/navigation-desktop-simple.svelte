<script>
  import Link from "$lib/modules-basic/link.svelte"
  import Text from "$lib/modules-basic/text.svelte"
  import { page } from "$app/stores"
  import { navigating } from "$app/stores"
  import { scrollto } from "svelte-scrollto"
	// Get data from parent component. Probably from the setup page
	export let data

	// Classes which are connected to the height of the navigation
	let height = 'text-lg py-3 '
</script>

<div class="{height} hidden sm:flex fixed top-0 left-0 w-screen z-40 justify-between px-4" class:scrim-gradient-down={$navigating}>
    {#if $page.url.pathname === '/'}
      <div
        class="cursor-pointer"
        use:scrollto={"#content"}
      >
        <Text inline text={data.website_title} />
      </div>
      {:else}
      <a data-sveltekit-prefetch href="/">
        <Text inline text={data.website_title} />
      </a>
    {/if}


    {#if $page.params.work}
      <a data-sveltekit-noscroll href="/" class="fixed cursor-pointer left-[50%] -translate-x-1/2 text-center w-20 h-8 flex justify-center items-center text-xl">
        <div class="w-4">
          <svg style="transform: rotate(45deg)" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.03 66.03"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><path class="cls-1" d="M32.91,0c18.21,0,33.1,14.89,33.1,33.01s-14.89,33.01-33.1,33.01S0,51.13,0,33.01,14.8,0,32.91,0Zm0,63.45c16.79,0,30.54-13.75,30.54-30.45S49.7,2.56,32.91,2.56,2.56,16.31,2.56,33.01s13.66,30.45,30.35,30.45ZM11.34,31.23H31.34V11.34h3.54V31.23h19.79v3.54h-19.79v19.9h-3.54v-19.9H11.34v-3.54Z"/></svg>
        </div>
      </a>
    {/if}

    <div>
		{#each data.navigation_top as navItem}
      <div class="inline-block pl-4">
        <Link document={navItem.link}>
          <Text inline classes="uppercase font-normal text-base" text={navItem.title} />
        </Link>
      </div>
		{/each}
	</div>
</div>