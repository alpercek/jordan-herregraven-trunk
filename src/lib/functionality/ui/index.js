/**
 * 
 * @param {*} node 
 * @returns 
 */
export const scrollThrough = (node, initialPosition) => {
  function pan (e) {
    let {
      left,
      top,
      width,
      height
    } = node.getBoundingClientRect()
    
    const { clientX, clientY } = e

    const x = clientX - left // x position within the element.
    const y = clientY - top // y position within the element.
  
    const fracX = (x / width)
    const fracY = (y / height)
  
    const l = fracX * (node.scrollWidth - width)
    const t = fracY * (node.scrollHeight - height)

    node.scrollTo({ top: t, left: l })
  }
  
  window.addEventListener('mousemove', pan)

  pan(initialPosition)

  return {
    destroy () {
      window.removeEventListener('mousemove', pan)
    }
  }
}

/**
 * 
 * @param {*} node 
 * @returns 
 */
export const panThrough = (node) => {
  const start = {x: 0, y: 0};
  let isPan = false;

  function panStart (e) {
    e.preventDefault();

    isPan = true
    start.x = node.scrollLeft + e.touches[0].clientX;
    start.y = node.scrollTop + e.touches[0].clientY;
  };

  function panMove (e) {
    if (!isPan) return

    node.scrollTo(start.x - e.touches[0].clientX,  start.y - e.touches[0].clientY);
  };

  function panEnd () {
    isPan = false
  }

  node.addEventListener("touchstart", panStart);
  node.addEventListener("touchmove", panMove);
  node.addEventListener("touchend", panEnd);
  node.addEventListener("touchcancel", panEnd);

  return {
    destroy () {
      node.removeEventListener("touchstart", panStart)
      node.removeEventListener("touchmove", panMove)
      node.removeEventListener("touchend", panEnd)
      node.removeEventListener("touchcancel", panEnd)
    }
  }
}