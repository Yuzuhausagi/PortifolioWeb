import {iconsByTechnologies} from "@/components/portifolioitems";

export const TechnologyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-gray-100">
      {Array.from(iconsByTechnologies).map(([technology, IconComponent]) => (
        <div className="flex items-center gap-2 p-2 sm:p-3" key={technology}>
          <IconComponent alt={`${technology} icon`} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-medium text-sm sm:text-base break-words">{technology}</span>
        </div>
      ))}
    </div>
  );
};