import { Routes, Route, Navigate } from 'react-router-dom'
import MainHeader from './components/MainHeader';
import Hello from './pages/Hello';
import MusicDetail from './pages/MusicDetail';
import NewMusic from './pages/NewMusic';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes >
          <Route path='/hello' element={<Hello />} />
          <Route path='/NewMusic' element={<NewMusic />} >
          </Route>
          <Route path='/MusicDetail/:musicId' element={<MusicDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book





{/* <Route path="/" exact element={<Navigate replace to="/welcome" />} />
<Route path="/*" exact element={<Navigate replace to="/welcome" />} />
<Route path='/welcome/*' element={<Welcome />} >
  <Route path='new-user' element={<p>Welcome, New User!</p>} />
</Route>
<Route path="/products" element={<Products />} />
<Route path='/products/:productId' element={<ProductDetail />} /> */}