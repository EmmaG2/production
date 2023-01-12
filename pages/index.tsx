import { Grid } from "@mui/material";
import { NewEntry, TasksGridItem } from "../components/entries";

import { MainLayout } from "../layout";

export default function Home() {
  return (
    <MainLayout title="Home - OpenJira">
      <Grid container spacing={2}>
        <TasksGridItem title={"Pendientes"} status={"pending"}>
          <NewEntry />
        </TasksGridItem>
        <TasksGridItem title={"En Progreso"} status={"in-progress"} />
        <TasksGridItem title="Terminadas" status="finished" />
      </Grid>
    </MainLayout>
  );
}
