<script>
  // import { y } from "$lib/functionality/store/layout"
  // import { onMount, createEventDispatcher, tick } from "svelte"
  // import IntersectionObserver from "svelte-intersection-observer";

  // export let fixed = false
  // export let sticky = false
  // export let offset = 0
  // // For how many vhs should it stick?
  // export let once = true
  // export let vhs = 1
  // export let noEffect = false
  // export let resetAnimations = true
  // export let animationClass = ''
  // export let transitionClass = 'fade-in'
  // export let slow = false
  // export let rootMargin = "0px"

  // const dispatch = createEventDispatcher()

  // let element;
  // let initialOffset
  // let intersecting
  // let intersectedOnce = false
  // let vh

  // async function resetAnimation () {
  //   element.classList.remove(animationClass)
  //   await tick()
  //   element.classList.add(animationClass)
  // }

  // let stickyTop = 0
  // // First we want to know the position in its scrolling container
  // let readyToStick  = false
  // let readyToFix    = false
  // let showingFixed  = true

  // $: if (intersecting) intersectedOnce = true

  // $: {
  //   if (sticky) {
  //     if ($y > initialOffset + vh * vhs) {
  //       // If this point is reached, start dialing back the top valyue from 0 to -1vh
  //       stickyTop = initialOffset - $y + vh * vhs
  //     }
  //   }
  // }

  // $: {
  //   if (fixed) {
  //     if ($y > initialOffset) {
  //       showingFixed = true
  //     }
  //   }
  // }

  // $: dispatch('intersectChange', intersecting)

  // $: if (intersecting && animationClass && resetAnimations) resetAnimation()

  // onMount(() => {
  //   initialOffset = element.offsetTop

  //   if (sticky) {
  //     readyToStick = true
  //   }

  //   if (fixed) {
  //     readyToFix = true
  //   }
  // })
</script>

<!-- <svelte:window bind:innerHeight={vh} /> -->

<slot />

<!-- <IntersectionObserver {element} {rootMargin} bind:intersecting>
  <div
    class="intersection-wrapper"
    style="top: {stickyTop}px; margin-top({offset}vh)"
    class:fixed-one={readyToFix}
    class:sticky-one={readyToStick}
    class:opacity-0={fixed}
    class:opacity-100={showingFixed}
    class:slow
    bind:this={element}
  >
    <div
      class="transition-wrapper {transitionClass} {animationClass}"
      class:active={once ? intersectedOnce : intersecting || noEffect}
    >
      <slot />
    </div>
  </div>
</IntersectionObserver> -->

<style lang="postcss">
  .sticky-one {
    position: sticky;
    z-index: -1;
  }

  .fixed-one {
    position: fixed;
    z-index: -1;
  }
  .transition-wrapper {
    @apply transition-all;
  }
  .intersection-wrapper.slow {
    transition-duration: 1500ms;
  }

  /** Fade in */
  .fade-in {
    @apply opacity-0 transition-opacity duration-700;
  }
  .transition-wrapper.fade-in.active {
    @apply opacity-100 translate-x-0;
  }

  /** Blur left */
  .transition-wrapper.blur-fade-left {
    @apply opacity-0 blur-sm duration-1000 translate-x-[-10px];
  }
  .transition-wrapper.blur-fade-left.active {
    @apply opacity-100 blur-0 translate-x-0;
  }

  /** Fade up */
  .transition-wrapper.fade-up {
    @apply opacity-0 duration-1000 translate-y-4 delay-300;
  }
  .transition-wrapper.fade-up.active {
    @apply opacity-100 translate-y-0;
  }
  
  /** Grow left */
  .transition-wrapper.grow-left {
    @apply w-0 duration-300 delay-700;
  }
  .transition-wrapper.grow-left.active {
    @apply w-full;
  }
</style>
