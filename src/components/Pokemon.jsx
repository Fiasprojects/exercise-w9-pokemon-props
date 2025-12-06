// Destructure pokemon props here :)
import { Type } from "./Type.jsx"; // relative path inside components

export const Pokemon = ({
  name,
  types,
  height,
  weight,
  category,
  weaknesses,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        Types:{" "}
        {types.map((t, i) => (
          <Type key={i} type={t} />
        ))}
      </p>
      <p>Height: {height} m</p>
      <p>Weight: {weight} kg</p>
      <p>Category: {category}</p>
      <p>Weaknesses: {weaknesses.join(", ")}</p>
    </div>
  );
};
