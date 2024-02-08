import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/mypage',
      element: <MyPage />
  }
];

export default AppRoutes;
