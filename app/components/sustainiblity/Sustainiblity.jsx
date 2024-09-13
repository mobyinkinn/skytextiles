import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import banner from "./parts/assets/Video.png";
import Sus from "./parts/Sus";
import Eco from "./parts/Eco";
import Conservation from "./parts/conservation";
import DidYouKnow from "./parts/DidYouKnow";

export default function () {
  return (
    <Stack>
      <Navbar />
      <Box
        width={"100%"}
        height={"80vh"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
        }}
      ></Box>
      <Sus />
      <Eco />
      <DidYouKnow />
      <Conservation />
      <Footer />
    </Stack>
  );
}
