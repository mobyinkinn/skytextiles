import { Stack, Typography } from "@mui/material";
import girl from "./assets/wavingGirl.gif";
import Image from "next/image";

export default function Hero() {
  return (
    <Stack
      alignItems={"center"}
      backgroundColor={"#FBFBFB"}
      height={"90vh"}
      width={"100%"}
      overflow={"hidden"}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        margin={"30px 0 10px 0"}
      >
        Clients
      </Typography>
      <Typography
        fontSize={{ lg: "2rem", smm: "1.5rem", xs: "1.1rem" }}
        width={{ md: "60vw", xs: "80%" }}
        textAlign={"center"}
        margin={"0 auto"}
      >
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
        Since The 1500s
      </Typography>
      <Image src={girl} alt="" height={450} width={600} />
    </Stack>
  );
}
