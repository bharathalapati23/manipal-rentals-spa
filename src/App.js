import React, { lazy, Suspense } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import DashboardComponent from './components/DashboardComponent'

// import UploadComponent from './components/Upload/UploadComponent'
// import PropertyInfoComponent from './components/PropertyInfoComponent/PropertyInfoComponent.js'
import FooterComponent from './components/FooterComponent.js'
// import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent.js'
// import EnquiryComponent from './components/AssistedBooking/EnquiryComponent.js'
import HomeComponent from './components/HomeComponent/HomeComponent'
// import ContactUs from './components/ContactUs'
// import AboutUsComponent from './components/AboutUsComponent'
import './App.css'
import { Helmet } from 'react-helmet';

const DashboardComponent = lazy(() => import('./components/DashboardComponent'))
const UploadComponent = lazy(() => import('./components/Upload/UploadComponent'))
const HowItWorksComponent = lazy(() => import('./components/HowItWorks/HowItWorksComponent.js'))
const EnquiryComponent = lazy(() => import('./components/AssistedBooking/EnquiryComponent.js'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const AboutUsComponent = lazy(() => import('./components/AboutUsComponent'))
const PropertyInfoComponent = lazy(() => import('./components/PropertyInfoComponent/PropertyInfoComponent.js'))



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact> <HomeComponent /> </Route>
          <>

            <Route path='/properties' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <DashboardComponent />
              </Suspense>
            </Route>
            <Route path='/upload' exact>
              <NavBar />
              <UploadComponent />
            </Route>
            <Route path='/property' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <PropertyInfoComponent />
              </Suspense>
            </Route>
            <Route path='/how-it-works' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <HowItWorksComponent />
              </Suspense>
            </Route>
            <Route path='/assisted-booking' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <EnquiryComponent />
              </Suspense>
            </Route>
            <Route path='/contact-us' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <ContactUs />
              </Suspense>
            </Route>
            <Route path='/about-us' exact>
              <NavBar />
              <Suspense fallback={<div style={{ marginTop: '200px' }}>loading...</div>}>
                <AboutUsComponent />
              </Suspense>
            </Route>
          </>
        </Switch>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App;
