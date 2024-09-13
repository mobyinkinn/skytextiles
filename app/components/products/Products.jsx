import { Box, Stack } from "@mui/material";
import banner from "./parts/assets/banner.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Pdt from "./parts/Pdt";
import ProductAnimated from "./parts/ProductsAnimated";

export default function Products() {
  return (
    <Stack>
      <Navbar />
      <Box
        height={"80vh"}
        width={"100%"}
        sx={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover" }}
      ></Box>
      <Pdt />
      <ProductAnimated />
      <Footer />
    </Stack>
  );
}
