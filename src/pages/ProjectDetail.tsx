import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import { getProject } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-narrow">
        <Reveal>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> {t('portfolio.back')}
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="mt-8 inline-flex rounded-full border border-electric-500/20 bg-electric-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-electric-300">
            {project.category}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-200">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Meta label="Client" value={project.client} />
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.06]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-ink-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('portfolio.visit')} <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-xs uppercase tracking-wider text-ink-300">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink-100">{value}</p>
    </div>
  );
}
