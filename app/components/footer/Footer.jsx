"use client";

import { Box, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import { FaPlus } from "react-icons/fa6";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import logo from "./parts/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FaPlus sx={{ fontSize: "0.9rem" }} color={"black"} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const navData = [
  {
    id: 0,
    name: "Company Profile",
    route: "/companyprofile",
    subRoutes: [
      {
        id: 0,
        head: "Sky Textiles.",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "SKY Primwear.",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "SKY International.",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
  {
    id: 1,
    name: "Infrastructure",
    route: "/infrastructure",
    subRoutes: [
      {
        id: 0,
        head: "Sky Textiles.",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "SKY Primwear.",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "SKY International.",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 3,
        head: "SKY International.",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
  {
    id: 2,
    name: "Product Range",
    route: "/products",
    subRoutes: [
      {
        id: 0,
        head: "Yarns",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "Fabrics",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "Garments",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
  {
    id: 3,
    name: "Sustainability",
    route: "/sustainability",
    subRoutes: [
      {
        id: 0,
        head: "Overview",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "Customer Relations",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "Society",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 3,
        head: "Resource Management",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 4,
        head: "Social Responsiblity",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
  {
    id: 4,
    name: "Clients",
    route: "/clients",
    subRoutes: [
      {
        id: 0,
        head: "Sky Textiles.",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "SKY Primwear.",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "SKY International.",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
    ],
  },
  {
    id: 5,
    name: "Why us",
    route: "/whyus",
    subRoutes: [
      {
        id: 0,
        head: "Vertical Setup",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "Cotton Rich  District",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "Compliances",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 3,
        head: "Transparency",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 4,
        head: "Customer Service",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 5,
        head: "EnvironMental Sustainablity",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
  {
    id: 6,
    name: "Get in Touch",
    route: "/getintouch",
    subRoutes: [
      {
        id: 0,
        head: "Enquiry",
        data: "In publishing and graphic design.",
        color: "#FFDFE6",
      },
      {
        id: 1,
        head: "Careers",
        data: "Lorem ipsum is a placeholder text.",
        color: "#DFDFFD",
      },
      {
        id: 2,
        head: "Events",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
      {
        id: 2,
        head: "Certifications",
        data: "used to demonstrate the visual.",
        color: "#DFD5E6",
      },
    ],
  },
];

export default function Footer() {
  const router = useRouter();
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Stack display={{ xs: "none", lg: "flex" }} gap={"30px"}>
        <Stack
          margin={"50px"}
          direction={"row"}
          justifyContent={"center"}
          gap={"100px"}
        >
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Product</Typography>
            <Box color={"#393737"}>
              <Typography>Employee database</Typography>
              <Typography>Paypal</Typography>
              <Typography>Absences</Typography>
              <Typography>Time tracking</Typography>
              <Typography>Shift Planner</Typography>
              <Typography>Recruiting</Typography>
            </Box>
          </Stack>
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Information</Typography>
            <Box color={"#393737"}>
              <Typography>FAQ</Typography>
              <Typography>Blog</Typography>
              <Typography>Support</Typography>
            </Box>
          </Stack>
          <Stack gap={"10px"}>
            <Typography fontWeight={"bold"}>Company</Typography>
            <Box color={"#393737"}>
              <Typography>FAQ</Typography>
              <Typography>About us</Typography>
              <Typography>Careers</Typography>
              <Typography>Contact us</Typography>
              <Typography>Lift Media</Typography>
            </Box>
          </Stack>
          <Stack
            backgroundColor={"#F9F9F9"}
            gap={"10px"}
            padding={"40px"}
            position={"relative"}
            sx={{ top: "-40px" }}
            width={"30%"}
          >
            <Typography fontWeight={"bold"}>Subscribe</Typography>
            <Stack direction={"row"}>
              <TextField label="Email address" variant="outlined" />
              <button
                style={{
                  position: "relative",
                  left: "-5px",
                  backgroundColor: "#D88684",
                  color: "white",
                  border: "none",
                  borderRadius: "0 5px 5px 0",
                  outline: "none",
                  padding: "0 20px",
                }}
              >
                <FaArrowRight />
              </button>
            </Stack>
            <Typography color={"#2E2D2D"} fontSize={"0.8rem"}>
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
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
      <Stack
        display={{ xs: "flex", lg: "none" }}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"white"}
        marginTop={"50px"}
      >
        <Box width={"100px"} height={"100px"} position={"relative"}>
          <Image
            src={logo}
            alt=""
            fill
            objectFit="contain"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          />
        </Box>

        <Stack
          sx={{
            width: "100%",
          }}
        >
          {navData.map((el, i) => {
            return (
              <Accordion
                expanded={expanded === `panel${i + 1}`}
                onChange={handleChange(`panel${i + 1}`)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography fontWeight={"bold"}>{el.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {el.subRoutes.map((d, i) => {
                    return <Typography>{d?.head}</Typography>;
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
