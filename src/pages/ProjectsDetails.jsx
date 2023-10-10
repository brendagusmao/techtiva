import React, { useState } from 'react';
import Nav from '../components/navegation/Nav2';
import { Link, useParams } from 'react-router-dom';
import projectData from '../data/GridProjects'; 
import { BiArrowBack } from 'react-icons/bi';
import { Image } from 'antd';

function ProjectDetails() {
  const { projectId } = useParams(); // Obtém o parâmetro de URL "projectId"

  // Encontre o projeto correspondente com base no ID
  const project = projectData.find((project) => project.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
    <Nav />
    <main className='detailsmain'> 
    <Link to="/projects" className='back'><BiArrowBack className='backicon' />Voltar</Link> {/* Adicione este Link */}
      <div className='imagem'>
      <Image src={project.imageUrl} alt={project.title} />
      </div>
      <div className='detailsdesc'>
        <h3>Detalhes</h3>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <span>Categoria: {project.category}</span>
        {/* Adicione outros detalhes do projeto aqui */}
      </div>
    </main>
    </>
  );
}

export default ProjectDetails;