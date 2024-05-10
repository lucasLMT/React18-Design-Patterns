// Dependencies
import { Routes, Route } from 'react-router-dom'
// Components
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Contacts from './components/Contacts'
import Error404 from './components/Error404' //Element defined to routes not known

const AppRoutes = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/:contactId" element={<Contacts />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </App>
)

export default AppRoutes
