import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { toggleUiState } from "../redux/reducers/ui";

import { MainLayout } from "../layout";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <MainLayout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 8rem)",
            }}
          >
            <CardHeader title="Pendientes" />
            <Divider />
            <CardContent>
              {/* Agregar una nueva entrada */}
              {/* Listado de las entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 8rem)",
            }}
          >
            <CardHeader title="En Progreso" />
            <Divider />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 8rem)",
            }}
          >
            <CardHeader title="Completadas" />
            <Divider />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
