import { writable, derived } from 'svelte/store';
import { clamp } from "$lib/functionality/store/maths"

export const widthClasses = {
  "full": "sm:w-full",
  "4/5": "sm:w-4/5",
  "3/4": "sm:w-3/4",
  "2/3": "sm:w-2/3",
  "3/5": "sm:w-3/5",
  "1/2": "sm:w-1/2",
  "2/5": "sm:w-2/5",
  "1/3": "sm:w-1/3",
  "1/4": "sm:w-1/4",
  "1/5": "sm:w-1/5"
}

export const vw           = writable(0)
export const vh           = writable(0)
export const y            = writable(0)
export const mouseX       = writable(0)
export const mouseY       = writable(0)
export const scrollHeight = writable(0)
export const progress     = derived([vh, y, scrollHeight],([$vh, $y, $scrollHeight]) => { return clamp(0, 1, $y / ($scrollHeight - $vh)) })
export const bodyHeightStyle = derived(vh, $vh => `height: ${$vh}px;`)