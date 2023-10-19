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
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ListAltIcon from "@mui/icons-material/ListAlt";
import router, { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";

const listIcons = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Point of Sale",
    icon: <PointOfSaleOutlinedIcon />,
    href: "/pos",
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
    icon: <RequestQuoteIcon />,
    href: "/payments",
  },
];

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <main className={`min-h-screen bg-white`}>
      <AppBar className="flex flex-row items-center justify-between bg-red-600">
        <div className="flex flex-row items-center w-full">
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
          <h2>Gym Administration System</h2>
        </div>

        <div className="flex flex-row items-center justify-end w-1/4 h-12 mr-10">
          <h4 className="text-white">Administrator</h4>
        </div>
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
        <IconButton
          className="rounded-none h-12"
          onClick={() => setOpen(!open)}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Divider />

        <List>
          {listIcons.map(({ name, icon, href }, index) => (
            <Link
              className={
                router.pathname === href
                  ? "block bg-red-600 text-white"
                  : "text-gray-600"
              }
              href={href}
              key={index}
              onClick={() => setOpen(!open)}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    className={
                      router.pathname === href ? "text-white" : "text-gray-600"
                    }
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <IconButton
          className="text-sm rounded-none h-12"
          onClick={() => setOpen(!open)}
        >
          <LogoutIcon /> Log Out
        </IconButton>

        <Divider />
      </Drawer>
    </main>
  );
};

export default CommonLayout;
