export default function ProblemSection() {
  return (
    <section id="problem" className="w-full bg-bg-base py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12 lg:mb-20">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6">
            제품을 만들기 전에,<br className="hidden md:block" /> 이런 문제가 막고 있나요?
          </h2>
          <p className="text-[17px] md:text-[19px] text-text-secondary leading-[1.7] break-keep max-w-[640px]">
            많은 프로젝트는 개발 역량이 부족해서가 아니라, <strong className="text-text-primary font-medium">만들기 전에 무엇을 왜 만들어야 하는지 충분히 정리되지 않아</strong> 흔들립니다.
          </p>
        </div>
        
        {/* Option B: 1 Big Featured Card + 4 Sub Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Problem */}
          <div className="lg:col-span-7 bg-bg-base p-8 md:p-12 rounded-2xl border border-border-subtle shadow-xl flex flex-col justify-center relative overflow-hidden group">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-bg-subtle border border-border-subtle text-[13px] font-mono text-accent-primary mb-6">
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                가장 흔한 문제
              </div>
              <h3 className="text-[28px] md:text-[32px] font-bold text-text-primary mb-6 leading-[1.3] break-keep max-w-[480px]">
                아이디어는 있지만 <br/>MVP 범위가 불명확합니다
              </h3>
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.7] break-keep max-w-[500px]">
                무엇부터 만들어야 할지, 어떤 기능을 빼야 할지, 어떤 기준으로 MVP를 검증해야 할지 정리되지 않은 상태입니다. 이것이 프로젝트가 실패하는 가장 큰 원인입니다.
              </p>
            </div>
          </div>

          {/* 4 Sub Problems */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              {
                title: "개발자는 있지만 기획과 PM이 부족합니다",
                desc: "요구사항, 정책, 화면 흐름이 없어 개발이 지연됩니다."
              },
              {
                title: "데이터와 VOC가 제품 개선으로 연결 안 됩니다",
                desc: "수집된 피드백을 어떤 로드맵으로 연결할지 막막합니다."
              },
              {
                title: "AI를 활용해 빠르게 검증하고 싶습니다",
                desc: "AI 도구를 실무에 도입해 MVP를 만들 방법이 부족합니다."
              },
              {
                title: "외주 개발 전 요구사항을 정리해야 합니다",
                desc: "외주사에 전달할 기능 범위와 예외 케이스가 모호합니다."
              }
            ].map((prob, idx) => (
              <div key={idx} className="bg-bg-subtle p-6 md:p-8 rounded-xl border border-border-subtle flex flex-col justify-center">
                <h4 className="text-[17px] font-semibold text-text-primary mb-2 leading-[1.4] break-keep">{prob.title}</h4>
                <p className="text-text-muted text-[14px] md:text-[15px] leading-[1.65] break-keep">{prob.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Micro CTA */}
        <div className="mt-16 lg:mt-20 text-center flex flex-col items-center">
          <p className="text-[15px] text-text-muted mb-6">위 문제 중 하나라도 겪고 있다면 상담이 필요합니다.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-btn-secondary-bg text-text-primary border border-border-subtle hover:border-text-muted font-medium text-[16px] px-8 h-[56px] rounded-xl transition-all shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          >
            내 프로젝트 상황 진단받기
            <svg aria-hidden="true" className="w-4 h-4 text-text-muted group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
