"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BRIEF_SUBMIT_LABEL } from "@/lib/constants";

const inputClass =
  "w-full min-w-0 max-w-full border-0 border-b border-[#D0D4C8] bg-transparent px-0 py-3 text-base text-[#1B1F18] placeholder:text-[#3E4538]/45 focus:border-[#8B1E3F] focus:outline-none focus:ring-0 min-h-[44px]";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#4A5C3A]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      caseProfile: "",
      proceedings: "",
      funding: "",
      deadline: "",
      urgency: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-7">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Full name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Law firm *
        </label>
        <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={4}
          placeholder="Profile, forum (FTT / UT / fresh claim), and any hearing date."
          className={`${inputClass} min-h-[110px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-brief disabled:opacity-60">
        {status === "loading" ? "Sending…" : BRIEF_SUBMIT_LABEL}
      </button>
    </form>
  );
}
