import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola! Soy <GradientText>Salvador Bravo</GradientText>
        </>
      }
      description={
        <>
          Soy un desarrollador Backend apasionado por crear soluciones
          tecnológicas innovadoras. Me especializo en el{' '}
          <a className="text-red-400 hover:underline" href="/">
            desarrollo Backend
          </a>{' '}
          y tengo experiencia desarrollando sistemas con diversas tecnologías
          modernas. Siempre busco nuevos desafíos que me permitan crecer
          profesionalmente y aportar valor a los proyectos
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/salvador-bravo-carrillo/"
            target="_blank"
            className="rounded bg-cyan-400 px-4 py-2 text-white hover:bg-cyan-500"
          >
            LinkedIn
          </a>
          <a
            href="/assets/SalvadorBravo_CV.pdf"
            download
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-cyan-500"
          >
            Descargar CV
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
