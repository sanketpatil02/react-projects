import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return(
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>menu</h2>
          <div className='underline'></div>
        </div>
      </section>

      <Categories />
      <Menu items={menuItems}/>
    </main>
  )
}

export default App;
