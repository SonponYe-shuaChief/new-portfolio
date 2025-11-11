import { useEffect, useState } from 'react'

export default function useParallax(strength = 0.2){
  const [offset, setOffset] = useState(0)
  useEffect(()=>{
    function onScroll(){
      setOffset(window.scrollY * strength)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[strength])
  return offset
}
