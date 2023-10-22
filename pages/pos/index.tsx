import CommonLayout from "@/components/common/CommonLayout";
import TableData from "@/components/common/TableData";
import Tabs from "@/components/pos/Tabs";
import { faker } from "@faker-js/faker";
import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { lazy, useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import DeleteIcon from "@mui/icons-material/Delete";
import SubscriptionSection from "@/components/pos/SubscriptionSection";

const ProductForm = lazy(() => import("@/components/pos/ProductsForm"));

const POS = () => {
  const [value, setValue] = useState(0);
  const { items } = useCart();
  const [products, setProducts] = useState([] as any[]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const columns: GridColDef[] = [
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
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </>
      ),
    },
  ];

  const generateData = () => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      quantity: faker.datatype.number(),
      total: faker.commerce.price(),
    };
  };

  useEffect(() => {
    const products = faker.helpers.multiple(generateData, {
      count: 20,
    });
    setProducts(products);
  }, []);

  return (
    <CommonLayout>
      <CartProvider>
        <div className="flex flex-col items-center justify-center w-full h-full mt-24">
          <Tabs value={value} setValue={setValue} />
          <div className="w-full h-full bg-white rounded-md ">
            {value === 0 && (
              <div className="flex flex-row items-center justify-center gap-7 p-10 mt-10 ">
                <ProductForm products={products} />
                <TableData
                  columns={columns}
                  openModal={false}
                  setOpenModal={function (open: boolean): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            )}
            {value === 1 && <SubscriptionSection />}
          </div>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            // slot="
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              "& .MuiFab-primary": {
                backgroundColor: "#F87171",
                '&:hover': {
                  backgroundColor: "#FFB8B8",
                },
              },
            }}
            icon={<SpeedDialIcon className="text-red-900 hover:text-white " />}
          >
            <SpeedDialAction
              key="Add Product"
              icon={<SpeedDialIcon />}
              tooltipTitle="Add Product"
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </SpeedDial>
        </div>
      </CartProvider>
    </CommonLayout>
  );
};

export default POS;
