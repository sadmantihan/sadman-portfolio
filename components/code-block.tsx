"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({
  code,
  language = "python",
}: CodeBlockProps) {
  const [status, setStatus] = useState<
    "idle" | "copied" | "error"
  >("idle");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="article-code-block">
      <div className="article-code-toolbar">
        <span>{language}</span>

        <button
          type="button"
          onClick={copyCode}
          aria-label="Copy code"
        >
          {status === "copied" ? (
            <Check size={15} aria-hidden="true" />
          ) : (
            <Copy size={15} aria-hidden="true" />
          )}

          {status === "copied" ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre>
        <code>{code}</code>
      </pre>

      <span className="code-copy-status" role="status">
        {status === "copied" && "Code copied to clipboard."}
        {status === "error" &&
          "Could not copy. Please select and copy the code manually."}
      </span>
    </div>
  );
}