import Image from 'next/image';
import char from '../public/images/charizard.png';

export default function About() {
  return (
    <div className='text-center  '>
      <h1 className='text-[2em] font-bold mb-[1em] '>Sobre o projeto</h1>
      <p className='mg-[1.5em] max-w-lg mt-0 mx-auto mb-[1.5em] leading-6 '>
        Colocar um texto falando do porque o projeto foi criado e para que ele
        serve sua finalidade e etc
      </p>
      <div className='flex justify-center mt-4'>
        <Image src={char} width={300} height={300} alt='Charizard'  style={{ objectFit: 'contain' }}/>
      </div>
    </div>
  );
}
