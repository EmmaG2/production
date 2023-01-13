import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectUiState } from "../../redux/reducers/ui";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { catpuccinDarkTheme, catpuccinLigthTheme } from "../../themes";

interface Props {
  children: React.ReactNode;
}

export const FirstLevelUiWrapper: FC<Props> = ({ children }) => {
  const { theme: isLigthTheme } = useSelector(selectUiState);

  return (
    <ThemeProvider
      theme={isLigthTheme ? catpuccinLigthTheme : catpuccinDarkTheme}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
