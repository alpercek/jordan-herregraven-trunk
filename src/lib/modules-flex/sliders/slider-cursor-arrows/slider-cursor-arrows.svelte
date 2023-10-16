<script>
  // Import the Splide slider library
	import { Splide } from '@splidejs/svelte-splide';
  import { vw } from "$lib/functionality/store/layout"

  import { createEventDispatcher } from "svelte"

  import Cursor from "$lib/modules-basic/cursor.svelte"
  import '@splidejs/splide/dist/css/splide.min.css';

  // Props for the Slice
  export let noMargin = false
  // Only bottom will make the arrows only appear on hover. 
  // Slot is used for fallback cursor
  export let noArrows = false

  // Functions for parent
  export const next = () => {
    slider.splide.go('>')
  }
  export const prev = () => {
    slider.splide.go('<')
  }
  export const go = (i) => {
    slider.splide.go(i)
  }

  const dispatch = createEventDispatcher()

  let clientWidth
  let slider
  let self
  let first = false

  let direction = null
  
  const onMouseMove = (e) => {
    const { left, top } = self.getBoundingClientRect();
    let x = e.clientX - left
    let y = e.clientY - top
    
    if (x < clientWidth / 2) {
      direction = '<'
    } else {
      direction = '>'
    }
  }

  const onClick = () => {
    if (!noArrows) {
      slider.splide.go(direction)
    }
  }

  const onSliderClick = ({ detail }) => {
    dispatch('click', detail)
  }
    
  const onMouseLeave = () => direction = null
</script>

{#if direction !== null}
  <Cursor bare>
    {#if noArrows === false}
      {#if direction === '>'}
      <div>
        <!-- <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.03 66.03"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><path class="cls-1" d="M11.34,31.24H54.68v3.54H11.34v-3.54ZM32.92,0c18.21,0,33.11,14.9,33.11,33.01s-14.9,33.01-33.11,33.01S0,51.13,0,33.01,14.8,0,32.92,0Zm0,63.47c16.79,0,30.55-13.76,30.55-30.45S49.71,2.56,32.92,2.56,2.56,16.32,2.56,33.01s13.66,30.45,30.36,30.45Z"/></svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11.189" viewBox="0 0 20 11.189">
          <g id="Layer_1-2" opacity="0.506">
            <path id="Path_5" data-name="Path 5" d="M20,5.577,17.209,2.791,14.419,0,12.871,1.551l2.945,2.914H0V6.774H15.762l-.077.077L12.895,9.638l1.551,1.551L19.777,5.8Z" fill="#878988"/>
          </g>
        </svg>      
      </div>
      {:else}
      <div>
        <svg style="transform: scale(-1, 1)" xmlns="http://www.w3.org/2000/svg" width="20" height="11.189" viewBox="0 0 20 11.189">
          <g id="Layer_1-2" opacity="0.506">
            <path id="Path_5" data-name="Path 5" d="M20,5.577,17.209,2.791,14.419,0,12.871,1.551l2.945,2.914H0V6.774H15.762l-.077.077L12.895,9.638l1.551,1.551L19.777,5.8Z" fill="#878988"/>
          </g>
        </svg>      
      </div>
      {/if}
    {:else}
      <div class="hidden lg:block">
        <slot name="cursor" />
      </div>
    {/if}
  </Cursor>
{/if}

<div
  bind:this={self}
  bind:clientWidth
  on:mousemove={onMouseMove}
  on:mouseleave={onMouseLeave}
  on:click={onClick}
  class="h-full"
>
  <Splide
    bind:this={slider}
    on:click={onSliderClick}
    options={{
      autoHeight: true,
      perMove: 1,
      drag: $vw < 640,
      type: 'loop',
      focus: 'center',
      pagination: false,
      arrows: false
    }}
    >
    <slot />
  </Splide>
</div>
