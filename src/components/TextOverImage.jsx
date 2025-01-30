import React from "react";
import { Box, Typography } from "@mui/material";

const TextOverImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500, // Adjust size as needed
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src="https://th.bing.com/th/id/OIP.eTOpV2CVtM8i_kJgkVAt9gHaE8?w=2700&h=1803&rs=1&pid=ImgDetMain"
        alt="Background"
        style={{ width: "100%", display: "block" }}
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Overlay Text
        </Typography>
      </Box>
    </Box>
  );
};

export default TextOverImage;
