import { Box, Stack, Typography } from "@mui/material";
import img from "./assets/rnd.png";

export default function Rnd() {
  return (
    <Stack margin={"0 70px"} marginBottom={"150px"} gap={"10px"}>
      <Typography fontSize={"2.5rem"} fontWeight={"bold"} textAlign={"center"}>
        Research And Development
      </Typography>
      <Typography
        fontSize={"2.5rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        (R&D) Center
      </Typography>
      <Typography textAlign={"center"} width={"70vw"} margin={"0 auto"}>
        Innovation drives us forward, and our dedicated R&D centre plays a vital
        role in fostering breakthroughs in our industry. Our team of experienced
        researchers, designers, and engineers work tirelessly to develop new
        fabrics, textures, and patterns, staying at the forefront of market
        trends.
      </Typography>
      <Stack
        direction={"row"}
        gap={"40px"}
        justifyContent={"center"}
        marginTop={"50px"}
      >
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${img.src})`, backgroundSize: "cover" }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${img.src})`, backgroundSize: "cover" }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${img.src})`, backgroundSize: "cover" }}
        ></Box>
      </Stack>
    </Stack>
  );
}
