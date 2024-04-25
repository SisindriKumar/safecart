import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
import { ProductsPage } from './components/productspage/productspage.component';
import { FlashSale } from './components/flashsale/flshsale';
function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;