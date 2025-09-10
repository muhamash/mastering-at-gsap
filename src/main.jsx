import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { appRoute } from './routes'

createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>
    <RouterProvider router={ appRoute } />
  </StrictMode>,
);