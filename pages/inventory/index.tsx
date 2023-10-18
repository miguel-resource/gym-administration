import CommonLayout from "@/components/common/CommonLayout";
import TableData from "@/components/common/TableData";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";
import SearchData from "@/components/common/SearchData";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Inventory = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "description",
      headerName: "Description",
      width: 800,
      editable: true,
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
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
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
      <section className="flex flex-col items-center justify-center w-full">
        <div className="flex justify-center gap-4 items-center w-full mt-10">
          <SearchData
            data={data}
            setDisplayData={setDisplayData}
            columnsForSearch={columns}
          />
          <IconButton
            className="flex justify-center items-center  mt-24 text-sm rounded-none"
            // variant="text"
          >
            <AddCircleIcon /> Add Product
          </IconButton>
        </div>

        {displayData.length > 0 ? (
        <TableData columns={columns} rows={displayData} />
        ) : (
          <h1>No Data</h1>
        )}
      </section>
    </CommonLayout>
  );
};

export default Inventory;
