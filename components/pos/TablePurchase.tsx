import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useCart } from "react-use-cart";

type Props = {
  rows?: any[];
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
};

const TablePurchase = ({ rows, openModal, setOpenModal }: Props) => {
  const { items } = useCart();

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <section className="mx-auto mt-20 space-x-4 mb-24">

      {items.length > 0 ? (
      <DataGrid
        onCellEditStop={(e) => console.log(e)}
        columns={[
          { field: "name", headerName: "Name", width: 300 },
          {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
          },
          {
            field: "price",
            headerName: "Price",
            width: 150,
            renderCell: (params) => {
              return `${
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(params.value)
              }`;
            }
          },
          {
            field: "action",
            headerName: "",
            sortable: false,
            width: 160,
            renderCell: () => (
              <>
                <IconButton
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  {/* <DeleteIcon className="text-red-500" /> */}
                </IconButton>
              </>
            ),
          },
        ]}
        rows={items}
        sx={{
          maxHeight: "80vh",
          display: "flex",
          justifyContent: "center",
        }}
        className="p-1"
      />
      ): null}
    </section>
  );
};

export default TablePurchase;
