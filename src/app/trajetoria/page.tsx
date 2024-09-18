'use client';
import { MoveTimeline } from '@/components/Timeline';
import { Card, Typography } from '@material-tailwind/react';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img alt="nature" className="w-full" src="/assets/logo.png" />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Nossa Trajetória
          </Typography>
          <Typography color="gray" className="font-normal">
            O Move Potências da Quebrada é um empreendimento social dedicado a
            qualificar e despertar habilidades por meio de cursos livres de
            escrita criativa de poesia, empreendedorismo, áudio visual, teatro,
            rodas de conversa, consultorias, ações sociais e eventos diversos.
          </Typography>
        </div>
        <MoveTimeline />
      </main>
    </div>
  );
}
