import type { Metadata } from "next";
import SectionLabel from "@/app/components/SectionLabel";
import SignatureDivider from "@/app/components/SignatureDivider";
import FadeIn from "@/app/components/FadeIn";
import LogList from "@/app/components/LogList";

export const metadata: Metadata = {
  title: "About — Asadbek Tillayev",
  description: "Background, timeline, and context.",
};

const timelineItems = [
  {
    status: "2025",
    name: "Graduated from Rahimov School",
    description:
      "Completed secondary education at Rahimov School in Karshi, Uzbekistan. Currently on a gap year, based between Karshi and Tashkent.",
  },
  {
    status: "2025",
    name: "Founded Asliddin Edu",
    description:
      "Started an education centre in Qarshi offering English, IELTS, and CEFR preparation courses.",
  },
  {
    status: "2024–25",
    name: "SAT teaching",
    description:
      "Taught SAT preparation, helping students navigate standardized testing for university applications abroad.",
  },
  {
    status: "2024",
    name: "Founders Camp / Startup Fest",
    description:
      "Attended a founders camp and startup festival in Shakhrisabz — a formative experience that deepened interest in entrepreneurship and tech.",
  },
  {
    status: "2024",
    name: "UzCombinator & Yoshlar Ventures",
    description:
      "Completed internships at UzCombinator and Yoshlar Ventures, gaining exposure to the startup ecosystem in Uzbekistan.",
  },
  {
    status: "2024",
    name: "Joined MUHANDISS.UZ",
    description:
      "Became part of MUHANDISS.UZ, a community for young engineers. Helps build and maintain the platform alongside other members.",
  },
  {
    status: "ongoing",
    name: "Writing on Telegram",
    description:
      "Runs @asadbektillayevv (general blog — thoughts, updates, things I'm exploring) and @dyucke (process/reflective — things 'I couldn't walk past without going to its edge').",
  },
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <FadeIn>
        <section className="py-16">
          <h1 className="font-display text-2xl text-ink mb-4">About</h1>
          <div className="space-y-4 text-muted leading-relaxed max-w-2xl">
            <p>
              I&apos;m Asadbek Tillayev — a 2025 graduate of Rahimov
              School, currently on a gap year, based between Karshi and
              Tashkent, Uzbekistan.
            </p>
            <p>
              I run Asliddin Edu, an education centre in Qarshi
              specializing in English, IELTS, and CEFR preparation. Alongside
              that, I&apos;m building an IELTS mock exam platform — admin
              panel, question editor, timed reading exams — entirely through
              AI-assisted vibe-coding, without a formal coding background.
            </p>
            <p>
              I&apos;m part of MUHANDISS.UZ, a community for young
              engineers in Uzbekistan. I attended Founders Camp / Startup
              Fest in Shakhrisabz and interned at UzCombinator and Yoshlar
              Ventures. When I&apos;m not building, you&apos;ll find me
              hiking Sary-Chelek Lakes or the Zamin mountains.
            </p>
            <p>
              I write on Telegram —{" "}
              <a
                href="https://t.me/asadbektillayevv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink transition-colors"
              >
                @asadbektillayevv
              </a>{" "}
              for general blogging and{" "}
              <a
                href="https://t.me/dyucke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink transition-colors"
              >
                @dyucke
              </a>{" "}
              for process and reflective writing about things I
              &ldquo;couldn&apos;t walk past without going to its
              edge.&rdquo;
            </p>
          </div>
        </section>
      </FadeIn>

      <SignatureDivider />

      <section className="pb-28">
        <SectionLabel index="01" title="timeline" />
        <LogList items={timelineItems} />
      </section>
    </div>
  );
}
