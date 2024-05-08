import { Route, Routes } from "react-router-dom";
import ListPemohon from "../pages/pemohon/list";
import MainLayout from "../components/Layouts/MainLayout";
import PersyaratanUmum from "../pages/pemohon/persyaratan-umum";
import PengelolaanSurat from "../pages/pengelolaan-surat/PengelolaanSurat";
import CreatePengelolaanSurat from "../pages/pengelolaan-surat/CreatePengelolaanSurat";
import PersyaratanPendaftaran from "../pages/persyaratan/persyaratan-pendaftaran";
import EditPengelolaanSurat from "../pages/pengelolaan-surat/EditPengelolaanSurat";

interface RouteParam {
  path: string;
  component: (user: any) => ReturnType<React.FC>;
}

const routes: RouteParam[] = [
  { path: "/pemohon", component: (user: any) => <ListPemohon /> },
  {
    path: "/pemohon/berkas/:id",
    component: (user: any) => <PersyaratanUmum />,
  },
  {
    path: "/pengelolaan-surat",
    component: (user: any) => <PengelolaanSurat />,
  },
  {
    path: "/tambah-pengelolaan-surat",
    component: (user: any) => <CreatePengelolaanSurat />,
  },
  {
    path: "/edit-pengelolaan-surat/:id",
    component: (user: any) => <EditPengelolaanSurat />,
  },
];

const RenderRouter = () => {
  const user = "user";
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route, index) => {
          // pass the user arguments if the user exists or function need user

          return (
            // @ts-expect-error
            <Route
              key={index}
              path={route.path}
              element={route.component.call(null, user)}
            />
          );
        })}
      </Route>
    </Routes>
    // </Switch>
  );
};

export default RenderRouter;
