import Footer from "./components/Footer";
import Header from "./components/Header";
import WandauRouter from "./router/WandauRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartComponent from "./components/CartComponent";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <WandauRouter />
        <Footer />
        <CartComponent />
      </Provider>
    </>
  );
};

export default App;
