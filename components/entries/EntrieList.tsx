import { List, ListItem, Paper } from "@mui/material";
import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { EntriesState } from "../../interfaces";
import { selectEntriesState } from "../../redux/reducers/entries";
import { EntrieCard } from "./EntrieCard";

interface Props {
  status: EntriesState;
}

export const EntrieList: FC<Props> = ({ status }) => {
  const { entries } = useSelector(selectEntriesState);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  return (
    <>
      {entriesByStatus.length === 0 ? null : (
        <Paper
          sx={{
            overflow: "auto",
            height: "max-content",
            maxHeight:
              status === "pending"
                ? "calc(100vh - 17rem)"
                : "calc(100vh - 14rem)",
            backgroundColor: "transparent",
          }}
        >
          <List sx={{ opacity: 1 }}>
            {entriesByStatus.map((entrie, j) => (
              <ListItem key={j}>
                <EntrieCard {...entrie} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};
