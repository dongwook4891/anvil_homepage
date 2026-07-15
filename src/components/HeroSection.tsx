import Link from "next/link";

export default function HeroSection() {
  const trustIndicators = [
    "12년+ 플랫폼/IT 스타트업 PM 경험",
    "이커머스 · B2B 플랫폼 · AI/LMS · O2O 서비스 기획 경험",
    "고객 리서치 · 데이터 분석 · 서비스 기획 · AI MVP 검증"
  ];

  const workflowSteps = [
    { name: 'Problem', icon: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Research', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { name: 'Planning', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'AI MVP', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'PM Execution', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
  ];

  return (
    <section className="w-full pt-[96px] pb-[120px] md:pt-[160px] md:pb-[160px] flex flex-col justify-center border-b border-border-subtle overflow-hidden relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">
        
        {/* Left Column: Messages & CTA */}
        <div className="flex-1 flex flex-col items-start w-full">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-[13px] md:text-[14px] font-mono text-text-secondary mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
            Product Management Partner for AI/SaaS & B2B Platforms
          </div>
          
          <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold tracking-tight text-text-primary leading-[1.15] max-w-[700px] break-keep">
            복잡한 아이디어를 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-muted">제품 기획서와 AI MVP로</span> 바꿉니다.
          </h1>
          
          <p className="mt-8 text-[17px] md:text-[19px] text-text-secondary max-w-[620px] leading-[1.7] break-keep font-medium">
            앤빌은 AI/SaaS, B2B 플랫폼, 신사업 조직을 위해 문제정의, 고객 리서치, 데이터 분석, 서비스 기획, MVP 범위 설정, 프로젝트 실행관리를 함께하는 제품관리 파트너입니다.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
              className="bg-accent-primary text-bg-base font-bold text-[16px] px-8 h-[56px] rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(209,250,229,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
            >
              프로젝트 상담 신청하기
              <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <a 
              href="https://cal.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-btn-secondary-bg text-text-primary border border-border-subtle font-semibold text-[16px] px-8 h-[56px] rounded-xl hover:bg-bg-subtle hover:border-text-muted transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
            >
              30분 화상 미팅 요청하기
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 w-full flex flex-col gap-3">
            <p className="text-[12px] font-mono text-text-muted uppercase tracking-wider mb-2">Proven Expertise</p>
            <div className="flex flex-col gap-3">
              {trustIndicators.map((indicator, i) => (
                <div key={i} className="flex items-center gap-3 bg-bg-elevated border border-border-subtle px-4 py-3 rounded-lg shadow-sm w-fit max-w-full">
                  <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[14px] md:text-[15px] font-medium text-text-primary break-keep">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Workflow Panel */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden lg:flex justify-end">
          <div className="relative w-full max-w-[460px] rounded-2xl border border-border-subtle bg-bg-elevated p-8 shadow-2xl flex flex-col gap-5 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="flex justify-between items-center mb-2 relative z-10">
              <div className="text-[13px] font-bold font-mono text-text-primary uppercase tracking-wider">Product Workflow</div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border-subtle"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border-subtle"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-primary"></div>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="flex-1 flex flex-col gap-3 relative z-10">
              {workflowSteps.map((step, i) => (
                <div key={i} className="w-full bg-bg-base border border-border-subtle p-4 rounded-xl flex items-center gap-4 group hover:border-accent-primary/50 transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-bg-subtle border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-accent-primary group-hover:border-accent-primary/30 transition-colors">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} /></svg>
                  </div>
                  <div className="text-[15px] font-bold text-text-primary">{step.name}</div>
                  
                  {i === 3 && (
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-[10px] font-mono text-accent-primary border border-accent-primary/30 bg-accent-primary/10 px-2 py-0.5 rounded">Vibe Coding</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Panel Text & CTA */}
            <div className="mt-4 pt-6 border-t border-border-subtle relative z-10 flex flex-col gap-4">
              <p className="text-[14px] text-text-muted leading-[1.6] break-keep">
                고객·데이터 기반으로 문제를 정리하고, 검증 가능한 MVP 범위로 연결합니다.
              </p>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-between bg-bg-subtle border border-border-subtle hover:border-text-muted text-text-primary text-[14px] font-medium px-4 py-3 rounded-lg transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary cursor-pointer"
              >
                <span>상담에서 진행 방식 확인하기</span>
                <svg aria-hidden="true" className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
