import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/eventsBanner.png";
import conference from "./assets/conference.png";
import location from "./assets/location.png";
import time from "./assets/clock.png";
import Image from "next/image";

export default function Events() {
  return (
    <Stack>
      <Navbar />
      <Stack
        height={"80vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack margin={"70px 0"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Events at Sky Textiles
        </Typography>
        <Typography fontSize={"1rem"} textAlign={"center"}>
          View Upcoming And Past Events Hosted By Sky Textiles.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          margin={"30px"}
        >
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Upcoming Events
          </button>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "1px solid black",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Post Events
          </button>
        </Stack>
      </Stack>
      <Stack
        margin={"50px 70px 200px 70px"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Stack
          gap={"10px"}
          fontSize={"5px"}
          width={"30%"}
          padding={"20px"}
          backgroundColor={"#f9f9f9"}
        >
          <Box
            width="100%"
            height="30vh"
            sx={{
              backgroundImage: `url(${conference.src})`,
              backgroundSize: "cover",
              borderRadius: "5px",
            }}
          ></Box>
          <Typography
            fontSize={"0.9rem"}
            backgroundColor={"#D9D9D9"}
            padding={"5px 8px"}
            borderRadius={"3px"}
            width={"fit-content"}
            margin={"10px 0"}
          >
            Wednesday, March 29
          </Typography>
          <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
            Microsoft Teams: The Productivity Swiss Army Knife.
          </Typography>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={time} alt="" height={15} width={15} />
            <Typography>11 AM - 1 PM</Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={location} alt="" height={16} width={12} />
            <Typography>The Kitchen American Bistro</Typography>
          </Stack>
          <Typography>
            Join Tecnologia And Ingram Micro To Explore How Teams Can Enable
            Better Hybrid Work For Businesses.
          </Typography>
          <button
            style={{
              marginTop: "20px",
              width: "200px",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "1.2rem",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Register Now
          </button>
        </Stack>
        <Stack
          gap={"10px"}
          fontSize={"5px"}
          width={"30%"}
          padding={"20px"}
          backgroundColor={"#f9f9f9"}
        >
          <Box
            width="100%"
            height="30vh"
            sx={{
              backgroundImage: `url(${conference.src})`,
              backgroundSize: "cover",
              borderRadius: "5px",
            }}
          ></Box>
          <Typography
            fontSize={"0.9rem"}
            backgroundColor={"#D9D9D9"}
            padding={"5px 8px"}
            borderRadius={"3px"}
            width={"fit-content"}
            margin={"10px 0"}
          >
            Wednesday, March 29
          </Typography>
          <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
            Microsoft Teams: The Productivity Swiss Army Knife.
          </Typography>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={time} alt="" height={15} width={15} />
            <Typography>11 AM - 1 PM</Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={location} alt="" height={16} width={12} />
            <Typography>The Kitchen American Bistro</Typography>
          </Stack>
          <Typography>
            Join Tecnologia And Ingram Micro To Explore How Teams Can Enable
            Better Hybrid Work For Businesses.
          </Typography>
          <button
            style={{
              marginTop: "20px",
              width: "200px",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "1.2rem",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Register Now
          </button>
        </Stack>
        <Stack
          gap={"10px"}
          fontSize={"5px"}
          width={"30%"}
          padding={"20px"}
          backgroundColor={"#f9f9f9"}
        >
          <Box
            width="100%"
            height="30vh"
            sx={{
              backgroundImage: `url(${conference.src})`,
              backgroundSize: "cover",
              borderRadius: "5px",
            }}
          ></Box>
          <Typography
            fontSize={"0.9rem"}
            backgroundColor={"#D9D9D9"}
            padding={"5px 8px"}
            borderRadius={"3px"}
            width={"fit-content"}
            margin={"10px 0"}
          >
            Wednesday, March 29
          </Typography>
          <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
            Microsoft Teams: The Productivity Swiss Army Knife.
          </Typography>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={time} alt="" height={15} width={15} />
            <Typography>11 AM - 1 PM</Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Image src={location} alt="" height={16} width={12} />
            <Typography>The Kitchen American Bistro</Typography>
          </Stack>
          <Typography>
            Join Tecnologia And Ingram Micro To Explore How Teams Can Enable
            Better Hybrid Work For Businesses.
          </Typography>
          <button
            style={{
              marginTop: "20px",
              width: "200px",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "1.2rem",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Register Now
          </button>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
