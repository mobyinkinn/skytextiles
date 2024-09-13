import { Stack, Typography } from "@mui/material";

export default function Pdt() {
  return (
    <Stack margin={"100px 70px"} gap={"10px"}>
      <Typography fontSize={"3rem"} fontWeight={"bold"}>
        Our <span style={{ color: "#FB5457" }}>Product</span>
      </Typography>
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Typography>
        Founded on October 2020, under the Companies Act of 2013 (CIN:
        U17299GJ2020PTC116984), SKY Textiles is headquartered in Gujarat B-105,
        Westgate Tower Unit 2,Nr. YMCA Club, S.G. HIGHWAY ,Makarba , AHMEDABAD-
        380015. Our facility is equipped with the latest technology, including
        27,360 spindles for producing high-quality cotton threads in a range of
        counts.
      </Typography>
    </Stack>
  );
}
