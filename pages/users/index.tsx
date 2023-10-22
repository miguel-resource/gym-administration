import CommonLayout from "@/components/common/CommonLayout";
import NoData from "@/components/common/NoData";
import SearchData from "@/components/common/SearchData";
import TableData from "@/components/common/TableData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeleteIcon from "@mui/icons-material/Delete";
import { faker } from "@faker-js/faker";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Nombre Completo", width: 300 },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Admin"
              ? "success"
              : params.value === "Manager"
              ? "warning"
              : "primary"
          }
          className="text-white p-1"
        />
      ),
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
      name: faker.person.fullName(),
      type: faker.helpers.shuffle(["Admin", "Manager", "Employee"])[0],
    };
  };

  const rows = faker.helpers.multiple(generateData, {
    count: 3,
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

export default Users;
