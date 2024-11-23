import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import SearchInput from './components/searchInput'
import ReposList from './modules/reposList'
import './App.css'



function App() {
  const [user, setUser] = useState('/');
  
  return (
    <div className="app">
      <Router>
        <SearchInput onInput={(newUser:string) => setUser(newUser)}/>
        
        <Routes>
          <Route path='/' element={<>{user}</>}/>
          <Route path='/:username' element={ <ReposList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
