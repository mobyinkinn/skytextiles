import { Box, Stack, Typography } from "@mui/material";
import cert from "./assets/Certification.png";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

export default function Certifications() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={"70px 0"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Global Recognition And
        </Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Certifications
        </Typography>

        <Typography
          width={"80%"}
          margin={"0 auto"}
          marginTop={"30px"}
          fontSize={"1rem"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
      </Stack>
      <Stack
        justifyContent={"space-between"}
        margin={"0px 70px 100px 70px"}
        direction={"row"}
        flexWrap={"wrap"}
      >
        <Box
          width={"23%"}
          height={"50vh"}
          marginBottom={"50px"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={"23%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
