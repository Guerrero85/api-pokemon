export interface NamedAPIResource {
    name: string;
    url: string;
}

export default interface PokemonListDTO
{
    count: number;     
    next: string | null;  
    previous: string | null; 
    results: NamedAPIResource[];
}
