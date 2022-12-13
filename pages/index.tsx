import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { toggleUiState } from "../redux/reducers";

import { MainLayout } from "../layout";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <Typography variant="h1" component={"h1"}>
        OpenJira App
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(toggleUiState());
        }}
      >
        cambiar tema
      </Button>
    </MainLayout>
  );
}
