import { Box, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useCart } from "react-use-cart";

type Props = {
  columns: any[];
  rows?: any[];
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
};

const TableData = ({ columns, rows, openModal, setOpenModal }: Props) => {
  const { items } = useCart();

  return (
    <section className="mx-auto mt-20 space-x-4 mb-24">
    {rows && rows.length > 0 ? (
      <DataGrid
        onCellEditStop={(e) => console.log(e)}
        columns={columns}
        rows={rows ? rows : items}
        sx={{
          maxHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          
        }}
        className="p-1"
      />
  ) : null}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            borderRadius: "0.5rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "0.3px solid #000",
            boxShadow: 24,
            p: 3,
            px: 4,
          }}
        >
          <h2
            id="parent-modal-title"
            className="text-center text-2xl font-bold mb-3"
          >
            Delete
          </h2>
          <p
            id="parent-modal-description"
            className="text-center text-base font-normal mb-3"
          >
            Are you sure you want to delete this{" "}
            <span className="text-red-500 font-bold">
            {rows ? rows[0].name : "product"  }
            </span>
            ?
          </p>

          <div
            className="flex justify-center items-center gap-4"
            style={{ marginTop: "1rem" }}
          >
            <button
              className="text-gray-800 px-4 py-2 rounded-md mr-2"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default TableData;
