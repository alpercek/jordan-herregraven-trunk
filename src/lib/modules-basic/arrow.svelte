<script>
  export let direction = 'right'

  let directionTransform

  if (direction === 'left') {
    directionTransform = "transform: rotate(180deg)"
  } else if (direction === 'up') {
    directionTransform = "transform: rotate(-90deg)"
  } else if (direction === 'down') {
    directionTransform = "transform: rotate(90deg)"
  }
</script>

<!-- <div>
  <svg style={directionTransform} xmlns="http://www.w3.org/2000/svg" width="20" height="11.189" viewBox="0 0 20 11.189">
    <g id="Layer_1-2" opacity="0.506">
      <path id="Path_5" data-name="Path 5" d="M20,5.577,17.209,2.791,14.419,0,12.871,1.551l2.945,2.914H0V6.774H15.762l-.077.077L12.895,9.638l1.551,1.551L19.777,5.8Z" fill="#878988"/>
    </g>
  </svg>      
</div> -->

<div>
  <svg class="w-4" id="Layer_1" style={directionTransform} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.91 66.71"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><polygon class="cls-1" points="88.72 0 86.35 2.37 104.03 28.23 0 28.23 0 38.23 104.09 38.23 86.35 64.61 88.72 66.71 130.91 35.07 130.91 31.64 88.72 0"/></svg>
</div>