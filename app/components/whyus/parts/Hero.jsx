import { Stack, Typography } from "@mui/material";
import banner from "./assets/banner.png";

export default function Hero() {
  return (
    <Stack
      width={"100%"}
      height={"90vh"}
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
        <Typography fontSize={"3rem"} fontWeight={"bold"}>
          Why us
        </Typography>
        <Typography width={"35%"} textAlign={"center"}>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s.
        </Typography>
        <hr style={{ width: "30%", heigth: "1px", marginTop: "20px" }} />
      </Stack>
    </Stack>
  );
}
