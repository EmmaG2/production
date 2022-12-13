import { FC } from "react";

import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar, Sidebar } from "../components/ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({
  title = "OpenJira - App",
  children,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box
        sx={{
          padding: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
