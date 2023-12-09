import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Hero from './components/Hero/Hero.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <div style={{display:'flex', width:'100vw', flexDirection:'column'}}>
      <NavBar></NavBar>
      <Hero></Hero>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App
