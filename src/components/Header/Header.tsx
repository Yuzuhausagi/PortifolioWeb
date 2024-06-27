import {FC, ReactNode} from "react";

export const Header: FC<{children: ReactNode}> =  ({children}) => {
    return (
        <h1 className="text-5xl shadow-2xl font-bold">{children}</h1>
    )
}