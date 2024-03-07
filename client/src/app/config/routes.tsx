import App from '../App';

export const APP_ROUTES = [
  {
    element: <App />,
    children: [
      {
        title: 'Main',
        path: '/',
        element: <div>Main</div>,
      },
      {
        title: 'Device',
        path: '/device/:deviceId',
        element: <div>Device</div>,
      },
      {
        title: 'Basket',
        path: '/basket',
        element: <div>Basket</div>,
      },
      {
        title: 'Admin',
        path: '/admin',
        element: <div>Admin</div>,
      },
    ],
  },
];
