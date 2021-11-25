import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      },
      {
        name: "SWAPI",
        url: "https://swapi.dev/"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <div className="home">
          <div className="portrait-wrapper">
            <img className="portrait" src="/assets/img/portrait.jpg" alt="Portrait de Jérémy Buget" />
          </div>

          <p>👋 Salut ! je m’appelle Jérémy. Je suis <a href="https://github.com/jbuget">développeur Web full
            stack</a> depuis 2007.</p>

          <p>J’aime créer des sites, applications ou plateformes Web à fort impact / trafic, avec une appétence
            particulière pour les secteurs du service public, de l’éducation, du numérique et du sport.</p>

          <p><strong>Diplômé de l’EPITA en 2008</strong>, majeure Multimédia et Technologies de l’Information (MTI), je
            me suis spécialisé dans le <strong>développement d’applications Web riches</strong> en Java puis JavaScript.
          </p>

          <p>J’interviens depuis 2011 en tant que <strong>tech lead / expert technique / coach agile /
            facilitateur</strong> au sein de tous types d’équipes, projets, contextes, clients ou domaines d’activités
            tels que la <a href="https://tickets.rolandgarros.com">FFT</a>, Club Med, CNP Assurances, Allianz, Swiss
            Life, la SGCIB, ING, Crédit Agricole, Fortuneo, etc.</p>

          <p>En 2016, je suis devenu <strong><a href="https://rejoins.octo.com/tribes#68-web-front">leader de la tribu
            WEBF</a></strong> dédiée au développement d’interfaces Web modernes et innovantes à l’état de l’art.</p>

          <p>La même année, j’ai participé à la création de la <a href="https://beta.gouv.fr/startups/pix">Startup
            d’État Pix</a>, aujourd’hui devenu groupement d’intérêt public (GIP) <a href="pix.fr">Pix</a>, pour duquel
            j’assume la double charge de <strong>CTO &amp; DSI</strong>.</p>

          <p>Mon but quand je me lève tous les matins consiste à <em>“aider les gens à s’épanouir et prendre du plaisir
            à travers ou au sein du numérique en accomplissant de grandes et belles choses ensemble”</em>.</p>

          <p>J’habite près de Paris avec ma femme, nos 3 enfants et Goliath, notre vieux bulldog anglais.</p>

          <p>Vous pouvez me retrouver sur <a href="https://github.com/jbuget">GitHub</a>, <a
            href="https://twitter.com/jbuget">Twitter</a>, ou <a href="https://www.linkedin.com/in/jbuget">LinkedIn</a>.
          </p>

        </div>
      </main>
      <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map(demo => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map(resource => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
