import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .interactive, .magnetic')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-50 w-8 h-8 border-2 border-blue-400 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50 w-2 h-2 bg-blue-400 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : 1,
          opacity: isClicking ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.1
        }}
      />

      {/* Hover effect ring */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-40 w-16 h-16 border border-blue-400/30 rounded-full mix-blend-difference"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1,
            opacity: 0.3
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        />
      )}
    </>
  )
}

export default CustomCursor 