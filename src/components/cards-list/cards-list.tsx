import { cardsData } from '../../mock';
import Card from '../card/card';

function CardList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsData.map((card) => <Card card={card} key={card.id}/>)}
    </div>
  );
}

export default CardList;
