import { Technology, iconsByTechnologies } from "@/components/portifolioitems";

export default function PortifolioItem({
  topic,
  description,
  footer,
  link,
}: Readonly<{
  topic: string;
  description: string;
  footer: Technology[];
  link?: string;
}>) {
  return (
    <div className="flex flex-col h-auto min-h-[20rem] sm:min-h-[24rem] bg-slate-800 hover:shadow-lg hover:bg-slate-700 transition-all rounded-md p-4 sm:p-6 md:p-8 border border-slate-700">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{topic}</h3>
        <p className="text-sm sm:text-base text-gray-300 break-words">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto justify-center pt-4">
        {footer.map((technology) => {
          const IconComponent = iconsByTechnologies.get(technology);
          return (
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-200" key={technology}>
              {IconComponent && <IconComponent width={16} height={16} className="sm:w-5 sm:h-5" />}
              {technology}
            </div>
          );
        })}
      </div>
      {link && (
        <a href={link} target="_blank" className="mt-4 text-blue-400 text-sm hover:underline">
          View Project
        </a>
      )}
    </div>
  );
}