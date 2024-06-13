"use client";
import { PokemonCard } from "./card";
import { obtenerPokemon } from "@/services/PokemonService";
import { useEffect, useState } from "react";
import PokemonDTO from "@/models/PokemonDTO";
import { Progress } from "@/components/ui/progress";
import { ProgressBar } from "@/components/progress-bar";

export default function PokemonSingle({
  params,
}: {
  params: { name: string };
}) {
  const [pokemon, setPokemon] = useState<PokemonDTO[] | null>(null);

  useEffect(() => {
    obtenerPokemon(params.name)
      .then((response) => {
        setPokemon(response);
      })
      .catch((error) => {
        console.error("Error al obtener datos del pokemon:", error);
      });
  }, [params.name]);

  if (!pokemon) {
    return (
      <div className="grid place-items-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <span>Cargando...</span>
          <ProgressBar initialValue={10} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
