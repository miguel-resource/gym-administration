import CommonLayout from "@/components/common/CommonLayout";
import SearchData from "@/components/common/SearchData";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { faker } from "@faker-js/faker";
import TableData from "@/components/common/TableData";

const Customers = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 300 },
    {
        field: "email",
        headerName: "Email",
        width: 300,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 150,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <>
          <Chip
            label={params.value}
            color={
                params.value === "Active"
                    ? "success"
                    : params.value === "Inactive"
                    ? "error"
                    : "warning"
            }
          />
        </>
      ),
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
      name: faker.person.fullName(),
        email: faker.internet.email(),
      created_at: faker.date.past().toLocaleDateString().replaceAll("/", "-"),
      updated_at: faker.date.future().toLocaleDateString().replaceAll("/", "-"),
      status: faker.helpers.shuffle(["Active", "Inactive", "Pending"])[0],
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

export default Customers;