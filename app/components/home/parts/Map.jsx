import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/map.gif";
import Image from "next/image";

export default function () {
  return (
    <Stack margin={"200px 0 0 0"}>
      <Typography
        sx={{ fontSize: "2.5rem", textAlign: "center", fontWeight: "bold" }}
      >
        260+ Projects Delivered
      </Typography>
      <Typography
        sx={{
          color: "#D88684",
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        and counting more...
      </Typography>
      <Box position={"relative"} width={"100%"} height={"80vh"}>
        <Image src={map} alt="" fill objectFit="contain" />
      </Box>
    </Stack>
  );
}
