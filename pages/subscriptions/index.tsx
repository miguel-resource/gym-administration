import CommonLayout from "@/components/common/CommonLayout";
import SearchData from "@/components/common/SearchData";
import TableData from "@/components/common/TableData";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { faker } from "@faker-js/faker";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import NoData from "@/components/common/NoData";
const Subscriptions = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "type",
      headerName: "Type",
      width: 300,
      renderCell: (params) => (
        <>
          <Chip
            icon={
              params.value === "Yearly" ? (
                <WorkspacePremiumIcon />
              ) : params.value === "Monthly" ? (
                <CalendarMonthIcon />
              ) : params.value === "Weekly" ? (
                <Brightness4Icon />
              ) : (
                <Brightness4Icon />
              )
            }
            label={params.value}
            color={
              params.value === "Yearly"
                ? "success"
                : params.value === "Monthly"
                ? "error"
                : params.value === "Weekly"
                ? "warning"
                : "info"
            }
          />
        </>
      ),
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

  const generateData = () => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      type: faker.helpers.shuffle(["Yearly", "Monthly", "Weekly", "Daily"])[0],
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
          <IconButton
            sx={{
              fontSize: "0.9rem",
            }}
            className="flex justify-center items-center  mt-24 text-sm rounded-none"
            // variant="text"
          >
            <AddCircleIcon
              sx={{
                mr: 1,
              }}
            />{" "}
            Add Subscription
          </IconButton>
        </div>

        {displayData.length > 0 ? (
          <TableData
            columns={columns}
            rows={displayData}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        ) : (
          <NoData />
        )}
      </section>
    </CommonLayout>
  );
};

export default Subscriptions;
