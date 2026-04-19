import type { ReactNode } from "react";

type ChipProps = {
    label: string;
    icon: ReactNode;
    className?: string;
};

export function Chip({ label, icon, className }: ChipProps) {
    return (
        <span
            className={`inline-flex h-11 max-w-full shrink-0 items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-slate-200 shadow-sm backdrop-blur-sm sm:h-12 sm:gap-2.5 sm:pr-5 sm:text-base ${className ?? ""}`}
        >
            <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-800/95">
                    {icon}
                </span>
            </span>
            <span className="min-w-0 whitespace-nowrap leading-snug">{label}</span>
        </span>
    );
}
