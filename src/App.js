import React from 'react';
import './App.css';
import dayjs from 'dayjs';

const state = {
  book: {
    title: 'Becoming - Michelle Obama',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg',
    currentAssignment: 'Prefácio e Primeiro Capítulo'
  },
  nextMeeting: dayjs('2020-03-25T17:00:00.000Z')
};

function App() {
  return (
    <div id="app">
      <div id="book">
        <h1 className="cover"><img alt={state.book.title} src={state.book.cover} /></h1>
        <h2 className="title">{state.book.title}</h2>
        <h3 className="assignment">{state.book.currentAssignment}</h3>
      </div>
      <div id="event">
        <p>Próximo encontro em: {dayjs(state.nextMeeting).format('DD/MM/YY - HH:mm')}</p>
      </div>
    </div>
  );
}

export default App;
