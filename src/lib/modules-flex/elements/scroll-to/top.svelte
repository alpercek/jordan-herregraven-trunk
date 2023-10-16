<script>
  import Arrow from "$lib/modules-basic/arrow.svelte"
  import { scrollto } from "svelte-scrollto";
  import { y } from "$lib/functionality/store/layout"
  import { fade } from "svelte/transition"
  import { get } from "svelte/store"

  let oldY = get(y)
  let show = false

  $: {
    show = $y > oldY && $y > 100
    oldY = get(y)
  }
</script> 

{#if show}
  <div
    transition:fade
    use:scrollto={'#content'}
    class="fixed right-0 bottom-0 z-40 pr-16 pl-16 w-20 py-12 cursor-pointer lg:hidden"
  >
    <Arrow direction="up" />
  </div>
{/if}