import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header />
      <h1>404. Страница не найдена.</h1>
      <Link to="/">Главная страница</Link>
      <Footer />
    </>
  )
}

export default NotFoundPage;