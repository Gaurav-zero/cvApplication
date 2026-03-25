import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GeneralInfo} from './components/info.jsx';
import Education  from './components/education.jsx';
import { Practical } from './components/experience.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <Practical />
  </StrictMode>,
)
