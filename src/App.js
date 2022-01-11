import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/useContext";
import goodieLogo from "./assets/images/favpng_goodiebox-aps-a-z-index-term-gift-Ønskeliste.png";


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      <img alt="goodielogo" style={{width: 300, height: 300, position: 'absolute', marginLeft: 400}} src={goodieLogo} />
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;
