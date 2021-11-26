import { LoaderFunction, useLoaderData } from 'remix';

export let loader: LoaderFunction = async () => {
  const response = await fetch('https://swapi.dev/api/people');
  const data = await response.json();
  return data.results;
}

export default function SwapiPeople() {
  let people = useLoaderData();
  return (
    <div>
      <h1>Swapi People</h1>
      <ul>
        {people.map((person: any) => (
          <li key={person.url}>
            <a href={person.url}>{person.name}</a>
          </li>
        ))}
      </ul>

    </div>
  );
}
