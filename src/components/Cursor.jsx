import { useEffect } from "react"

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")
    const ring = document.getElementById("cursor-ring")
    let ringX = 0, ringY = 0
    let curX = 0, curY = 0

    const move = (e) => {
      curX = e.clientX
      curY = e.clientY
      cursor.style.left = curX + "px"
      cursor.style.top = curY + "px"
    }

    const animate = () => {
      ringX += (curX - ringX) * 0.12
      ringY += (curY - ringY) * 0.12
      ring.style.left = ringX + "px"
      ring.style.top = ringY + "px"
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.classList.add("hovering")
      ring.classList.add("hovering")
    }
    const onLeave = () => {
      cursor.classList.remove("hovering")
      ring.classList.remove("hovering")
    }

    window.addEventListener("mousemove", move)
    document.querySelectorAll("a, button, [data-hover]").forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })
    animate()

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
