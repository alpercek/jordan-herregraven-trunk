<script>	
  // Import function which helps to display the richtext which we receive from Prismic
import * as prismicHelpers from '@prismicio/helpers'

// Get data from parent 
export let text
export let classes
export let inline = false
export let append = ""

function isRichText (text) {
  return typeof text !== 'string'
}
</script>

{#if $$slots.default}
  <span class="{classes}">
    <slot />
  </span>
{:else}
  {#if isRichText(text)}
    {#if inline}
      <span class="{classes}">
        {prismicHelpers.asText(text)} {append}
      </span>
    {:else}
      <span class="{classes}">
        {@html prismicHelpers.asHTML(text)} {append}
      </span>
    {/if}
  {:else}
    <span class="{classes}">
      {text} {append}
    </span>
  {/if}
{/if}
