import React from 'react';
import summerEvent from "../images/summerEvent.png"
import bestSeller from "../images/bestSeller.png"
import customization from "../images/customization.png"
import arrival from "../images/arrival.png"
import kids from "../images/kids.png"
import oneone from "../images/oneone.png"
import onetwo from "../images/onetwo.png"
import onethree from "../images/onethree.png"

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
    <Box className="absolute inset-0 bg-black bg-opacity-40" />
    <CardContent sx={{backgroundColor: "#978266"}} className="absolute bottom-0 left-0 right-0 text-white">
      {/* <Typography variant="h6" className="font-medium">
        {title}
      </Typography> */}
      <Typography variant="body2" sx={{textAlign: "center", color:"#fff"}}>
      {title}
      </Typography>
    </CardContent>
  </Card>
);

// Product Section Component
const ProductSection = ({ title, products }) => (
  <Box className="my-8">
    {/* <Box className="mb-4 flex items-center justify-between">
      <Typography variant="h5" className="text-neutral-600">
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        className="cursor-pointer text-neutral-600 hover:underline"
      >
        View all
      </Typography>
    </Box>

    <Typography variant="h3" className="mb-6 text-neutral-700">
      Flat 50% Off
    </Typography> */}

    <Box>
        <Typography variant='p' sx={{display: "block", color:"#C4A180", textAlign: "center", letterSpacing:"1", fontWeight:"700", fontSize:"24"}}>CATEGORIES</Typography>
    </Box>

    <Box className="relative">
      <IconButton 
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2"
        size="large"
      >
        {/* <ChevronLeft /> */}
      </IconButton>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
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
const SectionOne = () => {
  const newBornProducts = [
    { title: 'Shop for kids (Him)', price: '1100', image: `${oneone}` },
    { title: 'Shop for kids (Her)', price: '1100', image: `${onetwo}` },
    { title: 'Shop for New Born', price: '1100', image: `${onethree}` },
  ];

  return (
    <Container sx={{marginTop:"20px"}} maxWidth="xl" className="py-8">
      <ProductSection 
        title="DEALS ON NEW BORN CLOTHES" 
        products={newBornProducts} 
      />
    </Container>
  );
};

export default SectionOne;