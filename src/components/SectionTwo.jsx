import React from 'react';
import summerEvent from "../images/summerEvent.png"
import bestSeller from "../images/bestSeller.png"
import customization from "../images/customization.png"
import arrival from "../images/arrival.png"
import twoone from "../images/twoone.png"
import twotwo from "../images/twotwo.png"
import twothree from "../images/twothree.png"
import twofour from "../images/twofour.png"
import star from "../images/star.png"
import user from "../images/user.png"

import { 
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  IconButton,
  Grid
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Product Card Component
const ProductCard = ({ image, title, price }) => (
    <div>
  <Card className="relative h-64 overflow-hidden rounded-lg">
    <CardMedia
      component="img"
      height="100%"
      image={image || "/api/placeholder/300/400"}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <Box className="absolute inset-0 bg-black bg-opacity-40" />
    <CardContent sx={{backgroundColor: "#E1C6A2"}} className="absolute bottom-0 left-0 right-0 text-white">
          <Typography variant="body2" sx={{textAlign: "center", color:"#fff"}}>
            ADD TO CART
          </Typography>
        </CardContent>
  </Card>
  <Typography variant="body2" sx={{color:"black", marginTop:"10px"}}>
    {title}
    </Typography>
    <Box sx={{display:"flex", marginBottom:"10px", marginTop:"10px"}}>
        <Typography variant="body2" sx={{color:"#858585"}}>
            FROM
        </Typography>
        <Typography variant="body2" sx={{color:"black"}}>
            ₹1,999
        </Typography>
    </Box>
    <Typography variant="body2" sx={{color:"#858585"}}>
        5 Variants available
    </Typography>
    <Box sx={{display: "flex", justifyContent:"start", marginTop:"-5px"}}>
        <Box maxWidth={"70px"} sx={{display: "flex", flex:"1"}}>
            <img height={"17px"} style={{marginTop:"16px"}} src={`${star}`} alt='star' />
            <p>(3.2/5)</p>
        </Box>
        <div style={{marginTop:"15px"}}>|</div>
        <Box sx={{display: "flex", flex:"1"}}>
            <img height={"17px"} style={{marginTop:"16px"}} src={`${user}`} alt='user' />
            <p>320 Reviews</p>
        </Box>
    </Box>
  </div>
);

// Product Section Component
const ProductSection = ({ title, products }) => (
  <Box className="my-8">

    <Box>
        <Typography variant='p' sx={{display: "block", color:"#C4A180", textAlign: "center", letterSpacing:"1", fontWeight:"700", fontSize:"24"}}>NEW AND TRENDING</Typography>
        <Typography variant='p' sx={{display: "block", color:"#815B34", textAlign: "center", letterSpacing:"1", fontWeight:"700", fontSize:"16", marginY:"10px", textDecoration:"underline"}}>View all</Typography>
    </Box>

    <Box className="relative">
      <IconButton 
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2"
        size="large"
      >
        {/* <ChevronLeft /> */}
      </IconButton>

      <Grid container spacing={10}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>

      <IconButton 
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2"
        size="large"
      >
        {/* <ChevronRight /> */}
      </IconButton>
    </Box>
  </Box>
);

// Main Component
const SectionTwo = () => {
  const newBornProducts = [
    { title: 'Feather aline casual party wear dress...', price: '1100', image: `${twoone}` },
    { title: 'Fluffy fully insulated hoodie for new borns...', price: '1100', image: `${twotwo}` },
    { title: 'Casual frock for girls printed pink butterfly...', price: '1100', image: `${twothree}` },
    { title: 'Neutral oversized Trousers for boys...', price: '1100', image: `${twofour}` },
  ];

  return (
    <Container maxWidth="xl" className="py-8">
      <ProductSection 
        title="DEALS ON NEW BORN CLOTHES" 
        products={newBornProducts} 
      />
    </Container>
  );
};

export default SectionTwo;