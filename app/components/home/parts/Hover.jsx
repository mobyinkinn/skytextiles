// import React from 'react'

// const Hover = () => {
//   return (
//     <div>Hover</div>
//   )
// }

// export default Hover



// import React from "react";
// import { Box, Grid } from "@mui/material";
// import Image from "next/image";
// import img from "@/app/components/home/parts/assets/a-random-logo.png";
// import img3 from "@/app/components/home/parts/assets/a-random-logo2.png";
// import img4 from "@/app/components/home/parts/assets/a-random-logo3.png";

// const Hover = () => {
//     const images = [
//       { id: 0, img: img },
//       { id: 1, img: img3 },
//       { id: 2, img: img4 },
//       { id: 3, img: img },
//       { id: 4, img: img3 },
//       { id: 5, img: img4 },
//       { id: 6, img: img },
//       { id: 7, img: img3 },
//       { id: 8, img: img4 },
//       { id: 9, img: img },
//       { id: 10, img: img3 },
//       { id: 11, img: img4 },
//     ];
//   return (
//     <Box sx={{ flexGrow: 1, padding: 2 }}>
//       <Grid container spacing={2}>
//         {images.map((image, index) => (
//           <Grid item xs={4} key={index}>
//             <Box
//               sx={{
//                 border: "1px solid #ccc",
//                 overflow: "hidden",
//               }}
//             >
//               <Image
//                 src={img}
//                 alt={`Image ${index + 1}`}
//                 width={100}
//                 height={100}
//               />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Hover;


// import React from "react";
// import { Grid, Box } from "@mui/material";
// import Image from "next/image";
// import img from "@/app/components/home/parts/assets/a-random-logo.png";
// import img3 from "@/app/components/home/parts/assets/a-random-logo2.png";
// import img4 from "@/app/components/home/parts/assets/a-random-logo3.png";
//     const images = [
//       { id: 0, img: img },
//       { id: 1, img: img3 },
//       { id: 2, img: img4 },
//       { id: 3, img: img },
//       { id: 4, img: img3 },
//       { id: 5, img: img4 },
//       { id: 6, img: img },
//       { id: 7, img: img3 },
//       { id: 8, img: img4 },
//       { id: 9, img: img },
//       { id: 10, img: img3 },
//       { id: 11, img: img4 },
//     ];

// const Hover = () => {
//   return (
//     <Grid container spacing={3} justifyContent="center" width={"50%"}>
//       {images.map((logo, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Box
//             sx={{
//               width: 150,
//               height: 150,
//               border: "1px solid #ccc",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               backgroundColor: "#fff",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Image
//               src={logo.img}
//               alt={`Logo ${index + 1}`}
//               width={100}
//               height={100}
//               objectFit="contain"
//             />
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Hover;

// import React from "react";
// import { Grid, Box, Stack } from "@mui/material";
// import Image from "next/image";
// import img from "@/app/components/home/parts/assets/a-random-logo.png";
// import img3 from "@/app/components/home/parts/assets/a-random-logo2.png";
// import img4 from "@/app/components/home/parts/assets/a-random-logo3.png";
// import img5 from "@/app/components/home/parts/assets/team.png";

// const hoverImages = [
//   img5,
//   img, 
//   img3, 
//   img4,
//   img,
//   img3,
//   img4,
//   img,
//   img3,
//   img4,
//   img,
//   img3,
// ];

// const images = [
//   { id: 0, img: img },
//   { id: 1, img: img3 },
//   { id: 2, img: img4 },
//   { id: 3, img: img },
//   { id: 4, img: img3 },
//   { id: 5, img: img4 },
//   { id: 6, img: img },
//   { id: 7, img3 },
//   { id: 8, img: img4 },
//   { id: 9, img: img },
//   { id: 10, img: img3 },
//   { id: 11, img: img4 },
// ];

// const Hover = () => {
//   return (
//     <Stack justifyContent="center" width={"50%"} direction={"row"} flexWrap={"wrap"}>
//       {images.map((logo, index) => (
//         <Box width={"30%"}>
//           <Box
//             sx={{
//               width: 150,
//               height: 150,
//               border: "1px solid #ccc",
//               position: "relative",
//               overflow: "hidden",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               backgroundColor: "#fff",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               "&:hover .hover-image": {
//                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Show the hover image on hover
//               },
//               "& .hover-image": {
//                 clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
//                 transition: "clip-path 0.5s ease", // Smooth transition for hover image
//               },
//               "& .original-image": {
//                 transition: "0.5s ease", // Smooth transition for the original image
//               },
//             }}
//           >
//             {/* Original Image */}
//             <Image
//               src={logo.img}
//               alt={`Logo ${index + 1}`}
//               width={100}
//               height={100}
//               objectFit="contain"
//               className="original-image"
//             />

//             {/* Hover Image */}
//             <Image
//               src={hoverImages[index]}
//               alt={`Hover Logo ${index + 1}`}
//               width={100}
//               height={100}
//               objectFit="contain"
//               className="hover-image"
//               style={{
//                 position: "absolute",
//               }}
//             />
//           </Box>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Hover;




import React from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import img from "@/app/components/home/parts/assets/a-random-logo.png";
import img3 from "@/app/components/home/parts/assets/a-random-logo2.png";
import img4 from "@/app/components/home/parts/assets/a-random-logo3.png";
import img5 from "@/app/components/home/parts/assets/team.png";

const hoverImages = [
  img5,
  img,
  img3,
  img4,
  img,
  img3,
  img4,
  img,
  img3,
  img4,
  img,
  img3,
];

const images = [
  { id: 0, img: img },
  { id: 1, img: img3 },
  { id: 2, img: img4 },
  { id: 3, img: img },
  { id: 4, img: img3 },
  { id: 5, img: img4 },
  { id: 6, img: img },
  { id: 7, img3 },
  { id: 8, img: img4 },
  { id: 9, img: img },
  { id: 10, img: img3 },
  { id: 11, img: img4 },
];

const Hover = () => {
  return (
    <Stack
      justifyContent="center"
      width={"50%"}
      direction={"row"}
      flexWrap={"wrap"}
    >
      {images.map((logo, index) => (
        <Box
          key={index}
          width={"30%"}
          sx={{ position: "relative", overflow: "hidden", margin: "10px" }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)", // Scale the box slightly for emphasis on hover
              },
              "&:hover .hover-image": {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Show the hover image on hover
              },
              "& .hover-image": {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Initially hide the hover image
                transition: "clip-path 0.5s ease", // Smooth transition for hover image
              },
              "& .original-image": {
                transition: "0.5s ease", // Smooth transition for the original image
              },
            }}
          >
            {/* Original Image */}
            <Image
              src={logo.img}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              objectFit="contain"
              className="original-image"
            />

            {/* Hover Image */}
            <Image
              src={hoverImages[index]}
              alt={`Hover Logo ${index + 1}`}
              width={150}
              height={150}
              objectFit="contain"
              className="hover-image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Hover;
