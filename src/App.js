import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage'
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingPages from "./pages/BookingPages";
import BookingPage from "./pages/BookingPage";


axios.defaults.baseURL = 'https://booking-app-backend-f442.onrender.com'
axios.defaults.withCredentials = true  //necessary to send cookie with each request
function App() {
  return (
    <UserContextProvider>
    <Routes>
    <Route path='/' element={<Layout/>}>
         <Route index element={<IndexPage/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register" element={<RegisterPage/>} />
         <Route path="/account" element={<ProfilePage/>} />
         <Route path="/account/places" element={<PlacesPage/>} />
         <Route path="/account/places/new" element={<PlacesFormPage/>} />
         <Route path="/account/places/:id" element={<PlacesFormPage/>} />
         <Route path="/place/:id" element={<PlacePage/>}/>
         <Route path="/account/bookings" element={<BookingPages/>}/>
         <Route path="/account/bookings/:id" element={<BookingPage/>} />

    </Route>
     
    </Routes>
    </UserContextProvider>
  );
}

export default App;
