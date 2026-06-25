import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Post } from './Post'
import { SideDiv } from './SideDiv'

function App() {
  

  return (
    <div>

       <Header/>
       <Post/>
       <Post/>
       <Post/>
       <SideDiv/>
    </div>
 
  )
}

export default App
