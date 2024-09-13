import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";

export default function Why() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Footer />
    </Stack>
  );
}
