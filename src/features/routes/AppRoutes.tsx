import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/404';
import AppLayout from '../layouts/AppLayout';
import IceWrapDialogPage from '../../pages/icewrap-dialog';

const AppRoutes = () => (
 <Routes>
  <Route element={<AppLayout />}>
   <Route path="/" element={<IceWrapDialogPage />} />
  </Route>
  <Route path="*" element={<NotFound />} />
 </Routes>
);

export default AppRoutes;