import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import legacy from "./assets/legacy.png";
import yarn1 from "./assets/yarnUp.png";
import yarn2 from "./assets/yarnDown.png";
import cape from "./assets/cape.png";
import Strength from "./Strength";

export default function Overview() {
  return (
    <Stack>
      <Navbar />
      <Stack position={"relative"} gap={"20px"} margin={"60px 70px"}>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "0px",
            right: "-30px",
          }}
        ></Box>
        <Box
          width={"200px"}
          height={"200px"}
          sx={{
            backgroundImage: `url(${yarn1.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            bottom: "0px",
            left: "-50px",
          }}
        ></Box>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Overview
        </Typography>
        <Typography
          width={"70%"}
          fontSize={"1rem"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Typography
          margin={"0 auto"}
          width={"90%"}
          textAlign={"center"}
          fontSize={"1rem"}
        >
          Sustainability And Innovation Is Engrained Into The Culture Of Maral
          Starting From Sustainability In Production Designs, Sustainable
          Practices In The Industry In Terms Of Standards And Certificates,
          Sustainable Business Models To Environmental Sustainability In The
          Textile Industry. It Dwells On Its Professional Strength While
          Ensuring Transparency In Information Sharing To The Satisfaction Of
          The Valued Consumers. We Understand At Marval That Consumers Of Today
          Are Better Informed And Increasingly Expect Ecologically And Socially
          Acceptable Products Along With Sustainable Solutions In The Industry.
          Increasingly, As Manufacturers Also We Are Committed To Tapping
          Innovation Potential And Promoting Sustainable Development
        </Typography>
        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>
      <Stack
        gap={"20px"}
        margin={"50px 0"}
        padding={"60px 70px"}
        backgroundColor={"#f9f9f9"}
      >
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Our Legacy
        </Typography>
        <Typography
          width={"80%"}
          fontSize={"1rem"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          Founded and promoted by the Late Dr. Krishna Kumar Birla, Sutlej
          Textiles and Industries is today the flagship textiles company of the
          illustrious KK Birla Group.
        </Typography>
        <Typography textAlign={"center"} fontSize={"1rem"}>
          Our roots date back to pre-Independence India, when Sutlej was set up
          as a composite textile mill at Okara as Sutlej Cotton Mills Limited in
          1934, in the undivided province of Punjab. Even in those times, it
          earned the distinction of being Asia’s largest textile mill. Despite
          the disruption in operations during the country’s independence
          movement during 1940’s & 50’s, the company was re-established in 1963
          as Rajasthan Textile Mills at Bhawanimandi in the Jhalawar district of
          Rajasthan, where it began production of cotton yarn and later
          diversified into synthetic blended yarn.
        </Typography>
        <Box
          width={"50%"}
          height={"55vh"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${legacy.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "10px",
          }}
        ></Box>
      </Stack>
      <Stack margin={"50px 70px"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Our Goals
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          marginTop={"50px"}
          position={"relative"}
        >
          <Stack
            width={"300px"}
            height={"300px"}
            fontSize={"3rem"}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            sx={{
              border: "1px solid black",
              borderRadius: "50%",
              left: "20px",
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#FB5457",
                color: "white",
                border: "none",
                zIndex: "20",
              },
            }}
          >
            Vision
          </Stack>
          <Stack
            width={"300px"}
            height={"300px"}
            fontSize={"3rem"}
            fontWeight={"bold"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            sx={{
              left: "-20px",
              border: "1px solid black",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#9C3FEB",
                color: "white",
                border: "none",
              },
            }}
          >
            Mission
          </Stack>
        </Stack>
      </Stack>
      <Strength />
      <Stack gap={"20px"} margin={"40px 70px"} marginBottom={"100px"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Future Initiatives
        </Typography>
        <Typography
          width={"70%"}
          fontSize={"1rem"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Typography
          width={"90%"}
          margin={"0 auto"}
          textAlign={"center"}
          fontSize={"1rem"}
        >
          Sustainability And Innovation Is Engrained Into The Culture Of Maral
          Starting From Sustainability In Production Designs, Sustainable
          Practices In The Industry In Terms Of Standards And Certificates,
          Sustainable Business Models To Environmental Sustainability In The
          Textile Industry. It Dwells On Its Professional Strength While
          Ensuring Transparency In Information Sharing To The Satisfaction Of
          The Valued Consumers. We Understand At Marval That Consumers Of Today
          Are Better Informed And Increasingly Expect Ecologically And Socially
          Acceptable Products Along With Sustainable Solutions In The Industry.
          Increasingly, As Manufacturers Also We Are Committed To Tapping
          Innovation Potential And Promoting Sustainable Development
        </Typography>
        <Box
          height={"15vh"}
          width={"60%"}
          margin={"20px auto"}
          sx={{
            backgroundImage: `url(${cape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
