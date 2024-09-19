import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/skyBanner.png";
import tick from "./assets/tick.png";
import gifImage from "./assets/someGif.png";
import graph from "./assets/graph.png";
import happyMan from "./assets/happyMan.png";
import Image from "next/image";

export default function SkyTextiles() {
  return (
    <Stack>
      <Navbar />
      <Stack
        height={"80vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
        }}
      >
        <Stack
          width={"40%"}
          height={"100%"}
          gap={"15px"}
          margin={"0px 70px"}
          justifyContent={"center"}
        >
          <Typography lineHeight={"0.3"} fontSize={"3rem"} fontWeight={"bold"}>
            Get The Best
          </Typography>
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            Product Solution
          </Typography>
          <Typography fontSize={"1.4rem"}>
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout.
          </Typography>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              width: "200px",
              padding: "15px",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </Stack>
      </Stack>
      <Stack margin={"100px 0px"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Bringing Values To Clients
        </Typography>
        <Typography
          width={"70%"}
          fontSize={"1rem"}
          textAlign={"center"}
          margin={"10px auto"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations.
        </Typography>
        <Stack
          width={"500px"}
          height={"500px"}
          margin={"0px auto"}
          marginTop={"100px"}
          sx={{
            backgroundImage: `url(${gifImage.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Stack>
      </Stack>
      <Stack backgroundColor={"#f9f9f9"} padding={"50px 70px"}>
        <Typography
          fontSize={"3rem"}
          lineHeight={"0.6"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          We Create
        </Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Super-Awesome Designs
        </Typography>
        <Typography
          width={"70%"}
          fontSize={"1rem"}
          textAlign={"center"}
          margin={"10px auto"}
        >
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations.
        </Typography>
        <Stack
          margin={"40px 0"}
          direction={"row"}
          gap={"40px"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <Stack
            width={"45%"}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={"1rem"}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"45%"}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={"1rem"}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"45%"}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={"1rem"}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={"45%"}
            backgroundColor={"white"}
            padding={"20px"}
            direction={"row"}
            gap={"20px"}
          >
            <Image src={tick} alt="" width={50} height={50} />
            <Stack gap={"10px"}>
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Amazing Design
              </Typography>
              <Typography fontSize={"1rem"}>
                It is a Long Established Fact That a Reader Will Be Distracted
                By The Readable Content of a Page When Looking At Its Layout.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack color={"white"} backgroundColor={"#F8575A"} padding={"50px"}>
        <Typography
          fontWeight={"300"}
          lineHeight={"0.9"}
          fontSize={"3rem"}
          textAlign={"center"}
        >
          The Best Multipurpose
        </Typography>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Free Responsive Landing Page
        </Typography>
        <Typography textAlign={"center"} marginTop={"10px"}>
          Mordern, Lightning, Fast & Easily Customize
        </Typography>
        <button
          style={{
            width: "200px",
            borderRadius: "3px",
            padding: "10px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            margin: "30px auto",
          }}
        >
          Get Started
        </button>
      </Stack>
      <Stack
        direction={"row"}
        gap={"35px"}
        backgroundColor={"#f9f9f9"}
        padding={"70px"}
        alignItems={"center"}
      >
        <Stack width={"30%"} gap={"20px"}>
          <Typography fontWeight={"bold"} fontSize={"3rem"}>
            Why Us
          </Typography>
          <Typography>
            We At Maral Overseas Limited Endeavor To Believe In The Idea Of
            Sustainability That Is Achieved When People On Earth Can Live Well
            Without Compromising The Quality For Future Generations.
          </Typography>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "1px solid black",
              backgroundColor: "transparent",
            }}
          >
            Get Started
          </button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"40px"}
          width={"70%"}
          flexWrap={"wrap"}
        >
          <Stack
            width={"45%"}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={"2.5rem"}>Sample Headline</Typography>
            <Typography fontSize={"1rem"}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "200px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={"45%"}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={"2.5rem"}>Sample Headline</Typography>
            <Typography fontSize={"1rem"}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "200px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={"45%"}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={"2.5rem"}>Sample Headline</Typography>
            <Typography fontSize={"1rem"}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "200px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
          <Stack
            width={"45%"}
            gap={"20px"}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <Typography fontSize={"2.5rem"}>Sample Headline</Typography>
            <Typography fontSize={"1rem"}>
              We At Maral Overseas Limited Endeavor To Believe In The Idea Of
              Sustainability That Is.
            </Typography>
            <button
              style={{
                width: "200px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "transparent",
                borderRadius: "3px",
              }}
            >
              Get Started
            </button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        backgroundColor={"#f9f9f9"}
        padding={"50px 70px"}
        marginBottom={"70px"}
      >
        <Stack width={"60%"}>
          <Typography fontWeight={"bold"} fontSize={"3rem"}>
            We Are Passionate About
          </Typography>
          <Typography fontWeight={"bold"} fontSize={"3rem"}>
            Solving Problems
          </Typography>
          <Stack margin={"40px 0"}>
            <Stack
              width={"70%"}
              padding={"20px"}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Community
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={"70%"}
              padding={"20px"}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Curiosity
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={"70%"}
              padding={"20px"}
              direction={"row"}
              gap={"20px"}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Collaboration
                </Typography>
                <Typography fontSize={"1rem"}>
                  It is a Long Established Fact That a Reader Will Be Distracted
                  By The Readable Content of a Page When Looking At Its Layout.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          height={"90vh"}
          width={"40%"}
          sx={{
            backgroundImage: `url(${happyMan.src})`,
            backgroundSize: "cover",
            borderRadius: "30px",
          }}
        ></Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
