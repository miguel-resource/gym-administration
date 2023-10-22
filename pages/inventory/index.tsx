import CommonLayout from "@/components/common/CommonLayout";
import TableData from "@/components/common/TableData";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";
import SearchData from "@/components/common/SearchData";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NoData from "@/components/common/NoData";
const Inventory = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return `$${params.value}`;
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Supplement"
              ? "success"
              : params.value === "Equipment"
              ? "warning"
              : "primary"
          }
          className="text-white p-1"
          icon={
            params.value === "Supplement" ? (
              <LocalDrinkIcon />
            ) : params.value === "Equipment" ? (
              <FitnessCenterIcon />
            ) : (
              <CheckroomIcon />
            )
          }
        />
      ),
    },
    {
      field: "inventory",
      headerName: "Inventory",
      type: "number",
      width: 150,
    },
    {
      field: "action",
      headerName: "",
      sortable: false,
      width: 160,
      renderCell: () => (
        <>
          <IconButton onClick={() => setOpenModal(true)}>
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </>
      ),
    },
  ];

  const generateData = () => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      type: faker.helpers.shuffle(["Supplement", "Equipment", "Clothing"])[0],
      inventory: faker.number.int(100),
    };
  };

  const rows = faker.helpers.multiple(generateData, {
    count: 100,
  });

  useEffect(() => {
    setDisplayData(rows);
    setData(rows);
  }, []);

  return (
    <CommonLayout>
      <section className="flex flex-col items-center mt-20 justify-center w-full">
        <div className="flex justify-center gap-4 items-center w-full mt-10">
          <SearchData
            data={data}
            setDisplayData={setDisplayData}
            columnsForSearch={columns}
          />
          <IconButton
            sx={{ fontSize: "0.9rem", borderRadius: "0" }}
            className="flex justify-center items-center  mt-24"
          >
            <AddCircleIcon sx={{ mr: 1 }} /> Add Product
          </IconButton>
        </div>

        {displayData.length > 0 ? (
          <TableData
            columns={columns}
            rows={displayData}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ) : (
          <NoData />
        )}
      </section>
    </CommonLayout>
  );
};

export default Inventory;
