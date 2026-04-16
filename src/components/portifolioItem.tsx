import { Technology, iconsByTechnologies } from '@/components/portifolioitems';

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
    <article className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-5 shadow-xl shadow-black/20 backdrop-blur-sm transition duration-300 sm:min-h-[24rem] sm:p-6 md:p-7 hover:-translate-y-1 hover:border-teal-500/25 hover:shadow-2xl hover:shadow-teal-950/20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
        aria-hidden
      />

      <div className="flex flex-1 flex-col gap-3 sm:gap-4">
        <h3 className="text-balance text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          {topic}
        </h3>
        <p className="pb-4 text-pretty text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5 sm:mt-auto sm:pt-6">
        {footer.map((technology) => {
          const IconComponent = iconsByTechnologies.get(technology);
          return (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/50 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-200 sm:gap-2 sm:px-3 sm:text-sm"
              key={technology}
            >
              {IconComponent && (
                <IconComponent
                  width={16}
                  height={16}
                  className="shrink-0 opacity-90 sm:h-5 sm:w-5"
                />
              )}
              {technology}
            </span>
          );
        })}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
        >
          View project
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      )}
    </article>
  );
}
