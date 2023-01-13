import { Grid, Card, Divider, CardContent, CardHeader } from "@mui/material";
import { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { EntriesState } from "../../interfaces";
import { EntrieList } from "./EntrieList";

interface Props {
  title: string;
  status: EntriesState;
  children?: React.ReactNode;
}

export const TasksGridItem: FC<Props> = ({ title, status, children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "calc(100vh - 8rem)",
        }}
      >
        <CardHeader title={title} />
        {children}
        <Divider />
        <CardContent>
          <EntrieList status={status} />
        </CardContent>
      </Card>
    </Grid>
  );
};
