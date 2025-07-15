import Style from './App.module.css';
import HomePage from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className={Style.Layout}>
      <div className={Style.Container}>
        <HomePage />
        <Footer />
      </div>
    </div>
  )
}

export default App