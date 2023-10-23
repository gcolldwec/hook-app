import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import CounterApp from './01-useState/CounterApp';
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook />
  // </React.StrictMode>,
)
