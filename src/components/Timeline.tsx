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
  color:
    | 'blue-gray'
    | 'gray'
    | 'brown'
    | 'deep-orange'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'light-green'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'light-blue'
    | 'blue'
    | 'indigo'
    | 'deep-purple'
    | 'purple'
    | 'pink'
    | 'red';
  date?: string;
};

const timelineData: TimelineEvent[] = [
  {
    year: '2019',
    title: 'Escola Politizada: Poesia de Quebrada',
    description:
      'Oficinas criativas e saraus em escolas públicas. Impacto: Fortalecimento da autoestima e identidade cultural de jovens.',
    color: 'blue',
    date: '',
  },
  {
    year: '2020',
    title: 'Ampliação das Parcerias',
    description:
      'Novas instituições atendidas e envolvimento de adolescentes em situação de vulnerabilidade. Produções premiadas.',
    color: 'yellow',
    date: '',
  },
  {
    year: '2023',
    title: 'Expansão das Atividades',
    description:
      'Novas oficinas alcançando +300 participantes em Salvador. Ampliação de redes com coletivos artísticos e maior visibilidade digital.',
    color: 'cyan',
    date: '',
  },
  {
    year: '2024',
    title: 'Criação de Nucleo São Francisco do Conde',
    description:
      'Em 2024, tivemos a ampliação de equipe com a criação de um novo núcleo em São Francisco do Conde, BA, Tendo como responsável A produtora cultural Raiani Alcides e Diego França.',
    color: 'deep-orange',
    date: '',
  },
];

interface MoveTimelineOptions {
  showAll?: boolean;
}

export function MoveTimeline({ showAll }: MoveTimelineOptions) {
  return (
    <div className="w-[25rem] mx-auto">
      <Timeline>
        {timelineData
          .slice(0, showAll ? timelineData.length : 3)
          .map((event, index) => (
            <TimelineItem
              key={event.year}
              className="md:h-28 h-auto my-4 group"
            >
              {index < timelineData.length - 1 && (
                <TimelineConnector className="md:!w-[78px] !w-[108px]" />
              )}

              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon
                  className="p-3"
                  variant="ghost"
                  color={event.color}
                >
                  {event.year}
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    {event.title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="md:hidden"
                  >
                    {event.description}
                  </Typography>
                </div>

                {/* Descrição oculta até o hover e aparece à direita */}
                <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-64 p-4 bg-gray-100 rounded-md opacity-0 md:group-hover:opacity-100 md:group-hover:w-72 md:group-hover:block transition-all duration-300">
                  <Typography variant="small" color="gray">
                    {event.description}
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          ))}
      </Timeline>
      {!showAll && (
        <Link className="mt-4 text-blue-600" href={'/trajetoria'}>
          Ver Mais
        </Link>
      )}
    </div>
  );
}
