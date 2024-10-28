import Image from 'next/image';
import Link from 'next/link';
import p from '../app/public/images/p.png';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-[1em] px-[1em] mb-[2em] bg-slate-800 text-white '>
      <div className='flex justify-center items-center'>
        <Image src={p} width={30} height={30} alt='PokeNext' style={{ objectFit: 'contain' }} />
        <h1 className='font-bold ml-[.5em] text-2xl'>PokeNext</h1>
      </div>

      <div className='flex'>
        <ul className='flex list-none '>
          <li className='ml-[1.3em]'>
            <Link
              href='/'
              className='p-1 border-b-2 border-transparent transition duratoin-400 hover:border-white '
            >
              Home
            </Link>
          </li>
          <li className='ml-[1.3em]'>
            <Link
              href='/about'
              className='p-1 border-b-2 border-transparent transition duratoin-400 hover:border-white '
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
