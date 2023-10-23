import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";

type Props = {
  products: any[];
  // onSubmit: any;
};

const ProductForm = ({ products }: Props) => {
  const { addItem } = useCart();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Tarjeta de crédito");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    // change id to string
    const idString = id.toString();
    const { product, quantity, name } = data;
    const item = {
      id: idString,
      name,
      product,
      quantity,
      price: 0,
    };
    addItem(item);
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
        />
        <span>
          {errors && errors.product && "Debe seleccionar un producto"}
        </span>
      </FormControl>

      <FormControl>
        <TextField
          type="number"
          value={quantity}
          defaultValue={0}
          {...register("quantity", { required: true, min: 1 })}
          minRows={1}
          label="Cantidad"
          onChange={(e) => setQuantity(e.target.value as any)}
        />
        <span>
          {errors && errors.quantity && "Debe seleccionar una cantidad"}
        </span>
      </FormControl>

      <Button
        sx={{
          color: "red",
          margin: "0 auto",
          width: "20%",
          // backgroundColor: "red",
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
