import "./App.css";
import Home from "./pages/Home";
import SearchPage  from "./components/SearchPage";
import "./pages/Home.css";

import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/search" element={ <SearchPage />}/>
          <Route path="/" element={ <Home />}/>


      {/* 
    1. home page with search 
    2. search page(The resulta page )
    3. 
     */}

          </Routes>
    </div>

  );
}

export default App;
