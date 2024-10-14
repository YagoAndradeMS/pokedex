'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card';
import p from './public/images/p.png';

type Pokemon = {
  name: string;
  url: string;
  id: number;
};

async function fetchPokemons(
  offset: number,
  limit: number
): Promise<Pokemon[]> {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const res = await fetch(`${api}?offset=${offset}&limit=${limit}`);
  const data = await res.json();

  return data.results.map(
    (item: { name: string; url: string }, index: number) => ({
      ...item,
      id: offset + index + 1,
    })
  );
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMorePokemons = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    console.log(`Loading more Pokémon... Offset: ${offset}`);
    const newPokemons = await fetchPokemons(offset, 20);

    setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
    setOffset(prevOffset => prevOffset + 20);

    // Verificar se há mais pokémons para carregar
    if (newPokemons.length < 20) {
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMorePokemons();
        }
      },
      { threshold: 1.0 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [loading, hasMore]);

  {
    /*Home page interface*/
  }
  return (
    <>
      <div className='flex justify-center items-center mb-[2em]'>
        <h1 className='text-5xl font-bold text-[#E33D33] mr-[0.4em]'>
          Poke<span className='text-slate-800'>Next</span>
        </h1>
        <Image src={p} width='50' height='50' alt='PokeNext' />
      </div>

      <div className='flex flex-wrap justify-between items-center max-w-[1100px] my-0 mx-auto text-center'>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <div ref={observerRef} style={{ height: '1px' }}></div>
    </>
  );
}
