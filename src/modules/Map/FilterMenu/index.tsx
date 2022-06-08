import { useEffect, useState } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Drawer } from "@vie/components/Drawer";
import { useGetTypes } from "@vie/api/queries/getTypes";
import { typeToIcon } from "../icons";
import { Type } from "@vie/modules/Map/types";
import { type } from "os";

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

const FilterList = () => {
  const typesQuery = useGetTypes();
  const [groupedTypes, setGroupedTypes] = useState<Record<string, Type[]>>();
  const [groupOrder, setGroupOrder] = useState<Record<number, string>>();
  const [checked, setChecked] = useState([0]);

  useEffect(() => {
    if (!typesQuery.data || groupedTypes !== undefined) return;
    const grouped: Record<string, Type[]> = {};
    const ordered: Record<number, string> = {};

    typesQuery.data.forEach((type) => {
      const groupName = type.group.name;
      if (!grouped[groupName]) grouped[groupName] = [];
      grouped[groupName].push(type);

      const groupOrder = type.group.order;
      if (!ordered[groupOrder]) ordered[groupOrder] = groupName;
    });

    setGroupedTypes(grouped);
    setGroupOrder(ordered);
  }, [typesQuery]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log("grouped", groupedTypes, groupOrder);

  return (
    <>
      {typesQuery.isLoading && <>Loading</>}

      {typesQuery.isSuccess && typesQuery.data && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {typesQuery.data.map((value, i) => {
            const labelId = `checkbox-list-label-${value}`;
            const TypeIcon = typeToIcon(value.name);

            return (
              <ListItem
                key={value.name}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <TypeIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(i)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(i) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
