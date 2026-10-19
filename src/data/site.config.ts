export interface DestaqueItem {
  id: string;
  nome: string;
  descricao: string;
  preco?: string;
  badge?: string;
  imagem: {
    src: string;
    srcset: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface AvaliacaoItem {
  autor: string;
  comentario: string;
  estrelas: number;
  origem: string;
}

export interface SiteConfig {
  nome: string;
  slogan: string;
  descricaoSeo: string;
  urlSite: string;
  orderUrl: string;
  whatsapp: {
    numero: string;
    formatado: string;
    link: string;
  };
  instagram: {
    arroba: string;
    link: string;
  };
  localizacao: {
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    pontoReferencia?: string;
    linkGoogleMaps: string;
    areaEntrega: string; // Informação da área de entrega
  };
  horario: {
    dias: string;
    horarioFuncionamento: string;
    detalheStatus: string;
  };
  sobre: {
    titulo: string;
    paragrafos: string[];
    // TODO: Adicionar história oficial e detalhada fornecida pelos fundadores da Rocket Burger
  };
  destaques: DestaqueItem[];
  avaliacoes: {
    notaMedia: number;
    totalAvaliacoes: number;
    plataforma: string;
    depoimentos: AvaliacaoItem[];
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    themeColor: string;
  };
}

export const siteConfig: SiteConfig = {
  nome: "Rocket Burger",
  slogan: "Hambúrguer artesanal de outro planeta.",
  descricaoSeo: "Rocket Burger em Ji-Paraná - RO. Hambúrgueres artesanais de outro planeta, carnes suculentas de 150g, bacon crocante, opções doces e molhos especiais. Peça online agora!",
  urlSite: "https://rocketburger.com.br",
  orderUrl: "https://delivery.yooga.app/rocket-burger/tabs/home",
  
  whatsapp: {
    numero: "5569999754025",
    formatado: "(69) 99975-4025",
    link: "https://wa.me/5569999754025?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rocket%20Burger",
  },
  
  instagram: {
    arroba: "@rocketburger.ro",
    link: "https://www.instagram.com/rocketburger.ro",
  },
  
  localizacao: {
    endereco: "R. Luís Muzambinho, 1463",
    bairro: "Nova Brasília",
    cidade: "Ji-Paraná",
    estado: "RO",
    cep: "76980-414",
    pontoReferencia: "Nova Brasília, Ji-Paraná - RO",
    linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Rocket+Burger+Rua+Luis+Muzambinho+1463+Ji-Parana+RO",
    areaEntrega: "Atendemos os principais bairros de Ji-Paraná via delivery rápido.",
  },
  
  horario: {
    dias: "Terça a Domingo",
    horarioFuncionamento: "18:30 às 23:30",
    detalheStatus: "Abre de terça a domingo às 18:30",
  },
  
  sobre: {
    titulo: "Uma missão gastronômica direto para Ji-Paraná",
    paragrafos: [
      "A Rocket Burger nasceu com a missão de transformar o hambúrguer artesanal em uma verdadeira experiência interestelar. Cada receita é pensada nos mínimos detalhes: do ponto perfeito da carne fresca ao equilíbrio entre os molhos exclusivos e o pão sempre macio e tostado na manteiga.",
      "Com ambiente acolhedor, mesas ao ar livre, espaço familiar e delivery ágil, trazemos para a mesa ingredientes de altíssima qualidade e combinações marcantes que conquistaram Ji-Paraná e região.",
    ],
  },
  
  destaques: [
    {
      id: "apollo-7",
      nome: "Apollo 7",
      descricao: "Blend artesanal suculento, queijo cheddar derretido especial e molho secreto da casa em pão brioche amanteigado.",
      badge: "Mais Pedido",
      imagem: {
        src: "/images/destaque-apollo7.webp",
        srcset: "/images/destaque-apollo7-400.webp 400w, /images/destaque-apollo7-600.webp 600w, /images/destaque-apollo7.webp 800w",
        alt: "Hambúrguer artesanal Apollo 7 com queijo derretido e blend bovino suculento",
        width: 600,
        height: 600,
      },
    },
    {
      id: "saturno-5",
      nome: "Saturno Cinco",
      descricao: "O lanche que te leva às alturas: multicamadas de sabor intenso, blend especial e crocância inesquecível.",
      badge: "Super Lançamento",
      imagem: {
        src: "/images/destaque-saturno5.webp",
        srcset: "/images/destaque-saturno5-400.webp 400w, /images/destaque-saturno5-600.webp 600w, /images/destaque-saturno5.webp 800w",
        alt: "Hambúrguer Saturno Cinco alto com generosas camadas de ingredientes artesanais",
        width: 600,
        height: 600,
      },
    },
    {
      id: "bacon-spicy",
      nome: "Bacon Sweet & Spicy",
      descricao: "150g de carne bovina grelhada no fogo, fatias fartas de bacon crocante e o toque irresistível do agridoce picante.",
      badge: "Agridoce Marcante",
      imagem: {
        src: "/images/destaque-bacon-spicy.webp",
        srcset: "/images/destaque-bacon-spicy-400.webp 400w, /images/destaque-bacon-spicy-600.webp 600w, /images/destaque-bacon-spicy.webp 800w",
        alt: "Hambúrguer artesanal com 150g de carne, bacon abundante e geleia picante",
        width: 600,
        height: 600,
      },
    },
    {
      id: "candy-burger",
      nome: "Candy Burger",
      descricao: "A icônica sobremesa da Rocket: burger doce recheado com Nutella farta, morangos frescos e chantilly cremoso.",
      badge: "Sobremesa Única",
      imagem: {
        src: "/images/destaque-candy.webp",
        srcset: "/images/destaque-candy-400.webp 400w, /images/destaque-candy-600.webp 600w, /images/destaque-candy.webp 800w",
        alt: "Candy Burger recheado de Nutella, morangos frescos fatiados e chantilly",
        width: 600,
        height: 600,
      },
    },
  ],
  
  avaliacoes: {
    notaMedia: 4.8,
    totalAvaliacoes: 40,
    plataforma: "Google Avaliações",
    depoimentos: [
      {
        autor: "Cliente Verificado",
        comentario: "Ótimo hambúrguer top só o preço e um pouco puxado, mas coisa boa e cara.",
        estrelas: 5,
        origem: "Google",
      },
      {
        autor: "Família em Ji-Paraná",
        comentario: "Um ambiente perfeito para um lanche casual ou em família.",
        estrelas: 5,
        origem: "Google",
      },
      {
        autor: "Frequentador Local",
        comentario: "Saborosos os lanches, batata frita sequinha, suco excelente.",
        estrelas: 5,
        origem: "Google",
      },
    ],
  },
  
  seo: {
    metaTitle: "Rocket Burger | Hambúrguer Artesanal de Outro Planeta em Ji-Paraná - RO",
    metaDescription: "Conheça a Rocket Burger em Ji-Paraná (RO). Hambúrguer artesanal de 150g, lanches temáticos como Apollo 7 e Saturno 5, Candy Burger e entrega rápida. Peça online agora!",
    ogImage: "/images/og-image.jpg",
    themeColor: "#0D2E24",
  },
};

/**
 * Constrói o link com as tags UTM requeridas:
 * ?utm_source=site&utm_medium=botao&utm_campaign=[local]
 */
export function buildOrderUrl(campaign: string): string {
  const url = new URL(siteConfig.orderUrl);
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", "botao");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
