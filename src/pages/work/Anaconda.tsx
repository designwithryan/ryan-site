import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { LOGOS } from '../../data/content'
import { CopyEmailButton } from '../../components/CopyEmailButton'

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
        <div className="pt-1">
          <p className="text-primary text-sm tracking-[0.25em] uppercase md:sticky md:top-28">{label}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

function Divider() {
  return <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />
}

function ChapterBanner({ number, title }: { number: string; title: string }) {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-10 md:py-14 flex items-end gap-6 border-t border-primary/10">
      <span className="text-7xl md:text-8xl font-bold text-primary/5 leading-none select-none">{number}</span>
      <div>
        <p className="text-primary text-sm tracking-[0.25em] uppercase mb-1">Chapter {number}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
      </div>
    </div>
  )
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 border border-primary/10 rounded-xl hover:border-primary/20 transition-colors">
      <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
      <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
    </div>
  )
}

export function Anaconda() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto px-8 pt-32 pb-20 md:pb-28"
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-primary transition-colors mb-14 font-light tracking-wide"
        >
          <ArrowLeft size={14} />
          All work
        </Link>

        <div className="mb-5">
          <img
            src={LOGOS.anaconda}
            alt="Anaconda"
            className="h-8 w-auto brightness-0 invert opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-5">
          Design Leadership · Aug 2022 – Jul 2026
        </p>
        <h1 className="font-sans font-bold text-[clamp(2.5rem,6vw,5.5rem)] tracking-tight text-primary leading-[1.02] max-w-4xl">
          Building a Design Org From Nothing
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light leading-snug max-w-2xl font-serif italic">
          I didn't join a design org. I built one.
        </p>

        {/* Meta strip */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {[
            { label: 'Role', value: 'Product Design Lead' },
            { label: 'Company', value: 'Anaconda, Inc.' },
            { label: 'Timeline', value: 'Aug 2022 – Jul 2026' },
            { label: 'Location', value: 'Remote · Berlin' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-primary text-sm tracking-[0.25em] uppercase mb-1">{label}</p>
              <p className="text-sm font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {['Org Building', 'Design Systems', 'AI Strategy', 'Design Ops', 'UX Research', 'Team Leadership'].map((tag) => (
            <span key={tag} className="text-gray-400 text-xs tracking-widest uppercase font-light border border-gray-600/50 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Chapter 1 ─────────────────────────────────────────────── */}
      <ChapterBanner number="1" title="The Design Organization" />

      <Section label="What we inherited">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-5 max-w-2xl">
          A decade of products. No design files. No component libraries. No shared language. No playbook.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          Anaconda had been shipping software since 2009 , Navigator, Enterprise, Miniconda, PyScript, Jupyter integrations , before hiring its first designer in August 2022. When I joined, there were 4 designers and 8–9 products, each making its own decisions in isolation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProblemCard title="No design culture" desc="Engineers saw designers as friction, not partners." />
          <ProblemCard title="Products were a black box" desc="Dense technical domain. No reference designs, no specs, no components." />
          <ProblemCard title="No consistency" desc="Every product had made its own decisions. No shared language." />
          <ProblemCard title="No operating model" desc="4 designers, 8–9 products, no playbook for how to work together." />
          <ProblemCard title="No design files" desc="No files, no tools management, no handoff process." />
          <ProblemCard title="No accessibility standards" desc="Zero baseline for WCAG compliance or engineering documentation." />
        </div>
      </Section>

      <Divider />

      <Section label="The foundational roadmap">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-4 max-w-2xl">
          Two years. Two distinct phases.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          You can't influence strategy if you haven't proven you understand the business. The first two years were about building that proof.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="p-6 bg-primary/[0.04] border border-primary/10 rounded-2xl">
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3">Year 1</p>
            <h3 className="font-bold text-base text-primary mb-5">Earn the right to have opinions</h3>
            <ul className="space-y-3">
              {[
                'Understand the products deeply',
                'Build relationships with engineering and product',
                'Close the most visible quality gaps',
                'Embed designers in every product squad',
                'Establish design principles and shared language',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-gray-200 leading-relaxed font-light">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary/30 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
            <p className="text-gray-200 text-xs tracking-[0.25em] uppercase font-light mb-3">Year 2</p>
            <h3 className="font-bold text-base text-primary mb-5">Make the org self-sustaining</h3>
            <ul className="space-y-3">
              {[
                'Build design system foundation',
                'Define the delivery process',
                'Influence business decisions and roadmaps',
                'Align design OKRs with business in PI Planning',
                'Run company-wide design showcases',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-gray-200 leading-relaxed font-light">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Divider />

      <Section label="Build to scale">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-4 max-w-2xl">
          We didn't just need designers. We needed a design organization.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          Partnered with the Design Director to define the long-term architecture of how design would operate at a Series C company.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { title: 'Long-term design vision', desc: 'Where design needed to be in 3 years to serve a Series C, unicorn-stage company.' },
            { title: 'Design strategy', desc: 'How design would embed across product lines , not just support them.' },
            { title: 'Operating model', desc: 'How the org would function, make decisions, and measure its own maturity.' },
            { title: 'Strategic roadmap', desc: 'Phased plan from reactive execution to proactive product shaping.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-5 border border-primary/10 rounded-xl">
              <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
              <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-primary/8">
          <p className="text-primary text-sm tracking-[0.25em] uppercase mb-2">Org Structure</p>
          <h3 className="font-bold text-lg text-primary mb-2">Built with intention, not just speed</h3>
          <p className="text-sm text-gray-200 font-light mb-8 max-w-lg">
            Structured the growing team into four specialized groups , each with clear ownership, governance model, and success metrics.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { name: 'Design Systems', desc: 'Consistency, component governance, tooling, and velocity. The shared infrastructure every product depends on.' },
              { name: 'Design Ops', desc: 'D2D process, cross-functional coordination, handoffs. Making the machine run without friction.' },
              { name: 'UX Research', desc: 'User insight embedded in product decisions. ResearchOps infrastructure that scales.' },
              { name: 'Content Design', desc: 'Dev doc writing direction, voice and tone standards. Words as product.' },
            ].map(({ name, desc }) => (
              <div key={name} className="p-5 bg-primary/[0.04] rounded-xl border border-primary/8">
                <h4 className="text-sm font-bold text-primary mb-2">{name}</h4>
                <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 border border-primary/10 rounded-2xl">
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-3">Hiring Philosophy</p>
            <p className="text-lg font-bold text-primary mb-1">T-shape and mindset.</p>
            <p className="text-gray-200 font-light mb-6">Skills develop. Curiosity and accountability don't.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Strong depth in one area', desc: 'Deep expertise in at least one discipline , not generalists across the board.' },
                { title: 'Complementary strengths', desc: 'Build for range across the team, not ten versions of the same person.' },
                { title: '30-60-90 onboarding', desc: 'Understand → contribute → own. Structured ramp with clear expectations.' },
                { title: 'Internal career frameworks', desc: "Clear growth paths so designers know where they're going." },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h5 className="text-sm font-bold text-primary mb-1">{title}</h5>
                  <p className="text-xs text-gray-200 leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Chapter 2 ─────────────────────────────────────────────── */}
      <ChapterBanner number="2" title="The Design System" />

      <Section label="The challenge">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-5 max-w-2xl">
          +9 products. Zero shared visual language. Years of independent decisions.
        </p>
        <div className="mb-8 p-5 bg-primary/10 border border-primary/20 rounded-xl">
          <p className="text-base text-primary font-bold">
            The design system wasn't a nice-to-have. It was an operational necessity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            'Multiple UI libraries in use',
            "Products don't talk to each other",
            'Inconsistency everywhere',
            'No accessibility standards',
            'No shared design language',
            'No handoff process',
            'No design or engineering docs',
            'No files or tools management',
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start p-4 border border-primary/10 rounded-xl">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/25 shrink-0" />
              <p className="text-sm text-gray-200 leading-relaxed font-light">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      <Section label="How it was built">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-10 max-w-2xl">
          Initiated on the side. Adopted across the org. Built to last.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-6">What I built</p>
            <div className="space-y-2 mb-8">
              {[
                { layer: '5', name: 'Final UI Screens', desc: 'Hi-Fi designs with all handoff notes' },
                { layer: '4', name: 'Page Library', desc: 'Power user vs. admin dashboards, etc.' },
                { layer: '3', name: 'Pattern Library', desc: 'Headers, tables, adding/removing, etc.' },
                { layer: '2', name: 'Core Library', desc: 'Buttons, inputs, form controls, etc.' },
                { layer: '1', name: 'The Foundations', desc: 'Colors, tokens, spacing, accessibility' },
              ].map(({ layer, name, desc }, i) => (
                <div
                  key={name}
                  style={{ marginLeft: `${(5 - i - 1) * 12}px` }}
                  className="flex items-center gap-3 p-3.5 bg-primary/[0.04] border border-primary/10 rounded-lg"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                    {layer}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary">{name}</p>
                    <p className="text-xs text-gray-200 font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['70+ core components', '40+ patterns', '20+ page templates'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-white/5 border border-gray-600/50 rounded-full text-xs font-light text-gray-400">{s}</span>
              ))}
            </div>
            <p className="text-xs text-gray-200 font-light">
              Figma · Kendo UI · Storybook · Astro/Starlight
            </p>
          </div>

          <div>
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-6">How I built it</p>
            <ul className="space-y-6">
              {[
                { title: 'Prioritized by impact', desc: 'Fixed the highest-frequency problems first , the patterns that appeared across the most products and caused the most friction.' },
                { title: 'Launched in phases', desc: 'Foundations → Core components → Patterns → Page templates. Each layer built on a stable previous layer. Additive, not disruptive.' },
                { title: 'Engineering aligned from day one', desc: 'Product and engineering were partners in the build, not recipients at handoff. No surprises at implementation.' },
                { title: 'Initiated as a side project', desc: 'Started without formal mandate. Proved value incrementally until it became the organizational priority.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">{title}</p>
                    <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Divider />

      <Section label="Governance & scale">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-6">How I govern</p>
            <ul className="space-y-5">
              {[
                { title: 'Contribution model', desc: 'Clear process for teams to propose, review, and add to the system , not just consume it.' },
                { title: 'Adoption framework', desc: 'Onboarding, documentation, and advocacy embedded in every release. Not shipped and forgotten.' },
                { title: 'Single source of truth', desc: 'One decision, one place, no parallel systems. Prevents fragmentation from re-emerging.' },
                { title: 'Quarterly scaling plans', desc: 'Each quarter a new layer aligned with business OKRs , not just design team output.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">{title}</p>
                    <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-6">How I scale</p>
            <ul className="space-y-5">
              {[
                { title: 'Additive architecture', desc: 'Each new library builds on the last. No big-bang cutovers. Each addition extends without breaking what exists.' },
                { title: 'AI-plugged documentation', desc: 'Automated documentation pipeline , 4–6 hours per week saved. Auto-publish to GitHub + Mintlify on every release.' },
                { title: 'Impact tied to org outcomes', desc: 'Every enhancement justified by cross-team impact, not just design team preference. Design proves its value in business terms.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">{title}</p>
                    <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Divider />

      <Section label="The impact">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-12 max-w-2xl">
          The metrics that changed how Anaconda ships.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {[
            { number: '85%+', label: 'Adoption across products' },
            { number: '99%', label: 'UI consistency across major products' },
            { number: '77%', label: 'Reduction in duplicate UI patterns' },
            { number: '24%+', label: 'Velocity improvement in 15 months' },
            { number: '40%+', label: 'Reduction in handoff gaps' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center p-6 border border-primary/10 rounded-2xl hover:border-primary/25 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">{number}</p>
              <p className="text-xs text-gray-200 leading-relaxed font-light">{label}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-primary/20 pl-6">
          <p className="text-lg text-gray-200 font-serif italic">
            "It stopped being a design system the moment every team called it theirs."
          </p>
        </blockquote>
      </Section>

      {/* ── Chapter 3 ─────────────────────────────────────────────── */}
      <ChapterBanner number="3" title="AI Vision & Strategy" />

      <Section label="AI strategy">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-4 max-w-2xl">
          From observation to initiative.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          Everyone had the tools. Nobody had the strategy. I self-initiated a 12-month AI transformation across all four design groups , coordinating four design managers, engineering, and product leadership from the ground up.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="p-6 border border-primary/10 rounded-2xl">
            <h4 className="text-sm font-bold text-primary mb-2">Built the vision, aligned on scope</h4>
            <p className="text-sm text-gray-200 leading-relaxed font-light">
              Facilitated bottom-up sessions with all four design managers. Deliberately included engineering leads and product leaders from day one , not as approvers, but as co-architects.
            </p>
          </div>
          <div className="p-6 border border-primary/10 rounded-2xl">
            <h4 className="text-sm font-bold text-primary mb-2">Each division created backlogs and set priorities</h4>
            <p className="text-sm text-gray-200 leading-relaxed font-light">
              Ownership was pushed to the group level. Every division identified its highest-leverage AI initiatives and sequenced them into a shared roadmap.
            </p>
          </div>
        </div>
        <div className="p-6 bg-primary/8 border border-primary/15 rounded-2xl inline-block">
          <p className="text-sm text-gray-200 mb-1 font-light">The outcome</p>
          <p className="text-4xl font-bold text-primary">55+ AI-enablement initiatives</p>
          <p className="text-sm text-gray-200 mt-1 font-light">added to the roadmap across all design groups</p>
        </div>
      </Section>

      <Divider />

      <Section label="The roadmap">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-10 max-w-2xl">
          12 months. 4 divisions. One unified direction.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              quarter: 'Q1',
              theme: 'Foundation',
              sub: 'Discover, Audit & Align',
              accent: 'border-primary/20 bg-primary/[0.04]',
              items: [
                'Design System: Audit repetitive doc & spec tasks',
                'Design Ops: Build AI tool evaluation criteria',
                'UX Research: Pilot AI note-taking on one project',
                'Content: Audit copy workflows',
              ],
            },
            {
              quarter: 'Q2',
              theme: 'Activate',
              sub: 'Experiment & Learn',
              accent: 'border-yellow-500/20 bg-yellow-500/[0.04]',
              items: [
                'Design System: Pilot AI-generated component docs',
                'Design Ops: Build internal prompt library',
                'UX Research: Test AI transcript analysis & tagging',
                'Content: AI-drafted microcopy with human review',
              ],
            },
            {
              quarter: 'Q3',
              theme: 'Integrate',
              sub: 'Embed & Automate',
              accent: 'border-blue-400/20 bg-blue-400/[0.04]',
              items: [
                'Design System: Advance context automation',
                'Design Ops: Automate ops reporting & onboarding',
                'UX Research: AI synthesis becomes standard practice',
                'Content: AI generates A/B copy variations',
              ],
            },
            {
              quarter: 'Q4',
              theme: 'Scale',
              sub: 'Evaluate, Consolidate & Plan Year 2',
              accent: 'border-purple-400/20 bg-purple-400/[0.04]',
              items: [
                'Design System: Explore design-to-code automation',
                'Design Ops: Consolidate tool stack',
                'UX Research: Trend detection pipelines',
                'Content: Assess localization & personalization at scale',
              ],
            },
          ].map(({ quarter, theme, sub, accent, items }) => (
            <div key={quarter} className={`p-5 rounded-2xl border ${accent}`}>
              <p className="text-3xl font-bold text-primary mb-1">{quarter}</p>
              <p className="text-sm font-bold text-primary mb-0.5">{theme}</p>
              <p className="text-xs text-gray-200 mb-5 font-light">{sub}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-gray-200 leading-relaxed font-light">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/25 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Chapter 4 ─────────────────────────────────────────────── */}
      <ChapterBanner number="4" title="The Outerbounds Merger" />

      <Section label="DS merger strategy">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-2 max-w-2xl">
          One vision. Two organizations.
        </p>
        <p className="text-xl text-gray-200 font-serif italic mb-8">My job: Make them believe it.</p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          When Anaconda began merging with Outerbounds in 2026, I led the design system strategy for the combined organization , two separate design systems, two visual languages, two engineering implementation patterns, one goal.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { number: '01', title: 'Overlap assessment', desc: 'Component-by-component, pattern-by-pattern mapping of both systems to identify what was shared, divergent, or unique.' },
            { number: '02', title: 'Consolidation strategy', desc: 'Architectural decision framework: what migrates directly, what gets harmonized, what needs new build, what gets deprecated.' },
            { number: '03', title: 'Phased migration plan', desc: 'Phase 1: unified foundations (tokens, typography, color). Subsequent phases ordered by cross-team usage frequency. No big-bang cutover.' },
            { number: '04', title: 'Stakeholder alignment', desc: 'Structured sessions with design and engineering leadership from both orgs. Decision documentation grounded in shared criteria, not preference.' },
          ].map(({ number, title, desc }) => (
            <div key={number} className="p-5 border border-primary/10 rounded-xl">
              <p className="text-3xl font-bold text-primary/10 mb-3 leading-none">{number}</p>
              <h4 className="text-sm font-bold text-primary mb-2">{title}</h4>
              <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-primary/[0.04] border border-primary/10 rounded-2xl max-w-2xl">
          <p className="text-base text-gray-200 leading-relaxed font-light">
            A clear path from two fragmented systems to one coherent design language, protecting both teams' velocity during a high-stakes transition. The work was cut short by the acquisition layoff , but the strategy and documentation remain as a foundation for the next design leader.
          </p>
        </div>
      </Section>

      {/* ── Chapter 5 ─────────────────────────────────────────────── */}
      <ChapterBanner number="5" title="The Legacy" />

      <Section label="The cultural shift">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-4 max-w-2xl">
          Year one we were tolerated. Year three we were essential.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-3 max-w-xl font-light">
          We weren't fighting bad design. We were fighting the belief that design didn't matter.
        </p>
        <p className="text-gray-200 text-sm leading-relaxed mb-12 max-w-xl font-light">
          A decade of shipping without designers had created a powerful internal feeling: you don't need them. Engineering didn't resist design because they were wrong , they resisted it because nothing had ever shown them they were missing something. Our job was to make it irrational to stay skeptical.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              year: 'Y1',
              label: 'Earning trust',
              items: [
                'Embedded designers in every product squad',
                'Established design principles and shared language',
                'Involved engineers and PMs from the start , shaped solutions together',
              ],
            },
            {
              year: 'Y2',
              label: 'Building credibility',
              items: [
                'Regular company-wide design showcases',
                'Design impact reports to senior leadership',
                'Design OKRs aligned with business in PI Planning',
                'Co-owned product launch narratives',
              ],
            },
            {
              year: 'Y3',
              label: 'The shift confirmed',
              items: [
                'Design has a chair at leadership level',
                'Design in every business roadmap',
                'PM & Engineering requesting design proactively',
                'Leadership citing design impact in company-wide comms',
              ],
            },
          ].map(({ year, label, items }) => (
            <div key={year} className="p-6 border border-primary/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                  {year}
                </span>
                <p className="text-sm font-bold text-primary">{label}</p>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-gray-200 leading-relaxed font-light">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/25 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      <Section label="What I left behind">
        <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-4 max-w-2xl">
          The measure of a leader isn't what they built. It's what kept running after they left.
        </p>
        <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-xl font-light">
          Anaconda was acquired by Outerbounds in late 2025 , my position was eliminated as part of the acquisition-related reduction in force. Here is what remained:
        </p>
        <ul className="space-y-5 max-w-2xl">
          {[
            'A design organization that went from zero to 16+ with culture shifted, structure, and systems intact',
            '85%+ design system adoption across 10+ products , self-sustaining, with a contribution model running',
            'Four specialized groups with clear ownership, governance, and success metrics',
            'A 55-initiative AI roadmap , fully documented, ready to execute',
            'Clear hiring process and growth path for designers at every level',
            'A complete merger plan , Outerbounds DS consolidation strategy, phased, documented, ready to continue',
            'Design holds a chair at leadership level , embedded in executive decision-making',
          ].map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
              <p className="text-base text-gray-200 leading-relaxed font-light">{item}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Divider />
      <div className="max-w-[1400px] mx-auto px-8 py-20 md:py-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="text-xl font-bold text-primary mb-2">Let's talk about what comes next.</p>
          <p className="text-gray-200 font-light">Open to Design Director, CDO, and Head of Design opportunities.</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <CopyEmailButton variant="cta" label="Get in touch" />
          <Link
            to="/work"
            className="px-6 py-3 border border-primary/15 text-gray-200 text-sm font-light tracking-widest uppercase rounded-full hover:border-primary/40 hover:text-primary transition-all"
          >
            All work
          </Link>
        </div>
      </div>
    </div>
  )
}
