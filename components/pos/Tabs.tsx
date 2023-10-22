import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = {
  value: number;
  setValue: (value: number) => void;
};

const TabsPayment = ({ value, setValue }: Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      sx={{
        borderRadius: "0.5rem !important",
        borderBottom: "1px solid #ccc !important",
        color: "#fff !important",
        backgroundColor: "#a62219 !important",
      }}
      value={value}
      onChange={handleChange}
      textColor="inherit"
      indicatorColor="secondary"
      // className="bg-gray-200 text-white rounded-sm"
    >
      <Tab label="Products" />
      <Tab label="Subscription" />
    </Tabs>
  );
};

export default TabsPayment;
