import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthContext, AuthProvider } from './context/AuthContext'
import { DataContext, DataProvider } from './context/DataContext'

// Call make Server
makeServer()

export { AuthContext, DataContext }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
