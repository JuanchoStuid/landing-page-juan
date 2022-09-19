import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Landing Page',
  description: "Landing Juan David Castaño Gómez",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'héroe',
  About: 'acerca de',
  Contact: 'contacto',
  Portfolio: 'portafolio',
  Resume: 'resumen',
  Skills: 'habilidades',
  Stats: 'estadísticas',
  Testimonials: 'testimonios',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Juan David Castaño Gómez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Soy una persona nacida en <strong className="text-stone-100">Chinchiná</strong>, un hermoso municipio colombiano ubicado en el departamento de <strong className="text-stone-100">Caldas</strong> a 18 km de la capital <strong className="text-stone-100">Manizales</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      En sus territorios se cultiva café para exportación, destacándose una de las fabricas mas importantes de <strong className="text-stone-100">Colombia</strong>,
      como lo es la Fabrica de <strong className="text-stone-100">Café Liofilizado Buencafé</strong>.
      </p>
    </>
  ),
  actions: [
    {
      // href: '/assets/resume.pdf',
      href: '#',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Ingeniero de Sistemas de la Universidad Autonoma de Manizales.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Bogotá D.C', Icon: MapIcon},
    {label: 'Edad', text: '34', Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Colombiano', Icon: FlagIcon},
    {label: 'Intereses', text: 'Programación, Video Juegos, Aprendizaje', Icon: SparklesIcon},
    {label: 'Estudios', text: 'Universidad Autonoma de Manizales', Icon: AcademicCapIcon},
    {label: 'Empleo', text: 'Infotegra SAS', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 4,
      },
      {
        name: 'Lengua de Señas Colombiana',
        level: 2,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'Typescript',
        level: 1,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 8,
      },
      {
        name: 'YII',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project Donaciones',
    description: 'Proyecto del proceso de donaciones de la Fundación Internacional María Luisa de Moreno.',
    url: 'https://minube.fimlm.org/colombia/public/login',
    image: porfolioImage1,
  },
  {
    title: 'Project Bibliomobil',
    description: 'App de biblioteca de libros, donde trabja en el back de las APIs.',
    url: 'https://bibliomobil.com/',
    image: porfolioImage2,
  },
  {
    title: 'Project To Do Clase',
    description: 'Proyecto de lista de tareas.',
    url: 'https://github.com/JuanchoStuid/to-do-clase',
    image: porfolioImage3,
  },
  {
    title: 'Project Clima',
    description: 'Proyecto del clima.',
    url: 'https://github.com/JuanchoStuid/clima',
    image: porfolioImage4,
  },
  {
    title: 'Project Super Heroes',
    description: 'Proyecto de los super heroes.',
    url: 'https://github.com/JuanchoStuid/api-heroes',
    image: porfolioImage5,
  },
  {
    title: 'Project Landing Page',
    description: 'Proyecto de la landing page.',
    url: 'https://github.com/JuanchoStuid/landing-page-juan',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Agosto 2013',
    location: 'Universidad Autonoma de Manizales',
    title: 'Ingeniero de Sistemas',
    content: <p>Carrera acreditada de alta calidad donde aprendí a desarrollar.</p>,
  },
  {
    date: 'Mayo 2005',
    location: 'TecnoSistemas Chinchiná',
    title: 'Auxiliar de Sistemas',
    content: <p>Instituto dende mis gustos por la programación empezaron.</p>,
  },
  {
    date: 'Noviembre',
    location: 'Colegio Oficial Bartolome Mitre Chinchiná',
    title: 'Bachiller Acádemico',
    content: <p>Colegio del municipio de Chinchiná Caldas.</p>,
  },
  {
    date: 'Noviembre',
    location: 'Escuela Juan XXIII Chinchiná',
    title: 'Estudiante de Primaria',
    content: <p>Escuela del municipio de Chinchiná Caldas.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mayo 2022 - Día presente',
    location: 'Infotegra Technologies',
    title: 'Coordinador de Proyectos',
    content: (
      <p>
        Ingeniero encargado de los proyectos
      </p>
    ),
  },
  {
    date: 'Mayo 2021 - Dicimebre 2021',
    location: 'Unidad Administrativa Especial de Servicios Públicos Bogotá DC',
    title: 'Desarrollo de RUOR (Registro Único de Organizaciones de Recicladores)',
    content: (
      <p>
        Desarrollo de RUOR (Registro Único de Organizaciones de Recicladores) para la UAESP (Unidad Administrativa Especial de Servicios Públicos Bogotá DC) junto con el desarrollador Edgar Alexander Molano el cual realizó acompañamiento y apoyo en esta labor; está PWA se ejecutó bajo la verificación y lineamientos de las áreas de aprovechamiento y TICS
      </p>
    ),
  },
  {
    date: 'Julio 2021 - Septiembre 2021',
    location: 'PWA BIBLIOMOVIL (Bogotá DC)',
    title: 'Desarrollador del Backend de la PWA BIBLIOMOVI',
    content: (
      <p>
        Acompañamiento y desarrollo del Backend de la PWA BIBLIOMOVIL (Bogotá DC) para el señor Henry Romero Trujillo dicha PWA se desarrolló en dos elementos el consumo de las apis se realizaron en el framework Laravel y el Frontend en Nodejs.
      </p>
    ),
  },
  {
    date: 'Enereo 2021 - Junio 2021',
    location: 'Centro de Desarrollo Empresarial Latinpyme Bogotá D.C',
    title: 'Ingeniero Full Stack',
    content: (
      <p>
        (Desarrollo realizado en el framework denominado Laravel, apoyando los procesos de asambleas, foros y Tucomunidadpyme del Banco de occidente, además de dar soporte para la compañía con Bitrix 24 software de gestión en tareas, proyectos, CRM, entre otros elementos, conocimientos básicos en este gestor).
      </p>
    ),
  },
  {
    date: 'Febrero 2018 - Diciembre 2020',
    location: 'Fundación Internacional María Luisa de Moreno Bogotá D.C',
    title: 'Desarrollador de Software Full Stack',
    content: (
      <p>
       Desarrollador de Software con el sistema Mi Nube3 (Desarrollado en el Framework Laravel).
      </p>
    ),
  },
  {
    date: 'Febrero 2012 - Enero 2016',
    location: 'La Virginia Risaralda',
    title: 'Desarrollador del sistema NICS',
    content: (
      <p>
        (Sistema de contratación), (sistema con módulos tales como: requerimientos, presupuesto de gastos(certificados de disponibilidad, registros presupuestales, facturas)).
      </p>
    ),
  },
  {
    date: 'Julio 2013 - Diciembre 2013',
    location: 'Colegio Aspaen Gimnasio Horizontes Villamaría Caldas',
    title: 'Coordinador del Área de tecnología',
    content: (
      <p>
        Colegio del municipio de Villamaría Caldas, donde desempeñe labores de coordinador del área de tecnología.
      </p>
    ),
  },
  {
    date: 'Febrero 2013 - Julio 2013',
    location: 'Colegio Aspaen Gimnasio Horizontes Villamaría Caldas',
    title: 'Práctica Empresarial',
    content: (
      <p>
        Colegio del municipio de Villamaría Caldas, donde realice mis practicas universitarias.
      </p>
    ),
  },
  {
    date: 'Febrero',
    location: 'Universidad Autónoma de Manizales',
    title: 'Monitor',
    content: (
      <p>
        Monitor de primero y segundo semestre de las carreras ingeniería de sistemas e ingeniería industrial.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contáctame.',
  description: 'Comunicate conmigo.',
  items: [
    {
      type: ContactType.Email,
      text: 'juandcastag@gmail.com',
      href: 'mailto:juandcastag@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bogotá D.C Colombia',
      href: 'Bogotá D.C',
    },
    {
      type: ContactType.Instagram,
      text: '@juancastanog',
      href: 'https://www.instagram.com/juancastanog/',
    },
    {
      type: ContactType.Github,
      text: 'JuanchoStuid',
      href: 'https://github.com/JuanchoStuid',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/JuanchoStuid'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/JuanchoStuid/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/juancastanog/'},
];
