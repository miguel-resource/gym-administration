import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import ListAltIcon from "@mui/icons-material/ListAlt";

const listIcons = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Inventory",
    icon: <ListAltIcon />,
    href: "/inventory",
  },
  {
    name: "Customers",
    icon: <RememberMeOutlinedIcon />,
    href: "/customers",
  },
  {
    name: "Subscriptions",
    icon: <CreditCardRoundedIcon />,
    href: "/subscriptions",
  },
  {
    name: "Payments",
    icon: <PointOfSaleOutlinedIcon />,
    href: "/payments",
  },
];

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <main className={`min-h-screen bg-white`}>
      <AppBar className="flex flex-row items-center justify-start bg-red-600">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <h2>Gym Titanium Administration System</h2>
      </AppBar>

      {children}

      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 200,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <IconButton onClick={() => setOpen(!open)}>
          <ArrowBackIosIcon />
        </IconButton>
        <Divider />

        <List>
          {listIcons.map(({ name, icon, href }, index) => (
            <Link href={href} key={index} onClick={() => setOpen(!open)}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </main>
  );
};

export default CommonLayout;
