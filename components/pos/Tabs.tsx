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
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      textColor="primary"
      className="bg-gray-200 text-white rounded-sm"
    >
      <Tab label="Products" />
      <Tab label="Subscription" />
    </Tabs>
  );
};

export default TabsPayment;
