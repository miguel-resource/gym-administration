import { DataGrid } from "@mui/x-data-grid";

type Props = {
  columns: any[];
  rows: any[];
};

const TableData = ({ columns, rows }: Props) => {
  return (
    <section className="mx-auto mt-20 space-x-4 mb-24">
      <DataGrid
        columns={columns}
        rows={rows}
        loading={rows.length === 0}
        sx={{
          maxHeight: "80vh",
          display: "flex",
        //   alignItems: "center",
          justifyContent: "center",
        //   width: "100%",
        }}
        className="p-1"
      />
    </section>
  );
};

export default TableData;
