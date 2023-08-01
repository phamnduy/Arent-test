import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { colors } from "../../../theme/schemes/PureLightTheme";

const footerLink = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];
export const Footer = () => {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        background: colors.alpha.black[100],
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth={false} sx={{ paddingX: "10% !important", marginY: "50px" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          {/* <Box display={"flex"} justifyContent={"space-around"}> */}
          {footerLink.map((text: string, index: number) => {
            return (
              <Typography
                variant="caption"
                color="initial"
                key={index}
                sx={{ marginRight: 5, color: colors.alpha.white[100] }}
              >
                {text}
              </Typography>
            );
          })}
        </Box>
        {/* </Box> */}
      </Container>
    </Paper>
  );
};
