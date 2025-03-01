"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"

// Simplified canvas component that doesn't rely on Three.js
// to avoid potential issues in the WebContainer environment
export function HeroCanvas() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const canvasRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!canvasRef.current || !mounted) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    
    // Particles
    const particles = []
    const particleCount = 30
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: isDark ? '#60a5fa' : '#3b82f6',
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
      })
    }
    
    // Resume
    const resume = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: 150,
      height: 200,
      rotation: 0,
      color: isDark ? '#334155' : '#f8fafc'
    }
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.7
        ctx.fill()
        
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })
      
      // Draw resume
      ctx.globalAlpha = 1
      ctx.save()
      ctx.translate(resume.x, resume.y)
      ctx.rotate(resume.rotation)
      
      // Resume background
      ctx.fillStyle = resume.color
      ctx.fillRect(-resume.width/2, -resume.height/2, resume.width, resume.height)
      
      // Resume lines
      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b'
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(-resume.width/2 + 20, -resume.height/2 + 60 + i * 20, resume.width - 40, 5)
      }
      
      // Resume header
      ctx.fillStyle = isDark ? '#60a5fa' : '#3b82f6'
      ctx.fillRect(-resume.width/2 + 20, -resume.height/2 + 20, resume.width - 40, 15)
      
      ctx.restore()
      
      // Update resume rotation
      resume.rotation += 0.003
      
      animationFrameId = window.requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef, mounted, isDark])
  
  if (!mounted) return null
  
  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      )}
    </div>
  )
}