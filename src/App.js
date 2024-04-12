import './App.css';
import Carousel from './componenets/Carousel';
import Contac from './componenets/Contac';
import Footer from './componenets/Footer';
import Navbar from './componenets/Navbar';
import Testo from './componenets/Testo';
import TopSelling from './componenets/TopSelling';
import Cate from './componenets/cate';
import Company from './componenets/company';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Cate/>
    <TopSelling/>
    <Company/>
    <Testo/>
    <Contac/>
    <Footer/>
    </>
  );
}

export default App;
