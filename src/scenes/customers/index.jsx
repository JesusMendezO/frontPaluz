import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid, esES } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      headerAlign:"center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nombre",
      headerAlign:"center",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      headerAlign:"center",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Número de Teléfono",
      headerAlign:"center",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "País",
      headerAlign:"center",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Ocupación",
      headerAlign:"center",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Cargo",
      headerAlign:"center",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="NIÑOS MENORES DE 5 AÑOS" subtitle="Lista de Pacientes Beneficiados en el Programa" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
