import { Box, Stack, Typography } from "@mui/material";
import client from "./assets/client1.png";

export default function Collage() {
  return (
    <Stack
      gap={"50px"}
      margin={{ md: "100px 70px 0 70px", xs: "50px 30px 0 30px" }}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Here are some of our Clients
      </Typography>
      <Stack gap={"30px"}>
        <Stack
          flexWrap={"wrap"}
          direction={{ md: "row", xs: "column" }}
          justifyContent={"center"}
          gap="20px"
        >
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={{ md: "30%", xs: "100%" }}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
