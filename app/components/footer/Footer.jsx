import { Box, Stack, TextField, Typography } from "@mui/material";
import logo from "./parts/assets/logo.png";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <Stack gap={"30px"}>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Stack>
          <Typography fontWeight={"bold"}>Product</Typography>
          <Typography>Employee database</Typography>
          <Typography>Paypal</Typography>
          <Typography>Absences</Typography>
          <Typography>Time tracking</Typography>
          <Typography>Shift Planner</Typography>
          <Typography>Recruiting</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={"bold"}>Information</Typography>
          <Typography>FAQ</Typography>
          <Typography>Blog</Typography>
          <Typography>Support</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={"bold"}>Company</Typography>
          <Typography>About us</Typography>
          <Typography>Careers</Typography>
          <Typography>Contact us</Typography>
          <Typography>Lift Media</Typography>
        </Stack>
        <Stack backgroundColor={"#F9F9F9"} gap={"10px"} padding={"40px"}>
          <Typography fontWeight={"bold"}>Subscribe</Typography>
          <Stack direction={"row"}>
            <TextField label="Email address" variant="outlined" />
          </Stack>
          <Typography color={"#2E2D2D"} fontSize={"0.8rem"}>
            Hello, we are Lift Media. Our goal is to <br /> translate the
            positive effects from <br /> revolutionizing how companies engage{" "}
            <br />
            with their clients & their team.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        padding={"40px 0"}
        direction={"row"}
        justifyContent={"space-around"}
        borderTop={"1px black solid"}
      >
        <Image src={logo} alt="" height={50} width={100} />
        <Stack direction={"row"} gap={"20px"}>
          <Typography>Terms</Typography>
          <Typography>Privacy</Typography>
          <Typography>Contacts</Typography>
        </Stack>
        <Stack direction={"row"} gap={"10px"}>
          <Stack
            borderRadius={"100%"}
            sx={{
              border: "1px solid black",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaLinkedinIn />
          </Stack>
          <Stack
            borderRadius={"100%"}
            sx={{
              border: "1px solid black",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFacebookF />
          </Stack>
          <Stack
            borderRadius={"100%"}
            sx={{
              border: "1px solid black",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaXTwitter />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
