import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardComponent from './components/DashboardComponent'
import UploadComponent from './components/Upload/UploadComponent'
import PropertyInfoComponent from './components/PropertyInfoComponent/PropertyInfoComponent.js'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact> <DashboardComponent /> </Route>
          <Route path='/upload' exact> <UploadComponent /> </Route>
          <Route path='/property' exact> <PropertyInfoComponent /> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
