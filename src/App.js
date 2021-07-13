import React, { lazy, Suspense } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import DashboardComponent from './components/DashboardComponent'

//import UploadComponent from './components/Upload/UploadComponent'
//import PropertyInfoComponent from './components/PropertyInfoComponent/PropertyInfoComponent.js'
import FooterComponent from './components/FooterComponent.js'
//import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent.js'
//import EnquiryComponent from './components/AssistedBooking/EnquiryComponent.js'
//import HomeComponent from './components/HomeComponent/HomeComponent'
//import ContactUs from './components/ContactUs'
//import AboutUsComponent from './components/AboutUsComponent'
import HomeComponent from './components/HomeComponent/HomeComponent'
import './App.css'
import LoadingComponent from './components/LoadingComponent'

const DashboardComponent = lazy(() => import('./components/DashboardComponent'))
const PropertyInfoComponent = lazy(() => import('./components/PropertyInfoComponent/PropertyInfoComponent.js'))
const UploadComponent = lazy(() => import('./components/Upload/UploadComponent'))
const HowItWorksComponent = lazy(() => import('./components/HowItWorks/HowItWorksComponent.js'))
const EnquiryComponent = lazy(() => import('./components/AssistedBooking/EnquiryComponent.js'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const AboutUsComponent = lazy(() => import('./components/AboutUsComponent'))
const ApprovalDashboard = lazy(() => import('./components/ApprovalPage/ApprovalDashboard'))

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomeComponent />
          </Route>
          <>

            <Route path='/properties' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <DashboardComponent />
              </Suspense>
            </Route>
            <Route path='/upload' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <UploadComponent />
              </Suspense>
            </Route>
            <Route path='/property' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <PropertyInfoComponent />
              </Suspense>
            </Route>
            <Route path='/how-it-works' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <HowItWorksComponent />
              </Suspense>
            </Route>
            <Route path='/assisted-booking' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <EnquiryComponent />
              </Suspense>
            </Route>
            <Route path='/contact-us' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <ContactUs />
              </Suspense>
            </Route>
            <Route path='/about-us' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <AboutUsComponent />
              </Suspense>
            </Route>
            <Route path='/approval-dashboard' exact>
              <NavBar />
              <Suspense fallback={<LoadingComponent />}>
                <ApprovalDashboard />
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
