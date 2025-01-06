'use client';
import { Typography } from '@material-tailwind/react';
import { MediaMenu } from './MediaMenu';

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between md:max-w-7xl mx-auto">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Inicio
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/depoimentos"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Depoimentos
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/trajetoria"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Trajetória
            </Typography>
          </li>
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
