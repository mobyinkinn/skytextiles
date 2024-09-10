import { Box } from "@mui/material";
import hero from "./assets/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <Box width={"100%"} height={"90vh"} position={"relative"}>
      <Image src={hero} alt="" fill objectFit="cover" />
    </Box>
  );
}
