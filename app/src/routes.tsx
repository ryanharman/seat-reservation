import { Home, OfficePage, OfficesPage } from './pages';

export const routes = [
  {
    route: '/',
    element: <Home />,
    public: false,
  },
  {
    route: '/offices',
    element: <OfficesPage />,
    public: false,
  },
  {
    route: '/offices/:id',
    element: <OfficePage />,
    public: false,
  },
];
