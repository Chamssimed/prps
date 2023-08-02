import logo from './logo.svg';
import './App.css';
import Cards from './Components/cards';
function App() {
  const player=[
    {
    img :"https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F947096288.jpeg",
    name:"Cristiano Ronaldo",
    Lieunaissance : "5 février 1985 (Âge: 38 ans), Hospital Dr",
      description:"Nélio Mendonça, Funchal, Portugal Équipes actuelles : Al-Nassr Football",
      Poids : "83 kg"
        },
        {
          img:"https://i2-prod.liverpoolecho.co.uk/incoming/article27419282.ece/ALTERNATES/s615/0_GettyImages-1254687348.jpg",
        name:"Kylian Mbappé",
    Lieunaissance: "20 décembre 1998 (Âge: 24 ans), 19e Arrondissement, Paris, France",
    description : "Paris Saint-Germain Football Club (#7 / Attaquant), Équipe de France de football (#10 / Attaquant)",
Poids : "75 kg"
      },
      {
        img:"https://i2-prod.liverpoolecho.co.uk/incoming/article27419282.ece/ALTERNATES/s615/0_GettyImages-1254687348.jpg",
      name:"Kylian Mbappé",
  Lieunaissance: "20 décembre 1998 (Âge: 24 ans), 19e Arrondissement, Paris, France",
  description : "Paris Saint-Germain Football Club (#7 / Attaquant), Équipe de France de football (#10 / Attaquant)",
Poids : "75 kg"
    }

  ]
  return (
    <div className="App">
      {player.map((el)=><Cards list={el}/>)}
      
    </div>
  );
}

export default App;
