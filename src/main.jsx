import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.scss'
import './styles/fonts.scss'
import './styles/index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( <App /> )