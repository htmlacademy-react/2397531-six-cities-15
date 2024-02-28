import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <p style={{textAlign: 'center', fontSize: '36px'}}><b>Ошибка 404. Страница не найдена.</b></p>
      <Link style={{textAlign: 'center', color: '#4481c3'}} to="/">Главная страница</Link>
    </>
  );
}

export default NotFoundPage;
