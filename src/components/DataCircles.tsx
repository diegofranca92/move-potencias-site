const DataCircles = () => {
  const data = [
    { value: "+960", description: "Jovens e professores capacitados em oficinas de escrita criativa" },
    { value: "240", description: "Jovens capacitados em oficinas de audiovisual e mídia" },
    { 
      value: "+320", 
      description: "Mulheres participantes, sendo 80 jovens empreendedoras formadas em oficinas de escrita poética e produção artesanal" 
    },
    { 
      value: "87.6%", 
      description: "Dos participantes se autodeclaram negros ou pardos, fortalecendo a representatividade da periferia soteropolitana" 
    },
    { 
      value: "90%", 
      description: "Dos jovens continuam engajados em coletivos ou ações artísticas após as oficinas" 
    },
    { value: "+4.000", description: "Jovens, educadores e artistas diretamente impactados entre 2011 e 2024" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 px-10 md:max-w-7xl mx-auto">
      {data.map((item, index) => (
        <div key={index} className="circle hover:scale-110 mt-8 mb-8">
          <h2 className="font-bold text-3xl">{item.value}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataCircles;
