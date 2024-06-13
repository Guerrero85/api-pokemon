"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PokemonListDTO from "@/models/PokemonListDTO";
import {useRouter} from 'next/navigation'

function TablaListado({ pokemon }: { pokemon: PokemonListDTO[] }) {
  const router = useRouter()
  return (
    <Table >
      <TableCaption>Lista de Pokemon.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Resultado</TableHead>
          <TableHead className="w-[50px]">Id</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pokemon && pokemon.length > 0 ? (
          pokemon.flatMap((pokemonItem) =>
            pokemonItem.results.map((result) => (
              <TableRow key={result.name}>
               <TableCell onClick={() => {router.push(`/Pokemon/${result.name}`)}}>{result.name}</TableCell>
               <TableCell>{result.url.split("/")[6]}</TableCell>
              </TableRow>
            ))
          )
        ) : (
          <TableRow>
            <TableCell colSpan={2}>No hay datos disponibles</TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={5}>
            Total Pokemon: {}
          </TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}

export default TablaListado;
