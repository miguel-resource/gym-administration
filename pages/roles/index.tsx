import CommonLayout from "@/components/common/CommonLayout";
import NoData from "@/components/common/NoData";
import SearchData from "@/components/common/SearchData";
import TableData from "@/components/common/TableData";
import DeleteIcon from "@mui/icons-material/Delete";
import { faker } from "@faker-js/faker";
import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import BoyIcon from '@mui/icons-material/Boy';
import ListAltIcon from "@mui/icons-material/ListAlt";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ActionButtons from "@/components/common/ActionButtons";
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Roles = () => {
  const [data, setData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const actions = [
    {
      icon: <AddIcon className="text-red-500" />,
      name: "Agregar Rol",
      action: () => {
        console.log("Add Role");
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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 310 },
    { field: "roleName", headerName: "Role Name", width: 150 },
    {
      field: "permissions",
      headerName: "Permissions",
      width: 900,
      maxWidth: 900,
      hideable: false,
      renderCell: (params) => {
        return params.value.map((permission: string, index: number) => (
          <Chip
            key={index}
            label={permission}
            color={
              permission === "Supplement"
                ? "success"
                : permission === "Equipment"
                ? "warning"
                : "primary"
            }
            className="text-white p-1 mr-2"
            icon={
              permission === "Estadisticas" ? (
                <HomeIcon/>
              ) : permission === "Punto de Venta" ? (
                <PointOfSaleOutlinedIcon />
              ) : permission === "Inventario" ? (
                <ListAltIcon />
              ) : permission === "Roles" ? (
                <BoyIcon />
              ) : permission === "Usuarios" ? (
                <BoyIcon />
              ) : permission === "Pagos" ? (
                <RequestQuoteIcon />
              ) : permission === "Subscripciones" ? (
                <CreditCardRoundedIcon />
              ) : (
                <RememberMeOutlinedIcon />
              )
            }

            
          />
        ));
      }
    },
    {
      field: "action",
      headerName: "",
      sortable: false,
      width: 160,
      filterable: false,
      hideable: false,
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
      roleName: faker.helpers.shuffle([
        "Admin",
        "Manager",
        "Employee",
        
      ])[0],
      permissions: faker.helpers.shuffle([
        "Estadisticas",
        "Punto de Venta",
        "Inventario",
        "Roles",
        "Usuarios",
        "Pagos",
        "Subscripciones",
      ]).slice(0, faker.number.int(7)),
      price: faker.commerce.price(),
      type: faker.helpers.shuffle(["Supplement", "Equipment", "Clothing"])[0],
      inventory: faker.number.int(100),
    };
  };

  const rows = faker.helpers.multiple(generateData, {
    count: 3
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

      <ActionButtons actions={actions} />
    </CommonLayout>
  );
};

export default Roles;
