import "./App.css";
import Cabecalho from "./Componentes/Cabecalho";
import Cardd from "./Componentes/Cardd";
import Segundafileiracard from "./Componentes/Segundafileiracard";
import amazonas from "./imagens/norte.jpg";
function App(){

    return( <div>
        <Cabecalho/>
        <img src={amazonas} className="imagem"/>
        <h1>Das grandes florestas, às cidades planejadas e praias de água doce, o que não falta na região Norte são atrações turísticas. E, se você deseja 
            saber o que esses locais têm de melhor, separamos alguns que você precisa conhecer. Confira!</h1>
         
         <Cardd/>
         <Segundafileiracard/>
         </div>
    );
}

export default App;