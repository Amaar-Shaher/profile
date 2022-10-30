import Lottie from "lottie-web"
import { useEffect, useRef } from "react"


export default function Home() {
  const container = useRef(null)

  useEffect (() => {
    let instance = Lottie.loadAnimation({
      container:container.current,
      autoplay:true,
      animationData:require('../public/Welcome.json')
    })
    return () => instance.destroy();
  })
  return (
   <div className="h-96 w-auto mt-28" ref={container}>
   </div>
  )
}