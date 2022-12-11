import React from 'react';
import './App.css';
import CardsImage from './components/organism/CardsImage';
import DefaultCards from './components/organism/DefaultCards';

function App() {

  

  return (
    <div className="wrapper">
      <CardsImage
        src='https://avatars.mds.yandex.net/i?id=d749495a12b48ba3df55ae709500f6d5-4339445-images-thumbs&n=13&exp=1'
        alt='dogs'
        title='Card title'
        discription = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
        button = 'Go somewhere'
      />
      <DefaultCards 
        title='Card title'
        discription = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
        button = 'Go somewhere'
      />
    </div>
  );
}

export default App;
