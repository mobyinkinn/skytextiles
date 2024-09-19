"use client";

import { Box, Stack, Typography } from "@mui/material";
import { data } from "./strengthData";
import Image from "next/image";

export default function Strength() {
  return (
    <Stack
      margin={"50px 0"}
      padding={"70px 70px"}
      gap={"50px"}
      backgroundColor={"#f9f9f9"}
    >
      <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
        Highlights
      </Typography>
      <Stack
        direction={"row"}
        gap={"60px"}
        sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        {data.map((el) => {
          return (
            <Stack width={"25%"} gap={"15px"}>
              <Image src={el.img} alt="" width={100} height={90} />
              <Typography color={"#FB5457"} fontSize={"1.8rem"}>
                {el.head}
              </Typography>
              <Typography fontSize={"1.2rem"}>{el.data}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
