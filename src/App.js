import "./App.scss";
import Sidebar from "./components/AppBody/Sidebar";
import Header from "./components/AppHeader/Header";

function App() {
  return (
    <div className="app">
      <Header />

      {/* APP BODY */}
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
