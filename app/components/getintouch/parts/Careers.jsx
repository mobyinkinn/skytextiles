import { Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import arrow from "./assets/arrow.png";
import location from "./assets/location.png";
import time from "./assets/time.png";
import Image from "next/image";

export default function Careers() {
  return (
    <Stack>
      <Navbar />
      <Stack
        direction={"row"}
        margin={"0 70px"}
        alignItems={"center"}
        height={"70vh"}
      >
        <Stack>
          <Typography fontSize={"4.5rem"} fontWeight={"bold"}>
            Want To Join
          </Typography>
          <Typography fontSize={"4.5rem"} fontWeight={"bold"}>
            The Team ?
          </Typography>
          <Typography fontSize={"2rem"} fontWeight={"bold"}>
            Be Our Next Human Experience
          </Typography>
          <Typography fontSize={"2rem"} fontWeight={"bold"}>
            Designer
          </Typography>
        </Stack>
        <Stack></Stack>
      </Stack>
      <Stack>
        <Typography fontSize={"3rem"} textAlign={"center"} fontWeight={"bold"}>
          Why Join Sky Textiles?
        </Typography>
        <Typography width={"80%"} margin={"10px auto"} textAlign={"center"}>
          We At Maral Overseas Limited Endeavor To Believe In The Idea Of
          Sustainability That Is Achieved When People On Earth Can Live Well
          Without Compromising The Quality For Future Generations. Strategies To
          Meet Sustainability Goals Vary From Sustainable Designs And The Use Of
          Innovative Materials And Processes To The Optimization Of Resource
          Consumption And Recycling.
        </Typography>
      </Stack>
      <Stack margin={"100px 70px"}>
        <Typography
          fontSize={"3rem"}
          textAlign={"center"}
          marginBottom={"50px"}
          fontWeight={"600"}
        >
          Current Job Openings
        </Typography>
        <Stack
          margin={"30px 0"}
          gap={"20px"}
          sx={{ border: "1px solid black", padding: "30px" }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              Product Designer
            </Typography>
            <Stack direction={"Row"} gap={"15px"} alignItems={"center"}>
              <Typography fontSize={"1.6rem"}>Apply Now</Typography>
              <Image src={arrow} alt="" width={"20"} height={"20"} />
            </Stack>
          </Stack>
          <Typography>
            We're Looking For A Mid-level Product Designer To Join Our Team.
          </Typography>
          <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={location} alt="" width={15} height={20} />
              <Typography>100% Remote</Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={time} alt="" width={20} height={20} />
              <Typography>Full-Time</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          margin={"30px 0"}
          gap={"20px"}
          sx={{ border: "1px solid black", padding: "30px" }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              Product Designer
            </Typography>
            <Stack direction={"Row"} gap={"15px"} alignItems={"center"}>
              <Typography fontSize={"1.6rem"}>Apply Now</Typography>
              <Image src={arrow} alt="" width={"20"} height={"20"} />
            </Stack>
          </Stack>
          <Typography>
            We're Looking For A Mid-level Product Designer To Join Our Team.
          </Typography>
          <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={location} alt="" width={15} height={20} />
              <Typography>100% Remote</Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={time} alt="" width={20} height={20} />
              <Typography>Full-Time</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          margin={"30px 0"}
          gap={"20px"}
          sx={{ border: "1px solid black", padding: "30px" }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              Product Designer
            </Typography>
            <Stack direction={"Row"} gap={"15px"} alignItems={"center"}>
              <Typography fontSize={"1.6rem"}>Apply Now</Typography>
              <Image src={arrow} alt="" width={"20"} height={"20"} />
            </Stack>
          </Stack>
          <Typography>
            We're Looking For A Mid-level Product Designer To Join Our Team.
          </Typography>
          <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={location} alt="" width={15} height={20} />
              <Typography>100% Remote</Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={time} alt="" width={20} height={20} />
              <Typography>Full-Time</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          margin={"30px 0"}
          gap={"20px"}
          sx={{ border: "1px solid black", padding: "30px" }}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              Product Designer
            </Typography>
            <Stack direction={"Row"} gap={"15px"} alignItems={"center"}>
              <Typography fontSize={"1.6rem"}>Apply Now</Typography>
              <Image src={arrow} alt="" width={"20"} height={"20"} />
            </Stack>
          </Stack>
          <Typography>
            We're Looking For A Mid-level Product Designer To Join Our Team.
          </Typography>
          <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={location} alt="" width={15} height={20} />
              <Typography>100% Remote</Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              sx={{
                border: "1px solid black",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
              }}
            >
              <Image src={time} alt="" width={20} height={20} />
              <Typography>Full-Time</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
