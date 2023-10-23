import CommonLayout from "@/components/common/CommonLayout";
import TableData from "@/components/common/TableData";
import Tabs from "@/components/pos/Tabs";
import { faker } from "@faker-js/faker";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { lazy, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import DeleteIcon from "@mui/icons-material/Delete";
import SubscriptionSection from "@/components/pos/SubscriptionSection";
import ActionButtons from "@/components/common/ActionButtons";
import TablePurchase from "@/components/pos/TablePurchase";

const ProductForm = lazy(() => import("@/components/pos/ProductsForm"));

const POS = () => {
  const [value, setValue] = useState(0);
  const { emptyCart } = useCart();
  const [products, setProducts] = useState([] as any[]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const generateData = () => {
    return {
      id: faker.datatype.uuid(),
      label: faker.commerce.productName(),
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
      <div className="flex flex-col items-center justify-center w-full h-full mt-24">
        <Tabs value={value} setValue={setValue} />
        <div className="w-full h-full bg-white rounded-md ">
          {value === 0 && (
            <div className="flex flex-row items-center justify-center gap-7 p-10 mt-10 ">
              <ProductForm products={products} />
              <TablePurchase
                openModal={false}
                setOpenModal={function (open: boolean): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          )}
          {value === 1 && <SubscriptionSection />}
        </div>

        <ActionButtons />
      </div>
    </CommonLayout>
  );
};

export default POS;
