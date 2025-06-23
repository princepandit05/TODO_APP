import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoApp from './component/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <TodoApp/>
  </StrictMode>,
)
