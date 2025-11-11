import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroSequence({ onComplete }){
  const phrase = 'vibing to the rhythm of life'
  const [stage, setStage] = useState('typing') // typing | pause | deleting | button
  const [display, setDisplay] = useState('')
  const [visible, setVisible] = useState(true)
  const indexRef = useRef(0)

  useEffect(()=>{
    if(stage === 'typing'){
      const t = setInterval(()=>{
        indexRef.current += 1
        setDisplay(phrase.slice(0, indexRef.current))
        if(indexRef.current >= phrase.length){
          clearInterval(t)
          setStage('pause')
        }
      }, 60)
      return ()=> clearInterval(t)
    }

    if(stage === 'pause'){
      const timeout = setTimeout(()=>{
        setStage('deleting')
      }, 1200)
      return ()=> clearTimeout(timeout)
    }

    if(stage === 'deleting'){
      const t2 = setInterval(()=>{
        indexRef.current -= 1
        if(indexRef.current < 0){
          clearInterval(t2)
          setDisplay('')
          setStage('button')
          return
        }
        setDisplay(phrase.slice(0, indexRef.current))
      }, 40)
      return ()=> clearInterval(t2)
    }
  },[stage])

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
            {stage !== 'button' && (
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--text)] glow-green">
                <span>{display}</span>
                <span className="ml-1">{stage !== 'button' ? <span className="animate-pulse">|</span> : null}</span>
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
                    setTimeout(()=>{
                      onComplete && onComplete()
                    },650)
                  }}
                  aria-label="Reveal site"
                  className="btn-press-hero rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-lg relative"
                >
                  <div className="animate-pulse text-2xl md:text-3xl lg:text-4xl font-bold">
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
