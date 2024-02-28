import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoutes } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { OFFER_CARD } from '../../mock';
import NotFoundPage from '../../pages/404-page/404-page';

type AppProps = {
  countPlace: number
}

function App({countPlace}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage countPlace={countPlace}/>} />
        <Route path={AppRoutes.Login} element={<LoginPage/>} />
        <Route path={AppRoutes.Favourites} element={<FavouritesPage/>} />
        <Route path={AppRoutes.Offer} element={<OfferPage offerInfo={OFFER_CARD}/>} />
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
