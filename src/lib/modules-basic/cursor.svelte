<script>
  import { mouseX, mouseY } from '$lib/functionality/store/layout'
  import { spring } from 'svelte/motion';
  import { onMount, onDestroy } from "svelte"
  import { browser } from "$app/env"
  import { writable } from 'svelte/store';
  export let bare = true
  
  let coords = writable({ x: $mouseX, y: $mouseY })
  let scale = spring(1, { stiffness: 0.2, damping: 0.8 })
  
  $: coords.set({ x: $mouseX, y: $mouseY })
  
  let style = `transform: translate(${$coords.x}px, ${$coords.y}px) scale(${$scale})`
  
  $: style = `transform: translate(${$coords.x}px, ${$coords.y}px) translate(-50%, -50%) scale(${$scale});`
  
  const scaleUp = () => {
    scale.set(1.5)
  }
  
  const scaleDown = () => {
    scale.set(1)
  }

  onMount(() => {
    if (browser && bare) {
      document.body.classList.add('cursor-none')
    }
  })
  onDestroy(() => {
    if (browser && bare) {
      document.body.classList.remove('cursor-none')
    }
  })
  </script>
  
  <svelte:body on:mousedown={scaleUp} on:mouseup={scaleDown} />
  
  <div class="fixed z-50 top-0 left-0 w-24 h-24 pointer-events-none justify-center items-center hidden lg:flex" {style}>
    <slot />
  </div>