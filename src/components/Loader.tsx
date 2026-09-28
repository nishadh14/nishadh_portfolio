import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

type LoaderProps = {
  onDone: () => void
}

export function Loader({ onDone }: LoaderProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    document.body.classList.add('loading')
    const t = window.setTimeout(onDone, reduce ? 400 : 2200)
    return () => {
      window.clearTimeout(t)
      document.body.classList.remove('loading')
    }
  }, [onDone, reduce])

  if (reduce) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink)]">
        <span className="font-display text-2xl text-[var(--accent)]">NN</span>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--ink)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(30,224,182,0.2), transparent 55%)',
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />

      <div className="relative flex flex-col items-center gap-6">
        <div className="overflow-hidden">
          <motion.p
            className="font-display text-5xl font-semibold tracking-tight text-[var(--accent)] sm:text-6xl"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          >
            NN
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.35em] text-white/55"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
          >
            Nishadh Nikam
          </motion.p>
        </div>
        <motion.div
          className="mt-4 h-px w-40 origin-left bg-[var(--accent)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
        />
      </div>
    </motion.div>
  )
}
