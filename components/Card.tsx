import Image from 'next/image';
import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  const imgPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className='flex justify-center items-center flex-col py-3 px-2 mb-8 mx-auto border-2 border-[#E33D33] rounded-2xl shadow-2xl bg-[#333] text-white w-72 '>
      <Image src={imgPoke} width='150' height='150' alt={pokemon.name} />

      <p className=' my-4 bg-[#e33d33] p-1 text-white flex items-center justify-center rounded-md '>
        #{pokemon.id}
      </p>

      <h3 className='text-2xl capitalize font-bold text-white mb-4 '>
        {pokemon.name}
      </h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className='bg-[#FFF] text-[#222] py-3 px-5 rounded-md font-bold transition-all duration-400 ease-in-out hover:bg-[#e33d33] hover:text-white  '
      >
        Detalhes
      </Link>
    </div>
  );
}
