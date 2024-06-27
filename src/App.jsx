import React from 'react'
import Navbar from './Components/navbar/navbar'
import Home from './Components/home/home'
import Venue from './Components/Venue/venue'
import Title from './Components/Title/title'
import Target from './Components/target/target'
import About from './Components/About/about'
import Speakers from './Components/speakers/speakers'
import Sponsers from './Components/Sponsers/sponsers'
import Register from './Components/register/register'
import Loc from './Components/location/loc'
import Contact from './Components/contact/contact'
import Foot from './Components/Footer/foot'
import Patners from './Components/patners/patners'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
      <Title  title='Venue'/>
      <Venue/>
      <Title  title='TARGET AUDIENCE'/>
      <Target/>
      <Title  title='About Us'/>
      <About/>
      <Title  title='Speakers'/>
      <Speakers/>
      <Title  title='Sponsorship Packages'/>
      <Sponsers/>
      <Title  title='Sponsors and Patners'/>
      <Patners/>
      <Title  title='Register'/>
      <Register/>
      <Title  title='Location'/>
      <Loc/>
      <Title  title='Contact Us'/>
      <Contact/>
      <Foot/>
      </div>
    </div>
  )
}

export default App
