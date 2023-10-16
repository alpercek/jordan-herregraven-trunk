<script>
  import { widthClasses } from "$lib/functionality/store/layout"
  import Work from "./Work.svelte"
  export let slice
  
</script>

<div>
  <Work work={slice.primary.work} />
</div>