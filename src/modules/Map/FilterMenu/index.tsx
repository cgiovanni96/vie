import { Drawer } from "@vie/components/Drawer";
import { FilterList } from "./FilterList";

type Props = {
  visible: boolean;
  close: () => void;
};

export const FilterMenu = ({ visible, close }: Props) => {
  return (
    <Drawer
      visible={visible}
      close={close}
      elevation={2}
      type="filter"
      title="Filter"
      side="right"
    >
      <FilterList />
    </Drawer>
  );
};
