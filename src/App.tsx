import Header from './header/Header';
import Main from './mainScreen/Main'

export type ItemType = {
  id: number;
  name: string;
  component: React.ReactNode;
}

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  )
}

export default App