import React, { useState } from 'react';
import { Select } from 'antd';
import { ImSearch } from 'react-icons/im';

function Sidebar({ categories, selectedCategory, onSelectCategory, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [searchInputVisible, setSearchInputVisible] = useState(false);


  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setActiveItem(category);
  };

  const handleCategoryChange = (selectedCategory) => {
    onSelectCategory(selectedCategory);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const toggleSearchInput = () => {
    setSearchInputVisible(!searchInputVisible);
  };

  return (
    <div className="sidebarprojects">
      <div className="mobile-controls">
        {searchInputVisible && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar por título..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button onClick={handleSearchClick}>
              <ImSearch />
            </button>
          </div>
        )}
        <h1>Projetos</h1>
        <Select
          value={selectedCategory}
          style={{
            width: 200, // Defina a largura conforme necessário
          }}
          onChange={handleCategoryChange}
          defaultValue="Selecione uma categoria"
        >
          <Select.Option onClick={() => handleCategoryClick(null)}>Todas</Select.Option>
          {categories.map((category) => (
            <Select.Option key={category} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
        <button className="search-toggle" onClick={toggleSearchInput}>
          {searchInputVisible ? 'X' : <ImSearch />}
        </button>
      </div>
      <div className='desktop-controls'>
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
    </div>
  );
}

export default Sidebar;
