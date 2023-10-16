<script>
  import Text from "$lib/modules-basic/text.svelte"
  import { asText } from "@prismicio/helpers"
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  export let always = false
  // export let hasZoom
  export let work
  export let controls = false
  export let zoomImages = false

  let index = 0

  let romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XII']

  const goIndex = (i) => {
    dispatch('index', i)
    index = i
  }

</script>

<div
  class:sm:hidden={!always}
  class="flex justify-center items-start px-1 pt-6 mb-2 select-none"
>
  <div class="mr-8 text-center px-8">
    <p class="leading-2">
      <Text inline classes="text-base tracking-tight leading-tight inline-block max-w-[80ch]" text={work.data.title} append="({work.data.year})" />
    </p>
    <p class="text-sm">
      <span class="italic">
        {asText(work.data.description)}
      </span>
      {#if work.data.dimensions}
      <span class="inline-block whitespace-nowrap">
          ({work.data.dimensions})
        </span>
      {/if}
    </p>
  </div>
</div>

{#if zoomImages && zoomImages.length > 1}
  <div class="text-center">
    {#each zoomImages as z, i}
      <span class:active={index === i} class="cursor-pointer inline-block text-center w-8 py-2" on:click={() => { goIndex(i) }}>
        {romanNumeral[i]}
      </span>
    {/each}
  </div>
{/if}