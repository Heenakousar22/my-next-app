
import Image from 'next/image';
import acmeLogo from './assets/acme.png';
import apexLogo from './assets/apex.png';
import celestialLogo from'./assets/celestial.png';

const images = [
  { src: acmeLogo, alt: 'acmelogo' },
  { src: apexLogo, alt: 'apexlogo' },
  {src: celestialLogo ,alt:'celestiallogo'}

];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] py-24">
      <div className="container">
        <h2 className='text-xl text-center  text-white/70'>Trusted by the most innovative teams</h2>

        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute before:h-full after:h-full before:w-5 after:w-5 relative   after:right-0 before:left-0 before:top-0 after:top-0  before:bg-[linear-gradient(to-right,#000, rgb(0,0,0,0))]">
           
          <div className="flex gap-16">
            {images.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};