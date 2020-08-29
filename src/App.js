import React from 'react'
import './App.css'

import Layout from './components/layout'
import Header from './components/header'
import Map from './components/map'
import List from './components/list'

function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <Map />
        <List />
      </Layout>
    </div>
  )
}

export default App
