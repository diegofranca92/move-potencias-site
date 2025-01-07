'use client';
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';

export function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [visibleContact, setVisibleContact] = useState<{
    [key: number]: boolean;
  }>({});

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Equipe', link: '/equipe' },
    { label: 'Depoimentos', link: '/depoimentos' },
    { label: 'Trajetória', link: '/trajetoria' },
    {
      label: 'Contrate',
      link: '',
      destaque: true,
      showContact: true,
    },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item, index) => (
        <Typography
          as="li"
          key={index}
          variant="small"
          color="white"
          className="font-normal"
        >
          <a
            href={item.link}
            className={`flex items-center hover:border-b-2 border-white ${
              item.destaque ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              if (item.showContact) {
                e.preventDefault();
                setVisibleContact((prevState) => ({
                  ...prevState,
                  [index]: !prevState[index], // Alterna o estado de visibilidade para o item clicado
                }));
              }
            }}
          >
            {item.label}
          </a>
          {visibleContact[index] && item.showContact && (
            <div className="absolute bg-white text-black p-4 mt-2 rounded-md shadow-md">
              <p className="mb-2 flex justify-between items-center">
                Telefone: <span className="font-bold">+55 71 8259-1344</span>
                <IconButton
                  variant="text"
                  className="text-black"
                  onClick={() =>
                    setVisibleContact((prevState) => ({
                      ...prevState,
                      [index]: false, // Fecha o contato
                    }))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </p>
              <p className="mb-2">
                E-mail:{' '}
                <span className="font-bold">
                  movepotenciasdaquebrada@gmail.com
                </span>
              </p>
            </div>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 rounded-none bg-primary border-none">
      <div className="flex items-center justify-between text-blue-gray-900 md:max-w-7xl mx-auto">
        <a
          href="/"
          className="border-b-2 border-secondary text-center font-bold text-lg"
        >
          Move Potências da Quebrada
        </a>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button
              variant="filled"
              size="sm"
              className="bg-secondary text-white hidden lg:inline-block"
            >
              <span>Apoie</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Contrate</span>
          </Button>
          <Button
            variant="filled"
            size="sm"
            className="bg-secondary text-primary"
          >
            <span>Apoie</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
