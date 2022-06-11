import { useEffect, useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

//store
import { useMarksStore } from "@vie/stores/useMarksStore";

import { typeToIcon } from "../icons";
import { Group, Type } from "../types";
import { TextSwitcher } from "../Text";

type Props = {
  group: Group;
  idx: number;
  label: string;
  types: Record<string, Type[]> | undefined;
};

export const FilterListItem = ({ group, idx, label, types }: Props) => {
  const marksStore = useMarksStore();
  const [visibility, setVisibility] = useState<boolean>(
    marksStore.checkedTypes.indexOf(idx) !== -1
  );

  const itemClick = () => {
    marksStore.setCheckedTypes(idx);
    setVisibility(!visibility);
  };

  useEffect(() => {
    const visible = marksStore.checkedTypes.indexOf(idx) !== -1;
    setVisibility(visible);
  }, [marksStore.checkedTypes]);

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
            primary={<TextSwitcher text={group.text} />}
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
                  <ListItemText primary={<TextSwitcher text={type.text} />} />
                </ListItemButton>
              );
            })}
        </List>
      </Collapse>
    </>
  );
};
