import React, { useState, useEffect } from "react";
import { Autocomplete, Button, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";

type Props = {
  products: any[];
  // onSubmit: any;
};

const ProductForm = ({ products }: Props) => {
  const { addItem } = useCart();
  const [product, setProduct] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = async(data: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const price = Math.floor(Math.random() * 10000) + 1;

    setIsSubmitting(true);
    addItem({
      id: id.toString(),
      price: price,
      name: productName,
      quantity,
    });
  };

  useEffect(() => {
    if (products) {
      setProduct(products[0]);
    }
  }, [products]);

  return (
    <form
      className="flex flex-col gap-7 p-2 mt-10 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl
        sx={{
          width: "100%",
        }}
      >
        <Autocomplete
          disablePortal
          renderInput={(params) => <TextField {...params} label="Producto" />}
          options={products}
          id="name"
          {...register("name", { required: false })}
          onChange={(e, value) => {
            setProductName(value.label);
          }}
        />
        <span className="text-red-500 text-xs mt-1">
          {productName === "" && isSubmitting ? "*Debe seleccionar un producto" : ""}
        </span>
      </FormControl>

      <FormControl>
        <TextField
          type="number"
          // value={quantity}
          defaultValue={0}
          {...register("quantity", { required: true, min: 1 })}
          minRows={1}
          label="Cantidad"
          onChange={(e) => setQuantity(e.target.value as any)}
        />
        <span className="text-red-500 text-xs mt-1">
          {errors && errors.quantity && "*Debe seleccionar una cantidad"}
        </span>
      </FormControl>

      <Button
        sx={{
          color: "red",
          margin: "0 auto",
          width: "20%",
          ":hover": {
            backgroundColor: "none",
          },
        }}
        type="submit"
      >
        Add to cart
      </Button>
    </form>
  );
};

export default ProductForm;
