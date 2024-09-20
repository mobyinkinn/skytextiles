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
      <Stack direction={"row"} gap="50px" display={{ md: "flex", xs: "none" }}>
        <Box position={"relative"}>
          <Image
            src={idea}
            alt=""
            width={200}
            height={200}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setTimeout(() => setShowIdea(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowIdea(false), 200)}
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
            onMouseEnter={() => setTimeout(() => setShowResearch(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowResearch(false), 200)}
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
      <Stack display={{ md: "flex", xs: "none" }}>
        <Box position={"relative"}>
          <Image
            src={team}
            style={{ cursor: "pointer" }}
            alt=""
            width={200}
            onMouseEnter={() => setTimeout(() => setShowTeam(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowTeam(false), 200)}
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
      <Stack direction={"row"} gap="30px" display={{ md: "none", xs: "flex" }}>
        <Box position={"relative"}>
          <Image
            src={idea}
            alt=""
            width={100}
            height={100}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setTimeout(() => setShowIdea(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowIdea(false), 200)}
          />
          <Stack
            position={"absolute"}
            width={"100px"}
            justifyContent={"center"}
            sx={{
              boxShadow: "2px 3px 10px 5px rgba(0, 0, 0, 0.1)",
              right: "120%",
              top: "40px",
            }}
            borderRadius={"15px"}
            padding={"10px 10px"}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={"1rem"}
              textAlign={"center"}
            >
              IDEA
            </Typography>
            <Typography textAlign={"center"} fontSize={"0.4rem"}>
              It is a long established fact that a reader 6ill be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
          </Stack>
        </Box>
        <Box position={"relative"}>
          <Image
            src={research}
            onMouseEnter={() => setTimeout(() => setShowResearch(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowResearch(false), 200)}
            alt=""
            style={{ cursor: "pointer" }}
            width={100}
            height={100}
          />
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack display={{ md: "none", xs: "flex" }}>
        <Box position={"relative"}>
          <Image
            src={team}
            style={{ cursor: "pointer" }}
            alt=""
            width={100}
            onMouseEnter={() => setTimeout(() => setShowTeam(true), 200)}
            onMouseLeave={() => setTimeout(() => setShowTeam(false), 200)}
            height={100}
          />
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
