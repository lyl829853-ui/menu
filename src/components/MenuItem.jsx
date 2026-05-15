import { useState } from 'react'
import '../styles/menu-item.css'

function MenuItem({ item, orientation = 'horizontal', theme = 'light' }) {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = item.children && item.children.length > 0

  const handleMouseEnter = () => {
    if (orientation === 'horizontal') {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (orientation === 'horizontal') {
      setIsOpen(false)
    }
  }

  const handleClick = () => {
    if (orientation === 'vertical' && hasChildren) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <li 
      className={`menu-item ${isOpen ? 'open' : ''} ${hasChildren ? 'has-children' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a 
        href={item.href}
        className="menu-link"
        onClick={(e) => {
          if (hasChildren && orientation === 'vertical') {
            e.preventDefault()
            handleClick()
          }
        }}
      >
        <span className="menu-label">{item.label}</span>
        {item.badge && <span className="badge">{item.badge}</span>}
        {hasChildren && <span className="arrow">▼</span>}
      </a>

      {hasChildren && (
        <ul className={`submenu ${isOpen ? 'visible' : ''}`} role="menu">
          {item.children.map(child => (
            <MenuItem 
              key={child.id}
              item={child}
              orientation={orientation}
              theme={theme}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default MenuItem
