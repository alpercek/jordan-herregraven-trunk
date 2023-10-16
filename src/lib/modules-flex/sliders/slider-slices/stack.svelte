<script>
  export let slices
  import Slice from "$lib/functionality/modules-slices/modules-slice.svelte"
  import Cursor from "$lib/modules-basic/cursor.svelte"

  let i = slices.length - 1
  let indeces = []
  let show = false

  slices.forEach(() => {
    indeces.push(i)
    i--
  })

  const next = () => {
    indeces = indeces.map(i => (i + 1) % indeces.length)
  }
</script>

{#if slices.length > 1 && show}
  <Cursor bare>
    <svg style="transform: rotate(90deg)" xmlns="http://www.w3.org/2000/svg" width="20" height="11.189" viewBox="0 0 20 11.189">
      <g id="Layer_1-2" opacity="0.506">
        <path id="Path_5" data-name="Path 5" d="M20,5.577,17.209,2.791,14.419,0,12.871,1.551l2.945,2.914H0V6.774H15.762l-.077.077L12.895,9.638l1.551,1.551L19.777,5.8Z" fill="#878988"/>
      </g>
    </svg>      
  </Cursor>
{/if}

<div class="relative w-full" on:mouseenter={() => show = true} on:mouseleave={() => { show = false }}>
  {#each slices as slice, i}
    <div class="absolute" style="z-index: {indeces[i]};" on:click={next}>
      <Slice {slice} />
    </div>
  {/each}
</div>
