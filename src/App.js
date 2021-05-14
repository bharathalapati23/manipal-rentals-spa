import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardComponent from './components/DashboardComponent'
import UploadComponent from './components/Upload/UploadComponent'
import PropertyInfoComponent from './components/PropertyInfoComponent/PropertyInfoComponent.js'
import FooterComponent from './components/FooterComponent.js'
import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent.js'
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
          <Route path='/how-it-works' exact> <HowItWorksComponent /> </Route>
        </Switch>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App;
