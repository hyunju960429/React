import { useState } from "react";
import "./App.css";
import Products from "./components/Products";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <>
      {showProducts && <Products />}
      <button
        onClick={() => {
          setShowProducts(!showProducts);
        }}
      >
        toggle
      </button>
    </>
  );
}

export default App;
