import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { useState,  createContext, useContext } from 'react'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import './App.scss'
import RepoPage from './pages/RepoPage'




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
            <Route path='/' element={<HomePage/>} />
            <Route path={'/:username' } element={<HomePage/>}/>
            <Route path='/:username/:repoName' element={<RepoPage />}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
