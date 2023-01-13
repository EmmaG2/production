import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import React, { FC, DragEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Entry } from "../../interfaces";
import { selectUiState, toggleIsDragging } from "../../redux/reducers/ui";

export const EntrieCard: FC<Entry> = ({
  _id,
  createdAt,
  description = "Esta es la descripción",
  status,
}) => {
  const dispatch = useDispatch();
  const { isDragging } = useSelector(selectUiState);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("idEntry", _id);
    console.log(event);
    dispatch(toggleIsDragging());
  };

  const onDragEnd = () => {
    // TODO: cancelar drag
  };

  return (
    <Card sx={{ mb: 1 }} draggable={true} onDragStart={onDragStart}>
      <CardContent>
        <Typography
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          px: 2,
          py: 1.4,
        }}
      >
        <Typography variant="body2">{createdAt}</Typography>
        <Typography variant="body2">{status}</Typography>
      </CardActions>
    </Card>
  );
};
