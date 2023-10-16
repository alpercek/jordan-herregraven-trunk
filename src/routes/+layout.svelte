<script>
    // Import CSS
    import '../app.postcss';
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte';
    import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte';
    import Seo from '$lib/functionality/seo/seo.svelte';

    import { fade } from "svelte/transition"
    import { page } from "$app/stores"

    // Import the prismic repo name
    import { namespace } from '$lib/functionality/prismic/setup';
    import {
      vw,
      vh,
      y,
      mouseX,
      mouseY
    } from "$lib/functionality/store/layout"

    const onMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    export let data

    const { url } = data
</script>

<!-- GOOGLE BEEF ENGINE OPTOIMAZIZIZITION -->
<Seo {...data} />

<!-- Import the script which checks if this page is in preview mode -->
<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&amp;repo={namespace}"></script>
</svelte:head>

<!-- Widthski -->
<svelte:window bind:innerWidth="{$vw}" bind:innerHeight="{$vh}" bind:scrollY="{$y}"></svelte:window>

<!-- Bodksi -->
<svelte:body on:mousemove="{onMouseMove}"></svelte:body>

<main id="content" class="pt-32 pb-40 sm:px-4 w-full">
  <NavigationDesktopSimple data="{data.setup.data}"></NavigationDesktopSimple>
  <NavigationMobileSimple data="{data.setup.data}"></NavigationMobileSimple>
  
  {#key url}
    <div
      in:fade
      out:fade
    >
      <slot />
    </div>
  {/key}
</main>
