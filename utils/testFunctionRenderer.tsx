import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export const contentRenderer = (state: boolean) => {
  if (state) {
    return (
      <>
        <Grid
          sx={{
            backgroundColor: "primary.main",
          }}
          gap={3}
          container
        >
          <Grid item xs={12}>
            <Typography component={"h4"} variant="h3">
              El estado es True
            </Typography>
          </Grid>
          <Card>
            <CardHeader title="Felicidades true" />
            <Divider />
            <CardContent>
              <Typography component={"span"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                iste earum velit error ea similique?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "error.main",
        }}
        gap={3}
        container
      >
        <Grid item xs={12}>
          <Typography component={"h4"} variant="h3">
            El estado es false
          </Typography>
        </Grid>
        <Card>
          <CardHeader title="Felicidades false" />
          <Divider />
          <CardContent>
            <Typography component={"span"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              iste earum velit error ea similique?
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
