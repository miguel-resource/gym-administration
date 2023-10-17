import { Inter } from "next/font/google";
import AppBar from "@mui/material/AppBar";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import Link from "next/link";
import Panel from "@/components/home/Panel";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const listIcons = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
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

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`flex min-h-screen flex-col  justify-between  bg-red-500`}>
      <AppBar className="bg-red-500  flex flex-row items-center">
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

      <Panel />

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
            <Link href={href} key={index}>
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
}
