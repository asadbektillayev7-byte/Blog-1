import type { Metadata } from "next";
import SectionLabel from "@/app/components/SectionLabel";
import SignatureDivider from "@/app/components/SignatureDivider";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects — Asadbek Tillayev",
  description: "Case studies of what I've built.",
};

const projects = [
  {
    index: "01",
    title: "IELTS mock exam platform",
    description:
      "A full-featured IELTS mock exam platform with an admin panel for managing questions, a question editor for creating reading passages and multiple question types, and timed reading exams that simulate the real test experience. Designed for students preparing for the IELTS academic module.",
    stack:
      "Next.js, TypeScript, Tailwind CSS, Supabase — scaffolded entirely via AI-assisted vibe-coding without a formal programming background.",
    challenge:
      "Building an exam engine that accurately tracks time per section, handles passage-based reading comprehension with multiple question formats (multiple choice, matching headings, True/False/Not Given), and provides immediate scoring feedback — all while learning to code on the fly.",
    link: "https://exam-platform-tan-mu.vercel.app",
  },
  {
    index: "02",
    title: "MUHANDISS.UZ",
    description:
      "A community platform for young engineers in Uzbekistan. The site connects students, shares educational resources, and organizes events — serving as a central hub for a growing network of aspiring engineers across the country.",
    stack: "Next.js, TypeScript, Tailwind CSS, Framer Motion.",
    challenge:
      "Designing a platform that balances community features (profiles, event listings, resource sharing) while keeping the user experience clean and approachable for a teenage and young-adult audience. Coordinating contributions from multiple community members.",
    link: "https://muhandiss.uz",
  },
  {
    index: "03",
    title: "Asliddin Edu",
    description:
      "The official website for Asliddin Edu, an education centre in Qarshi offering English language courses, IELTS preparation, and CEFR-aligned exam training. The site presents course information, schedules, and contact details for prospective students.",
    stack: "Next.js, TypeScript, Tailwind CSS.",
    challenge:
      "Translating the centre's professional yet welcoming identity into a clean web presence. Making course information easy to navigate and understand while keeping the site lightweight and fast-loading for users in the region.",
    link: "https://onatiliasliddin.uz",
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <FadeIn>
        <section className="py-16">
          <h1 className="font-display text-2xl text-ink mb-4">
            Projects
          </h1>
          <p className="text-muted max-w-lg">
            Case studies of things I&apos;ve built — what they do, how
            they&apos;re made, and what made them hard.
          </p>
        </section>
      </FadeIn>

      <SignatureDivider />

      {projects.map((project, i) => (
        <section key={project.index} className="pb-28">
          <SectionLabel index={project.index} title={project.title} />
          <div className="space-y-6">
            <FadeIn delay={i * 0.1}>
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-sage mb-2">
                  What it does
                </h2>
                <p className="text-ink leading-relaxed">
                  {project.description}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={i * 0.1 + 0.05}>
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-sage mb-2">
                  Stack
                </h2>
                <p className="text-muted leading-relaxed">
                  {project.stack}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={i * 0.1 + 0.1}>
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-sage mb-2">
                  What was hard
                </h2>
                <p className="text-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={i * 0.1 + 0.15}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-display text-sm uppercase tracking-wider text-accent hover:text-ink transition-colors"
              >
                Visit site &rarr;
              </a>
            </FadeIn>
          </div>
        </section>
      ))}
    </div>
  );
}
