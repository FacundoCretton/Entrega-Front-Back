import './App.css';
import Slider from './components/Hero/Slider';
import Layout from './components/Layout/Layout';
import Navbar from './components/navbar/navbar';
import AllProductsCards from './components/Products/AllProductsCards';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (

  <>
  
    <Navbar />
    <Layout>
      <Slider/>
      <AllProductsCards/>
      
    
    </Layout>

 
    
    </>
  );
}

export default App;
