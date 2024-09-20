import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";

export default function Map() {
  return (
    <Stack margin={{xll:"100px 0 0 0",md:"100px 0 0 0",sm:"150px 0 0 0"}}>
      <Typography fontSize={{xll:"2.5rem",xl:"2.3rem",lg:"2rem", md:"1.8rem",sm:"1.5rem"}} textAlign={"center"} fontWeight={"bold"}>
        We'd Love To Hear From You
      </Typography>
      <Typography color={"#F8575A"} textAlign={"center"}>
        We Have Offices And Teams All Around The World.
      </Typography>
      <Box
        width={"100%"}
        margin={{xll:"45px 0",xl:"30px 0",lg:"40px 0", md:"30px 0", smm:"25px 0", sm:"0px 0"}}
        height={{xll:"70vh",md:"50vh",sm:"34vh"}}
        sx={{
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></Box>
    </Stack>
  );
}
