"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // 화면 정중앙(10% 구간)을 통과하는 투명 트래커를 감지하여 active 상태 변경
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    const trackers = document.querySelectorAll('.service-scroll-tracker');
    trackers.forEach(tracker => observer.observe(tracker));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "제품관리 컨설팅",
      value: "무엇을 만들지 모호할 때, 문제와 방향을 먼저 정리합니다.",
      desc: "제품의 방향을 정의하고, 사용자 문제와 우선순위를 분석하여 검증 가능한 로드맵을 수립합니다.",
      targets: [
        "무엇을 만들어야 할지 방향이 고민될 때",
        "고객 문제와 시장 기회를 깊이 있게 조사하고 싶을 때"
      ],
      outputs: "문제정의서 · 데이터분석 · UX리서치 · 리서치 리포트 · 제품 로드맵",
      image: "/images/service-1.jpg"
    },
    {
      title: "서비스기획",
      value: "아이디어를 개발 가능한 기획서와 화면 흐름으로 구체화합니다.",
      desc: "아이디어와 요구사항을 구조화하여 IA, 사용자 흐름, 화면 정의, PRD까지 실행 가능한 기획으로 완성합니다.",
      targets: [
        "아이디어를 실행 가능한 기획으로 만들고 싶을 때",
        "개발 전에 요구사항과 화면 흐름을 명확히 하고 싶을 때"
      ],
      outputs: "IA · 기능정의서 · 화면정의서 · PRD",
      image: "/images/service-2.jpg"
    },
    {
      title: "MVP 제작",
      value: "빠르게 만들고, 실제 사용자 반응으로 검증합니다.",
      desc: "AI 도구와 경량 실행을 활용해 빠르게 검증 가능한 MVP를 만들고, 실제 사용자 반응을 통해 핵심 가설을 검증합니다.",
      targets: [
        "빠르게 아이디어를 테스트하고 싶을 때",
        "최소 기능 제품으로 시장 반응을 확인하고 싶을 때"
      ],
      outputs: "MVP 범위 정의서 · 프로토타입 · 테스트 결과 · 개선 백로그",
      image: "/images/service-3.jpg"
    },
    {
      title: "PM 파트너십",
      value: "전담 PM이 부족한 팀의 실행력과 의사결정을 보완합니다.",
      desc: "기획, 우선순위, 백로그, 커뮤니케이션, 진행 관리까지 프로젝트의 성과와 실행력을 함께 끌어올립니다.",
      targets: [
        "개발은 있지만 전담 PM이 없을 때",
        "프로젝트의 진행 관리가 필요할 때"
      ],
      outputs: "기획서 · 백로그 우선순위 · 리서치 리포트 · 회의록 등",
      image: "/images/service-4.jpg"
    }
  ];

  return (
    <section id="services" className="w-full bg-[#050A0D] relative">
      
      {/* 1. DESKTOP PINNED SCROLLTELLING (제자리 전환 방식) */}
      {/* 400vh의 스크롤 구간을 생성하여, 사용자가 스크롤을 내리는 동안 뷰포트 고정 효과 구현 */}
      <div className="hidden lg:block relative h-[400vh]">
        
        {/* 스크롤을 추적하는 4개의 투명한 더미 박스 (각각 100vh) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex flex-col">
          {services.map((_, idx) => (
            <div key={idx} data-index={idx} className="service-scroll-tracker flex-1 w-full" />
          ))}
        </div>

        {/* 화면에 딱 고정되는 실제 콘텐츠 영역 (100vh) */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 pointer-events-auto bg-[#050A0D]">
          
          <div className="max-w-[1200px] w-full mx-auto px-12 flex items-start">
            
            {/* LEFT RAIL: 고정된 헤드라인 + 이미지 + 타임라인 */}
            <div className="w-[50%] xl:w-[54%] flex flex-col h-[80vh] min-h-[640px] max-h-[820px]">
              
              {/* Permanent Headline */}
              <div className="mb-6 xl:mb-10 shrink-0">
                <h2 className="text-[clamp(28px,3vw,38px)] font-bold text-[#F4F7FA] tracking-tight mb-4 break-keep leading-[1.3]">
                  고객님의 상황에 맞춰 <br />
                  제품관리 서비스를 제공해드립니다.
                </h2>
                <p className="text-[15px] xl:text-[17px] text-[#B8C0CC] leading-[1.6] break-keep pr-8">
                  아이디어 검증부터 서비스 기획, MVP 제작, PM 파트너십까지<br className="hidden xl:block" />
                  현재 단계에 가장 적합한 접근 방식으로 성과를 만들어갑니다.
                </p>
              </div>

              {/* Timeline & Image */}
              <div className="flex gap-6 xl:gap-8 flex-1 min-h-0">
                
                {/* Timeline */}
                <div className="w-[40px] flex flex-col items-center relative shrink-0">
                  
                  {/* 선이 1번 위로, 4번 아래로 넘어가지 않도록 잘라주는(clip) 래퍼 */}
                  <div className="absolute w-[2px] z-0 overflow-hidden" style={{ top: '18px', bottom: '18px' }}>
                    {/* Background line */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.08)]" />
                    
                    {/* Active gradient line */}
                    <div 
                      className="absolute w-full bg-gradient-to-b from-transparent via-[#A6FF1A] to-transparent transition-all duration-[400ms] ease-out" 
                      style={{ 
                        height: '33.33%', 
                        top: `calc(${activeIndex * 33.33}% - 16.66%)` 
                      }} 
                    />
                  </div>

                  {/* Dots */}
                  <div className="w-full h-full flex flex-col justify-between relative z-10">
                    {services.map((_, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center bg-[#050A0D] py-2 relative z-10">
                          <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-[320ms] border-[1.5px] ${isActive ? 'bg-[#A6FF1A] border-[#A6FF1A] shadow-[0_0_20px_rgba(166,255,26,0.4)]' : 'bg-[#050A0D] border-[rgba(255,255,255,0.15)]'}`}>
                            <span className={`text-[13px] font-bold ${isActive ? 'text-[#050A0D]' : 'text-[#5C6675]'}`}>
                              0{idx + 1}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Image Container (제자리에서 전환됨) */}
                <div className="flex-1 rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] relative bg-[#111720] shadow-2xl h-full">
                  {services.map((svc, idx) => {
                    const isActive = activeIndex === idx;
                    
                    // 스크롤 방향에 따른 위치 계산 (위로 올라가는 느낌 연출)
                    let imgClass = 'opacity-0 translate-y-[32px] z-0'; // 다음 단계 (아래에 대기)
                    if (isActive) {
                      imgClass = 'opacity-100 translate-y-0 z-10'; // 현재 단계
                    } else if (idx < activeIndex) {
                      imgClass = 'opacity-0 -translate-y-[32px] z-0'; // 이전 단계 (위로 사라짐)
                    }

                    return (
                      <div key={idx} className={`absolute inset-0 transition-all duration-[600ms] ease-out ${imgClass}`}>
                        <img 
                          src={svc.image} 
                          alt={svc.title} 
                          className={`w-full h-full object-cover ${idx === 3 ? 'object-center' : 'object-left'} opacity-[0.85]`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A0D]/50 via-[#050A0D]/10 to-transparent pointer-events-none" />
                        
                        <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-[#111720]">
                          <p className="text-white/20 text-[15px] font-medium">{idx + 1}번째 이미지를 넣어주세요.</p>
                          <p className="text-white/10 text-[13px] mt-2">(/public{svc.image})</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT RAIL: Pinned Cards (제자리에서 교차하며 등장) */}
            <div className="w-[50%] xl:w-[46%] pl-10 xl:pl-12 relative flex flex-col h-[80vh] min-h-[640px] max-h-[820px]">
              
              {/* 투명한 더미 헤드라인: 왼쪽 헤드라인과 완전히 동일한 높이를 차지하여, 왼쪽 이미지 상단과 오른쪽 카드 상단이 완벽히 일치하도록 함 */}
              <div className="mb-6 xl:mb-10 shrink-0 invisible pointer-events-none" aria-hidden="true">
                <h2 className="text-[clamp(28px,3vw,38px)] font-bold tracking-tight mb-4 break-keep leading-[1.3]">
                  고객님의 상황에 맞춰 <br />
                  제품관리 서비스를 제공해드립니다.
                </h2>
                <p className="text-[15px] xl:text-[17px] leading-[1.6] break-keep pr-8">
                  아이디어 검증부터 서비스 기획, MVP 제작, PM 파트너십까지<br className="hidden xl:block" />
                  현재 단계에 가장 적합한 접근 방식으로 성과를 만들어갑니다.
                </p>
              </div>

              {/* 실제 카드가 표시되는 영역 (왼쪽 이미지 영역과 높이 및 시작점이 100% 동일함) */}
              <div className="flex-1 min-h-0 relative w-full">
                {services.map((svc, idx) => {
                  const isActive = activeIndex === idx;
                  
                  // 스크롤 방향에 따른 위치 계산 (위로 올라가는 느낌 연출)
                  let cardPosition = 'opacity-0 translate-y-[40px] z-0 pointer-events-none scale-[0.96]'; // 다음 카드 (아래에 대기)
                  if (isActive) {
                    cardPosition = 'opacity-100 translate-y-0 z-10 pointer-events-auto scale-100 bg-[#131B25] border-[rgba(166,255,26,0.45)] shadow-[0_0_40px_rgba(166,255,26,0.08)]'; // 현재 카드
                  } else if (idx < activeIndex) {
                    cardPosition = 'opacity-0 -translate-y-[40px] z-0 pointer-events-none scale-[0.96] bg-[#111720] border-[rgba(255,255,255,0.06)]'; // 이전 카드 (위로 사라짐)
                  }

                  return (
                    <div 
                      key={idx} 
                      // justify-start를 사용하여 영역의 맨 위에 붙게 만듦 (이미지 상단 라인과 완벽 일치)
                      className={`absolute inset-0 flex flex-col justify-start transition-all duration-[600ms] ease-out pointer-events-none`}
                    >
                      <div className={`w-full h-full p-[36px] xl:p-[40px] rounded-[24px] border transition-all duration-[600ms] ease-out pointer-events-auto flex flex-col ${cardPosition}`}>
                        
                        {/* Card Header */}
                        <div className="mb-4 flex items-center gap-3">
                          <div className="bg-[#A6FF1A]/10 text-[#A6FF1A] font-bold px-3 py-1 rounded-full text-[14px]">
                            Step 0{idx + 1}
                          </div>
                          <h3 className="text-[#F4F7FA] font-bold text-[28px] tracking-tight leading-[1.3]">{svc.title}</h3>
                        </div>
                        
                        {/* Value Prop */}
                        <p className="text-white font-semibold text-[18px] leading-[1.6] break-keep mb-4">
                          {svc.value}
                        </p>

                        {/* Description */}
                        <p className="text-[#E2E8F0] text-[16px] font-normal leading-[1.7] break-keep mb-8">
                          {svc.desc}
                        </p>

                        <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-7"></div>

                        {/* Targets */}
                        <div className="mb-7">
                          <h4 className="text-[#A6FF1A] font-bold text-[15px] mb-4 tracking-wide">이런 경우에 적합해요</h4>
                          <ul className="flex flex-col gap-[14px]">
                            {svc.targets.map((target, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-3 text-[#E2E8F0] text-[15px] font-medium leading-[1.6] break-keep">
                                <span className="text-[#A6FF1A]/60 mt-[8px] text-[6px] shrink-0">●</span>
                                {target}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-7"></div>

                        {/* Outputs */}
                        <div className="mb-8">
                          <h4 className="text-[#A6FF1A] font-bold text-[15px] mb-3 tracking-wide">주요 산출물</h4>
                          <p className="text-[#E2E8F0] text-[15px] font-medium leading-[1.6] break-keep">
                            {svc.outputs}
                          </p>
                        </div>

                        {/* Small Link CTA */}
                        <div className="mt-auto">
                          <Link href="#contact" className="inline-flex items-center gap-2 text-[#A6FF1A] font-medium text-[15px] hover:text-white transition-colors group">
                            이 서비스가 맞는지 확인하기
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MOBILE LAYOUT (Stacked - 데스크탑과 달리 제자리 스크롤 적용 안 함) */}
      <div className="flex flex-col lg:hidden w-full pt-20 px-5 pb-20 gap-20 relative z-20">
        
        {/* 모바일 헤더 */}
        <div className="w-full">
          <h2 className="text-[32px] font-bold text-[#F4F7FA] tracking-tight mb-4 break-keep leading-[1.3]">
            고객님의 상황에 맞춰 <br />
            제품관리 서비스를 제공해드립니다.
          </h2>
          <p className="text-[16px] text-[#B8C0CC] leading-[1.6] break-keep">
            아이디어 검증부터 서비스 기획, MVP 제작, PM 파트너십까지<br />
            현재 단계에 가장 적합한 접근 방식으로 성과를 만들어갑니다.
          </p>
        </div>

        {services.map((svc, idx) => (
          <div key={idx} className="flex flex-col w-full">
            
            {/* Image */}
            <div className="w-full h-[280px] sm:h-[360px] rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] mb-6 relative bg-[#111720]">
              <img 
                src={svc.image} 
                alt={svc.title} 
                className={`w-full h-full object-cover ${idx === 3 ? 'object-center' : 'object-left'} opacity-90`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A0D]/50 to-transparent pointer-events-none" />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-[#111720]">
                <p className="text-white/20 text-[14px] font-medium">{idx + 1}번째 이미지</p>
              </div>
            </div>

            {/* Card */}
            <div className="w-full p-6 sm:p-8 rounded-[24px] bg-[#111720] border border-[rgba(255,255,255,0.1)]">
              
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-[#A6FF1A]/10 text-[#A6FF1A] font-bold px-3 py-1 rounded-full text-[13px]">
                  Step 0{idx + 1}
                </div>
                <h3 className="text-[#F4F7FA] font-bold text-[24px] tracking-tight leading-[1.3] break-keep">{svc.title}</h3>
              </div>
              
              <p className="text-white font-semibold text-[17px] leading-[1.6] break-keep mb-3">
                {svc.value}
              </p>

              <p className="text-[#E2E8F0] text-[15px] font-normal leading-[1.65] break-keep mb-7">
                {svc.desc}
              </p>

              <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-6"></div>

              <div className="mb-6">
                <h4 className="text-[#A6FF1A] font-bold text-[14px] sm:text-[15px] mb-4 tracking-wide">이런 경우에 적합해요</h4>
                <ul className="flex flex-col gap-[12px]">
                  {svc.targets.map((target, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3 text-[#E2E8F0] text-[15px] font-medium leading-[1.55] break-keep">
                      <span className="text-[#A6FF1A]/60 mt-[7px] text-[5px] shrink-0">●</span>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-6"></div>

              <div className="mb-8">
                <h4 className="text-[#A6FF1A] font-bold text-[14px] sm:text-[15px] mb-3 tracking-wide">주요 산출물</h4>
                <p className="text-[#E2E8F0] text-[15px] font-medium leading-[1.6] break-keep">
                  {svc.outputs}
                </p>
              </div>

              <div>
                <Link href="#contact" className="inline-flex items-center gap-2 text-[#A6FF1A] font-medium text-[15px] hover:text-white transition-colors">
                  이 서비스가 맞는지 확인하기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* 3. Main CTA */}
      <div className="w-full bg-[#050A0D] pt-10 pb-32 relative z-10">
        <div className="max-w-[1200px] w-full mx-auto px-6 text-center flex flex-col items-center">
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
            className="inline-flex items-center justify-center bg-[#A6FF1A] text-[#071009] font-bold text-[16px] px-[28px] h-[56px] rounded-[16px] hover:bg-[#b8ff4d] transition-all shadow-[0_0_28px_rgba(166,255,26,0.24)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6FF1A]"
          >
            프로젝트 상담 신청하기
            <svg aria-hidden="true" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
