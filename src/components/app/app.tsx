import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  countPlace: number
}

function App({countPlace}: AppProps): JSX.Element {
  return (
    <MainPage countPlace={countPlace}/>
  )
}

export default App;
