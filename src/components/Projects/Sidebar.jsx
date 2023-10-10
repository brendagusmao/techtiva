import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

function Sidebar({ categories, selectedCategory, onSelectCategory, onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeItem, setActiveItem] = useState(null);

    const handleCategoryClick = (category) => {
      onSelectCategory(category);
      setActiveItem(category);
    };
  
    const handleSearchInputChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
    };
  
    const handleSearchClick = () => {
      onSearch(searchQuery);
    };

    return (
      <div className="sidebarprojects">
        <h2>Projetos</h2>
        <h3>O seu site, a sua maneira: Modelos de Páginas Flexíveis.</h3>
        <p>Pesquise por palavra chave:</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar por título..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearchClick}><ImSearch /></button>
        </div>
        <h1>Categorias</h1>
        <ul>
          <li
            className={activeItem === null ? 'active-item' : ''}
            onClick={() => handleCategoryClick(null)}
          >
            Todas
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={activeItem === category ? 'active-item' : 'inactive-item'}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Sidebar;
