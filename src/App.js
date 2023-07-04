import './App.css';
import Categories from './components/Categories/Categories';
import Slider from './components/Hero/Slider';
import AllProductsCards from './components/Products/AllProductsCards';
import Routes from './redux/routes/routes';
import Layout from './components/Layout/Layout'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Layout>
      <Routes/>
    
  
  </Layout>
  </>
  );
}

export default App;
