import {iconsByTechnologies} from "@/components/portifolioitems";

export const TechnologyList = () => {
    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-100">
        {Array.from(iconsByTechnologies).map(([technology ,IconComponent]) => {
            return <div className=" flex items-center gap-2" key={technology}>
                <IconComponent alt={`${technology} icon`} className="w-6 h-6"/>
                <span className="font-medium">{technology}</span>
            </div>
        })
    }
    </div>
}