import { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Container,
  CircularProgress,
} from "@mui/material";

import { useMarksStore } from "@vie/stores/useMarksStore";
import { useFormatTypes } from "@vie/hooks/useFormatTypes";

import { FilterListItem } from "./FilterListItem";

export const FilterList = () => {
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
      {status === "loading" && (
        <Container
          sx={(theme) => ({
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            marginBottom: theme.spacing(2),
          })}
        >
          <CircularProgress />
        </Container>
      )}

      {status === "success" && groups && (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <>
            <ListItem key="all-groups">
              <ListItemButton
                role={undefined}
                onClick={() => marksStore.setAll()}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={marksStore.checkedTypes.length === 0}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": "all" }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={"all-groups"}
                  primary={"Tutti"}
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            </ListItem>

            {groups
              .sort((a, b) => a.order - b.order)
              .map((value, i) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <FilterListItem
                    group={value}
                    idx={i}
                    label={labelId}
                    types={groupedTypes}
                  />
                );
              })}
          </>
        </List>
      )}
    </>
  );
};
