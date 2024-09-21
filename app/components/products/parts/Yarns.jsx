import { Box, Stack, Typography } from "@mui/material";
import banner from "./assets/yarnsBanner.png";
import bannerMobile from "./assets/yarnsBannerMobile.png";
import Navbar from "../../navbar/Navbar";
import Strength from "./Strength";
import yarns from "./assets/popularYarns.png";
import gradient from "./assets/gradient.png";
import Footer from "../../footer/Footer";

export default function Yarns() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={{ md: "70px 100px 30px 100px", xs: "50px 30px" }}>
        <Typography
          marginBottom={"10px"}
          textAlign={"center"}
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Introduction to Yarns
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
        >
          We Are The Largest Producer And One Of The Leading Exporters Of
          Value-added Synthetic And Blended Dyed Spun Yarn In India. We Are Also
          A Prominent Manufacturer Of Cotton Blended Dyed And Mélange Yarn. Some
          Of Our Yarns Include Polyester, Acrylic, Cotton Mélange, Injection
          Slub Yarn, Neppy Yarn, Roving Grindle Yarn, Siro Spun, Siro Compact,
          Lycra Twisted, Core Spun And Double Core Yarns, In Single-ply,
          Double-ply And Multi-fold. Besides, We Are Among The Few Exclusive
          Spinners In India To Manufacture Specialty Yarns Such As Modal,
          Lyocell, Tencel, Coolmax, Lycra, Thermolite Fiber.
        </Typography>
      </Stack>
      <Stack
        width={"80%"}
        margin={"0 auto"}
        height={{ md: "40vh", xs: "10vh" }}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Stack>
      <Strength />
      <Stack>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Popular Yarns
        </Typography>
        <Typography
          textAlign={"center"}
          width={"80%"}
          margin={"10px auto"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          Amazing finished knitting, crochet, and weaving projects start with
          amazing yarn. WEBS is committed to sourcing and producing the best
          quality we can find and bringing them direct to you at stashable
          prices.
        </Typography>
        <Stack
          marginTop={"30px"}
          flexWrap={"wrap"}
          direction={"row"}
          gap={{ md: "20px", xs: "20px" }}
          margin={{ md: "70px 100px 30px 100px", xs: "50px 30px" }}
          justifyContent={"center"}
        >
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
          <Box
            width={{ md: "22%", xs: "40%" }}
            height={"30vh"}
            sx={{
              backgroundImage: `url(${yarns.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "15px",
            }}
          ></Box>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={{
          xl: "800px",
          lg: "600px",
          md: "500px",
          smm: "700px",
          sm: "500px",
          xs: "300px",
        }}
        margin={{ xl: "0 0 50px 0" }}
        sx={{
          backgroundImage: {
            md: `url(${gradient.src})`,
            xs: `url(${bannerMobile.src})`,
          },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Stack>
      <Footer />
    </Stack>
  );
}
