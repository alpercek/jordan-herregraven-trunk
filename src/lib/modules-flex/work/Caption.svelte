<script>
  import Basic from "$lib/modules-basic/basic.svelte"
  import Link from "$lib/modules-basic/link.svelte"
  import Text from "$lib/modules-basic/text.svelte"
  import { asText } from "@prismicio/helpers"
  import { fade } from "svelte/transition"

  export let work
  export let hasZoom

  let component = hasZoom ? 'link' : 'basic'

  $: component = hasZoom ? 'link' : 'basic'

  const mappings = { link: Link, basic: Basic }
</script>

<svelte:component this={mappings[component]} document={work} noscroll>
  <div class="hidden sm:flex justify-between items-start px-1 pt-[5px] pl-[5px]">
    <div class="mr-8">
      <p class="leading-2" style="max-width: 70ch;">
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
    {#if hasZoom === true}
      <img in:fade class="block pt-2 w-4" src="/pluss.svg" alt="See More">
    {/if}
  </div>
</svelte:component>