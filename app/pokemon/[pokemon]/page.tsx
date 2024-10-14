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
  const typeNames = pokemonData.types
    .map(typeInfo => typeInfo.type.name)
    .join(', ');

  return (
    <div>
      <h1 className='text-3xl font-bold'>{pokemonData.name}</h1>
      <Image src={imgPoke} width='200' height='200' alt={pokemonData.name} />
      <div>
        <h3>Número: </h3>
        <p>#{pokemon}</p>
      </div>
      <div>
        <h3>Tipo: </h3>
        <div>{typeNames}</div>
      </div>
    </div>
  );
};

export default Pokemon;
