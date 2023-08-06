import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';




const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App