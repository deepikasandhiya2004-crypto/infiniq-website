import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Services from './Services'
import About from './about'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy'
import TermsConditions from './TermsConditions'
import CookiePolicy from './CookiePolicy'
import NotFound from './NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
<Route path="/cookie-policy" element={<CookiePolicy />} />
<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App