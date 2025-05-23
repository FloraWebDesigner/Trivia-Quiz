import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// the name is from App.jsx

createRoot(document.getElementById('root')).render(
    <App />,
)
