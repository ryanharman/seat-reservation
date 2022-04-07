import {
  BookableItem,
  Home,
  OfficePage,
  OfficeReservation,
  OfficesPage,
  UserPage,
  UsersPage
} from './pages';

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
  {
    route: '/offices/:id/bookable-item/:id',
    element: <BookableItem />,
    public: false,
  },
  {
    route: '/offices/:id/reservation/:id',
    element: <OfficeReservation />,
    public: false,
  },
  {
    route: '/users',
    element: <UsersPage />,
    public: false,
  },
  {
    route: '/users/:id',
    element: <UserPage />,
    public: false,
  },
];
