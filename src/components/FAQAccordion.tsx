"use client";

import { useState } from "react";
import { FAQ_ITEMS, type FAQItem as FAQItemType } from "@/data";

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-outline-variant">
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center text-left gap-6"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="font-serif text-xl text-on-surface">{item.question}</span>
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        hidden={!isOpen}
      >
        <p className="pb-6 text-on-surface-variant text-sm leading-relaxed max-w-2xl">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <div className="border-t border-outline-variant">
      {FAQ_ITEMS.map((item) => (
        <FAQRow
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
