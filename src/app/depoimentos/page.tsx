'use client';
import DepoCarrousel from '@/components/DepoCarrousel';
import { Card, Typography } from '@material-tailwind/react';

export default function Depoimentos() {
  const videoList = [
    {
      link: 'https://youtube.com/shorts/p3uDqW34NRg',
      title: 'Joane Macieira',
      description: '',
    },    {
      link: 'https://youtube.com/shorts/kNxueOAshfI?feature=share',
      title: 'Ana Carolina',
      description: '',
    },
    {
      link: 'https://youtube.com/shorts/SVZRrCYRuIc',
      title: 'Estudante EJA Martinho Salles - SFC',
      description: '',
    },
    {
      link: 'https://youtube.com/shorts/6nk31wloWM0?feature=share',
      title: 'Estudante Martinho Salles - SFC',
      description: '',
    },
    {
      link: 'https://youtube.com/shorts/4EkanZRqqDg',
      title: 'Estudante Martinho Salles - SFC',
      description: '',
    },
  ];

  return (
    <div className="items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img alt="nature" className="w-full" src="/assets/logo.png" />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Depoimentos
          </Typography>
          <Typography color="gray" className="font-normal">
            Os relatos que você encontrará aqui refletem as transformações que o
            *Move Potências da Quebrada* promove. Por meio de cursos, rodas de
            conversa, oficinas criativas e ações sociais, despertamos talentos,
            fortalecemos identidades e inspiramos mudanças. Confira como nossas
            iniciativas impactaram vidas e ajudaram a revelar o potencial de
            cada participante.
          </Typography>
        </div>
        <DepoCarrousel videos={videoList} />
      </main>
    </div>
  );
}
