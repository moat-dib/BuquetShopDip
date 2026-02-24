import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
   
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/account">
                <Route path="me" element={<MyAccount />} />
                <Route path="manage" element={<ManageAccount />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Login />} />
              </Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/category">
                <Route path=":id" element={<CategoryView />} />
              </Route>
              
            <Footer />
            <Routes>
              <Route path="/admin" element={<Wishlist />} />
            </Routes>
          </Router>
     
  );
}

export default App;
