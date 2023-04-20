import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  AdminPanelSettingsOutlined,
  VolunteerActivismOutlined,
  InventoryOutlined,
  DepartureBoardOutlined,
  GroupsOutlined,
  CasesOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import logo from "assets/paluz-logo.png";

const navItems = [
  {
    text: "Inicio",
    icon: <HomeOutlined />,
  },
  {
    text: "MÓDULOS",
    icon: null,
  },
  {
    text: "Proyectos",
    icon: <CasesOutlined />,
  },
  {
    text: "Voluntariado",
    icon: <VolunteerActivismOutlined />,
  },
  {
    text: "Logística",
    icon: < DepartureBoardOutlined />,
  },
  {
    text: "Suministros",
    icon: <InventoryOutlined />,
  },
  {
    text: "Gestión Humana",
    icon: <GroupsOutlined />,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
    
  }, 
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav" sx={{ boxShadow:10 }}>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[100],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box marginLeft="30px" marginTop="5px" marginBottom="5px">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" 
                   component="img"
                   alt="logo"
                   src={logo}
                   height="50px"
                   width="180px"
                >
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const textNorm= lcText.replace(/\s+/g, '');

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${textNorm}`);
                        setActive(textNorm);
                      }}
                      sx={{
                        backgroundColor:
                          active === textNorm
                            ? theme.palette.secondary[600]
                            : "transparent",
                        color:
                          active === textNorm
                            ? theme.palette.primary[200]
                            : theme.palette.secondary[300],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === textNorm
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === textNorm && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
