/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import data from "./data.json";
import { Pokemon } from "./components/Pokemon.jsx"; // correct path

export const App = () => {
  return (
    <div className="App">
      <h1>Pokédex</h1>

      {data.pokemons.map((poke) => (
        <Pokemon
          key={poke.id}
          name={poke.name}
          types={poke.types}
          height={poke.height}
          weight={poke.weight}
          category={poke.category}
          weaknesses={poke.weeknesses}
        />
      ))}
    </div>
  );
};
