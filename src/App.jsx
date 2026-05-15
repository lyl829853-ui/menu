import { useState } from 'react'
import Menu from './components/Menu'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [orientation, setOrientation] = useState('horizontal')

  const menuItems = [
    {
      id: '1',
      label: '🏠 الرئيسية',
      href: '#'
    },
    {
      id: '2',
      label: '📚 الخدمات',
      href: '#',
      children: [
        { id: '2-1', label: 'خدمة 1', href: '#' },
        { id: '2-2', label: 'خدمة 2', href: '#' },
        { id: '2-3', label: 'خدمة 3', href: '#' }
      ]
    },
    {
      id: '3',
      label: '📞 اتصل بنا',
      href: '#',
      children: [
        { id: '3-1', label: 'البريد الإلكتروني', href: '#' },
        { id: '3-2', label: 'الهاتف', href: '#' },
        { id: '3-3', label: 'العنوان', href: '#' }
      ]
    },
    {
      id: '4',
      label: '❓ أسئلة شائعة',
      href: '#',
      badge: 'جديد'
    },
    {
      id: '5',
      label: '👤 الحساب',
      href: '#',
      children: [
        { id: '5-1', label: 'تسجيل الدخول', href: '#' },
        { id: '5-2', label: 'إنشاء حساب', href: '#' },
        { id: '5-3', label: 'الإعدادات', href: '#' }
      ]
    }
  ]

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>🍔 منيو احترافي وحديث</h1>
        <div className="controls">
          <div className="control-group">
            <label>المظهر:</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">🌞 فاتح</option>
              <option value="dark">🌙 داكن</option>
            </select>
          </div>
          <div className="control-group">
            <label>الاتجاه:</label>
            <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
              <option value="horizontal">➡️ أفقي</option>
              <option value="vertical">⬇️ عمودي</option>
            </select>
          </div>
        </div>
      </header>

      <nav className="menu-container">
        <Menu 
          items={menuItems}
          orientation={orientation}
          theme={theme}
        />
      </nav>

      <main className="main-content">
        <div className="demo-section">
          <h2>🎯 جرّب المنيو</h2>
          <p>المنيو أعلاه يمكنه أن يتحول بين الأفقي والعمودي، والمظهر الفاتح والداكن.</p>
          <p>جميع العناصر تعمل بشكل متفاعل مع دعم كامل للقائمة المتداخلة!</p>
        </div>
      </main>
    </div>
  )
}

export default App
