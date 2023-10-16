<script>
  import { isFilled } from "@prismicio/helpers"
	// Import components which are used
	import Image from '$lib/atoms/image.svelte'
	import Text from '$lib/modules-basic/text.svelte'
  import { page } from "$app/stores"
	
	// Get data from Slice function
	export let slice
  export let maxWidth = false
  export let inSlider = false

	// Get data from parent component
	export let inputImage // array of Prismic image with dimansions (Big, Medium, Small)
	export let inputCaption // string or array for Prismic richtext
	export let inputHasRichtext // define if the caption is a string or a Prismic richtext
	export let captions = false

	// Define variables which get used in this component
	let image
  let zoom = false

	let hasRichtext
  let caption

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		image = inputImage
		caption = inputCaption
		hasRichtext = inputHasRichtext
	} else {
		// Use data from the slices module
		image = slice.primary.image
    zoom = isFilled.image(slice.primary.zoom_image) ? slice.primary.zoom_image : false
		caption = slice.primary.caption
		hasRichtext = true // Define id the slices module caption is a richtext (Default: true)
	}
</script>

<div class="w-full {!$page.params.page || 'px-4 sm:px-0'}" class:max-w-sm={maxWidth}>
	<!-- Display image basic comp -->
  <div class="w-full" class:zoom>
    {#if !inSlider}
      <!-- <Image src={image} classesOuter="w-full" /> -->
      <img src={image.url} alt={image.alt} class="w-full">
    {:else}
      <img src={image.url} alt={image.alt}>
    {/if}
  </div>

	<!-- Display text basic comp -->
  {#if captions}
	  <Text
      text={caption}
      hasRichtext={hasRichtext}
      classes={''}
      classesRichtext={'px-4 pt-1 pb-3 border-t border-lines'}
    />
  {/if}
</div>


<style lang="postcss">
  .zoom {
    @apply border-red-100;
  }
</style>