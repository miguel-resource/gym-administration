import CommonLayout from "@/components/common/CommonLayout";
import SearchData from "@/components/common/SearchData";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { faker } from "@faker-js/faker";
import TableData from "@/components/common/TableData";
import NoData from "@/components/common/NoData";
import ActionButtons from "@/components/common/ActionButtons";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Customers = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
          <IconButton
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <DeleteIcon className="text-red-500" />
          </IconButton>
        </>
      ),
    },
  ];

  const actions = [
    {
      icon: <AddIcon className="text-red-500" />,
      name: "Agregar Cliente",
      action: () => {
        setOpenModal(true);
      },
    },
    {
      icon: <FileDownloadIcon className="text-red-500" />,
      name: "Exportar tabla a Excel",
      action: () => {
        console.log("Export");
      },
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

        <ActionButtons actions={actions} />
      </section>
    </CommonLayout>
  );
};

export default Customers;
