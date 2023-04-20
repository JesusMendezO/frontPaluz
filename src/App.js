import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "scenes/layout";
import Login from "scenes/login";
import Registro from "scenes/register";
import ResetPass from "scenes/resetPass";
import Dashboard from "scenes/dashboard";
import Proyectos from "scenes/proyectos";
import Voluntariado from "scenes/voluntariado";
import Logistica from "scenes/logistica";
import Suministros from "scenes/suministros";
import GestionHumana from "scenes/gestionhumana";
import Admin from "scenes/admin";
import Upload from "scenes/cargar-datos";
import CrearProyecto from "scenes/proyectos/crearProyecto";
import AdminEquipos from "scenes/proyectos/adminEquipos";
import GestionProyectos from "scenes/proyectos/gestionProyectos";
import CrearActividad from "scenes/voluntariado/crearActividad";
import AceptarUsuarios from "scenes/admin/aceptarUsuarios";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/resetPass" element={<ResetPass />} />
            <Route element={<Layout />}>
              {/*<Route path="/" element={<Navigate to="/inicio" replace />} />*/}
              <Route path="/inicio" element={<Dashboard />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/gestionhumana" element={<GestionHumana />} />
              <Route path="/voluntariado" element={<Voluntariado />} />
              <Route path="/logistica" element={<Logistica />} />
              <Route path="/suministros" element={<Suministros />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/crearProyecto" element={<CrearProyecto />} />
              <Route path="/adminEquipos" element={<AdminEquipos />} />
              <Route path="/gestionProyectos" element={<GestionProyectos />} />
              <Route path="/crearActividad" element={<CrearActividad />} />
              <Route path="/aceptarUsuarios" element={<AceptarUsuarios />} />
              <Route path="/cargar-datos" element={<Upload />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
