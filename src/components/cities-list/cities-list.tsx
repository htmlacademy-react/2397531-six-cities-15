import { CITIESLIST } from '../../const';

type CityListProps = {
  city: typeof CITIESLIST[number];
}

function CityItem({city}: CityListProps): JSX.Element {
  return (
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
  )
}

function CityList (): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIESLIST.map((cityName) => <CityItem city={cityName} key={cityName}/>)}
    </ul>
  )
}

export default CityList;
