import { Drawer } from "@vie/components/Drawer";
import { useTranslation } from "react-i18next";
import { FilterList } from "./FilterList";

type Props = {
  visible: boolean;
  close: () => void;
};

export const FilterMenu = ({ visible, close }: Props) => {
  const { t } = useTranslation();

  return (
    <Drawer
      visible={visible}
      close={close}
      elevation={2}
      type="filter"
      title={t("filterMenuHeader")}
      side="right"
    >
      <FilterList />
    </Drawer>
  );
};
