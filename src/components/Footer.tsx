'use client';
import { Typography } from '@material-tailwind/react';
import { MediaMenu } from './MediaMenu';

export function Footer() {

  const navItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Equipe', link: '/equipe' },
    { label: 'Depoimentos', link: '/depoimentos' },
    { label: 'Trajetória', link: '/trajetoria' },
  ];

  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between md:max-w-7xl mx-auto">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Typography
                as="a"
                href={item.link}
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                {item.label}
              </Typography>
            </li>
          ))}

        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Move potências da Quebrada
      </Typography>
      <MediaMenu />
    </footer>
  );
}
