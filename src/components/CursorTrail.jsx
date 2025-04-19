import React from "react"

import { useEffect, useState } from "react"

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const addParticles = (x, y, isClick = false) => {
      // Add multiple particles at once for a heavier smoke effect
      const particlesToAdd = isClick ? 15 : 5
      const newParticles = []

      for (let i = 0; i < particlesToAdd; i++) {
        // Randomize position slightly for a more natural smoke effect
        const offsetX = (Math.random() - 0.5) * 10
        const offsetY = (Math.random() - 0.5) * 10

        newParticles.push({
          x: x + offsetX,
          y: y + offsetY,
          // Larger particles for heavier smoke
          size: isClick ? Math.random() * 35 + 15 : Math.random() * 20 + 8,
          // Green smoke with varying opacity
          color: `rgba(0, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 80)}, ${Math.random() * 0.5 + 0.2})`,
          // Random movement for smoke-like behavior
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5 - 0.5, // Slight upward drift like smoke
          // Longer lifetime for more persistent smoke
          lifetime: Math.random() * 100 + 100,
          // Random rotation for more dynamic smoke
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          id: Date.now() + Math.random(),
        })
      }

      setParticles((prev) => [...prev, ...newParticles])
    }

    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            rotation: p.rotation + p.rotationSpeed,
            // Gradually slow down particles
            speedX: p.speedX * 0.99,
            speedY: p.speedY * 0.99,
            lifetime: p.lifetime - 1,
            // Gradually increase size for smoke expansion effect
            size: p.size + 0.05,
          }))
          .filter((p) => p.lifetime > 0),
      )
    }

    let interval
    let lastX = 0
    let lastY = 0
    let lastAddTime = 0

    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })

      // Calculate distance moved
      const distance = Math.sqrt(Math.pow(clientX - lastX, 2) + Math.pow(clientY - lastY, 2))
      const currentTime = Date.now()

      // Add particles based on distance moved and time elapsed
      if (distance > 5 && currentTime - lastAddTime > 10) {
        addParticles(clientX, clientY)
        lastX = clientX
        lastY = clientY
        lastAddTime = currentTime
      }
    }

    const onMouseDown = (e) => {
      // Create a burst of particles on click
      addParticles(e.clientX, e.clientY, true)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mousedown", onMouseDown)

    // Update particles at 60fps
    interval = setInterval(updateParticles, 16)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="smoke-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.lifetime / 200,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg) scale(${particle.lifetime / 200})`,
          }}
        />
      ))}
    </>
  )
}

export default CursorTrail
