"use client"

import React from "react"

interface ClientWrapProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function ClientWrap({ children, onClick, className }: ClientWrapProps) {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  )
}

interface InteractiveButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function InteractiveButton({ children, onClick, className, disabled }: InteractiveButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={className}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}