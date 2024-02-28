const CitiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const SortOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const CountPlaces = {
  CountOfferPlaces: 312
} as const;

const RatingNames: {[index: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

const AppRoutes = {
  Main: '/',
  Favourites: '/favorites',
  Login: '/login',
  NotFound: '*',
  Offer: '/offer/:id'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {CitiesList, CountPlaces, SortOptions, RatingNames, AppRoutes};
