import Link from "next/link";

export default function HeroSection() {
  const trustIndicators = [
    "12년+ 국내 1등 유니콘 플랫폼/IT 스타트업 PM 경험",
    "이커머스 · B2B 플랫폼 · AI/LMS · 교육·건축설계 · O2O 서비스 기획 경험",
    "고객 리서치 · 데이터 분석 · 서비스 기획 · MVP 검증"
  ];

  return (
    <section className="w-full pt-[96px] pb-[120px] md:pt-[160px] md:pb-[160px] flex flex-col justify-center border-b border-border-subtle overflow-hidden relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* Left Column: Messages & CTA */}
        <div className="flex-1 flex flex-col items-start w-full">
          
          <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold tracking-tight text-text-primary leading-[1.15] max-w-[700px] break-keep animate-fade-in-up">
            탄탄한 기획, <br />
            안정적인 프로젝트, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-muted">빠른 MVP검증!</span>
          </h1>
          
          <div className="animate-fade-in-up animation-delay-400 w-full flex flex-col items-start">
            <p className="mt-8 text-[18px] md:text-[20px] text-text-secondary max-w-[620px] leading-[1.7] break-keep font-medium">
              AI/SaaS, B2B 플랫폼, 신사업 조직을 위해 문제정의, 고객 리서치, 데이터 분석, 서비스 기획, MVP 범위 설정, 프로젝트 실행관리를 함께하는 제품관리 파트너입니다.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
                className="bg-accent-primary text-bg-base font-bold text-[16px] px-12 h-[56px] rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(182,255,48,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
              >
                프로젝트 상담 신청하기
                <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Proven Expertise Panel */}
        <div className="flex-1 w-full max-w-[550px] lg:max-w-none flex flex-col items-start lg:items-end justify-center mt-12 lg:mt-0 animate-fade-in-up animation-delay-800">
          <div className="w-full max-w-[520px] flex flex-col gap-4 relative">
            <p className="text-[13px] font-mono text-text-muted uppercase tracking-widest mb-1 ml-1">Proven Expertise</p>
            <div className="flex flex-col gap-4">
              
              {/* Card 1 */}
              <div className="bg-bg-elevated border border-border-subtle p-5 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 shadow-lg relative group transition-all hover:border-text-muted">
                <div className="w-[60px] h-[60px] rounded-[16px] bg-[#2A2D34] border border-[#3A3D44] flex-shrink-0 flex items-center justify-center text-text-primary">
                  <svg className="w-7 h-7 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="flex items-start gap-2.5 flex-1">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-medium text-text-body leading-[1.5] break-keep">
                    {trustIndicators[0]}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-bg-elevated border border-border-subtle p-5 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 shadow-lg relative group transition-all hover:border-text-muted">
                <div className="w-[60px] h-[60px] rounded-[16px] bg-[#2A2D34] border border-[#3A3D44] flex-shrink-0 flex items-center justify-center text-text-primary relative">
                  <svg className="w-7 h-7 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 6l2-4h12l2 4M4 6v8a2 2 0 002 2h12a2 2 0 002-2V6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10v6M15 10v6" />
                    <circle cx="6" cy="20" r="1.5" fill="currentColor" className="text-accent-primary" stroke="none" />
                    <circle cx="12" cy="20" r="1.5" fill="currentColor" className="text-accent-primary" stroke="none" />
                    <circle cx="18" cy="20" r="1.5" fill="currentColor" className="text-accent-primary" stroke="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-accent-primary" d="M6 20h12" />
                  </svg>
                </div>
                <div className="flex items-start gap-2.5 flex-1">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-medium text-text-body leading-[1.5] break-keep">
                    {trustIndicators[1]}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-bg-elevated border border-border-subtle p-5 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 shadow-lg relative group transition-all hover:border-text-muted">
                <div className="w-[60px] h-[60px] rounded-[16px] bg-[#2A2D34] border border-[#3A3D44] flex-shrink-0 flex items-center justify-center text-text-primary">
                  <svg className="w-7 h-7 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-accent-primary" d="M15 10l-2 4h4l-2 4" />
                  </svg>
                </div>
                <div className="flex items-start gap-2.5 flex-1">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-medium text-text-body leading-[1.5] break-keep">
                    {trustIndicators[2]}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
