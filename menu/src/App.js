import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return(
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>menu</h2>
          <div className='underline'></div>
        </div>
      </section>

      <Categories />
      <Menu />
            
    </main>    
  )
}

export default App;
