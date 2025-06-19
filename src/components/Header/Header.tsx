import {FC, ReactNode} from "react";

export const Header: FC<{children: ReactNode}> =  ({children}) => {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-lg sm:shadow-xl font-bold max-w-full">{children}</h1>
    )
}