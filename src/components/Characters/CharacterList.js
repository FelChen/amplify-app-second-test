import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters }) {
    return (
        <div>
            {characters.map((character) =>
                <CharacterCard key={character.id} character={character} />
            )}
        </div>
    )
}