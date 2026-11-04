"use client";

import { useRef, useState } from "react";

export type MethodStep = {
  code: string;
  action: string;
  title: string;
  text: string;
  practical: string;
  outputs: string[];
};

export default function MethodTabs({ steps }: { steps: MethodStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeStep = steps[activeIndex];

  const selectTab = (index: number) => {
    const nextIndex = (index + steps.length) % steps.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#DCE3EA] bg-white shadow-[0_24px_70px_rgba(10,31,59,0.06)] lg:grid-cols-[0.72fr_1.28fr]">
      <div
        className="grid border-b border-[#DCE3EA] sm:grid-cols-2 lg:block lg:border-b-0 lg:border-r"
        role="tablist"
        aria-label="Etapas do Método INVD"
        aria-orientation="vertical"
      >
        {steps.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.code}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`method-tab-${index}`}
              aria-selected={isActive}
              aria-controls="method-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault();
                  selectTab(activeIndex + 1);
                }
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  selectTab(activeIndex - 1);
                }
                if (event.key === "Home") {
                  event.preventDefault();
                  selectTab(0);
                }
                if (event.key === "End") {
                  event.preventDefault();
                  selectTab(steps.length - 1);
                }
              }}
              className={`group flex min-h-24 w-full items-center gap-5 border-b border-[#E8EDF2] px-6 py-6 text-left transition last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#246FBF] lg:px-8 ${
                isActive ? "bg-[#0A1F3B] text-white" : "bg-white text-[#0A1F3B] hover:bg-[#F6F8FA]"
              }`}
            >
              <span className={`text-4xl font-semibold tracking-[-0.08em] ${isActive ? "text-[#7CC4FF]" : "text-[#0A1F3B]/15 group-hover:text-[#246FBF]/45"}`}>
                {item.code}
              </span>
              <span>
                <span className="block text-[9px] uppercase tracking-[0.28em] opacity-45">Etapa {String(index + 1).padStart(2, "0")}</span>
                <span className="mt-1 block text-sm font-bold">{item.action}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="method-panel"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`method-tab-${activeIndex}`}
        className="relative min-h-[31rem] p-7 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#246FBF] sm:p-10 lg:p-12"
      >
        <span className="pointer-events-none absolute right-6 top-2 text-[8rem] font-semibold leading-none tracking-[-0.1em] text-[#0A1F3B]/[0.045] sm:text-[11rem]">{activeStep.code}</span>
        <div className="relative" aria-live="polite">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#246FBF]">{activeStep.code} — {activeStep.action}</span>
          <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0A1F3B] md:text-4xl">{activeStep.title}</h3>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#344054] md:text-base">{activeStep.text}</p>
          <div className="mt-8 rounded-2xl border border-[#E3E8EE] bg-[#F6F8FA] p-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#667085]">Na prática</span>
            <p className="mt-2 text-sm leading-7 text-[#475467]">{activeStep.practical}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {activeStep.outputs.map((output) => (
              <span key={output} className="rounded-full border border-[#DCE3EA] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475467]">{output}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
