'use client';
import { Button, Card, Typography } from '@material-tailwind/react';
import Image from 'next/image';

export default function Equipe() {
  // Dados fictícios dos membros da equipe
  const membros = [
    {
      nome: 'Evanilson Alves',
      cargo: 'Criador e Poeta do Move Potências',
      descricao:
        'Evanilson Alves dos Santos é poeta, escritor e ativista cultural de Salvador, BA. Com 33 anos, é idealizador do coletivo Sarau da Onça e do Grupo Recital Ágape. Também é Slammaster do Slam Deixa Acontecer e professor na Fundac. Publicou três livros e participou de várias antologias. Seus poemas de protesto abordam questões sociais e refletem a realidade periférica. Destaca-se na literatura marginal baiana e tem experiência como oficineiro e em eventos como o Campeonato Brasileiro de Poesia. Em 2018, foi vice-campeão no Campeonato Brasileiro de Poesia em Dupla.',
      imagem: '/assets/evanilson.jpg',
    },
    {
      nome: 'Raiani Alcides',
      cargo: 'Poetisa e Fotógrafa',
      descricao:
        'Raiani Alcides é poetisa, fotógrafa, mobilizadora cultural, mobilizadora de juventude e professora de tecnologia. Com um olhar sensível e artístico, ela se dedica a capturar e expressar as histórias e vivências das comunidades que retrata. Seu trabalho é marcado pela busca de autenticidade e pela valorização das narrativas periféricas, sempre com um enfoque social e transformador. Além de sua atuação como artista, Raiani é uma facilitadora de processos culturais e de empoderamento juvenil, focando especialmente em meninas pretas, com o objetivo de quebrar paradigmas e abrir espaços para essas jovens no ambiente da tecnologia. Como professora de tecnologia, ela se dedica a formar e capacitar essas meninas, conectando-as à sua própria identidade e ao potencial criativo, enquanto as prepara para o futuro, unindo arte e inovação.',
      imagem: '/assets/ray.jpg',
    },
    {
      nome: 'Lorena Lais',
      cargo: 'Filmaker',
      descricao:
        'Lorena é social media e filmaker no Instagram do projeto Move Potências. Com experiência em fotografia, filmagem com dispositivos móveis e edição de vídeo, ela se especializa na produção de conteúdo audiovisual para eventos culturais e literários. Sua paixão é capturar momentos autênticos, compartilhando vídeos e coberturas ao vivo nos stories para criar uma experiência envolvente. Seu trabalho foca em fortalecer a presença digital do projeto e engajar a audiência, destacando o valor cultural de cada evento registrado.',
      imagem: '/assets/lorena.jpg',
    },
    {
      nome: 'Joice Mota',
      cargo: 'Produtora excutiva',
      descricao:
        'Joice Mota dos Santos, 35 anos, é uma mulher negra e candomblecista, e atua como produtora executiva no projeto Move Potências da Quebrada. Seu trabalho e vida são dedicados ao fortalecimento da cultura afro-brasileira, buscando abrir caminhos para que jovens e crianças possam se expressar artisticamente e se reconhecer em suas próprias histórias.',
      imagem: '/assets/joice.png',
    },
    {
      nome: 'Diego França',
      cargo: 'Consultor de TI e Produtor cultural',
      descricao:
        'Diego França é consultor de TI e produtor cultural, unindo seu conhecimento técnico à paixão pela cultura. Com uma abordagem inovadora, ele aplica sua expertise em tecnologia para impulsionar projetos culturais e sociais, criando soluções eficientes e impactantes. Diego se dedica a fortalecer a cena cultural, utilizando sua visão estratégica e habilidades em TI para transformar ideias em realidade, sempre com foco no desenvolvimento e na conectividade das iniciativas culturais.',
      imagem: '/assets/diego.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex flex-col items-center py-12 px-4 sm:px-8">
        <div className="mx-auto max-w-screen-md text-center">
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Conheça Nossa Equipe
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Nosso time é formado por profissionais dedicados que trabalham
            juntos para transformar a realidade da comunidade.
          </Typography>
        </div>

        {/* Seção da equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {membros.map((membro, index) => (
            <Card key={index} className="max-w-xs mx-auto shadow-lg">
              <Image
                width={200}
                height={200}
                alt={membro.nome}
                src={membro.imagem}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <Typography variant="h6" className="font-semibold mb-2">
                  {membro.nome}
                </Typography>
                <Typography color="blue-gray" className="font-normal mb-2">
                  {membro.cargo}
                </Typography>
                <Typography color="gray" className="font-normal mb-4">
                  {membro.descricao}
                </Typography>
                <Button variant="outlined" fullWidth>
                  Saiba mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
