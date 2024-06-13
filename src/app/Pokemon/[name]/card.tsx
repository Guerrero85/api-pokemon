import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PokemonDTO from "@/models/PokemonDTO";
import Image from "next/image";

export function PokemonCard({ pokemon }: { pokemon: PokemonDTO[] }) {
  const firstPokemon = pokemon[0];

  console.log(firstPokemon.sprites.front_shiny);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{firstPokemon.name}</CardTitle>
        <picture>
          {firstPokemon.sprites.front_shiny && (
            <Image
              src={firstPokemon.sprites.front_shiny}
              alt="Front Shiny Sprite"
              width={800}
              height={500}
            />
          )}
        </picture>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="space-y-1">
            <p>Base experience: {firstPokemon.base_experience.toFixed()}</p>
            <p>Height: {firstPokemon.height.toFixed()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
