import React, { useState } from "react";
import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import memo from "../../../assets/icons/icon_memo.svg";
import info from "../../../assets/icons/icon_info.svg";
import challenge from "../../../assets/icons/icon_challenge.svg";
import Logo from "../../../assets/logos/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../../constants/links";
import SVG from "react-inlinesvg";
import { colors } from "../../../theme/schemes/PureLightTheme";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  LogoImage: {
    width: 100,
  },
}));

const pages = [
  {
    icon: memo,
    label: "自分の記録",
    pathName: links.MY_RECORD,
  },
  {
    icon: challenge,
    label: "チャレンジ",
  },
  {
    icon: info,
    label: "お知らせ",
  },
];
const settings = [
  { label: "自分の記録", pathName: links.MY_RECORD },
  { label: "体重グラフ" },
  { label: "目標" },
  { label: "選択中のコース" },
  { label: "コラム一覧", pathName: links.COLUMN },
  { label: "設定" },
];

const Header = (): JSX.Element => {
  const classes = useStyles();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isOpenWatchListMenu, setIsOpenWatchListMenu] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false} sx={{ paddingX: "10% !important", background: colors.alpha.black[100] }}>
        <Toolbar disableGutters>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h6" noWrap>
                <Link to="/top-page">
                  <img className={classes.LogoImage} src={Logo} alt="" />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
                {pages.map((page) => {
                  return (
                    <NavLink key={page.pathName} to={page.pathName ? page.pathName : "#"}>
                      <Box display="flex" alignItems={"center"}>
                        <SVG src={page.icon as string} />
                        <Button sx={{ my: 2, color: "white", display: "block" }}>{page.label}</Button>
                      </Box>
                    </NavLink>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box sx={{ flexGrow: 0, display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  sx={{ color: colors.alpha.orange[100] }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  sx={{
                    mt: "45px",
                    "& .MuiPaper-root": {
                      "& .MuiList-root": {
                        background: colors.alpha.gray[100],
                        "& .MuiMenuItem-root": {
                          color: colors.alpha.white[100],
                        },
                      },
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem key={index}>
                      <NavLink key={setting.pathName} to={setting.pathName ? setting.pathName : "#"}>
                        <Typography color={"white"} textAlign="center">
                          {setting.label ?? ""}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={isOpenWatchListMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(isOpenWatchListMenu)}
                  onClose={() => setIsOpenWatchListMenu(null)}
                ></Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
