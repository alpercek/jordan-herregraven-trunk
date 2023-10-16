<script>
  import { dev } from "$app/env"
	// Import all possible components which get used in the Slice module
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/headline-simple.svelte"
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"
	import ParagraphRichtextSmall from "$lib/modules-flex/paragraphs/paragraph-richtext-small/paragraph-richtext-small.svelte"
	// Info Boxes
	// Repeating Content
	import TextImage from "$lib/modules-flex/paragraphs/text-image/text-image.svelte"
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/image-full-width.svelte"
	import ImageFullScreen from "$lib/modules-flex/images/image-full-screen/image-full-screen.svelte"
	import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
  import SliderVideoFullInfo from '$lib/modules-flex/sliders/slider-video-full-info/slider-video-full-info.svelte'
	import SliderMarquee from "$lib/modules-flex/sliders/slider-marquee/slider-marquee.svelte"
	import SliderMouseMove from "$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte"
	// Slider Fullscreen Image
	// Slider Complex Vertical
	import GalleryListHover from "$lib/modules-flex/galleries/gallery-list-hover/gallery-list-hover.svelte"
	// Gallery List Overlay Slider
	import VideoSimple from "$lib/modules-flex/videos/video-simple/video-simple.svelte"
	import VideoControls from "$lib/modules-flex/videos/video-controls/video-controls.svelte"
	// NavigationFullBackground
	// Table Big

  import WorkColumnsA from "$lib/modules-flex/work/A.svelte"
  import WorkColumnsAB from "$lib/modules-flex/work/AB.svelte"
  import WorkColumnsABC from "$lib/modules-flex/work/ABC.svelte"
  import WorkColumnsABCD from "$lib/modules-flex/work/ABCD.svelte"

  import CVColumns from "$lib/modules-flex/cv/columns.svelte"
  import CVColumnsImage from "$lib/modules-flex/cv/columns-image.svelte"
  import CVSimple from "$lib/modules-flex/cv/simple.svelte"

  import Comment from "$lib/modules-basic/comment.svelte"

	// Get the data from the parent component
	export let slice

  // Get the props
  export let maxWidth = false
  // No margin at all on the slides
  export let noMargin = false
  export let inSlider = false

  const props = {
    maxWidth,
    noMargin,
    inSlider
  }

	// Connect each slice from Prismic to a component from above
	const sliceTypes = {
		headline_simple: HeadlineSimple,
		paragraph_richtext_big: ParagraphRichtextBig,
		paragraph_richtext_small: ParagraphRichtextSmall,
		image_full_width: ImageFullWidth,
		image_full_screen: ImageFullScreen,
		slider_complex: SliderComplex,
		slider_video_full_info: SliderVideoFullInfo,
		slider_marquee: SliderMarquee,
		slider_mouse_move: SliderMouseMove,
		text_image: TextImage,
		gallery_list_hover: GalleryListHover,
		video_simple: VideoSimple,
		video_controls: VideoControls,
    work_a: WorkColumnsA,
    work_a_b: WorkColumnsAB,
    work_a_b_c: WorkColumnsABC,
    work_a_b_c_d: WorkColumnsABCD,
    cv_section__two_columns_: CVColumns,
    cv_section__simple_: CVSimple,
    cv_section__two_columns_image: CVColumnsImage
	}

  const missingSlice = (key) => !Object.keys(sliceTypes).includes(key)

  const hasPadding = (type) => 
    type !== 'image_full_screen'
    && type !== 'image_full_width'
    && type !== 'work_a'
    && type !== 'work_a_b'
    && type !== 'work_a_b_c'
    && type !== 'work_a_b_c_d'
</script>

<div class="slice" class:mb-8={!noMargin} class:px-4={hasPadding(slice.slice_type)} class:sm:px-0={hasPadding(slice.slice_type)}>
  <Comment comment={slice.slice_type} />
  <svelte:component
    this={sliceTypes[slice.slice_type]}
    {slice}
    {...props}
  />
  {#if dev && missingSlice(slice.slice_type)}
    <pre>Missing module for {slice.slice_type}</pre>
  {/if}
</div>