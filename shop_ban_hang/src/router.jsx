import { Route, Routes } from "react-router-dom";
import HomePage from "./page/users/homePage";
import { ROUTE } from "./untils/router";
import ProfilePage from "./page/users/profilePage";
import MasterLayout from "./page/users/theme/masterLayout";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTE.USERS.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTE.USERS.PROFILE,
      component: <ProfilePage />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, index) => (
          <Route key={index} path={item.path} z element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
