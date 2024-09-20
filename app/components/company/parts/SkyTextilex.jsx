import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import handShake from "./assets/handShake.png";
import img from "./assets/manufaturerImage.png";
import tree from "./assets/sustainable.gif";
import sun from "./assets/sun.png";
import maskGroup from "./assets/maskgroup.png";
import bg from "./assets/bgVector.png";

export default function SkyTextiles() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={{ md: "100px 0", xs: "50px 0" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          width={{ md: "65%", xs: "80%" }}
          margin={"20px auto"}
          marginTop={"0"}
        >
          We Inspire Trust In The Textile And Leather Industry.
        </Typography>
        <Typography
          textAlign={"center"}
          width={{ md: "50%", xs: "80%" }}
          fontSize={{ md: "1.2rem", xs: "0.8rem" }}
          margin={"0 auto"}
        >
          Driven By Sustainability And A Dedication To Transparency, Our Work Is
          Grounded In Proven Science. Our Standards Allow Everyone To Make
          Responsible Decisions And Protect Natural Resources.
        </Typography>
      </Stack>
      <Stack
        backgroundColor={"#F9F9F9"}
        padding={{ md: "100px 70px", xs: "50px 50px" }}
        direction={{ md: "row" }}
        justifyContent={"space-around"}
        gap={"20px"}
      >
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            35,000
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Companies Who Work With Us
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            35,000
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Companies Who Work With Us
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            35,000
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Companies Who Work With Us
          </Typography>
        </Stack>
      </Stack>
      <Stack margin={"100px 70px"}>
        <Typography
          fontSize={"3rem"}
          width={"50%"}
          fontWeight={"bold"}
          margin={"0 auto"}
          textAlign={"center"}
        >
          What We Offer As A Garment Manufacture
        </Typography>
        <Typography width={"70%"} margin={"0 auto"} textAlign={"center"}>
          We Guarantee The Highest Quality Standards And Timely Delivery For All
          Customer’s Needs. With Our Strengths, As Listed Below, We Provide Many
          Advantages Over Competitors In The Textile Manufacturing Industry.
        </Typography>
        <Typography width={"70%"} margin={"10px auto"} textAlign={"center"}>
          Planning ability with high sell-through rates. The Well-established
          workflow of design lead product planning that matches customer’s need
          with high sell-through rates, backed by cutting-edge information
          aggregated to the design office in Istanbul – Turkey. Garment
          Manufacturing line enabling a short delivery period. Business
          relationship with some 100 textile manufacturers and some 80 sewing
          factories in Turkey boasting a textile industry.
        </Typography>
        <Stack
          marginTop={"30px"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box
            height={"200px"}
            width={"23%"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            height={"200px"}
            width={"23%"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            height={"200px"}
            width={"23%"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            height={"200px"}
            width={"23%"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Stack>
      </Stack>
      <Stack backgroundColor={"#FB5457"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          gap={"40px"}
          alignItems={"center"}
          backgroundColor={"#F9F9F9"}
          margin={"70px 100px"}
          padding={"40px"}
        >
          <Stack>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.7rem"}
              color={"#FB5457"}
              marginBottom={"20px"}
            >
              Sustainable Business Practices
            </Typography>
            <Box
              height={"1.5px"}
              width={"200px"}
              backgroundColor={"black"}
              marginBottom={"40px"}
            ></Box>
            <Stack
              direction={"row"}
              gap={"20px"}
              alignItems={"center"}
              border={"1px solid #FB5457"}
              padding={"15px"}
              backgroundColor={"white"}
              marginBottom={"20px"}
            >
              <Image src={sun} alt="" width={"10px"} height={"10px"} />
              <Typography>
                62.3 MW of Green Power from wind and solar energy.
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"20px"}
              alignItems={"center"}
              border={"1px solid #FB5457"}
              padding={"15px"}
              backgroundColor={"white"}
              marginBottom={"20px"}
            >
              <Image src={sun} alt="" width={"10px"} height={"10px"} />
              <Typography>
                62.3 MW of Green Power from wind and solar energy.
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"20px"}
              alignItems={"center"}
              border={"1px solid #FB5457"}
              padding={"15px"}
              backgroundColor={"white"}
              marginBottom={"20px"}
            >
              <Image src={sun} alt="" width={"10px"} height={"10px"} />
              <Typography>
                62.3 MW of Green Power from wind and solar energy.
              </Typography>
            </Stack>
          </Stack>
          <Stack width={"40%"} height={"300px"} position={"relative"}>
            <Image src={tree} fill objectFit="contain" />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        margin={"100px 70px"}
        gap={"50px"}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "contain",
        }}
      >
        <Stack gap={"10px"}>
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            What Is Lorem Ipsum?
          </Typography>
          <Typography width={"70%"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <button
            style={{
              backgroundColor: "#FB5457",
              border: "none",
              width: "100px",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Button
          </button>
        </Stack>
        <Stack width={"50%"} height={"40vh"} position={"relative"}>
          <Image src={maskGroup} alt="" fill objectFit="contain" />
        </Stack>
      </Stack>

      <Stack margin={"100px 0"}>
        <Typography fontSize={"3rem"} textAlign={"center"} fontWeight={"bold"}>
          Milestones
        </Typography>
        <Typography textAlign={"center"} width={"60%"} margin={"0 auto"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"70px"}
          margin={"30px 0"}
        >
          <Stack
            width={"150px"}
            height={"150px"}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
          >
            Discover
          </Stack>
          <Stack
            width={"150px"}
            height={"150px"}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
          >
            Discover
          </Stack>
          <Stack
            width={"150px"}
            height={"150px"}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
          >
            Discover
          </Stack>
          <Stack
            width={"150px"}
            height={"150px"}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
          >
            Discover
          </Stack>
          <Stack
            width={"150px"}
            height={"150px"}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
          >
            Discover
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
