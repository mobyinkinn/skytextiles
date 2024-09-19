import { Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import banner from "./assets/verticleBanner.png";
import snow from "./assets/snow.png";
import lady from "./assets/lady.png";
import couple from "./assets/couple.png";

export default function VerticleSetup() {
  return (
    <Stack>
      <Navbar />
      <Stack margin={"70px 0 50px 0"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Verticle Setup
        </Typography>
        <Typography
          width={"60%"}
          margin={"0 auto"}
          fontSize={"1rem"}
          textAlign={"center"}
        >
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s.
        </Typography>
      </Stack>
      <Stack
        width={"100%"}
        height={"80vh"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack
        direction={"row"}
        margin={"100px 100px "}
        justifyContent={"space-between"}
      >
        <Stack width={"30%"} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={"2rem"}>Lorem Ipsum </Typography>
          <Typography>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
        <Stack width={"30%"} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={"2rem"}>Lorem Ipsum </Typography>
          <Typography>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
        <Stack width={"30%"} gap={"10px"}>
          <Image src={snow} alt="" height={50} width={50} />
          <Typography fontSize={"2rem"}>Lorem Ipsum </Typography>
          <Typography>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} alignCenter={"center"}>
        <Stack width={"50%"} margin={"100px 70px"}>
          <Typography fontSize={"2rem"}>Lorem Ipsum </Typography>
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            Lorem Ipsum
          </Typography>
          <Typography>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Stack>
        <Stack
          width={"30%"}
          height={"50vh"}
          sx={{
            backgroundImage: `url(${lady.src})`,
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        ></Stack>
      </Stack>
      <Stack gap={"20px"}>
        <Typography fontSize={"2rem"} textAlign={"center"}>
          Lorem Ipsum
        </Typography>
        <Typography fontSize={"3rem"} textAlign={"center"} fontWeight={"bold"}>
          Lorem Ipsum
        </Typography>
        <Typography margin={"0 auto"} width={"80%"} textAlign={"center"}>
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          margin={"50px 70px"}
        >
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
          <Stack
            width={"23%"}
            height={"60vh"}
            sx={{
              backgroundImage: `url(${couple.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "10px",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
