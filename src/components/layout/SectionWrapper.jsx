import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function SectionWrapper({ id, className = "", children, title }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={id} className={className}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 py-24 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {title && (
          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-8">
            {title}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
