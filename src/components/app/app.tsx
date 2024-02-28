import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { OFFER_CARD } from '../../mock';
import NotFoundPage from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Layout from '../layout/layout';

type AppProps = {
  countPlace: number;
}

function App({countPlace}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout />}>
          <Route index element={<MainPage countPlace={countPlace}/>} />
          <Route path={AppRoutes.Login} element={<LoginPage/>} />
          <Route
            path={AppRoutes.Favourites}
            element={
              <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
                <FavouritesPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Offer} element={<OfferPage offerInfo={OFFER_CARD}/>} />
          <Route path={AppRoutes.NotFound} element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
