import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import Panel from "../home/Panel";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "react-use-cart";

type Props = {
  actions?: any[];
};

const ActionButtons = ({ actions }: Props) => {
  const { emptyCart } = useCart();

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      // slot="
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        "& .MuiFab-primary": {
          backgroundColor: "#F87171",
          "&:hover": {
            backgroundColor: "#FFB8B8",
          },
        },
      }}
      icon={
        <SpeedDialIcon
          sx={{ color: "white", "&:hover": { color: "#F87171" } }}
        />
      }
    >
      {actions ? (
        actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))
      ) : (
        <SpeedDialAction
          sx={{ backgroundColor: "#F87171" }}
          tooltipTitle="Delete all products"
          icon={
            <DeleteIcon
              sx={{
                color: "#F87171",
                "&:hover": { color: "#F87171" },
              }}
            />
          }
          onClick={() => {
            console.log("Delete all products");
            emptyCart();
          }}
        />
      )}
    </SpeedDial>
  );
};

export default ActionButtons;
