import MenuItem from './MenuItem'
import '../styles/menu.css'

function Menu({ items, orientation = 'horizontal', theme = 'light' }) {
  return (
    <ul 
      className={`menu menu-${orientation} menu-${theme}`}
      role="menubar"
    >
      {items.map(item => (
        <MenuItem 
          key={item.id} 
          item={item}
          orientation={orientation}
          theme={theme}
        />
      ))}
    </ul>
  )
}

export default Menu
