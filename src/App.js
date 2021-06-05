import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardComponent from './components/DashboardComponent'
import UploadComponent from './components/Upload/UploadComponent'
import PropertyInfoComponent from './components/PropertyInfoComponent/PropertyInfoComponent.js'
import FooterComponent from './components/FooterComponent.js'
import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent.js'
import EnquiryComponent from './components/AssistedBooking/EnquiryComponent.js'
import HomeComponent from './components/HomeComponent/HomeComponent'
import ContactUs from './components/ContactUs'
import './App.css'

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact> <HomeComponent /> </Route>
          <>

            <Route path='/properties' exact>
              <NavBar />
              <DashboardComponent />
            </Route>
            <Route path='/upload' exact>
              <NavBar />
              <UploadComponent />
            </Route>
            <Route path='/property' exact>
              <NavBar />
              <PropertyInfoComponent />
            </Route>
            <Route path='/how-it-works' exact>
              <NavBar />
              <HowItWorksComponent />
            </Route>
            <Route path='/assisted-booking' exact>
              <NavBar />
              <EnquiryComponent />
            </Route>
            <Route path='/contact-us' exact>
              <NavBar />
              <ContactUs />
            </Route>
          </>
        </Switch>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App;
