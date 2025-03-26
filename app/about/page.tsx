import Image from 'next/image';
import char from '../public/images/charizard.png';

export default function About() {
  return (
    <div className='text-center p-5 '>
      <h1 className='text-[2em] font-bold mb-[1em] '>Sobre o projeto</h1>
      <p className='mg-[1.5em] max-w-lg mt-0 mx-auto mb-[1.5em] leading-6 '>
        O PokeNext é uma aplicação desenvolvida com Next.js que permite explorar
        informações detalhadas sobre Pokémon de forma rápida e intuitiva.
        Utilizando uma API de terceiros, o PokeNext busca dados em tempo real,
        garantindo sempre as informações mais atualizadas sobre cada criatura do
        universo Pokémon. Com uma interface dinâmica e responsiva, o PokeNext
        foi projetado para proporcionar uma experiência fluida tanto em
        dispositivos móveis quanto em desktops. Seja para pesquisar
        estatísticas, habilidades ou curiosidades, essa aplicação é uma
        ferramenta essencial para fãs da franquia e entusiastas do mundo
        Pokémon. Sinta-se à vontade para explorar e descobrir tudo sobre seus
        Pokémon favoritos!
      </p>
      <div className='flex justify-center mt-4'>
        <Image
          src={char}
          width={300}
          height={300}
          alt='Charizard'
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
