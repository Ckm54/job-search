import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { palleteColor } from "../themes/palleteColor";
import Logo from "../assets/logo_w_force.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box sx={{ borderTop: `1px solid ${palleteColor.secondary}` }}>
      <Container sx={{ padding: "10px 0" }}>
        <Box
          ml={{xs: 4, sm: 0}}
          component="div"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <img src={Logo} alt="logo" height={40} width="auto" />
          <Typography sx={{fontSize: {xs: '12px'}}}>&copy; {new Date().getFullYear()} | All rights reserved </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
