import './App.css'
import { Header } from './component/Header/Header'
import { PrivateRoutes } from './component/PrivateRoutes'

function App () {
  return (
    <div className='App'>
      <Header />
      <PrivateRoutes />
    </div>
  )
}

export default App
