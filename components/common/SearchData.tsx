import TextField from "@mui/material/TextField";

type Props = {
  data: any[];
  setDisplayData: any;
  columnsForSearch: any[];
};

const SearchData = ({ data, setDisplayData, columnsForSearch }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setDisplayData(data);
    } else {
      const newData = data.filter((item) => {
        let found = false;
        columnsForSearch.forEach((column) => {
          if (
            item[column.field] &&
            item[column.field].toString().toLowerCase().includes(value.toLowerCase())
          ) {
            found = true;
          }
        });
        return found;
      });
      setDisplayData(newData);
    }
  };

  return (
    <TextField
      id="standard-basic"
      label="Search"
      variant="standard"
      className="mt-24 w-4/12"
      color="warning"
      onChange={handleSearch}
    />
  );
};

export default SearchData;
