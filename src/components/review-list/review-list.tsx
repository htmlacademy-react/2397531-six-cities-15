type User = {
  name: string,
  avatarUrl: string
}

export type Review = {
  id: string,
  date: string,
  user: User,
  comment: string,
  rating: number
}

function ReviewItem({date, user, comment}: Review): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: "80%" }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {date}
        </time>
      </div>
    </li>

  )
}

function ReviewList({reviews}: {reviews: Review[]}): JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem {...review}/>)}
    </ul>
  )
}

export default ReviewList;