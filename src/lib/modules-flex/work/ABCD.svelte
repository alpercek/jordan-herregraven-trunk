<script>
  import Work from "./Work.svelte"

  export let slice

  const columnA = slice.items.filter(work => work.column === 'A')
  const columnB = slice.items.filter(work => work.column === 'B')
  const columnC = slice.items.filter(work => work.column === 'C')
  const columnD = slice.items.filter(work => work.column === 'D')
</script>

<div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
  <div class="work-column">
    {#each columnA as work}
      <Work work={work.work} />
    {/each}
  </div>
  <div class="work-column">
    {#each columnB as work}
      <Work work={work.work} />
    {/each}
  </div>
  <div class="work-column">
    {#each columnC as work}
      <Work work={work.work} />
    {/each}
  </div>
  <div class="work-column">
    {#each columnD as work}
      <Work work={work.work} />
    {/each}
  </div>
</div>