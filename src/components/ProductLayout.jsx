import React from 'react';
import imagee from "../images/arrival.png"
import fourone from "../images/fourone.png"
import fourtwo from "../images/fourtwo.png"
import fourthree from "../images/fourthree.png"
import fourfour from "../images/fourfour.png"
import fourfive from "../images/fourfive.png"
import foursix from "../images/foursix.png"
import fiveone from "../images/fiveone.png"
import fivetwo from "../images/fivetwo.png"
import fivethree from "../images/fivethree.png"
import fivefour from "../images/fivefour.png"
import fivefive from "../images/fivefive.png"
import fivesix from "../images/fivesix.png"
import sixone from "../images/sixone.png"
import sixtwo from "../images/sixtwo.png"
import sixthree from "../images/sixthree.png"
import sixfour from "../images/sixfour.png"
import sixfive from "../images/sixfive.png"
import sixsix from "../images/sixsix.png"

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
  <Card className="relative h-64 overflow-hidden rounded-lg">
    <CardMedia
      component="img"
      height="100%"
      image={image || "/api/placeholder/300/400"}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover"
    />
    {/* <Box className="absolute inset-0 bg-black bg-opacity-40" />
    <CardContent className="absolute bottom-0 left-0 right-0 text-white">
      <Typography variant="h6" className="font-medium">
        {title}
      </Typography>
      <Typography variant="body2">
        Starts from ₹{price}
      </Typography>
    </CardContent> */}
  </Card>
);

// Product Section Component
const ProductSection = ({ title, products }) => (
  <Box className="my-8">
    <Box className="mb-4 flex items-center justify-between">
      <Typography sx={{textAlign:'center', color:"#C4A180"}} variant="h5" className="text-neutral-600">
        {title}
      </Typography>
     
      <Typography sx={{textAlign:'center', color:"#917150"}} variant="h3" className="mb-6 text-neutral-700">
      Flat 50% Off
    </Typography>
    </Box>

    <Typography 
    sx={{textAlign:'center', color:"#815B34"}}
        variant="body1" 
        className="cursor-pointer text-neutral-600 hover:underline"
      >
        View all
      </Typography>


    <Box className="relative">
      <IconButton 
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2"
        size="large"
      >
        {/* <ChevronLeft /> */}
      </IconButton>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
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
const ProductLayout = () => {
  const newBornProducts = [
    { title: 'Summer clothes', price: '1100', image: `${fourone}` },
    { title: 'Party wear', price: '1100', image: `${fourtwo}` },
    { title: 'Jumpers', price: '1100', image: `${fourthree}` },
    { title: 'Night suit', price: '1100', image: `${fourfour}` },
    { title: 'Burp clothes', price: '1100', image: `${fourfive}` },
    { title: 'Casual Dress', price: '1100', image: `${foursix}` },
  ];

  return (
    <Container maxWidth="xl" className="py-8">
      <ProductSection 
        title="DEALS ON NEW BORN CLOTHES" 
        products={newBornProducts} 
      />
      {/* <ProductSection 
        title="DEALS ON KIDS CLOTHES (HER)" 
        products={newBornProducts} 
      />
      <ProductSection 
        title="DEALS ON KIDS CLOTHES (HIM)" 
        products={newBornProducts} 
      /> */}
    </Container>
  );
};

export default ProductLayout;