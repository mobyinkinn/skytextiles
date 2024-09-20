import { Stack, Typography } from "@mui/material";
import banner from "./assets/banner.png";

export default function Hero() {
  return (
    <Stack
      width={"100%"}
      height={{ lg: "80vh", smm: "50vh", xs: "30vh" }}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
      }}
    >
      <Stack
        color={"white"}
        width={"100%"}
        height={"100%"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          fontWeight={"bold"}
        >
          Why us
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: ".8rem" }}
          width={{ md: "35%", xs: "80%" }}
          textAlign={"center"}
        >
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s.
        </Typography>
        <hr style={{ width: "30%", height: "1px", marginTop: "20px" }} />
      </Stack>
    </Stack>
  );
}
