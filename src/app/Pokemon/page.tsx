"use client";
import { useState, useEffect } from "react";
import TablaListado from "./tabla";
import { obtenerListPokemon } from "@/services/PokemonService";
import PokemonListDTO from "@/models/PokemonListDTO";
import { ProgressBar } from "@/components/progress-bar";

export default function PageListado() {
  const [poekomoList, setPokemon] = useState<PokemonListDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await obtenerListPokemon();
        setPokemon([data]);
      } catch (err) {
        setError(err as Error);
        console.error("Error al cargar los Pokemon:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <span>Cargando Pokemon...</span>
        <ProgressBar initialValue={10} />
      </div>
    </div>
    );
  }

  if (error) {
    return (
      <div className="grid place-items-center min-h-screen">
        Error al cargar pokemon: {error.message}
      </div>
    );
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <div
        className="border rounded-md shadow-md p-4 w-3/4 md:w-1/2 lg:w-2/3"
        style={{ height: "500px", width: "75%", overflow: "auto" }}
      >
        <TablaListado pokemon={poekomoList} />
      </div>
    </div>
  );
}
