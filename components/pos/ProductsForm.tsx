import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@mui/material";

type Props = {
  products: any[];
  onSubmit: (data: any) => void;
};

const ProductForm = ({ products, onSubmit }: Props) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Tarjeta de crédito");

  useEffect(() => {
    if (products) {
      setProduct(products[0]);
    }
  }, [products]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit({ product, quantity, paymentMethod });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit}
      mt={4}
    >
      <FormControl>
        <FormLabel>Producto</FormLabel>
        <Select value={product} onChange={(e) => setProduct(e.target.value)}>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Cantidad</FormLabel>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value as any)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Método de pago</FormLabel>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Tarjeta de crédito">Tarjeta de crédito</option>
          <option value="Tarjeta de débito">Tarjeta de débito</option>
          <option value="Efectivo">Efectivo</option>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Comprar
      </Button>
    </Box>
  );
};

export default ProductForm;
