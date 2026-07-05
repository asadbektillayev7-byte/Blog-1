import type { Metadata } from "next";
import BlinkingSlot from "@/app/components/BlinkingSlot";
import SectionLabel from "@/app/components/SectionLabel";
import SignatureDivider from "@/app/components/SignatureDivider";
import FadeIn from "@/app/components/FadeIn";
import LogList from "@/app/components/LogList";
import LinkCard from "@/app/components/LinkCard";

export const metadata: Metadata = {
  title: "Asadbek Tillayev",
  description:
    "Learning, building, and living between Karshi and Tashkent.",
};

export default function Home() {
  const nowItems = [
    {
      status: "building",
      name: "IELTS mock exam platform",
      description:
        "Admin panel, question editor, timed reading exams — built without a formal coding background.",
      link: "https://exam-platform-tan-mu.vercel.app",
    },
    {
      status: "running",
      name: "Asliddin Edu",
      description:
        "Education centre in Qarshi — English, IELTS, and CEFR prep.",
    },
    {
      status: "active",
      name: "MUHANDISS.UZ",
      description:
        "A community for young engineers, built and maintained alongside the people in it.",
      link: "https://muhandiss.uz",
    },
    {
      status: "next",
      name: <BlinkingSlot />,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <FadeIn>
        <section className="py-28">
          <p className="font-display text-2xl leading-relaxed text-ink">
            Hey, Asadbek here.
            <br />
            Learning, building, and living between Karshi and Tashkent.
            <br />
            I&apos;ve been in &ldquo;try-everything&rdquo; mode for the
            last 1.5 years. I fill my free time reflecting on
            thought-provoking ideas.
            <br />
            I love building (sometimes unfinished) side-projects with
            vibe-coding.
            <br />
            <span className="font-display text-xs tracking-[0.3em] text-muted">
              [_______]
            </span>{" "}
            more on the way.
          </p>
        </section>
      </FadeIn>

      <SignatureDivider />

      <section className="pb-28">
        <SectionLabel index="01" title="now" />
        <LogList items={nowItems} />
      </section>

      <SignatureDivider />

      <section className="pb-28">
        <SectionLabel index="02" title="writing" />
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard
            label="general blog"
            handle="@asadbektillayevv"
            href="https://t.me/asadbektillayevv"
            description="Thoughts, updates, and things I'm exploring."
            delay={0}
          />
          <LinkCard
            label="process / reflective"
            handle="@dyucke"
            href="https://t.me/dyucke"
            description="Things I couldn't walk past without going to its edge."
            delay={0.08}
          />
        </div>
      </section>

      <SignatureDivider />

      <section className="pb-28">
        <SectionLabel index="03" title="elsewhere" />
        <div className="flex flex-wrap gap-6 font-display text-sm uppercase tracking-wider">
          <a
            href="https://linkedin.com/in/asadbek-tillayev-7540ab329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/asadbektillayev7-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://t.me/asadbektillayevv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent transition-colors"
          >
            Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
