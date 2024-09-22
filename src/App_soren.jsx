import './styles.css'
import PokemonImage from './components/PokemonImage'
import Header from './components/Header'
import Basic_info from './components/Basic_info'
import Type from './components/Type'
import Stats from './components/Stats'

function App() {

  return (
    <>
      <div className="card">
       
        <div className="App">
            <Header />
         </div>

        <div className="App">
            <PokemonImage />
        </div>

        <div className="poke-info">

        <div className="App">
            <Type />
          </div>

          <div className="App">
            <Basic_info />
          </div>

          <p className="description">
            La vieira de su ombligo no solo sirve como arma, sino también como
            instrumento para cortar las bayas que estén duras.
          </p>

          <div className="App">
            <Stats />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
