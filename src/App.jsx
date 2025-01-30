import React from 'react'
import TextOverImage from './components/TextOverImage'
// import { Grid2 } from '@mui/material'
import Grid2 from "./components/Grid2"
import ProductLayout from './components/ProductLayout'
import SectionThree from './components/SectionThree'
import { Container } from '@mui/material'
import SectionTwo from './components/SectionTwo'
import SectionOne from './components/SectionOne'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import ProductLayoutTwo from './components/ProductLayoutTwo'
import ProductLayoutThree from './components/ProductLayoutThree'

const App = () => {
  return (
    <div>
      {/* <TextOverImage />
      <Grid2 /> */}
      
      <Container maxWidth={"90%"}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <ProductLayout />
        <ProductLayoutTwo />
        <ProductLayoutThree />
      </Container>
      <Footer />
    </div>
  )
}

export default App