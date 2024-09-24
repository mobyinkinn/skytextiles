"use client";

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import img1 from "@/app/components/home/parts/assets/coverImages/image1.jpeg";
import img2 from "@/app/components/home/parts/assets/coverImages/image2.jpg";
import img3 from "@/app/components/home/parts/assets/coverImages/image3.jpg";
import img4 from "@/app/components/home/parts/assets/coverImages/image4.jpg";
import img5 from "@/app/components/home/parts/assets/coverImages/image5.jpg";
import img6 from "@/app/components/home/parts/assets/coverImages/image6.jpg";
import img7 from "@/app/components/home/parts/assets/coverImages/image7.jpg";
import img8 from "@/app/components/home/parts/assets/coverImages/image8.jpg";
import img9 from "@/app/components/home/parts/assets/coverImages/image9.jpg";
import img10 from "@/app/components/home/parts/assets/coverImages/image10.jpg";
import img11 from "@/app/components/home/parts/assets/coverImages/image11.jpg";

import image1 from "@/app/components/home/parts/assets/hoverImages/Image1.jpg";
import image2 from "@/app/components/home/parts/assets/hoverImages/Image2.jpg";
import image3 from "@/app/components/home/parts/assets/hoverImages/Image3.jpg";
import image5 from "@/app/components/home/parts/assets/hoverImages/Image5.jpg";
import image6 from "@/app/components/home/parts/assets/hoverImages/Image6.jpg";
import image7 from "@/app/components/home/parts/assets/hoverImages/Image7.jpg";
import image8 from "@/app/components/home/parts/assets/hoverImages/Image8.jpg";
import image9 from "@/app/components/home/parts/assets/hoverImages/Image9.jpg";
import image11 from "@/app/components/home/parts/assets/hoverImages/Image11.jpg";
import image10 from "@/app/components/home/parts/assets/hoverImages/Image10.jpg";
import image4 from "@/app/components/home/parts/assets/hoverImages/Image4.jpg";

const coverAnimation = {
  position: "relative",
  ":hover .cover-image": {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Show the hover image on hover

    zIndex: 10,
  },

  "& .cover-image": {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
    transition: "clip-path 1s ease", // Smooth transition for hover image
    transitionDelay: "0.2s",
  },
};
const cover = {
  "& .cover-image": {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
    // transition: "clip-path 0.3s ease", // Smooth transition for hover image
  },
};

const coverImages = [
  { id: 0, img: img1 },
  { id: 1, img: img2 },
  { id: 2, img: img3 },
  { id: 3, img: img4 },
  { id: 4, img: img5 },
  { id: 5, img: img6 },
  { id: 6, img: img7 },
  { id: 7, img: img8 },
  { id: 8, img: img9 },
  { id: 9, img: img10 },
  { id: 10, img: img11 },
];

const hoverImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image1,
  image2,
  image3,
  image4,
];

const images = [
  { id: 0, img: image1 },
  { id: 1, img: image2 },
  { id: 2, img: image3 },
  { id: 3, img: image4 },
  { id: 4, img: image5 },
  { id: 5, img: image6 },
  { id: 6, img: image7 },
  { id: 7, img: image8 },
  { id: 8, img: image9 },
  { id: 9, img: image10 },
  { id: 10, img: image11 },
  { id: 11, img: image1 },
  { id: 12, img: image2 },
  { id: 13, img: image3 },
  { id: 14, img: image4 },
];

const Hover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  function setHover(event) {
    let e = event.target.alt;
    console.log(e);
    if (e) {
      let i = (e - 1) % 11;
      setCurrentImage(i);
      setIsHovered(true);
    } else {
      setCurrentImage(0);
    }
  }

  return (
    <Stack margin={"50px 0 0 0"}>
      <Typography
        marginBottom={"20px"}
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
      >
        We work with
      </Typography>
      <Stack
        justifyContent="space-between"
        width={"80%"}
        direction={"row"}
        flexWrap={"wrap"}
        sx={isHovered ? coverAnimation : cover}
        margin={"0 auto"}
      >
        {images.map((logo, index) => (
          <Box
            key={index}
            width={"17%"}
            sx={{ position: "relative", overflow: "hidden" }}
          >
            <Box
              onMouseEnter={(e) => setHover(e)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                height: { md: "150px", smm: "100px", xs: "50px" },
                position: "relative",
                overflow: "hidden",
                border: "2px solid #2d2d2d",
                // borderRadius: "10px",
                margin: "5px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Scale the box slightly for emphasis on hover
                  zIndex: 1000,
                },
                "&:hover .hover-image": {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Show the hover image on hover
                },

                "& .hover-image": {
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
                  transition: "clip-path 1s ease", // Smooth transition for hover image
                },
                "& .original-image": {
                  transition: "0.5s ease", // Smooth transition for the original image
                },
                "&:hover .original-image": {
                  display: "none",
                },
              }}
            >
              {/* Original Image */}
              <Image
                src={logo.img}
                alt={`${index + 1}`}
                fill
                objectFit="contain"
                className="original-image"
              />

              {/* Hover Image */}
              <Image
                src={hoverImages[index]}
                alt={`${index + 1}`}
                fill
                objectFit="cover"
                className="hover-image"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </Box>
          </Box>
        ))}
        <Image
          src={coverImages[currentImage].img}
          alt=""
          fill
          objectFit={"cover"}
          objectPosition="top"
          // style={isHovered ? coverStyleHover : coverStyle}
          className="cover-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Hover;
