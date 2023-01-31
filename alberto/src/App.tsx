import "./App.css";
import SearchAppBar from "./components/AppBar";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchAppBar />
        <header className="App-header">
          <MainPage />
        </header>
      </Provider>
    </div>
  );
}

export default App;
