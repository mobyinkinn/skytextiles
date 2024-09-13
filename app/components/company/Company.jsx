import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Banner.png";
import We from "./parts/We";
import Strength from "./parts/Strength";
import Vision from "./parts/Vision";
import Core from "./parts/Core";

export default function Company() {
  return (
    <Stack>
      <Navbar />
      <Box
        width={"100%"}
        height={"80vh"}
        sx={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover" }}
      ></Box>
      <We />
      <Strength />
      <Box height={"40vh"}></Box>
      <Vision />
      <Core />
      <Footer />
    </Stack>
  );
}
