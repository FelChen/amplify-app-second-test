import AbilityCastResult from "./AbilityCastResult";

export default function AbilitiesCastList({ abilitiesCast }) {
    return (
        <div>
            {abilitiesCast.map((abilityCast) =>
                <AbilityCastResult key={abilityCast.id} abilityCast={abilityCast} />
            )}
        </div>
    );
}
