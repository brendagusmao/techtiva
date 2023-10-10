import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from '../components/navegation/Nav2';
import Sidebar from '../components/Projects/Sidebar';
import Projects from '../components/Projects/GridProjects';
import '../css/Projects.css';
import Footer from './Footer';
import projectData from '../data/GridProjects';
// import About from './About';

function SeeProjects() {
  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3']; // Defina suas categorias

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Limpa o campo de pesquisa ao selecionar uma categoria
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProjects = projectData.filter((project) => {
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedCategory && project.category !== selectedCategory) {
      return false;
    }
    return true;
  });
  const navigate = useNavigate();
  const handleProjectClick = (projectId) => {
    // Navegue para a rota de detalhes do projeto com base no ID do projeto
    navigate(`/projects/details/${projectId}`);
  };

  return (
      <>
      <Nav />
      <div class="testegrid">
      <Sidebar categories={categories} onSelectCategory={handleCategorySelect} onSearch={handleSearch} />
      <Projects projects={filteredProjects} selectedCategory={selectedCategory} onProjectClick={handleProjectClick}/>
      </div>
      <Footer />
      </>
  );
}

export default SeeProjects;
