import { Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Stack backgroundColor={"#FBFBFB"} height={"90vh"} width={"100%"}>
      <Typography
        fontSize={"3rem"}
        fontWeight={"bold"}
        textAlign={"center"}
        margin={"100px 0 10px 0"}
      >
        {" "}
        Clients{" "}
      </Typography>
      <Typography
        fontSize={"2rem"}
        width={"60vw"}
        textAlign={"center"}
        margin={"0 auto"}
      >
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
        Since The 1500s
      </Typography>
    </Stack>
  );
}
