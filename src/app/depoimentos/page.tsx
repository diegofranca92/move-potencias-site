'use client';
import DepoCarrousel from '@/components/DepoCarrousel';
import { Card, Typography } from '@material-tailwind/react';

export default function Depoimentos() {
  const videoList = [
    {
      link: 'https://youtube.com/shorts/kNxueOAshfI?feature=share',
      title: 'Short 1',
      description: 'Descrição breve do primeiro vídeo.',
    },
    {
      link: 'https://youtube.com/shorts/6nk31wloWM0?feature=share',
      title: 'Short 2',
      description: 'Descrição breve do segundo vídeo.',
    },
    {
      link: 'https://youtube.com/shorts/4EkanZRqqDg',
      title: 'Short 3',
      description: 'Descrição breve do terceiro vídeo.',
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
            O Move Potências da Quebrada é um empreendimento social dedicado a
            qualificar e despertar habilidades por meio de cursos livres de
            escrita criativa de poesia, empreendedorismo, áudio visual, teatro,
            rodas de conversa, consultorias, ações sociais e eventos diversos.
          </Typography>
        </div>
        <DepoCarrousel videos={videoList} />
      </main>
    </div>
  );
}
