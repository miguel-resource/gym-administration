import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import handler from '../../pages/api/hello';
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
    console.log(item);
    addItem(item);
  }

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
        <InputLabel id="product">Product</InputLabel>
        <Select
          id="product"
          labelId="product"
          label="Product"
          {...register("product", { required: true })}
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          {products.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
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


      <Button type="submit">Add to cart</Button>
    </form>
  );
};

export default ProductForm;
