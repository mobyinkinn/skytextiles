import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import megan from "./assets/team.png";

export default function () {
  return (
    <Stack margin={"100px 0 0 0"}>
      <Typography
        sx={{ fontSize: "3rem", textAlign: "center", fontWeight: "bold" }}
      >
        Meet some of Our 80+
      </Typography>
      <Typography
        sx={{
          color: "#D88684",
          fontSize: "3rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Team Members
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"40px"}
        gap={"10px"}
      >
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={megan} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}> Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={megan} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={megan} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={megan} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
