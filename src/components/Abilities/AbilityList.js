import AbilityCard from "./AbilityCard";

export default function AbilityList({ abilities }) {
    return (
        <div>
            {abilities.map((ability) =>
                <AbilityCard key={ability.id} ability={ability} />
            )}
        </div>
    );
}

