import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function IntroSequence({ onComplete }){
  const [stage, setStage] = useState('typing')
  const [visible, setVisible] = useState(true)

  useEffect(()=>{
    // when typing loop complete, show button
  },[])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Typing stage */}
            {stage === 'typing' && (
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--text)] glow-green">
                <Typewriter
                  words={["vibing to the rhythm of life"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1200}
                  onLoopDone={() => setStage('button')}
                />
              </div>
            )}

            {/* Button stage */}
            {stage === 'button' && (
              <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={async ()=>{
                    // play fade-out then call onComplete
                    setVisible(false)
                    // small delay to let exit animation finish
                    setTimeout(()=>{
                      onComplete && onComplete()
                    },650)
                  }}
                  className="btn-press rounded-full w-44 h-44 flex items-center justify-center text-white text-lg font-semibold shadow-lg"
                >
                  <div className="animate-pulse">
                    press me
                  </div>
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
