import PokemonDTO from "../models/PokemonDTO";
import PokemonListDTO from "../models/PokemonListDTO";

export async function FecthPokemon(name: string): Promise<PokemonDTO[]> { 
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
}


export async function FecthPokemonList(limit = 20): Promise<PokemonListDTO> { 
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`); 
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return await response.json();
}