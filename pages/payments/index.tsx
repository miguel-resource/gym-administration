import CommonLayout from "@/components/common/CommonLayout";
import SearchData from "@/components/common/SearchData";
import TableData from "@/components/common/TableData";
import { faker } from "@faker-js/faker";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from "@mui/icons-material/Delete";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import NoData from "@/components/common/NoData";
import ActionButtons from "@/components/common/ActionButtons";
const Payments = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const actions = [
    {
      icon: <FileDownloadIcon className="text-red-500" />,
      name: "Exportar tabla a Excel",
      action: () => {
        console.log("Export");
      },
    },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "customer", headerName: "Customer", width: 300 },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      renderCell: (params) => (
        <>
          <Chip
            label={params.value}
            className="p-1"
            icon={
              params.value === "Product" ? (
                <Inventory2Icon />
              ) : params.value === "Subscription" ? (
                <CardMembershipIcon />
              ) : (
                <CardMembershipIcon />
              )
            }
            color={
              params.value === "Product"
                ? "error"
                : params.value === "Subscription"
                ? "info"
                : "info"
            }
          />
        </>
      ),
    },
    {
      field: "balance",
      headerName: "Balance",
      width: 300,
      renderCell: (params) => (
        <>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(params.value)}
        </>
      ),
    },
    {
      field: "method",
      headerName: "Method",
      width: 150,
      renderCell: (params) => (
        <>
          <Chip
            label={params.value}
            color={
              params.value === "payment"
                ? "success"
                : params.value === "deposit"
                ? "error"
                : "warning"
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
      customer: faker.person.fullName(),
      type: faker.helpers.shuffle(["Product", "Subscription"])[0],
      created_at: faker.date.past().toLocaleDateString().replaceAll("/", "-"),
      balance: faker.finance.amount(100, 1000, 2),
      method: faker.helpers.shuffle(["Payment", "Deposit"])[0],
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

export default Payments;
