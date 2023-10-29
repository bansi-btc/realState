import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Residencies from './components/Residencies'
import { Values } from './components/Values'
import Contact from './components/Contact'
import GetStarted from './components/GetStarted'

const App = () => {
  return (
    <div>
    <div className='relative'>
      <div className='white-gradient bg-gray-500 h-[20rem] w-[20rem] blur-[100px] absolute rounded-[100px]'></div>
      <Header />
      <Hero/>
    </div>

    <Companies/>
    <Residencies/>
    <Values/>
    <Contact/>
    <GetStarted/>
    </div>
  )
}

export default App