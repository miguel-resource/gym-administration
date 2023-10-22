import {
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { Label } from "@mui/icons-material";

const SubscriptionSection = () => {
  const [valueChange, setValueChange] = useState("");

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <form
        className="flex flex-col gap-10 items-center justify-center w-full h-full mt-20 p-20"
        action=""
      >
        <FormControl>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[{ label: "The Shawshank Redemption" }]}
            sx={{ width: "50rem" }}
            renderInput={(params) => <TextField {...params} label="Socio" />}
            onChange={(e: any) => setValueChange(e.target.value)}
          />
        </FormControl>

        {valueChange !== "" ? (
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Método de pago
            </InputLabel>
            <Select
              className="w-80"
              labelId="demo-simple-select-label"
              label="Método de pago"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Efectivo</MenuItem>
              <MenuItem value={20}>Transferencia</MenuItem>
            </Select>
          </FormControl>
        ) : null}

        {valueChange !== "" ? (
          <FormControl>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              disabled
              value={300}
            />
          </FormControl>
        ) : null}

        {valueChange !== "" ? (
          <div className="flex items-center gap-3 justify-center bg-opacity-80 px-6 py-3 text-base font-medium text-white bg-orange-400 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <CardMembershipIcon />
            Mensual
          </div>
        ) : null}

        <button
          type="button"
          disabled={valueChange === ""}
          className={
            valueChange === ""
              ? "flex items-center gap-3 justify-center w-1/3 bg-opacity-80 px-6 py-3 text-base font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              : "flex items-center gap-3 justify-center w-1/3 px-6 py-3 text-base font-medium text-white bg-green-800 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          }
        >
          <span>Pagar</span>
        </button>
      </form>
    </section>
  );
};

export default SubscriptionSection;
