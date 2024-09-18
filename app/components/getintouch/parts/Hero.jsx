import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import gmail from "./assets/Gmail.gif";

export default function Hero() {
  return (
    <Stack
      margin={"50px 70px"}
      justifyContent={"space-between"}
      direction={"row"}
    >
      <Stack>
        <Typography fontSize={"5rem"} fontWeight={"bold"}>
          Let's <br /> Create <br /> Experiences!
        </Typography>
        <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
          Let's talk.
        </Typography>
      </Stack>
      <Stack position={"relative"} width={"60%"}>
        <Image src={gmail} alt="" fill objectFit="contain" />
      </Stack>
    </Stack>
  );
}
