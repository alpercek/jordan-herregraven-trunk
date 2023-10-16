<script>
  export let slice
  import Text from "$lib/modules-basic/text.svelte"
  import { asText } from "@prismicio/helpers"
</script>

<section class="cv-section">
  {#if asText(slice.primary.title1) !== ''}
  <Text
    text="{slice.primary.title1}"
    classes="mb-4"
  />
  {/if}
  <table>
    <tbody>
      {#each slice.items as row, j (j)}
        <tr>
          <td class:small="{asText(row.column_1).length <= 5}">
            {#if row.file}
              <a
                target="_blank"
                href="{row.file.url}"
              >
                <Text class="tight" text="{row.column_1}" />
              </a>
            {:else}
              <Text
                class="tight"
                text="{row.column_1}"
              />
            {/if}
          </td>
          <td>
            {#if row.file}
              <a
                target="_blank"
                href="{row.file.url}"
              >
                <Text class="tight" text="{row.column_2}" />
              </a>
            {:else}
              <Text
                class="tight"
                text="{row.column_2}"
              />
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
