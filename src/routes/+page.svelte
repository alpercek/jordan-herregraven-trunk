<script>
	// Import all components which will be used on this page
	import Seo from '$lib/functionality/seo/seo.svelte';
  import Slices from "$lib/functionality/modules-slices/modules-slices.svelte"
  import ScrollTop from "$lib/modules-flex/elements/scroll-to/top.svelte"

  export let data
</script>

<Seo {...data} />

<Slices slices={data.document.data.body} />

<ScrollTop />