import Header from "./Pages/Shared/Header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Footer from "./Pages/Shared/Footer/Footer";
import Banner from "./Pages/Home/Banner/Banner";


function App() {
  return (
    <div>
     <Header/>
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
