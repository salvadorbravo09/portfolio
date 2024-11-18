import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Proyectos <GradientText>Realizados</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="HR Tracker"
        description={
          <>
            solución para la gestión de empleados, diseñada para administrar de
            manera eficiente a las personas clave dentro de una organización,
            incluyendo empleados y departamentos.
            <div className="mt-4">
              <a
                href="https://github.com/salvadorbravo09/hrtracker"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                target="_blank"
              >
                Ver en GitHub
              </a>
            </div>
          </>
        }
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>Java</Tags>
            <Tags color={ColorTags.BLUE}>Spring Boot</Tags>
            <Tags color={ColorTags.ORANGE}>JPA</Tags>
            <Tags color={ColorTags.GRAY}>MySQL</Tags>
            <Tags color={ColorTags.PINK}>Lombok</Tags>
          </>
        }
      />
      <Project
        name="ElMirador"
        description={
          <>
            Este sistema permite administrar los gastos comunes de
            departamentos, incluyendo el registro de departamentos, generación
            de gastos mensuales y control de pagos.
            <div className="mt-4">
              <a
                href="https://github.com/salvadorbravo09/ElMirador"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                target="_blank"
              >
                Ver en GitHub
              </a>
            </div>
          </>
        }
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.SLATE}>Flask</Tags>
            <Tags color={ColorTags.EMERALD}>SQLite</Tags>
          </>
        }
      />
      <Project
        name="QuickList"
        description={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
            <div className="mt-4">
              <a
                href="https://github.com/salvadorbravo09/QuickList-backend"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                target="_blank"
              >
                Ver en GitHub
              </a>
            </div>
          </>
        }
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.RED}>Java</Tags>
            <Tags color={ColorTags.BLUE}>Spring Boot</Tags>
            <Tags color={ColorTags.ORANGE}>JPA</Tags>
            <Tags color={ColorTags.GRAY}>MySQL</Tags>
          </>
        }
      />
      <Project
        name="ContactApp"
        description={
          <>
            Una aplicación para la gestión de contactos, que utiliza Spring Boot
            para el backend y una base de datos H2 embebida para almacenamiento
            temporal.
            <div className="mt-4">
              <a
                href="https://github.com/salvadorbravo09/ContactApp-backend"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                target="_blank"
              >
                Ver en GitHub
              </a>
            </div>
          </>
        }
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.RED}>Java</Tags>
            <Tags color={ColorTags.BLUE}>Spring Boot</Tags>
            <Tags color={ColorTags.ORANGE}>JPA</Tags>
            <Tags color={ColorTags.FUCHSIA}>H2</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
