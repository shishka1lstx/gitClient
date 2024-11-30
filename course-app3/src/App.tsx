import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { useState,  createContext, useContext } from 'react'
import HomePage from './pages/HomePage'
import SearchInput from './components/searchInput'
import Header from './components/Header'
import './App.css'




interface ContextType{
  user: string,
  setUser: (newUser: string) => void
}

export const ReposOwner = createContext<ContextType>({
 user: '/',
 setUser: () => {}
})

const Provider = ReposOwner.Provider;

export const useReposOwnerContext = () => useContext(ReposOwner);

function App() {
  const [user, setUser] = useState('/');
  
  return (
    <Provider value={{user, setUser}}>
      <div className="app">
        <Router>
          <Header/>
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
