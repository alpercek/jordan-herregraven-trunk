<script>
	// Import components which are used
	import Text from '$lib/modules-basic/text.svelte'
	
	// Get data from Slice function
	export let slice

	// Get data from parent component
    export let inputText

	// Define variables which get used in this component
	let longText

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		longText = inputText
	} else {
		// Use data from the slices module
		longText = slice.primary.long_text
	}
</script>

<div class="">
	<!-- Display text basic comp -->
	<Text text={longText} hasRichtext={true} classes={''} classesRichtext={'px-4 pt-1 pb-3'}/>
</div>