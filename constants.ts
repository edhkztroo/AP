import { 
  BrainCircuit, 
  MessageSquare, 
  Search, 
  Target, 
  TrendingUp, 
  ShieldAlert 
} from 'lucide-react';
import { ServiceItem, CountryExperience, CampaignStat, Product } from './types';

export const APP_NAME = "ACCIÓN POLÍTICA";
export const TAGLINE = "Comunicación & Estrategia";

export const SOCIALS = {
  twitter: "@AccionPoliticaa",
  instagram: "@AccionPoliticaa",
  facebook: "ConsultoraAccionPolitica",
  web: "www.accionpoliticalatam.com"
};

export const ABOUT_TEXT = "Somos una firma de consultoría política dedicada a asesorar a precandidatos, candidatos, gobernantes y partidos políticos con experiencia y éxito comprobado en América Latina y El Caribe.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Estrategia Integral",
    icon: BrainCircuit,
    items: [
      "Estrategia Política",
      "Estrategia Electoral",
      "Estrategia Comunicacional",
      "Estrategia Digital",
      "Estrategia de Ads",
      "Geo Marketing"
    ]
  },
  {
    title: "Investigación y Datos",
    icon: Search,
    items: [
      "Investigación Cuantitativa",
      "Investigación Cualitativa",
      "Benchmark",
      "Control Tracking",
      "Focus Groups",
      "Perception Analyzer",
      "Mapas Mentales",
      "Antropología Digital"
    ]
  },
  {
    title: "Comunicación de Alto Impacto",
    icon: MessageSquare,
    items: [
      "Comunicación Política Digital",
      "Manejo de Crisis",
      "War Room Digital",
      "Sala de Aire",
      "Mensajería Masiva",
      "Integración Aire/Tierra"
    ]
  },
  {
    title: "Posicionamiento",
    icon: Target,
    items: [
      "Imagen Pública",
      "Amplificación",
      "Activismo Digital",
      "Media Buying",
      "Dirección Creativa",
      "Campañas Premium"
    ]
  }
];

export const EXPERIENCE: CountryExperience[] = [
  {
    country: "México",
    flagCode: "MX",
    highlights: [
      "Campaña al Comité Directivo Nacional del PRI",
      "Gubernatura Michoacán",
      "Gubernatura Estado de México",
      "Gubernatura Chihuahua",
      "Gubernatura Baja California Sur",
      "Coordinación Estatal Sonora (67/102 victorias)",
      "Coordinación Estatal Campeche (26/38 victorias)",
      "+30 Campañas de Diputados"
    ]
  },
  {
    country: "Colombia",
    flagCode: "CO",
    highlights: [
      "Partido Liberal Colombiano",
      "Partido Cambio Radical",
      "Pacto Histórico",
      "Partido Centro Democrático",
      "Partido Alianza Verde",
      "Partido de la U"
    ]
  },
  {
    country: "República Dominicana",
    flagCode: "DO",
    highlights: [
      "Partido de la Liberación Dominicana",
      "Partido Revolucionario Moderno",
      "Campañas Municipales",
      "Campañas Legislativas"
    ]
  },
  {
    country: "Venezuela",
    flagCode: "VE",
    highlights: [
      "Mesa de la Unidad Democrática",
      "Partido Acción Democrática",
      "Partido Voluntad Popular",
      "Partido Vente Venezuela"
    ]
  },
  {
    country: "Ecuador",
    flagCode: "EC",
    highlights: [
      "CREO",
      "Partido Podemos",
      "Revolución Ciudadana"
    ]
  },
  {
    country: "Guatemala",
    flagCode: "GT",
    highlights: [
      "Partido Unionista",
      "Partido TODOS"
    ]
  },
  {
    country: "Paraguay",
    flagCode: "PY",
    highlights: [
      "Campañas Municipales Partido Colorado",
      "Movimiento Nueva República"
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    title: "War Room Digital",
    description: "Centro de mando para el monitoreo y respuesta inmediata en redes y medios."
  },
  {
    title: "Defensa y Contraste",
    description: "Estrategias de contención y manejo de crisis en tiempo real."
  },
  {
    title: "Producción Premium",
    description: "Dirección creativa para spots, documentales y eventos especiales de gobierno."
  },
  {
    title: "Tierra y Aire",
    description: "Integración operativa de la movilización territorial con la estrategia digital."
  }
];
