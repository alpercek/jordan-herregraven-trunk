<script>
  import { mouseX, mouseY } from '$lib/functionality/store/layout'
  import { spring } from 'svelte/motion';
  
  let coords = spring({ x: 0, y: 0 })
  let scale = spring(1)
  
  $: coords.set({ x: $mouseX, y: $mouseY })
  
  let style = `transform: translate(${$coords.x}px, ${$coords.y}px) scale(${$scale})`
  
  $: style = `transform: translate(${$coords.x}px, ${$coords.y}px) translate(-50%, -50%) scale(${$scale});`
  
  const scaleUp = () => {
    scale.set(1.5)
  }
  
  const scaleDown = () => {
    scale.set(1)
  }
  </script>
  
  <svelte:body on:mousedown={scaleUp} on:mouseup={scaleDown} />
  
  <div class="fixed z-50 top-0 left-0 w-24 h-24 pointer-events-none flex justify-center items-center" {style}>
    <slot />
  </div>