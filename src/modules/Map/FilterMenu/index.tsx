import { useEffect, useState } from "react";
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Drawer } from "@vie/components/Drawer";
import { typeToIcon } from "../icons";
import { Group, Type } from "@vie/modules/Map/types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useMarksStore } from "@vie/stores/useMarksStore";
import { useFormatTypes } from "@vie/hooks/useFormatTypes";

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
  const marksStore = useMarksStore();
  const { status, groups, groupOrder, groupedTypes } = useFormatTypes();

  useEffect(() => {
    if (marksStore.checkedTypes.length === 0) return;
    const filterGroupString = marksStore.checkedTypes.map((idx) =>
      groupOrder ? groupOrder[idx + 1] : ""
    );

    marksStore.filterMarks(filterGroupString);
  }, [marksStore.checkedTypes]);

  return (
    <>
      {status === "loading" && <>Loading</>}

      {status === "success" && groups && (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {groups
            .sort((a, b) => a.order - b.order)
            .map((value, i) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <FilterItem
                  group={value}
                  idx={i}
                  label={labelId}
                  types={groupedTypes}
                />
              );
            })}
        </List>
      )}
    </>
  );
};

type ItemProps = {
  group: Group;
  idx: number;
  label: string;
  types: Record<string, Type[]> | undefined;
};

const FilterItem = ({ group, idx, label, types }: ItemProps) => {
  const marksStore = useMarksStore();
  const [visibility, setVisibility] = useState<boolean>(
    marksStore.checkedTypes.indexOf(idx) !== -1
  );

  const itemClick = () => {
    marksStore.setCheckedTypes(idx);
    setVisibility(!visibility);
  };

  return (
    <>
      <ListItem key={group.name}>
        <ListItemButton role={undefined} onClick={itemClick} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={marksStore.checkedTypes.indexOf(idx) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": label }}
            />
          </ListItemIcon>
          <ListItemText
            id={label}
            primary={group.text.it}
            primaryTypographyProps={{ fontSize: 18, fontWeight: "medium" }}
          />
          {!visibility ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
      </ListItem>
      <Collapse in={visibility} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ marginLeft: 3 }}>
          {types &&
            types[group.name].length > 0 &&
            types[group.name].map((type) => {
              const MarkIcon = typeToIcon(type.name);
              return (
                <ListItemButton key={type.name} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MarkIcon />
                  </ListItemIcon>
                  <ListItemText primary={type.text.it} />
                </ListItemButton>
              );
            })}
        </List>
      </Collapse>
    </>
  );
};
