'use client';
import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  color: "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";
  date?: string;
};


const timelineData: TimelineEvent[] = [
  {
    year: "2011",
    title: "Fundação",
    description:
      "Fundado por Evanilson Alves dos Santos e outros artistas de Sussuarana, Salvador. Objetivo: Utilizar a poesia e outras expressões artísticas para transformar narrativas das periferias.",
    color: "blue",
    date: "",
  },
  {
    year: "2015",
    title: "Reconhecimento Internacional",
    description:
      "Participação no 29º Salão do Livro e da Imprensa de Genebra, Suíça. Impacto: Poesia periférica representada no cenário internacional.",
    color: "red",
    date: "",
  },
  {
    year: "2016",
    title: "Protagonismo em Campeonatos",
    description:
      "Participação no Campeonato Brasileiro de Poesia Falada. Finalista solo (2016) e vice-campeão em dupla (2018).",
    color: "green",
    date: "",
  },
  {
    year: "2019",
    title: "Escola Politizada: Poesia de Quebrada",
    description:
      "Oficinas criativas e saraus em escolas públicas. Impacto: Fortalecimento da autoestima e identidade cultural de jovens.",
    color: "blue",
    date: "",
  },
  {
    year: "2020",
    title: "Ampliação das Parcerias",
    description:
      "Novas instituições atendidas e envolvimento de adolescentes em situação de vulnerabilidade. Produções premiadas.",
    color: "yellow",
    date: "",
  },
  {
    year: "2022",
    title: "Produção Artística",
    description:
      "Produções culturais: minidocumentário, livro artesanal, poemas em lambes por postes e praças, fortalecendo a conexão cultural.",
    color: "purple",
    date: "",
  },
  {
    year: "2023",
    title: "Expansão das Atividades",
    description:
      "Novas oficinas alcançando +300 participantes em Salvador. Ampliação de redes com coletivos artísticos e maior visibilidade digital.",
    color: "cyan",
    date: "",
  },
  {
    year: "2024",
    title: "Ampliação de Equipe e Expansão",
    description:
      "Em 2024, tivemos a ampliação de equipe com a criação de um novo núcleo em São Francisco do Conde, BA. Além disso, já realizamos diversas oficinas.",
    color: "deep-orange",
    date: "",
  },
];

interface MoveTimelineOptions {
  showAll?: boolean
}

export function MoveTimeline({showAll}: MoveTimelineOptions) {
  return (
    <div className="w-[25rem] mx-auto">
      <Timeline>
        {timelineData.slice(0, showAll ? timelineData.length : 3).map((event, index) => (
          <TimelineItem key={event.year} className="h-28 group">
            {index < timelineData.length - 1 && (
              <TimelineConnector className="!w-[78px]" />
            )}
            
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color={event.color}>
                {event.year}
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  {event.title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {event.date}
                </Typography>
              </div>
              {/* Descrição oculta até o hover e aparece à direita */}
              <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-64 p-4 bg-gray-100 rounded-md opacity-0 group-hover:opacity-100 group-hover:w-72 group-hover:block transition-all duration-300">
                <Typography variant="small" color="gray">
                  {event.description}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
      {!showAll && (
        <Link
          className="mt-4 text-blue-600"
          href={'/trajetoria'}
        >
          Ver Mais
        </Link>
      )}
    </div>
  );
}
