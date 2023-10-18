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
import Panel from "@/components/home/Panel";
import Chart from "@/components/home/Chart";
import CommonLayout from "@/components/common/CommonLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <CommonLayout>
      <section className="min-h-screen max-h-screen flex">
        <Chart />
        <Panel />
      </section>
    </CommonLayout>
  );
}
