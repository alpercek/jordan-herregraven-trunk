<script>
  // Import all components which will be used on this page
  import Seo from '$lib/functionality/seo/seo.svelte'
  import ModulesSlices from '$lib/functionality/modules-slices/modules-slices.svelte'

  // Get the data from above
  export let data
</script>

<Seo {...data} />

<div class="">
  <ModulesSlices slices={data.document.data.body1} />
</div>