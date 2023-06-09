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
import CreatePass from "scenes/createPass";
import Dashboard from "scenes/dashboard";
import Proyectos from "scenes/proyectos";
import Beneficiarios from "scenes/beneficiarios";
import Voluntariado from "scenes/voluntariado";
import Logistica from "scenes/logistica";
import Suministros from "scenes/suministros";
import GestionHumana from "scenes/gestionhumana";
import Admin from "scenes/admin";
import Upload from "scenes/cargar-datos";
import Actividades from "scenes/proyectos/actividades";
import CrearProyecto from "scenes/proyectos/crearProyecto";
import AdminEquipos from "scenes/proyectos/adminEquipos";
import AgregarMiembros from "scenes/proyectos/agregarMiembros";
import GestionProyectos from "scenes/proyectos/gestionProyectos";
import Estadisticas from "scenes/proyectos/estadisticas";
import CrearActividad from "scenes/voluntariado/crearActividad";
import AceptarUsuarios from "scenes/admin/aceptarUsuarios";
import Logros from "scenes/voluntariado/logros";
import EasterEgg from "scenes/easterEgg";

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
            <Route path="/createPass" element={<CreatePass />} />
            <Route path="/secret" element={<EasterEgg />} />
            <Route element={<Layout />}>
              {/*<Route path="/" element={<Navigate to="/inicio" replace />} />*/}
              <Route path="/inicio" element={<Dashboard />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/beneficiarios" element={<Beneficiarios />} />
              <Route path="/gestionhumana" element={<GestionHumana />} />
              <Route path="/voluntariado" element={<Voluntariado />} />
              <Route path="/logistica" element={<Logistica />} />
              <Route path="/suministros" element={<Suministros />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/crearProyecto" element={<CrearProyecto />} />
              <Route path="/adminEquipos" element={<AdminEquipos />} />
              <Route path="/agregarMiembros" element={<AgregarMiembros />} />
              <Route path="/gestionProyectos" element={<GestionProyectos />} />
              <Route path="/estadisticas" element={<Estadisticas />} />
              <Route path="/actividades" element={<Actividades />} />
              <Route path="/crearConvocatoria" element={<CrearActividad />} />
              <Route path="/logros" element={<Logros />} />
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
