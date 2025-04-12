export const categorias = [
  {
    nome: "Masculino",
    imagem: "https://mizunobrio.vtexassets.com/assets/vtex.file-manager-graphql/images/f3bced30-c7a7-4f6f-a4dc-c81babc21f2c___6a02c2c8d0bd8c343a0c555700d1ba72.jpg",
    clique: "#",
    subcategorias: [
      {
        nome: "Camisetas",
        opcoes: [
          { texto: "Camisetas Básicas", clique: "#" },
          { texto: "Camisetas Estampadas", clique: "#" },
          { texto: "Camisetas Esportivas", clique: "#" },
        ]
      },
      {
        nome: "Calças",
        opcoes: [
          { texto: "Jeans", clique: "#" },
          { texto: "Moletom", clique: "#" },
          { texto: "Esportivas", clique: "#" },
        ]
      },
      {
        nome: "Acessórios",
        opcoes: [
          { texto: "Bonés", clique: "#" },
          { texto: "Meias", clique: "#" },
          { texto: "Cintos", clique: "#" },
        ]
      },
    ],
  },
  {
    nome: "Feminino",
    clique: "#",
    imagem: "https://mizunobrio.vtexassets.com/assets/vtex.file-manager-graphql/images/f3bced30-c7a7-4f6f-a4dc-c81babc21f2c___6a02c2c8d0bd8c343a0c555700d1ba72.jpg",
    subcategorias: [
      {
        nome: "Vestidos",
        opcoes: [
          { texto: "Vestidos Curtos", clique: "#" },
          { texto: "Vestidos Longos", clique: "#" },
          { texto: "Vestidos de Festa", clique: "#" },
        ]
      },
      {
        nome: "Blusas",
        opcoes: [
          { texto: "Blusas Básicas", clique: "#" },
          { texto: "Blusas Estampadas", clique: "#" },
          { texto: "Blusas de Manga Longa", clique: "#" },
        ]
      },
      {
        nome: "Saias",
        opcoes: [
          { texto: "Saias Jeans", clique: "#" },
          { texto: "Saias Plissadas", clique: "#" },
          { texto: "Saias Curtas", clique: "#" },
        ]
      },
    ],
  },
];
  
export const informativos = [
  {
    texto: "Descontos de até 50% na coleção de verão!",
  },
  {
    texto: "Novidades na coleção esportiva!",
  },
  {
    texto: "Frete grátis para todo o Brasil!",
  },
];

export const filtros = [
  { id: 1, nome: 'Marca',     tipo:'checkbox',          opcoes: ['Mizuno', 'Nike', 'Adidas', 'Puma'] },
  { id: 2, nome: 'Tamanho',   tipo:'checkbox',          opcoes: ['P', 'M', 'G', 'GG'] },
  { id: 3, nome: 'Cor',       tipo:'cores',             opcoes: ['Black', 'White', 'Blue', 'Red', 'Green', 'Orange', 'Purple', 'Yellow'] },
  { id: 4, nome: 'Preço',     tipo:'preco',             opcoes: ['Até R$ 100', 'R$ 100 - R$ 200', 'Acima de R$ 200'] }, 
];

export const produtos = [
  { id: 1,    nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 2,    nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 3,    nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 4,    nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 5,    nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 6,    nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 7,    nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 8,    nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 9,    nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 10,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 11,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 12,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 13,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 14,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 15,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 16,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  
  { id: 17,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 18,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 19,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 20,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 21,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 22,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 23,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 24,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 25,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 26,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 27,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 28,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 29,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 30,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 31,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 32,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  
  { id: 33,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 34,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 35,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 36,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 37,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 38,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 39,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 40,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 41,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 42,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 43,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 44,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 45,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 46,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  
  { id: 47,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 48,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 49,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 50,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 51,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 52,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 53,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 54,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 55,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 56,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 57,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 58,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 59,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 60,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 61,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 62,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg', desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  
  { id: 73,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 74,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 75,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 76,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 77,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 78,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 79,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 80,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 81,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 82,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 83,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 84,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 85,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 86,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  
  { id: 87,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 88,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 89,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 90,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 91,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 92,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 93,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 94,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 95,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 96,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 97,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 98,   nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 99,   nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 100,  nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 101,  nome: 'Tênis Masculino Mizuno Wave Prophecy 13', preco: 'R$ 999,99', imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/243833-1200-1200?v=638459587719300000&width=1200&height=1200&aspect=true' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
  { id: 102,  nome: 'Chuteira Nike Air Zoom Mercurial Vapor 16 Elite Campo', preco: 'R$ 2184,99', imagem: 'https://imgnike-a.akamaihd.net/768x768/07305151.jpg' , desconto: { texto: '10% OFF', corFundo: 'red', corTexto: 'white'  } },
]