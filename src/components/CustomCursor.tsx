import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const leave = () => setVisible(false)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      const interactive = t.closest('a, button, [data-cursor="hover"]')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', leave)
    document.documentElement.classList.add('cursor-none')

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full border border-white bg-white"
        animate={{
          width: hovering ? 48 : 14,
          height: hovering ? 48 : 14,
          backgroundColor: hovering ? 'rgba(255,255,255,0.15)' : '#fff',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </motion.div>
  )
}
