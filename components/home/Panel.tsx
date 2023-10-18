import {
  Box,
  Card,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpIcon from "@mui/icons-material/Help";
const Panel = () => {
  return (
    <Box
      sx={{ flexGrow: 1, p: 3 }}
      className="flex justify-center items-center"
    >
      <ul className="flex flex-wrap justify-center items-center gap-10">
        <li>
          <Card
            sx={{
              display: "flex",
              borderRadius: "10px",
              border: "0.7px solid #f87171",
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#c2233b",
              }}
              className="flex justify-center items-center"
            >
              <PersonIcon sx={{ width: 100, height: 100 }} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  className="text-red-800  text-center"
                >
                  Customers registered
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  className="text-center flex justify-center items-center text-gray-700"
                >
                  1,024
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </li>
        <li>
          <Card
            sx={{
              display: "flex",
              borderRadius: "10px",
              border: "0.7px solid #f87171",
              backgroundColor: "transparent",
              paddingX: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#c2233b",
              }}
              className="flex justify-center items-center"
            >
              <CreditCardIcon sx={{ width: 100, height: 100 }} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  className="text-red-800  text-center"
                >
                  Active subscriptions
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  className="text-center flex justify-center items-center text-gray-700"
                >
                  1,024
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </li>
        <li>
          <Card
            sx={{
              display: "flex",
              color: "#f87171",
              borderRadius: "10px",
              border: "0.7px solid #f87171",
              backgroundColor: "transparent",
              paddingX: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#c2233b",
              }}
              className="flex justify-center items-center"
            >
              <PersonIcon sx={{ width: 100, height: 100 }} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  className="text-red-800  text-center"
                >
                  Total payments{" "}
                  <Tooltip
                    title="Total payments in this month"  
                    placement="top"
                    arrow
                  >
                    <HelpIcon className="text-base" />
                  </Tooltip>
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  className="text-center flex justify-center items-center text-gray-700"
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(100000)}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </li>
      </ul>
    </Box>
  );
};

export default Panel;
