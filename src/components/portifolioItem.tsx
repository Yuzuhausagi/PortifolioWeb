import {Technology, iconsByTechnologies} from "@/components/portifolioitems";


export default function PortifolioItem({
                                           topic, description, footer, link
                                       }: Readonly<{
    topic: string;
    description: string;
    footer: Technology[];
    link?: string;
}>) {
    return (
        <div style={{flexBasis: "calc(33.333% - 0.75rem)"}} className="flex flex-col h-96 bg-slate-800 hover:ring-1 transition-all ring-amber-300 rounded-md p-10">
            <div className="flex-col flex gap-2">
                <div className="text-3xl">
                    {topic}
                </div>
                <div className="text-md">
                    {description}
                </div>
            </div>
            <div className="flex gap-2 mt-auto justify-center">
                {footer.map(technology => {
                    const IconComponent= iconsByTechnologies.get(technology);
                    return <div className="flex gap-2" key={technology}>{IconComponent ? <IconComponent width={20} height={20} /> : undefined}{technology}</div>;
                })}
            </div>
        </div>
    );
}
