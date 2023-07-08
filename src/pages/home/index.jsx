import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Mainpage from "../../components/Mainpage/Mainpage";
import Flashdeals from "../../components/FlashDeals/Flashdeals";


function Home(cartItems) {
  return (
    <div>
      <Header cartItems={cartItems}/>
      <Mainpage />
      <Flashdeals/>
      
      <Footer/>
    </div>
  );
}

export default Home;
