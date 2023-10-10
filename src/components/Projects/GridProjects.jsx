import React, { useState } from 'react';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

function GridProjects({ projects, selectedCategory, onProjectClick, toggleCategoryInfo, categoryInfo }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredProjects =
    selectedCategory === null
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categoryLabel = selectedCategory === null ? 'Todos' : selectedCategory;

  const handleToggleCategoryInfo = (category) => {
    if (category === expandedCategory) {
      // Se a categoria já está expandida, feche-a
      setExpandedCategory(null);
    } else {
      // Se a categoria não está expandida, abra-a e mostre as informações
      setExpandedCategory(category);
    }
  };

  const getCategoryInfo = (category) => {
    // Encontre o projeto com base na categoria e retorne suas informações específicas
    const project = projects.find((project) => project.category === category);
    return project ? project.otherInfo : '';
  };

  return (
    <div className="projectsbox">
      <span>Categoria: {categoryLabel} <button onClick={() => handleToggleCategoryInfo(selectedCategory)}><AiOutlineQuestionCircle /></button></span>
      {/* <button onClick={() => handleToggleCategoryInfo(selectedCategory)}><AiOutlineQuestionCircle /></button> */}
      {expandedCategory === selectedCategory && (
        <span>
          <p>Informações da Categoria: {getCategoryInfo(selectedCategory)}</p>
        </span>
      )}
      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item" onClick={() => onProjectClick(project.id)}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='projectsinfodetails'>Categoria: {project.category}</div>
            <button>detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridProjects;
