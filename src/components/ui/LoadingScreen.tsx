import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const steps = [15, 35, 55, 72, 88, 100]
    let i = 0
    const tick = () => {
      if (i >= steps.length) {
        setTimeout(() => setDone(true), 400)
        return
      }
      setProgress(steps[i++])
      setTimeout(tick, 200 + Math.random() * 300)
    }
    setTimeout(tick, 150)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-bg-primary flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col items-center gap-4"
          >
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <circle cx="32" cy="32" r="14" stroke="#00d4ff" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="4" fill="#00d4ff" />
                <line x1="32" y1="8" x2="32" y2="18" stroke="#00d4ff" strokeWidth="1.5" />
                <line x1="32" y1="46" x2="32" y2="56" stroke="#00d4ff" strokeWidth="1.5" />
                <line x1="8" y1="32" x2="18" y2="32" stroke="#00d4ff" strokeWidth="1.5" />
                <line x1="46" y1="32" x2="56" y2="32" stroke="#00d4ff" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="24" stroke="#00d4ff" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
              <motion.div
                className="absolute inset-0 rounded-full border border-accent-cyan/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="font-display text-xl font-bold text-text-primary tracking-widest uppercase">
              JB Link
            </div>
          </motion.div>

          <div className="w-48 flex flex-col items-center gap-3">
            <div className="w-full h-px bg-border-default overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            <span className="font-mono text-xs text-text-muted">Chargement… {progress}%</span>
          </div>

          <motion.div
            className="fixed inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent pointer-events-none"
            animate={{ y: ['0vh', '100vh'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
