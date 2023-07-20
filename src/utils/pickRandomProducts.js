import { recetas } from '../components/data/recetas';

export const pickRandomProducts = (cantidad) => {
  const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * recetas.length);

    if (!nuevoArray.length) {
      nuevoArray.push(recetas[indexRandom]);
    }

    const productoExistente = nuevoArray.find((newProduct) => {
      return newProduct.id === recetas[indexRandom].id;
    });

    if (!productoExistente) {
      nuevoArray.push(recetas[indexRandom]);
    }
  }

  return nuevoArray;
};
