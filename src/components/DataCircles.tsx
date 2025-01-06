const DataCircles = () => {
  const data = [
    { value: "480", description: "JOVENS E PROFESSORES CAPACITADOS EM OFICINAS DE ESCRITA CRIATIVA" },
    { value: "240", description: "JOVENS CAPACITADOS EM OFICINAS DE AUDIOVISUAL E MÍDIA" },
    { 
      value: "320", 
      description: "MULHERES PARTICIPANTES, SENDO 80 JOVENS EMPREENDEDORAS FORMADAS EM OFICINAS DE ESCRITA POÉTICA E PRODUÇÃO ARTESANAL" 
    },
    { 
      value: "87.6%", 
      description: "DOS PARTICIPANTES SE AUTODECLARAM NEGROS OU PARDOS, FORTALECENDO A REPRESENTATIVIDADE DA PERIFERIA SOTEROPOLITANA" 
    },
    { 
      value: "90%", 
      description: "DOS JOVENS CONTINUAM ENGAJADOS EM COLETIVOS OU AÇÕES ARTÍSTICAS APÓS AS OFICINAS" 
    },
    { value: "2", description: "MINIDOCUMENTÁRIOS PRODUZIDOS POR JOVENS DA PERIFERIA" },
    { value: "+2.000", description: "JOVENS, EDUCADORES E ARTISTAS DIRETAMENTE IMPACTADOS ENTRE 2011 E 2024" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-10">
      {data.map((item, index) => (
        <div key={index} className="circle hover:scale-110 mt-8 mb-8">
          <h2>{item.value}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataCircles;
