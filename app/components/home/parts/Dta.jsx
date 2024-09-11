import { Box, Stack, Typography } from "@mui/material";
import wool from "./assets/wool.gif";
import Image from "next/image";

export default function Dta() {
  return (
    <Stack direction={"row"} alignItems={"center"} margin={"50px"} gap={"50px"}>
      <Box width={"50vw"} height={"60vh"} position={"relative"}>
        <Image src={wool} alt="" fill objectFit="contain" />
      </Box>
      <Stack>
        <Typography fontWeight={"bold"} fontSize={"4.5rem"} lineHeight={"1.2"}>
          Design
          <br />
          Transform
          <br />
          Accelerate
        </Typography>
        <Typography fontSize={"2rem"} marginTop={"10px"}>
          We Revolutionize User Experience <br /> Using Behavioural Science.
        </Typography>
      </Stack>
    </Stack>
  );
}
