import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="20px" height="75vh">
      <FormControl sx={{ mt: "0.2rem" }}>
          <InputLabel>Ver</InputLabel>
          <Select
            value= "Ver"
            label="Ver"
            //onChange={(e) => setView(e.target.value)}
          >

            <MenuItem value="Ver">Ver</MenuItem>
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Menores de 5 Años">Menores de 5 Años</MenuItem>
          </Select>
        </FormControl>
        <BreakdownChart />
      </Box>
    </Box>
  );
}; 

export default Breakdown;
