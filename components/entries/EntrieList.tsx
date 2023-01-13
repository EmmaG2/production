import { List, ListItem, Paper } from "@mui/material";
import { FC, useMemo, DragEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EntriesState } from "../../interfaces";
import { selectEntriesState, updateEntry } from "../../redux/reducers/entries";
import { selectUiState, toggleIsDragging } from "../../redux/reducers/ui";
import { EntrieCard } from "./EntrieCard";

interface Props {
  status: EntriesState;
}

export const EntrieList: FC<Props> = ({ status }) => {
  const { entries } = useSelector(selectEntriesState);
  const { isDragging } = useSelector(selectUiState);
  const dispatch = useDispatch();

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("idEntry");
    const entry = entries.find((e) => e._id === id)!;

    const newEntry = {
      ...entry,
      status,
    };

    if (entry === undefined || entry === null) return;

    dispatch(updateEntry(newEntry));
    dispatch(toggleIsDragging());
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={onDropEntry}
      style={{
        height: "90vh",
        backgroundColor: isDragging ? "rgba(10, 10, 255, 0.1)" : "transparent",
        border: isDragging ? "3px dashed #48e" : "",
        transition: "all 100ms ease-in-out",
        borderRadius: "10px",
      }}
    >
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
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
    </div>
  );
};
