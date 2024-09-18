import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";

export default function Map() {
  return (
    <Stack margin={"100px 0"}>
      <Typography fontSize={"2.5rem"} textAlign={"center"} fontWeight={"bold"}>
        We'd Love To Hear From You
      </Typography>
      <Typography color={"#F8575A"} textAlign={"center"}>
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
