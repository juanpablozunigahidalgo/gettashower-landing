import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalDocumentPageProps = {
  title: string;
  documentPath: string;
};

function renderInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)/gi);

  return tokens
    .filter(Boolean)
    .map((token, idx) => {
      if (token.startsWith("**") && token.endsWith("**")) {
        return <strong key={`${token}-${idx}`}>{token.slice(2, -2)}</strong>;
      }

      const markdownLink = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (markdownLink) {
        const [, label, href] = markdownLink;
        return (
          <a
            key={`${href}-${idx}`}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]"
          >
            {label}
          </a>
        );
      }

      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(token)) {
        return (
          <a
            key={`${token}-${idx}`}
            href={`mailto:${token}`}
            className="underline decoration-[#1A2B70]/40 underline-offset-4 hover:decoration-[#1A2B70]"
          >
            {token}
          </a>
        );
      }

      return <span key={`${token}-${idx}`}>{token}</span>;
    });
}

export async function LegalDocumentPage({ title, documentPath }: LegalDocumentPageProps) {
  const absolutePath = path.join(process.cwd(), documentPath);
  const markdown = await fs.readFile(absolutePath, "utf-8");
  const lines = markdown.split(/\r?\n/);

  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i] ?? "";
    const line = rawLine.trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      blocks.push(<hr key={`hr-${i}`} className="my-8 border-[#D0D8EB]" />);
      i += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];

      if (level === 1) {
        blocks.push(
          <h2 key={`h-${i}`} className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A2B70]">
            {renderInline(text)}
          </h2>,
        );
      } else if (level === 2) {
        blocks.push(
          <h3 key={`h-${i}`} className="mt-10 text-2xl font-semibold text-[#1A2B70]">
            {renderInline(text)}
          </h3>,
        );
      } else {
        blocks.push(
          <h4 key={`h-${i}`} className="mt-8 text-xl font-semibold text-[#1A2B70]">
            {renderInline(text)}
          </h4>,
        );
      }

      i += 1;
      continue;
    }

    if (/^(\-|\d+\.)\s+/.test(line)) {
      const isOrdered = /^\d+\.\s+/.test(line);
      const listItems: string[] = [];

      while (i < lines.length) {
        const candidate = (lines[i] ?? "").trim();
        const pattern = isOrdered ? /^\d+\.\s+(.+)$/ : /^\-\s+(.+)$/;
        const match = candidate.match(pattern);
        if (!match) break;
        listItems.push(match[1]);
        i += 1;
      }

      const ListTag = isOrdered ? "ol" : "ul";
      blocks.push(
        <ListTag
          key={`list-${i}`}
          className={isOrdered ? "ml-6 list-decimal space-y-2 text-[#1A2B70]" : "ml-6 list-disc space-y-2 text-[#1A2B70]"}
        >
          {listItems.map((item, idx) => (
            <li key={`${item}-${idx}`} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }

    const paragraphLines: string[] = [line];
    i += 1;

    while (i < lines.length) {
      const candidate = (lines[i] ?? "").trim();
      if (!candidate) {
        i += 1;
        break;
      }
      if (/^(#{1,3})\s+/.test(candidate) || /^---+$/.test(candidate) || /^(\-|\d+\.)\s+/.test(candidate)) {
        break;
      }
      paragraphLines.push(candidate);
      i += 1;
    }

    blocks.push(
      <p key={`p-${i}-${paragraphLines[0]}`} className="text-[#1A2B70] leading-relaxed">
        {renderInline(paragraphLines.join(" "))}
      </p>,
    );
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#D0D8EB] bg-white shadow-sm p-6 sm:p-8 md:p-10">
          <div className="mb-8">
            <Link href="/" className="inline-block text-sm font-medium text-[#4A5F9E] hover:text-[#1A2B70] transition-colors">
              Back to home
            </Link>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#1A2B70]">{title}</h1>
          </div>
          <article className="space-y-5">{blocks}</article>
        </div>
      </div>
    </main>
  );
}
