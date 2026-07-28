"use client";

import React, { useState, useEffect, useRef } from "react";

const problems = [
  {
    num: "01",
    title: "어떠한 MVP를 만들지 막막합니다.",
    desc: "",
    panelTitle: "아이디어를 고객 문제, 가설 검증, 핵심 기능, 제외할 기능으로 나누어 MVP 범위를 구조화합니다.",
    panelDesc: "",
    visual: "flow1"
  },
  {
    num: "02",
    title: "기획과 PM이 부족합니다",
    desc: "",
    panelTitle: "원활한 협업 환경을 구성합니다.",
    panelDesc: "",
    visual: "flow2"
  },
  {
    num: "03",
    title: "아이디어를 빠르게 검증하고 싶습니다.",
    desc: "",
    panelTitle: "요구사항 정리부터 MVP 제작, 테스트, 개선 백로그까지 연결해 빠르게 검증합니다.",
    panelDesc: "",
    visual: "flow4"
  },
  {
    num: "04",
    title: "효율적인 프로젝트 관리가 필요합니다.",
    desc: "",
    panelTitle: "명확한 관리로 성공적인 프로젝트를 만듭니다.",
    panelDesc: "",
    visual: "flow5"
  }
];

export default function ProblemSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 데스크탑 화면에서만 스크롤 진행률 계산
      if (window.innerWidth < 1024) return;
      
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 내부에서 스크롤 가능한 전체 거리
      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;

      // 화면 상단을 기준으로 섹션이 위로 얼마나 올라갔는지
      const scrolled = -top;
      
      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      // 4개의 아이템에 맞춰 인덱스 매핑 (0, 1, 2, 3)
      const newIdx = Math.min(problems.length - 1, Math.floor(progress * problems.length));
      setActiveIdx(newIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "flow1":
        return (
          <div className="flex flex-col w-full max-w-[320px]">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-bg-base border border-border-subtle rounded-lg p-3 text-center text-text-primary text-[13px] font-medium shadow-sm">아이디어</div>
              <svg aria-hidden="true" className="w-4 h-4 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <div className="flex-1 bg-bg-base border border-border-subtle rounded-lg p-3 text-center text-text-primary text-[13px] font-medium shadow-sm">고객 문제</div>
            </div>
            <div className="h-6 flex justify-center"><div className="w-px bg-border-subtle"></div></div>
            <div className="bg-bg-base border border-accent-primary/30 rounded-lg p-3 text-center text-accent-primary text-[13px] font-bold shadow-[0_0_15px_rgba(182,255,48,0.1)]">가설 검증</div>
            <div className="h-6 flex justify-center"><div className="w-px bg-border-subtle"></div></div>
            <div className="bg-[#2A2D34] border border-[#3A3D44] rounded-lg p-3 text-center text-white text-[14px] font-bold">MVP 범위 확정</div>
          </div>
        );
      case "flow2":
        return (
          <div className="grid grid-cols-2 gap-3 w-full max-w-[320px]">
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              <span className="text-text-primary text-[13px] font-medium">요구사항</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              <span className="text-text-primary text-[13px] font-medium">화면정책</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              <span className="text-text-primary text-[13px] font-medium">백로그</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              <span className="text-text-primary text-[13px] font-medium">로드맵</span>
            </div>
          </div>
        );
      case "flow3":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[320px] relative">
            <div className="flex justify-between gap-2">
              <div className="bg-bg-base border border-border-subtle rounded text-[12px] font-medium text-text-muted px-2 py-1.5 flex-1 text-center shadow-sm">VOC</div>
              <div className="bg-bg-base border border-border-subtle rounded text-[12px] font-medium text-text-muted px-2 py-1.5 flex-1 text-center shadow-sm">Interview</div>
              <div className="bg-bg-base border border-border-subtle rounded text-[12px] font-medium text-text-muted px-2 py-1.5 flex-1 text-center shadow-sm">Data</div>
            </div>
            <div className="flex justify-center relative -my-1">
              <div className="absolute top-0 w-[70%] h-[30px] border-b border-r border-l border-border-subtle rounded-b-xl opacity-50"></div>
              <div className="w-px h-[40px] bg-border-subtle relative z-10"></div>
            </div>
            <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-[0_0_15px_rgba(182,255,48,0.1)] relative z-10">
              <svg aria-hidden="true" className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="text-accent-primary text-[15px] font-bold">Actionable Priority</span>
            </div>
          </div>
        );
      case "flow4":
        return (
          <div className="flex flex-col w-full max-w-[320px] min-h-[220px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center text-[12px] font-mono text-text-muted">1</div>
              <div className="flex-1 bg-bg-base border border-border-subtle rounded-lg p-3 text-text-primary text-[13px] font-medium shadow-sm">요구사항 정의</div>
            </div>
            <div className="flex-1 min-h-[8px]"><div className="w-px bg-border-subtle h-full ml-4"></div></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#2A2D34] border border-[#3A3D44] flex items-center justify-center text-[12px] font-mono text-white font-bold">2</div>
              <div className="flex-1 bg-[#2A2D34] border border-[#3A3D44] text-white rounded-lg p-3 text-[13px] font-bold">MVP 제작</div>
            </div>
            <div className="flex-1 min-h-[8px]"><div className="w-px bg-border-subtle h-full ml-4"></div></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center text-[12px] font-mono text-text-muted">3</div>
              <div className="flex-1 bg-bg-base border border-border-subtle rounded-lg p-3 text-text-primary text-[13px] font-medium shadow-sm">테스트 진행</div>
            </div>
            <div className="flex-1 min-h-[8px]"><div className="w-px bg-border-subtle h-full ml-4"></div></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center text-[12px] font-mono text-text-muted">4</div>
              <div className="flex-1 bg-bg-base border border-border-subtle rounded-lg p-3 text-text-primary text-[13px] font-medium shadow-sm">개선 백로그 도출</div>
            </div>
          </div>
        );
      case "flow5":
        return (
          <div className="grid grid-cols-2 gap-3 w-full max-w-[320px]">
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span className="text-text-primary text-[13px] font-medium">UX분석</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <span className="text-text-primary text-[13px] font-medium">데이터분석</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span className="text-text-primary text-[13px] font-medium">정책</span>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-text-primary text-[13px] font-medium">일정</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="problem" className="w-full bg-bg-base relative">
      
      {/* ========================================================
          [PC 화면 전용] 데스크탑 스크롤텔링 영역 (400vh)
          ======================================================== */}
      <div 
        className="hidden lg:block relative" 
        style={{ height: `${problems.length * 100}vh` }} 
        ref={sectionRef}
      >
        <div className="sticky top-0 w-full h-screen flex flex-col px-6 md:px-12 overflow-hidden">
          <div className="max-w-[1200px] w-full mx-auto flex flex-col h-full pt-[140px] pb-[80px]">
            
            {/* 고정된 큰 제목 (위치 a) */}
            <div className="max-w-[800px] flex flex-col items-start text-left flex-shrink-0 mb-10 lg:mb-16">
              <h2 className="text-[clamp(32px,5vw,52px)] font-bold text-text-primary leading-[1.2] tracking-tight break-keep">
                제품 기획ᆞ관리에 <br /> 고민되는 점이 있으신가요?
              </h2>
            </div>

            {/* 고정된 위치에서 투명도로 전환되는 카드 영역 (영역 b ~ c) */}
            <div className="grid grid-cols-12 gap-8 lg:gap-[64px] items-stretch flex-1 min-h-0">
              
              {/* 좌측: 문제 설명 리스트 */}
              <div className="col-span-5 h-full flex flex-col justify-between w-full">
                {problems.map((prob, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div 
                      key={idx}
                      className={`flex flex-col p-6 rounded-2xl border transition-all duration-500 ease-in-out w-full ${
                        isActive 
                          ? "bg-bg-subtle border-accent-primary/40 shadow-sm opacity-100" 
                          : "bg-transparent border-transparent opacity-40"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`font-mono text-[13px] font-bold tracking-widest ${isActive ? "text-accent-primary" : "text-text-muted"}`}>
                          {prob.num}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
                        )}
                      </div>
                      <h3 className={`text-[18px] md:text-[20px] font-bold leading-[1.4] break-keep ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                        {prob.title}
                      </h3>
                      {prob.desc && (
                        <p className={`text-[16px] lg:text-[18px] font-medium leading-[1.65] break-keep mt-2 ${isActive ? "text-text-secondary" : "text-text-muted"}`}>
                          {prob.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 우측: 시각 자료 패널 */}
              <div className="col-span-7 relative h-full flex flex-col justify-center">
                <div className="w-full h-full bg-bg-elevated border border-border-subtle rounded-2xl shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

                  {problems.map((prob, idx) => (
                    <div 
                      key={idx}
                      className={`absolute inset-0 p-10 flex flex-col justify-between transition-all duration-700 ease-in-out ${
                        activeIdx === idx 
                          ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                          : "opacity-0 translate-y-4 pointer-events-none z-0"
                      }`}
                    >
                      <div className="relative z-10 max-w-[480px]">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-bg-subtle border border-border-subtle text-[12px] font-mono text-accent-primary mb-6 shadow-sm">
                          Anvil Approach
                        </div>
                        <h4 className={`text-[26px] font-bold text-text-primary leading-[1.3] break-keep ${prob.panelDesc ? 'mb-4' : 'mb-6'}`}>
                          {prob.panelTitle}
                        </h4>
                        {prob.panelDesc && (
                          <p className="text-[17px] font-medium text-text-secondary leading-[1.65] break-keep">
                            {prob.panelDesc}
                          </p>
                        )}
                      </div>
                      
                      <div className="relative z-10 mt-8 bg-bg-base rounded-xl border border-border-subtle p-8 flex items-center justify-center flex-grow shadow-sm">
                        {renderVisual(prob.visual)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          [모바일 화면 전용] 스크롤텔링 없이 순차적으로 나열
          ======================================================== */}
      <div className="lg:hidden w-full py-[80px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          
          <div className="mb-12 flex flex-col items-start text-left">
            <h2 className="text-[clamp(32px,5vw,52px)] font-bold text-text-primary leading-[1.2] tracking-tight break-keep">
              제품 기획ᆞ관리에 <br /> 고민되는 점이 있으신가요?
            </h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {problems.map((prob, idx) => (
              <div key={idx} className="flex flex-col p-6 rounded-2xl bg-bg-subtle border border-border-subtle shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[13px] font-bold tracking-widest text-text-muted">
                    {prob.num}
                  </span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-3 leading-[1.4] break-keep text-text-primary">
                  {prob.title}
                </h3>
                {prob.desc && (
                  <p className="text-[16px] font-medium leading-[1.65] break-keep text-text-secondary mb-6">
                    {prob.desc}
                  </p>
                )}
                
                <div className="w-full bg-bg-elevated border border-border-subtle rounded-xl p-6 mt-2">
                  <div className="inline-flex items-center px-2 py-1 rounded bg-bg-subtle border border-border-subtle text-[11px] font-mono text-accent-primary mb-4">Anvil Approach</div>
                  <h4 className={`text-[17px] font-bold text-text-primary leading-[1.4] break-keep ${prob.panelDesc ? 'mb-3' : 'mb-8'}`}>{prob.panelTitle}</h4>
                  {prob.panelDesc && (
                    <p className="text-[15px] md:text-[16px] font-medium text-text-secondary mb-8 leading-[1.6] break-keep">{prob.panelDesc}</p>
                  )}
                  <div className="bg-bg-base rounded-lg border border-border-subtle p-6 flex items-center justify-center min-h-[160px]">
                    {renderVisual(prob.visual)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
