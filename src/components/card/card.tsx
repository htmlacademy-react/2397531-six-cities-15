import { Link } from 'react-router-dom';

type Card = {
  id: number;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
}

type CardProps = {
  card: Card;
  className?: string;
}

function Premium(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function Card({card, className = 'cities'}: CardProps): JSX.Element {
  const {id, title, type, price, isPremium, previewImage} = card;
  return (
    <article className={`${className}__card place-card`}>
      {isPremium && <Premium />}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '60%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
