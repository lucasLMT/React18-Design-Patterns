import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <AppRoutes />
  </Router>
)
