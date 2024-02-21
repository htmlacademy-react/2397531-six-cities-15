import { CardsData } from '../../mock';
import Card from '../card/card';

function CardList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {CardsData.map((card) => <Card {...card} key={card.id}/>)}
    </div>
  )
}

export default CardList;