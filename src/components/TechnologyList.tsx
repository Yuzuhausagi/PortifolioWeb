import { Chip } from "@/components/Chip";
import { iconsByTechnologies } from "@/components/portifolioitems";

export const TechnologyList = () => {
    const entries = Array.from(iconsByTechnologies);

    return (
        <div className="technology-list w-full max-w-5xl">
            <ul
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                role="list"
            >
                {entries.map(([technology, IconComponent]) => (
                    <li key={technology} className="flex shrink-0 justify-center">
                        <Chip
                            label={technology}
                            icon={<IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
