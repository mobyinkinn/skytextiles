import { Box, Stack, Typography } from "@mui/material";
import cert from "./assets/Certification.png";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

export default function Certifications() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={"70px 0"}>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Global Recognition And
        </Typography>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
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
        justifyContent={{ md: "space-between", xs: "center" }}
        margin={{ md: "0px 70px 10px 70px", xs: "10px 30px" }}
        direction={"row"}
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          width={{ md: "23%", xs: "40%" }}
          height={{ md: "50vh", xs: "30vh" }}
          marginBottom={{ md: "50px" }}
          sx={{
            backgroundImage: `url(${cert.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
