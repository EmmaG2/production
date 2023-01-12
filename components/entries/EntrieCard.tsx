import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import React, { FC } from "react";
import { Entry } from "../../interfaces";

export const EntrieCard: FC<Entry> = ({
  createdAt,
  description = "Esta es la descripción",
  status,
}) => {
  return (
    <Card sx={{ mb: 1 }}>
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
