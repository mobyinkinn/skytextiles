import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Banner.png";
import Our from "./parts/Our";
import Rnd from "./parts/Rnd";
import Caraosal from "./parts/Caraousal";

export default function Infra() {
  return (
    <Stack>
      <Navbar />
      <Box
        height={"80vh"}
        width={"100%"}
        sx={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover" }}
      ></Box>
      <Our />
      <Caraosal />
      <Rnd />
      <Footer />
    </Stack>
  );
}
