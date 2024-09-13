import { Box, Stack, Typography } from "@mui/material";
import client from "./assets/client1.png";

export default function Collage() {
  return (
    <Stack gap={"50px"} margin={"100px 70px 0 70px"}>
      <Typography fontSize={"2rem"} fontWeight={"bold"} textAlign={"center"}>
        Here are some of our Clients
      </Typography>
      <Stack gap={"30px"}>
        <Stack direction={"row"} justifyContent={"center"} gap="20px">
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap="20px">
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            width={"30%"}
            height={"30vh"}
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${client.src})`,
              backgroundSize: "cover",
            }}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
