"use client";

import * as React from "react";
import { Box, Button, Fade, Slide, Stack, Typography } from "@mui/material";
import logo from "./parts/assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import menu from "./parts/assets/menu.png";

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
  { id: 1, name: "Infrastructure", route: "/infrastructure", subRoutes: [] },
  { id: 2, name: "Product Range", route: "/products", subRoutes: [] },
  { id: 3, name: "Sustainability", route: "/sustainability", subRoutes: [] },
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
    ],
  },
  { id: 5, name: "Why us", route: "/whyus", subRoutes: [] },
  { id: 6, name: "Get in Touch", route: "/getintouch", subRoutes: [] },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSubRoutes, setShowSubRoutes] = useState(false);
  const [subRoutes, setSubRoutes] = useState([]);
  const router = useRouter();
  const [expanded, setExpanded] = useState("");
  const containerRef = React.useRef(null);
  // console.log(showNav);

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  function handleShowSubRoutes(el) {
    if (el.subRoutes.length > 0) {
      setShowSubRoutes(true);
      setSubRoutes(el.subRoutes);
    } else {
      setShowSubRoutes(false);
    }
  }

  return (
    <>
      <Box
        display={{ xs: "none", lg: "flex" }}
        direction={"row"}
        width={"100%"}
        height={"80px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={"15px 0"}
        position={"sticky"}
        backgroundColor={"white"}
        zIndex={"100"}
        top={"0"}
      >
        <Box width={"10vw"} height={"100%"} position={"relative"}>
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
        <Box sx={{ display: "flex" }}>
          {navData.map((el, i) => {
            return (
              <Stack key={el.id}>
                <Link
                  className="nav-link"
                  href={el.route}
                  onMouseEnter={() => handleShowSubRoutes(el)}
                  style={{ fontSize: "0.8rem" }}
                >
                  {el.name}
                </Link>

                {/* <Fade in={showSubRoutes} easing="enter"> */}
                {showSubRoutes && (
                  <Stack
                    className="subRoute"
                    direction={"row"}
                    position={"absolute"}
                    backgroundColor={"white"}
                    sx={{
                      top: "100%",
                      left: "0",
                      width: "100%",
                      justifyContent: "center",
                      gap: "20px",
                      borderBottom: "1px solid black",
                    }}
                    onMouseLeave={() => setShowSubRoutes(false)}
                  >
                    {subRoutes.map((element, i) => {
                      return (
                        <Stack
                          key={element.id}
                          backgroundColor={element.color}
                          sx={{
                            margin: "20px 0",
                            padding: "20px 30px",
                            borderRadius: "10px",
                          }}
                        >
                          <Typography fontSize={"1.9rem"} fontWeight={"bold"}>
                            {element.head}
                          </Typography>
                          <Typography>{element.data}</Typography>
                        </Stack>
                      );
                    })}
                  </Stack>
                )}
                {/* </Fade> */}
              </Stack>
            );
          })}
        </Box>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Contact</span>
            <span style={getTrasformStyles(isHovered)}>Contact</span>
          </span>
        </button>
        {!showSubRoutes && (
          <hr
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              backgroundColor: "black",
              height: "1px",
              position: "absolute",
              top: "100%",
              left: "0",
            }}
          />
        )}
      </Box>
      <Box
        display={{ xs: "flex", lg: "none" }}
        direction={"row"}
        width={"100%"}
        height={"80px"}
        justifyContent={"space-between"}
        ref={containerRef}
        alignItems={"center"}
        padding={"15px 20px"}
        position={"sticky"}
        backgroundColor={"white"}
        zIndex={"100"}
        top={"0"}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Box width={"20vw"} height={"100%"} position={"relative"}>
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
        <Image
          src={menu}
          alt=""
          width={20}
          height={20}
          style={{ cursor: "pointer" }}
          onClick={() => setShowNav((input) => !input)}
        />
        <Slide in={showNav} container={containerRef.current}>
          <Stack
            position={"absolute"}
            backgroundColor={"white"}
            padding={"20px"}
            sx={{
              borderTop: "0.5px solid #2D2D2D",
              top: "100%",
              zIndex: "-20",
              left: "0",
              width: "100%",
              zIndex: "0",
            }}
          >
            {navData.map((el, i) => {
              return (
                <Box fontWeight={"bold"} marginBottom={"20px"}>
                  {el.name}
                </Box>
              );
            })}
          </Stack>
        </Slide>
      </Box>
    </>
  );
}
