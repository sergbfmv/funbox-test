import './App.css';
import Card from './Card/Card';

const cards = [{
  title: 'фуа-гра',
  count: '10',
  gift: '',
  weight: '0,5',
  description: 'Печень утки разварная с артишоками.',
  disabled: false,
}, {
  title: 'рыбой',
  count: '40',
  gift: '2',
  weight: '2',
  description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  disabled: false,
}, {
  title: 'курой',
  count: '100',
  gift: '5',
  weight: '5',
  description: 'Филе из цыплят с трюфелями в бульоне.',
  disabled: true,
}]

function App() {
  return (
    <div className="App">
      <h1 className='title'>Ты сегодня покормил кота?</h1>
      <div className='card-wrapper'>
        {cards.map((card => {
          return (
            <Card {...card} key={card.title} />
          )
        }))}
      </div>
    </div>
  );
}

export default App;
