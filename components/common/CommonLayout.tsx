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
import { CartProvider } from "react-use-cart";
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
import BoyIcon from "@mui/icons-material/Boy";
import PersonIcon from "@mui/icons-material/Person";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const listIcons = [
    {
      name: "Home",
      icon: (
        <HomeIcon
          className={router.pathname === "/" ? "text-white" : "text-gray-600"}
        />
      ),
      href: "/",
    },
    {
      name: "Point of Sale",
      icon: (
        <PointOfSaleOutlinedIcon
          className={
            router.pathname === "/pos" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/pos",
    },
    {
      name: "Users",
      icon: (
        <PersonIcon
          className={
            router.pathname === "/users" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/users",
    },
    {
      name: "Roles",
      icon: (
        <BoyIcon
          className={
            router.pathname === "/roles" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/roles",
    },
    {
      name: "Inventory",
      icon: (
        <ListAltIcon
          className={
            router.pathname === "/inventory" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/inventory",
    },
    {
      name: "Customers",
      icon: (
        <RememberMeOutlinedIcon
          className={
            router.pathname === "/customers" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/customers",
    },
    {
      name: "Subscriptions",
      icon: (
        <CreditCardRoundedIcon
          className={
            router.pathname === "/subscriptions"
              ? "text-white"
              : "text-gray-600"
          }
        />
      ),
      href: "/subscriptions",
    },
    {
      name: "Payments",
      icon: (
        <RequestQuoteIcon
          className={
            router.pathname === "/payments" ? "text-white" : "text-gray-600"
          }
        />
      ),
      href: "/payments",
    },
  ];
  return (
    <main className={`min-h-screen bg-white`}>
      <CartProvider>
        <AppBar
          color="error"
          className="flex flex-row items-center justify-between"
        >
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
              <h2>
                Gym Administration System :{" "}
                <span className="text-gray-100 font-bold">Administrator</span>
              </h2>
            </Toolbar>
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
            sx={{
              borderRadius: "0",
            }}
            className=" h-12"
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
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>

          <Link
            href="/login"
            className="h-12 flex flex-row items-center justify-center hover:text-red-400 hover:bg-red-100"
            onClick={() => setOpen(!open)}
          >
            <LogoutIcon /> Log Out
          </Link>

          <Divider />
        </Drawer>
      </CartProvider>
    </main>
  );
};

export default CommonLayout;
