import React from 'react';
import summerEvent from "../images/summerEvent.png"
import bestSeller from "../images/bestSeller.png"
import customization from "../images/customization.png"
import arrival from "../images/arrival.png"

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
  </Card>
);

// Product Section Component
const ProductSection = ({ title, products }) => (
  <Box className="my-8">

    <Box className="relative">
      <IconButton 
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2"
        size="large"
      >
        {/* <ChevronLeft /> */}
      </IconButton>

      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
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
const SectionThree = () => {
  const newBornProducts = [
    { title: 'Jumpers', price: '1100', image: `${customization}` },
    { title: 'Summer clothes', price: '1100', image: `${summerEvent}` },
    { title: 'Party wear', price: '1100', image: `${bestSeller}` },
    { title: 'Night suit', price: '1100', image: `${arrival}` },
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

export default SectionThree;