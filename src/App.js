import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [champInfo, setChampInfo] = useState([]);

  useEffect(() => {
    let url = 'https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json';
    fetch(url)
      .then((r) => r.json()) 
      .then((json) => {
        setChampInfo(Object.values(json.data));
      });
  }, []);

  return (
    <div>
      <header>
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg" alt="Fundo Header" id="FundoHeader"></img>
        <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=625" id="LogoLol" alt="Logo LoL"></img>
      </header>

      <hr/>

      <div id="Info">
        {champInfo.map((champ) => (
          <div id="ChampCard" key={champ.id}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${champ.image.full}`} 
              alt={`Imagem do campeão ${champ.name}`}/>
            <strong id="champ-name">{champ.name}</strong>
          </div>
        ))}
      </div>

      <footer>
        <img src="https://i.scdn.co/image/ab6761610000e5ebe80d1ffb81aa6503ad41c574" alt="Logo League of Legends"></img>
      </footer>
    </div>
  );
}