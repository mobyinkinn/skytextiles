import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Dta from "./parts/Dta";
import BusinessVerticles from "./parts/BusinessVerticles";
import Team from "./parts/Team";
import Reviews from "./parts/Review";
import Form from "./parts/Form";
import Footer from "../footer/Footer";
import Map from "./parts/Map";
import Hover from "./parts/Hover";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Dta />
      <BusinessVerticles />
      <Map />
      <Hover/>
      <Team />
      <Reviews />
      <Form />
      <Footer />
    </Box>
  );
}
