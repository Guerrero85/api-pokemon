interface PokemonForm {
    form_name: string;
    form_names: string[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: string[];
    order: number;
    pokemon: {
      name: string;
      url: string;
    };
}

export default interface PokemonDTO
{
    id: Number;
    name: String;
    base_experience: Number;
    height: Number;
    is_default: Boolean;
    order: Number;
    weight: Number;
    form: PokemonForm[];
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };

}