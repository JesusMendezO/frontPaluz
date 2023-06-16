import React from "react";
import { useState,useEffect } from 'react';
import FlexBetween from "components/FlexBetween";
import {
  Diversity1Outlined,
  PregnantWomanOutlined,
  Diversity3Outlined,
  MedicationOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import Carousel from "components/Carousel";
import DashBoardCalendar from "components/Scheduler/dashBoardCalendar";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetDashboardQuery();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token'));
    if (items) {
     setItems(items);
    }
  }, []);
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
         <Typography variant="h2" sx={{ fontWeight:'bold', mt:2 }} > Bienvenido, {items.nombre} </Typography>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Pacientes Atendidos"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Desde Dic. 2022"
          icon={
            <Diversity1Outlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Menores de 5 Años"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Desde Dic. 2022"
          icon={
            <Diversity3Outlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1.5rem"
          boxShadow={5}
          width='fit-content'
        >
          <Carousel />
          {/*<OverviewChart view="sales" isDashboard={true} />*/}
        </Box>
        <StatBox
          title="MEL Beneficiadas"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Desde Dic. 2022"
          icon={
            <PregnantWomanOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Desparasitados 5-14 años"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Desde Dic. 2022"
          icon={
            <MedicationOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="1.5rem"
          height="fit-content"
          boxShadow={5}
        >
          <DashBoardCalendar/>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="1.5rem"
          height={505}
          boxShadow={5}
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
           Progreso del Proyecto
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Resumen de los pacientes atendidos con respecto al target establecido.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
