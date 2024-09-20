import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";

export default function Map() {
  return (
    <Stack margin={{ md: "100px 0", xs: "50px 30px" }}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        textAlign={"center"}
        width={{ md: "100%", xs: "70%" }}
        margin={"0 auto"}
        fontWeight={"bold"}
      >
        We'd Love To Hear From You
      </Typography>
      <Typography
        fontSize={{ md: "1rem", xs: "0.9rem" }}
        color={"#F8575A"}
        textAlign={"center"}
      >
        We Have Offices And Teams All Around The World.
      </Typography>
      <Box
        width={"100%"}
        height={"70vh"}
        sx={{
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          margin: "40px 0",
        }}
      ></Box>
    </Stack>
  );
}
