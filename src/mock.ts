export const cardsData = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    previewImage: 'img/room.jpg'
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: 5,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    previewImage: 'img/room.jpg'
  }
];

const OFFER_CARD = {
  id: 1,
  title: 'Beautiful & luxurious studio at great location',
  type: 'Apartment',
  price: 120,
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  bedrooms: 3,
  isPremium: true,
  goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  maxAdults: 4,
  comments: [
    {
      id: 'hskagfs',
      date: '2019-04-24',
      user: {
        name: 'Max',
        avatarUrl: 'img/avatar-max.jpg',
        isPro: false,
      },
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      rating: 4,
    }
  ]
};

export {OFFER_CARD};
