<script>
  import Slice from "./modules-slice.svelte"

  import { page } from "$app/stores"

	// Get the data from the parent component
	export let slices

  const props = {
    maxWidth: $page.url.pathname.includes('about')
  }

  console.log(slices)
</script>

{#if slices}
	<div class="allSlices" class:spaced={$page.url.pathname.includes('about')}>
		{#each slices as slice}
      <Slice {slice} {...props} />
		{/each}
	</div>
{/if}