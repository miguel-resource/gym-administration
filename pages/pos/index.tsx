import CommonLayout from "@/components/common/CommonLayout";
import ProductForm from "@/components/pos/ProductsForm";
import Tabs from "@/components/pos/Tabs";
import { useState } from "react";

const POS = () => {
  const [value, setValue] = useState(0);

  return (
    <CommonLayout>
      <div className="flex flex-col items-center justify-center w-full h-full mt-24">
        <Tabs value={value} setValue={setValue} />

        <div className="w-full h-full bg-white rounded-md shadow-md">
          {value === 0 && (
            <ProductForm
              products={[{
                id: 1,
                name: "Test",
                price: 100,
                quantity: 1,
                total: 100,
              }]}
              
              onSubmit={function (data: any): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
          {/* {value === 1 && <Subscription />} */}
        </div>
      </div>
    </CommonLayout>
  );
};

export default POS;
