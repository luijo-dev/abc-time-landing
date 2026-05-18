import type { FeaturedWatch } from '../types/homepage';

export const watches: FeaturedWatch[] = [
  {
    id: 'daytona',
    name: 'Daytona',
    collection: 'Cosmograph · Rolex',
    image: {
      src: '/images/watches/daytona.webp',
      alt: 'Rolex Cosmograph Daytona en fondo oscuro editorial',
      priority: true,
    },
    hoverImage: {
      src: '/images/watches/daytona-hover.webp',
      alt: 'Rolex Cosmograph Daytona — vista alterna',
    },
    specs: [
      { label: 'Movimiento', value: 'Automático Cal. 4131' },
      { label: 'Material', value: 'Oro Everose 18k' },
      { label: 'Reserva', value: '72 horas' },
    ],
    ctaUrl: 'https://wa.me/5490000000000?text=Hola%2C%20quiero%20consultar%20por%20el%20Cosmograph%20Daytona',
    ctaLabel: 'Consultar Daytona por WhatsApp',
    mood: 'gold',
    detail: {
      eyebrow: 'Excellence Collection',
      description:
        'Una obra maestra de ingeniería suiza. El Daytona encarna la elegancia funcional de la alta relojería, diseñado para aquellos que entienden que el tiempo no solo se mide, se vive.',
      specGroups: [
        {
          icon: 'deployed_code',
          title: 'Caja',
          rows: [
            { label: 'Material', value: 'Oro Everose 18k' },
            { label: 'Diámetro', value: '40 mm' },
            { label: 'Resistencia', value: '100 m' },
          ],
        },
        {
          icon: 'settings',
          title: 'Movimiento',
          rows: [
            { label: 'Calibre', value: '4131' },
            { label: 'Reserva', value: '72 horas' },
            { label: 'Frecuencia', value: '28,800 vph' },
          ],
        },
        {
          icon: 'radio_button_checked',
          title: 'Esfera',
          rows: [
            { label: 'Color', value: 'Negro Lacado' },
            { label: 'Índices', value: 'Apliques Oro' },
            { label: 'Cristal', value: 'Zafiro' },
          ],
        },
        {
          icon: 'linear_scale',
          title: 'Correa',
          rows: [
            { label: 'Material', value: 'Oysterlock' },
            { label: 'Cierre', value: 'Desplegable' },
            { label: 'Ancho', value: '20 mm' },
          ],
        },
      ],
      ergonomics: {
        title: 'La Presencia de la Distinción',
        body: [
          'Un reloj que no solo complementa el atuendo, sino que define la personalidad. El Daytona ha sido diseñado con proporciones áureas para ajustarse con una comodidad excepcional en cualquier muñeca.',
          'La sutil curvatura de las asas y el equilibrio del peso aseguran que la elegancia sea tan natural como el paso del tiempo.',
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop',
          alt: 'Daytona en muñeca',
        },
      },
    },
  },
  {
    id: 'royal-oak',
    name: 'Royal Oak',
    collection: 'Audemars Piguet',
    image: {
      src: '/images/watches/royal-oak.webp',
      alt: 'Audemars Piguet Royal Oak con iluminación de vitrina premium',
    },
    hoverImage: {
      src: '/images/watches/royal-oak-hover.webp',
      alt: 'Audemars Piguet Royal Oak — vista alterna',
    },
    specs: [
      { label: 'Movimiento', value: 'Automático Cal. 4302' },
      { label: 'Material', value: 'Acero satinado' },
      { label: 'Reserva', value: '70 horas' },
    ],
    ctaUrl: 'https://wa.me/5490000000000?text=Hola%2C%20quiero%20consultar%20por%20el%20Royal%20Oak',
    ctaLabel: 'Consultar Royal Oak por WhatsApp',
    mood: 'smoke',
    detail: {
      eyebrow: 'Iconic Collection',
      description:
        'Icono del diseño industrial aplicado a la alta relojería. El Royal Oak, con su bisel octogonal y sus tornillos de acero, revolucionó para siempre la definición del lujo contemporáneo.',
      specGroups: [
        {
          icon: 'deployed_code',
          title: 'Caja',
          rows: [
            { label: 'Material', value: 'Acero satinado' },
            { label: 'Diámetro', value: '41 mm' },
            { label: 'Resistencia', value: '50 m' },
          ],
        },
        {
          icon: 'settings',
          title: 'Movimiento',
          rows: [
            { label: 'Calibre', value: '4302' },
            { label: 'Reserva', value: '70 horas' },
            { label: 'Frecuencia', value: '21,600 vph' },
          ],
        },
        {
          icon: 'radio_button_checked',
          title: 'Esfera',
          rows: [
            { label: 'Color', value: 'Azul Tapisserie' },
            { label: 'Índices', value: 'Aplicados' },
            { label: 'Cristal', value: 'Zafiro AR' },
          ],
        },
        {
          icon: 'linear_scale',
          title: 'Correa',
          rows: [
            { label: 'Material', value: 'Acero integrado' },
            { label: 'Cierre', value: 'Plegable' },
            { label: 'Ancho', value: '21 mm' },
          ],
        },
      ],
      ergonomics: {
        title: 'Forma y Función en Armonía',
        body: [
          'El Royal Oak fusiona la precisión mecánica con una estética que trasciende épocas. Su acabado combinado — satinado y pulido — crea un contraste visual único en la muñeca.',
          'Diseñado por Gerald Genta en 1972, sigue siendo el referente indiscutible del acero de lujo.',
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop',
          alt: 'Royal Oak en muñeca',
        },
      },
    },
  },
  {
    id: 'submariner',
    name: 'Submariner',
    collection: 'Oyster Perpetual · Rolex',
    image: {
      src: '/images/watches/submariner.webp',
      alt: 'Rolex Submariner en composición oscura con brillo cálido',
    },
    hoverImage: {
      src: '/images/watches/submariner-hover.webp',
      alt: 'Rolex Submariner — vista alterna',
    },
    specs: [
      { label: 'Movimiento', value: 'Automático Cal. 3235' },
      { label: 'Material', value: 'Oystersteel' },
      { label: 'Reserva', value: '70 horas' },
    ],
    ctaUrl: 'https://wa.me/5490000000000?text=Hola%2C%20quiero%20consultar%20por%20el%20Submariner',
    ctaLabel: 'Consultar Submariner por WhatsApp',
    mood: 'smoke',
    detail: {
      eyebrow: 'Professional Collection',
      description:
        'El referente absoluto del reloj de buceo de lujo. El Submariner combina robustez extrema con una elegancia atemporal que lo hace igual de impecable bajo el agua que en una sala de juntas.',
      specGroups: [
        {
          icon: 'deployed_code',
          title: 'Caja',
          rows: [
            { label: 'Material', value: 'Oystersteel' },
            { label: 'Diámetro', value: '41 mm' },
            { label: 'Resistencia', value: '300 m' },
          ],
        },
        {
          icon: 'settings',
          title: 'Movimiento',
          rows: [
            { label: 'Calibre', value: '3235' },
            { label: 'Reserva', value: '70 horas' },
            { label: 'Frecuencia', value: '28,800 vph' },
          ],
        },
        {
          icon: 'radio_button_checked',
          title: 'Esfera',
          rows: [
            { label: 'Color', value: 'Negro Mate' },
            { label: 'Índices', value: 'Luminiscentes' },
            { label: 'Cristal', value: 'Zafiro' },
          ],
        },
        {
          icon: 'linear_scale',
          title: 'Correa',
          rows: [
            { label: 'Material', value: 'Oystersteel' },
            { label: 'Cierre', value: 'Oysterlock' },
            { label: 'Ancho', value: '21 mm' },
          ],
        },
      ],
      ergonomics: {
        title: 'Precisión bajo cualquier condición',
        body: [
          'Concebido para los grandes fondos, perfeccionado para el día a día. La bisel giratoria unidireccional y la caja Oyster garantizan una estanqueidad perfecta y una legibilidad impecable.',
          'Décadas de evolución silenciosa han convertido al Submariner en el símbolo definitivo de la fiabilidad de lujo.',
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop',
          alt: 'Submariner en muñeca',
        },
      },
    },
  },
  {
    id: 'nautilus',
    name: 'Nautilus',
    collection: 'Patek Philippe',
    image: {
      src: '/images/watches/nautilus.webp',
      alt: 'Patek Philippe Nautilus en composición editorial oscura',
    },
    hoverImage: {
      src: '/images/watches/nautilus-hover.webp',
      alt: 'Patek Philippe Nautilus — vista alterna',
    },
    specs: [
      { label: 'Movimiento', value: 'Automático Cal. 26-330' },
      { label: 'Material', value: 'Acero pulido' },
      { label: 'Reserva', value: '45 horas' },
    ],
    ctaUrl: 'https://wa.me/5490000000000?text=Hola%2C%20quiero%20consultar%20por%20el%20Nautilus',
    ctaLabel: 'Consultar Nautilus por WhatsApp',
    mood: 'gold',
    detail: {
      eyebrow: 'Haute Horlogerie',
      description:
        'El Nautilus es la quintaesencia del sport-chic. Con su bezel horizontal en relieve y su integración armoniosa entre caja y brazalete, es una de las piezas más codiciadas del mundo de la alta relojería.',
      specGroups: [
        {
          icon: 'deployed_code',
          title: 'Caja',
          rows: [
            { label: 'Material', value: 'Acero pulido' },
            { label: 'Diámetro', value: '40 mm' },
            { label: 'Resistencia', value: '120 m' },
          ],
        },
        {
          icon: 'settings',
          title: 'Movimiento',
          rows: [
            { label: 'Calibre', value: '26-330' },
            { label: 'Reserva', value: '45 horas' },
            { label: 'Frecuencia', value: '28,800 vph' },
          ],
        },
        {
          icon: 'radio_button_checked',
          title: 'Esfera',
          rows: [
            { label: 'Color', value: 'Azul degradado' },
            { label: 'Índices', value: 'Relieves dorados' },
            { label: 'Cristal', value: 'Zafiro' },
          ],
        },
        {
          icon: 'linear_scale',
          title: 'Correa',
          rows: [
            { label: 'Material', value: 'Acero integrado' },
            { label: 'Cierre', value: 'Plegable' },
            { label: 'Ancho', value: '21 mm' },
          ],
        },
      ],
      ergonomics: {
        title: 'El Privilegio de lo Excepcional',
        body: [
          'Llevar un Nautilus en la muñeca es un acto de declaración silenciosa. Su diseño ergonómico se adapta naturalmente al contorno de la muñeca, regalando una comodidad extraordinaria.',
          'Cada pieza lleva impresa la filosofía de Patek Philippe: jamás terminas de poseer un Nautilus, simplemente lo cuidas para la próxima generación.',
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop',
          alt: 'Nautilus en muñeca',
        },
      },
    },
  },
  {
    id: 'speedmaster',
    name: 'Speedmaster',
    collection: 'Moonwatch · Omega',
    image: {
      src: '/images/watches/speedmaster.webp',
      alt: 'Omega Speedmaster Moonwatch en iluminación de estudio premium',
    },
    hoverImage: {
      src: '/images/watches/speedmaster-hover.webp',
      alt: 'Omega Speedmaster — vista alterna',
    },
    specs: [
      { label: 'Movimiento', value: 'Manual Cal. 3861' },
      { label: 'Material', value: 'Acero cepillado' },
      { label: 'Reserva', value: '50 horas' },
    ],
    ctaUrl: 'https://wa.me/5490000000000?text=Hola%2C%20quiero%20consultar%20por%20el%20Speedmaster',
    ctaLabel: 'Consultar Speedmaster por WhatsApp',
    mood: 'smoke',
    detail: {
      eyebrow: 'Space Collection',
      description:
        'El único reloj que ha viajado a la Luna. El Speedmaster Moonwatch es una leyenda viviente: el compañero inseparable de los astronautas de la NASA y un símbolo eterno de la audacia humana.',
      specGroups: [
        {
          icon: 'deployed_code',
          title: 'Caja',
          rows: [
            { label: 'Material', value: 'Acero cepillado' },
            { label: 'Diámetro', value: '42 mm' },
            { label: 'Resistencia', value: '30 m' },
          ],
        },
        {
          icon: 'settings',
          title: 'Movimiento',
          rows: [
            { label: 'Calibre', value: '3861' },
            { label: 'Reserva', value: '50 horas' },
            { label: 'Frecuencia', value: '21,600 vph' },
          ],
        },
        {
          icon: 'radio_button_checked',
          title: 'Esfera',
          rows: [
            { label: 'Color', value: 'Negro Lacado' },
            { label: 'Índices', value: 'Luminova' },
            { label: 'Cristal', value: 'Hesalita' },
          ],
        },
        {
          icon: 'linear_scale',
          title: 'Correa',
          rows: [
            { label: 'Material', value: 'Nylon Nato' },
            { label: 'Cierre', value: 'Hebilla' },
            { label: 'Ancho', value: '20 mm' },
          ],
        },
      ],
      ergonomics: {
        title: 'Nacido para la Historia',
        body: [
          'Más que un reloj, el Speedmaster es un testigo del momento más extraordinario de la humanidad. Su esfera negra y sus cronógrafos cuentan el tiempo con la misma exactitud que en el Apolo 11.',
          'Un diseño que nunca ha necesitado ser actualizado, porque la perfección no envejece.',
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop',
          alt: 'Speedmaster en muñeca',
        },
      },
    },
  },
];

export function getWatchById(id: string): FeaturedWatch | undefined {
  return watches.find((w) => w.id === id);
}
