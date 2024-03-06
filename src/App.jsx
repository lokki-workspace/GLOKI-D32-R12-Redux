import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

import { Provider } from "react-redux";

import { ProductStore } from "./Features/ProductStore";

function App() {
  return (
    <>
    
    
    <Provider store={ProductStore}>
      <Header />
      <ProductList />
    </Provider>
      <Footer />
    </>
  );
}

export default App;