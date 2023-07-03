import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthContext, AuthProvider } from './context/AuthContext'
import { DataContext, DataProvider } from './context/DataContext'
import { FilterContext, FilterProvider } from './context/FilterContext'

// Call make Server
makeServer()

export { AuthContext, DataContext, FilterContext }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
