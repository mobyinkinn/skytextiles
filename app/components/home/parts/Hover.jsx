"use client";

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import img5 from "@/app/components/home/parts/assets/team.png";
import img4 from "@/app/components/home/parts/assets/team2.png";
import img3 from "@/app/components/home/parts/assets/team3.png";

import image1 from "@/app/components/home/parts/assets/hoverImages/Image1.png";
import image2 from "@/app/components/home/parts/assets/hoverImages/Image2.png";
import image3 from "@/app/components/home/parts/assets/hoverImages/Image3.png";
import image5 from "@/app/components/home/parts/assets/hoverImages/Image5.png";
import image6 from "@/app/components/home/parts/assets/hoverImages/Image6.png";
import image7 from "@/app/components/home/parts/assets/hoverImages/Image7.png";
import image8 from "@/app/components/home/parts/assets/hoverImages/Image8.png";
import image9 from "@/app/components/home/parts/assets/hoverImages/Image9.png";
import image11 from "@/app/components/home/parts/assets/hoverImages/Image11.png";
import image10 from "@/app/components/home/parts/assets/hoverImages/Image10.png";

const coverAnimation = {
  position: "relative",
  ":hover .cover-image": {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Show the hover image on hover
    zIndex: 10,
  },

  "& .cover-image": {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
    transition: "clip-path 0.5s ease", // Smooth transition for hover image
  },
};
const cover = {
  "& .cover-image": {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
    transition: "clip-path 0.5s ease", // Smooth transition for hover image
  },
};

const coverImages = [
  { id: 0, img: img5 },
  { id: 1, img: img4 },
  { id: 2, img: img3 },
];

const hoverImages = [
  image1,
  image2,
  image3,
  image5,
  image6,
  image7,
  image8,
  image9,
  image1,
  image9,
  image10,
  image11,
  image7,
  image5,
  image3,
];

const images = [
  { id: 0, img: image1 },
  { id: 1, img: image2 },
  { id: 2, img: image3 },
  { id: 3, img: image5 },
  { id: 4, img: image6 },
  { id: 5, img: image7 },
  { id: 6, img: image8 },
  { id: 7, img: image9 },
  { id: 8, img: image1 },
  { id: 9, img: image9 },
  { id: 10, img: image10 },
  { id: 11, img: image11 },
  { id: 11, img: image7 },
  { id: 11, img: image5 },
  { id: 11, img: image3 },
];

const Hover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function setHover(event) {
    let e = event.target.alt;
    let i = e % 3;
    setCurrentImage(i);
    setIsHovered(true);
  }

  return (
    <Stack>
      <Typography fontSize={"2.5rem"} fontWeight={"bold"} textAlign={"center"}>
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
                width: 150,
                height: 150,
                position: "relative",
                overflow: "hidden",
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
                  transition: "clip-path 0.5s ease", // Smooth transition for hover image
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
                // width={100}
                // height={100}
                fill
                objectFit="contain"
                className="original-image"
              />

              {/* Hover Image */}
              <Image
                src={hoverImages[index]}
                alt={`Hover Logo ${index + 1}`}
                // width={150}
                // height={150}
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
