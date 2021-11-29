import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

function App() {
  return (
    <div className="App">
      <div className="header-main-container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
