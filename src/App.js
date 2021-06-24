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
import AboutUsComponent from './components/AboutUsComponent'
import './App.css'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      {/* <Helmet>
        <title>Flats, Houses, Apartments for rental accommodation | Manipal</title>
        <meta name="description" content="Flats, Houses, Apartments for rental accommodation | Manipal" />

        <meta property="og:url" content="https://www.wolpa.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flats, Houses, Apartments for rental accommodation | Manipal" />
        <meta property="og:description" content="Flats, Houses, Apartments for rental accommodation | Manipal" />
        <meta property="og:image:secure_url" itemprop="image" content="https://res.cloudinary.com/dojfndzbj/image/upload/v1624558085/wolpa_logo_dark-04_mik2yf.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wolpa.in" />
        <meta property="twitter:url" content="https://www.wolpa.in/" />
        <meta name="twitter:title" content="Flats, Houses, Apartments for rental accommodation | Manipal" />
        <meta name="twitter:description" content="Flats, Houses, Apartments for rental accommodation | Manipal" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dojfndzbj/image/upload/v1624558085/wolpa_logo_dark-04_mik2yf.jpg" />

      </Helmet> */}
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
            <Route path='/about-us' exact>
              <NavBar />
              <AboutUsComponent />
            </Route>
          </>
        </Switch>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App;
