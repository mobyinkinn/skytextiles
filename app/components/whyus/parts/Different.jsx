import { Stack, Typography } from "@mui/material";
import icon from "./assets/icon.png";
import Image from "next/image";

export default function Different() {
  return (
    <Stack backgroundColor={"#FF5256"} color={"white"} padding={"100px 70px"}>
      <Typography fontSize={"2.5rem"} textAlign={"center"} margin={"30px 0"}>
        What Make us Different
      </Typography>
      <Stack direction={{ md: "row", xs: "column" }} gap={"50px"}>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography fontSize={"2rem"} textAlign={"center"}>
            Lorem Ipsum is
          </Typography>
          <Typography textAlign={"center"}>
            orem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography fontSize={"2rem"} textAlign={"center"}>
            Lorem Ipsum is
          </Typography>
          <Typography textAlign={"center"}>
            orem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography fontSize={"2rem"} textAlign={"center"}>
            Lorem Ipsum is
          </Typography>
          <Typography textAlign={"center"}>
            orem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
