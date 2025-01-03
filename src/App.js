import "./App.css";
import { useEffect, useContext } from "react";
import Aos from "aos";
import Footer from "./UI/Footer";
import Header from "./component/Header";
import AllRoutes from "./component/AllRoutes";
import KeyFeatures from "./UI/KeyFeatures";
import MiniChatGPT from "./component/MiniChatGPT"; // Import the MiniChatGPT component
import { AuthContext } from "./component/AuthContextProvider";

function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      {user ? <KeyFeatures /> : <AllRoutes />}
      <Footer />
      <MiniChatGPT /> {/* Add the MiniChatGPT component */}
    </>
  );
}

export default App;