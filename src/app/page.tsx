"use client";
import { Carrousel } from "@/components/Carrousel";
import { NavBar } from "@/components/Navbar";
import { MoveTimeline } from "@/components/Timeline";
import { Card, Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Carrousel />
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="w-full"
              src="/assets/logo.png"
            />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Noiz
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
