import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import gmail from "./assets/Gmail.gif";

export default function Hero() {
  return (
    <Stack
      margin={{xll:"50px 70px",sm:"15px 70px"}}
      justifyContent={"space-between"}
      direction={{md:"row", sm:"column"}}
    >
      <Stack>
        <Typography fontSize={{xl:"5rem", lg:"4rem", md:"2.3rem",smm:"2.5rem",sm:"2.2rem"}} fontWeight={"bold"}>
          Let's <br /> Create <br /> Experiences!
        </Typography>
        <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
          Let's talk.
        </Typography>
      </Stack>
      <Stack position={{md:"relative",sm:"static"}} width={"60%"}>
        <Image src={gmail} alt="" fill objectFit="contain" style={{top:"2%"}} />
      </Stack>
    </Stack>
  );
}
