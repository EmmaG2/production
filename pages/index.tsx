import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import { MainLayout } from "../layout";
import { selectEntriesState } from "../redux/reducers/entries";
import { contentRenderer } from "../utils";

export default function Home() {
  const { entries } = useSelector(selectEntriesState);
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
            <Box
              sx={{
                m: 2,
                p: 2,
              }}
            >
              {/* {entries.map((entrie) =>
                entrie.status === "pending" ? (
                  <Card key={entrie._id}>
                    <CardHeader title={entrie.status} />
                    <CardContent>
                      <Typography>{entrie.description}</Typography>
                      <Typography>{entrie.createdAt}</Typography>
                    </CardContent>
                  </Card>
                ) : null
              )} */}
              {contentRenderer(true)}
            </Box>
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
            <CardContent>{contentRenderer(false)}</CardContent>
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
