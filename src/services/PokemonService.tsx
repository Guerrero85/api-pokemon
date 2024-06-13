import PokemonDTO from "@/models/PokemonDTO";
import PokemonListDTO from "@/models/PokemonListDTO";
import { FecthPokemon } from "@/api/PokemonApi";
import { FecthPokemonList } from "@/api/PokemonApi";

export async function obtenerPokemon(name: string): Promise<PokemonDTO[]> {
  try {
    const data = await FecthPokemon(name);

    if (typeof data === "object" && data !== null && !Array.isArray(data)) {
      return [data];
    } else if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error(
        "Los datos recibidos no tienen el formato esperado (objeto o array)."
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos del pokemon:", error.message);
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
}

export async function obtenerListPokemon(limit = 20): Promise<PokemonListDTO> {
  try {
    const data = await FecthPokemonList(limit);

    if (!data || !data.results || !Array.isArray(data.results)) {
      throw new Error(
        "La respuesta de la API de Pokémon no tiene el formato esperado."
      );
    }

    if (limit && data.results.length !== limit) {
      throw new Error(
        `La API de Pokémon no devolvió ${limit} resultados como se esperaba.`
      );
    }
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos de Pokémon:", error.message);
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
}
