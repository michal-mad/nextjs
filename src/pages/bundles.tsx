import { Box, Container } from "@mui/system";
import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import { Search as SearchIcon } from "../icons/search";
import { Upload as UploadIcon } from "../icons/upload";
import { Download as DownloadIcon } from "../icons/download";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Row",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "version",
    headerName: "Version",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: "MyAnalytics.StructureProvider.Host.Service",
    version: "0.1.0-beta-0000000000001656",
  },
  { id: 2, name: "Lizard.TacsConfigurationProvider", version: "0.9.5-beta-0000000000002353" },
  { id: 3, name: "Lizard.ValuationService", version: "0.9.5-beta-0000000000002353" },
  { id: 4, name: "Lizard.Elf.Bundle", version: "0.0.1-beta-0000000000007" },
  { id: 5, name: "MyAnalytics.TestBundle", version: "1.0.4-release-315" },
  { id: 6, name: "MyAnalytics.StructureProvider.Dtd.Service", version: "1.0.1-snapshot-22" },
  { id: 7, name: "Lizard.HugeConfig", version: "0.9.5-beta-0000000000002353" },
  { id: 8, name: "Hobbit.Smaug", version: "1.1.0-master-8" },
  { id: 9, name: "HotGoblin.Attack", version: "1.0.0-snapshot-99" },
];

const Page = () => {
  return (
    <>
      <Head>
        <title>Bundle |</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: -1,
            }}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              Bundles
            </Typography>
            <Box sx={{ m: 1 }}>
              <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
                Import
              </Button>
              <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
                Export
              </Button>
              <Button color="primary" variant="contained">
                Add Bundle
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              mt: 3,
            }}
          >
            <Paper sx={{ p: 2 }}>
              <DataGrid autoHeight columns={columns} rows={rows} />
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
