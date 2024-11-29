import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { useState,  createContext } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import SearchInput from './components/searchInput'

interface ContextType{
  user: string,
  setUser: (newUser: string) => void
}

export const ReposOwner = createContext<ContextType>({
 user: '/',
 setUser: () => {}
})

const Provider = ReposOwner.Provider;


function App() {
  const [user, setUser] = useState('/');
  
  return (
    <Provider value={{user, setUser}}>
      <div className="app">
        <Router>
          <Routes>
            <Route path='/' element={<SearchInput/>}/>
            <Route path='/:username' element={<HomePage/>}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
