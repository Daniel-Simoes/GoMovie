import React, { FunctionComponent } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import Logo from '../../assets/logo.png';
import { Title, Form, Movie } from './styles';

const Dashboard: FunctionComponent = () => {
  return (
    <>
      <img src={Logo} alt='GoMovie' />
      <Title>Find information about Films</Title>

      <Form>
        <input placeholder="Type a movie name..."/>
        <button type="submit"> Enter</button>
      </Form>
      <Movie>
        <a href="test">
          <img 
          src="http://www.omdbapi.com/src/poster.jpg" 
          alt="filme"
          />
          <div>
            <strong>Blade Runner 2049</strong>
            <p>2017</p>
            <p>ficção científica</p>
            <p>Decorridos trinta anos após o filme original, a trama acompanha os passos de K, um replicante (humano sintético criado por bioengenharia) que trabalha como Blade Runner para a polícia de Los Angeles. Após descobrir um inacreditável segredo com o potencial de mergulhar no caos o que resta da sociedade, o qual também mexe com sua razão de ser e existir, K recebe uma missão secreta que aparenta estar ligada a Rick Deckard, um antigo Blade Runner desaparecido há 30 anos.</p>
            <p>Denis Villeneuve</p>
            <p>Ryan Gosling, Harrison Ford, Ana de Armas, Sylvia Hoeks, Robin Wright, Mackenzie Davis</p>
            <p>8.7</p>
            <p>2 Oscars</p>
          </div>

        <FiChevronRight size={200} />
        </a>
        <a href="test">
          <img 
          src="http://www.omdbapi.com/src/poster.jpg" 
          alt="filme"
          />
          <div>
            <strong>Blade Runner 2049</strong>
            <p>2017</p>
            <p>ficção científica</p>
            <p>Decorridos trinta anos após o filme original, a trama acompanha os passos de K, um replicante (humano sintético criado por bioengenharia) que trabalha como Blade Runner para a polícia de Los Angeles. Após descobrir um inacreditável segredo com o potencial de mergulhar no caos o que resta da sociedade, o qual também mexe com sua razão de ser e existir, K recebe uma missão secreta que aparenta estar ligada a Rick Deckard, um antigo Blade Runner desaparecido há 30 anos.</p>
            <p>Denis Villeneuve</p>
            <p>Ryan Gosling, Harrison Ford, Ana de Armas, Sylvia Hoeks, Robin Wright, Mackenzie Davis</p>
            <p>8.7</p>
            <p>2 Oscars</p>
          </div>

        <FiChevronRight size={200} />
        </a>
      </Movie>
    </>
  )
};

export default Dashboard;