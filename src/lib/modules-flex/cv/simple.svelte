<script>
  import Text from "$lib/modules-basic/text.svelte"
  import { asText } from "@prismicio/helpers"

  export let slice
  export let maxWidth
</script>

<section class="cv-section" class:max-w-2xl={maxWidth}>
  {#if asText(slice.primary.title1) !== ''}
    <Text
      text="{slice.primary.title1}"
      classes="mb-4"
    />
  {/if}
  <Text
    classes="paragraph tight"
    text="{slice.primary.text}"
  />
</section>