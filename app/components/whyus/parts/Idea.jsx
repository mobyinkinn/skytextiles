"use client";

import { Box, Stack, Typography } from "@mui/material";
import idea from "./assets/Idea.png";
import research from "./assets/Research.png";
import team from "./assets/Team.png";
import Image from "next/image";
import { useState } from "react";

export default function Idea() {
  const [showIdea, setShowIdea] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  return (
    <Stack alignItems={"center"} sx={{ marginBottom: "100px" }}>
      <Typography
        sx={{
          marginBottom: "50px",
        }}
        fontSize={"2.5rem"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Idea. Research. Teamwork.
      </Typography>
      <Stack direction={"row"} gap="50px">
        <Box position={"relative"}>
          <Image
            src={idea}
            alt=""
            width={200}
            height={200}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setShowIdea(true)}
            onMouseLeave={() => setShowIdea(false)}
          />
          {showIdea && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                right: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                IDEA
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Stack>
          )}
        </Box>
        <Box position={"relative"}>
          <Image
            src={research}
            onMouseEnter={() => setShowResearch(true)}
            onMouseLeave={() => setShowResearch(false)}
            alt=""
            style={{ cursor: "pointer" }}
            width={200}
            height={200}
          />
          {showResearch && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                left: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                RESEARCH
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
      <Stack>
        <Box position={"relative"}>
          <Image
            src={team}
            style={{ cursor: "pointer" }}
            alt=""
            width={200}
            onMouseEnter={() => setShowTeam(true)}
            onMouseLeave={() => setShowTeam(false)}
            height={200}
          />
          {showTeam && (
            <Stack
              position={"absolute"}
              width={"300px"}
              justifyContent={"center"}
              sx={{
                boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
                left: "120%",
                top: "40px",
              }}
              borderRadius={"15px"}
              padding={"20px 30px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"1.6rem"}
                textAlign={"center"}
              >
                TEAMWORK
              </Typography>
              <Typography textAlign={"center"} fontSize={"0.7rem"}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
