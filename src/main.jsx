import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const CursorTracer = () => {
  useEffect(() => {
      const handleMouseMove = (event) => {
          const tracer = document.createElement('div');
          tracer.className = 'tracer';
          document.body.appendChild(tracer);

          tracer.style.left = `${event.clientX}px`;
          tracer.style.top = `${event.clientY}px`;
          tracer.style.transform = `translate(-50%, -50%)`;

          setTimeout(() => {
              tracer.remove();
          }, 500);
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
