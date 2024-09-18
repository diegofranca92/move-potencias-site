import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
} from '@material-tailwind/react';
import React from 'react';

export function MoveAccordion() {
  const [open, setOpen] = React.useState(3);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 mt-8 rounded-lg border border-blue-gray-100 px-4 sticky top-16"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors bg-white ${
            open === 1 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          Missão
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Nossa missão é promover o desenvolvimento pessoal e profissional de
          jovens periféricos, estudantes de escolas públicas e privadas, através
          de uma abordagem criativa e inclusiva, visando a valorização da
          cultura e o fortalecimento das comunidades locais.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4 sticky top-16"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          Público-Alvo:
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Prioritariamente direcionado a estudantes de escolas públicas e
          privadas, especialmente jovens periféricos, o Move Potências da
          Quebrada também oferece cursos livres e imersões para professores da
          rede pública e privada, assim como para comunidades tradicionais e
          povos de terreiro.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4 sticky top-16"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? 'text-primary hover:!text-primary' : ''
          }`}
        >
          Principais Atividades:
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <List>
            <ListItem>Cursos de escrita criativa de poesia</ListItem>
            <ListItem> Cursos de empreendedorismo</ListItem>
            <ListItem>Cursos de áudio visual</ListItem>
            <ListItem>Cursos de teatro</ListItem>
            <ListItem>Cursos de áudio visual</ListItem>
            <ListItem>Cursos de áudio visual</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
    </>
  );
}
