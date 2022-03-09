import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import classes from "./Header.module.scss";
import logoImage from "../../assets/Images/logo.svg";

const pages = ["About me", "Relationship", "Requirements", "Users", "Sign Up"];

const Header = (props: any) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const { maxWidth } = props;
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth={maxWidth}>
        <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1 }} variant="h6" noWrap component="div">
            <img src={logoImage} alt="logoImage" />
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsOpenDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isOpenDrawer && (
              <>
                <Drawer
                  anchor="left"
                  open={isOpenDrawer}
                  onClose={() => setIsOpenDrawer(false)}
                >
                  <List>
                    <ListItem button className={classes.listItem}>
                      <img src={logoImage} alt="logoImage" />
                    </ListItem>
                    {pages.map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className={classes.buttonHeader}
                key={page}
                onClick={() => console.log("click item")}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
