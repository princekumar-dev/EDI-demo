import React from 'react'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = null,
  ...props 
}) => {
  const baseClasses = 'glass-card relative overflow-hidden'
  const hoverClasses = hover ? 'hover:scale-105' : ''
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`

  return (
    <div className={combinedClasses} {...props}>
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
      )}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default GlassCard