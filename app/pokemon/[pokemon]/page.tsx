// app/pokemon/[pokemon]/page.tsx

'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Definindo a tipagem do objeto do Pokémon
interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

const typeColors: { [key: string]: string } = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  ice: 'bg-blue-300',
  fighting: 'bg-orange-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-blue-200',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-400',
  fairy: 'bg-pink-300',
  normal: 'bg-gray-500',
};

const Pokemon = () => {
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const imgPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (pokemon) {
        try {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          );
          const data = await res.json();
          console.log(data); // Verifica o conteúdo dos dados no console
          setPokemonData(data);
        } catch (error) {
          console.error('Erro ao buscar o Pokémon:', error);
        }
      }
    };

    fetchPokemonData();
  }, [pokemon]);

  // Verifica se pokemonData ainda é nulo
  if (!pokemonData) {
    return <div>Carregando...</div>;
  }

  // Mapeia os tipos para exibir seus nomes
  pokemonData.types
    .map(typeInfo => typeInfo.type.name)
    .join(', ');

  return (
    <div className='text-center  '>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-[2.5em] font-bold capitalize bg-[#333] text-[#fff] p-[0.3em] my-[0.8em] mx-auto w-[300px] '>
          {pokemonData.name}
        </h1>
        <Image src={imgPoke} width='200' height='200' alt={pokemonData.name} />
      </div>

      <div>
        <h3 className='text-[1.2em] font-bold my-[0.6em] mx-auto '>Número: </h3>
        <p>#{pokemon}</p>
      </div>

      <div>
        <h3 className='text-[1.2em] font-bold my-[0.6em] mx-auto '>Tipo: </h3>
        <div className='flex items-center justify-center space-x-2'>
          {pokemonData.types.map((typeInfo: PokemonType, index: number) => (
            <div
              key={index}
              className={`py-[0.6em] px-[1em] text-[#fff] mr-[0.5em] border divide-solid border-[#ccc] rounded-[6px] uppercase text-[0.8em] ${
                typeColors[typeInfo.type.name] || 'bg-gray-500'
              }`}
            >
              {typeInfo.type.name}
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center mt--[0.5em] '>
        <div className='my-[1em] mx-0 py-0 px-[1em] flex items-center justify-center flex-col border-r-2 solid border-[#CCC] '>
          <h4 className='text-1xl font-bold  '>Altura: </h4>
          <p>{pokemonData.height * 10} cm</p>
        </div>

        <div className='my-[1em] mx-0 py-0 px-[1em] flex items-center justify-center flex-col '>
          <h4 className='text-1xl font-bold'>Peso: </h4>
          <p>{pokemonData.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
