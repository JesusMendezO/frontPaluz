import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Profesiones",
    "Dashboard",
    "Categorias",
    "Procat",
    "Usuarios",
    "Usuariostecnicos",
    "Roles",
    "Tipos",
    "Voluntarios",
    "Socios",
    "Sector",
    "Proyectos"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "api/semanas",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getProfesiones: build.query({
      query: () => "api/profesiones",
      providesTags: ["Profesiones"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getCategorias: build.query({
      query: () => "api/categorias",
      providesTags: ["Categorias"],
    }),
    getProcat: build.query({
      query: () => "api/profesionescat",
      providesTags: ["Procat"],
    }),
    getUsuarios: build.query({
      query: () => "api/usuarios",
      providesTags: ["Usuarios"],
    }),
    getUsuariosTecnicos: build.query({
      query: () => "api/usuariostecnicos",
      providesTags: ["UsuariosTecnicos"],
    }),
    getRoles: build.query({
      query: () => "api/rol",
      providesTags: ["Roles"],
    }),
    getTipos: build.query({
      query: () => "api/tipo",
      providesTags: ["Tipos"],
    }),
    getVoluntarios: build.query({
      query: () => "api/voluntarios",
      providesTags: ["Voluntarios"],
    }),
    getSocios: build.query({
      query: () => "api/socios",
      providesTags: ["Socios"],
    }),
    getSector: build.query({
      query: () => "api/sector",
      providesTags: ["Sector"],
    }),
    getProyecto: build.query({
      query: () => "api/proyectos",
      providesTags: ["Proyectos"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetProfesionesQuery,
   useGetCategoriasQuery,
   useGetProcatQuery,
   useGetUsuariosQuery,
   useGetRolesQuery,
   useGetTiposQuery,
   useGetVoluntariosQuery,
   useGetSociosQuery,
   useGetSectorQuery,
   useGetUsuariosTecnicosQuery,
   useGetProyectoQuery,
} = api;
