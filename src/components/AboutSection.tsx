export default function AboutSection() {
  const capabilities = [
    "고객 리서치", "데이터 분석", "서비스 기획", "프로젝트 관리", "MVP 검증"
  ];

  return (
    <section id="about" className="w-full bg-bg-elevated py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left: Intro & Experience */}
        <div className="md:w-[55%] flex flex-col justify-center">
          
          <h2 className="text-[clamp(32px,3.5vw,44px)] font-bold text-text-primary tracking-tight mb-8 leading-[1.3] break-keep">
            아이디어를 실행 가능한 제품으로 만드는 제품관리 경험
          </h2>
          
          <div className="flex flex-col gap-6 text-[17px] md:text-[18px] font-medium text-text-secondary leading-[1.75] break-keep">
            <p>
              앤빌은 플랫폼 스타트업과 IT 기업에서 <strong className="text-text-primary font-bold">12년 이상 제품기획자와 PM</strong>으로 일해온 경험을 바탕으로, 초기 스타트업과 신사업 조직의 제품 문제를 함께 해결합니다.
            </p>
            <p>
              이커머스, B2B 플랫폼, AI/LMS, O2O 서비스에서 고객 리서치, 데이터 분석, 서비스 기획, 프로젝트 관리를 수행했으며, 개발·디자인·마케팅·법무·정보보안·QA 등 다양한 이해관계자와 협업해 제품 개선과 신규 서비스 출시를 경험했습니다.
            </p>
            <p>
              현재는 (주)앤빌의 대표이자 PM으로서, 제품관리 컨설팅, 서비스 기획, MVP 제작, PM 파트너십을 제공합니다.
            </p>
          </div>

        </div>
        
        {/* Right: Core Capabilities */}
        <div className="md:w-[45%]">
          <div className="bg-bg-card p-8 md:p-10 rounded-2xl border border-border-subtle shadow-sm h-full flex flex-col gap-10 relative overflow-hidden">
            
            {/* 12 Years Highlights */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-[14px] font-bold font-mono text-accent-primary mb-4 w-fit shadow-[0_0_15px_rgba(182,255,48,0.1)]">
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                12년+ PM 경험
              </div>
              <h3 className="text-[20px] font-bold text-text-primary mb-2">플랫폼/IT 스타트업 제품기획</h3>
              <p className="text-[15px] md:text-[16px] font-medium text-text-secondary break-keep pb-6 border-b border-border-subtle">
                현업에서 검증된 PM 역량으로 프로젝트를 이끕니다.
              </p>
            </div>

            {/* Domains */}
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold font-mono text-text-muted mb-3 uppercase tracking-wider">Domains</h4>
              <div className="flex flex-wrap gap-2">
                {['이커머스', 'B2B 플랫폼', 'AI / LMS', 'O2O 서비스'].map((domain, i) => (
                  <span key={i} className="px-3 py-1.5 rounded bg-bg-elevated border border-border-subtle text-[14px] text-text-secondary">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Capabilities */}
            <div className="relative z-10">
              <h4 className="text-[13px] font-bold font-mono text-text-muted mb-3 uppercase tracking-wider">Core Capabilities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-[15px] text-text-primary font-medium">
                {capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 group">
                    <svg aria-hidden="true" className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="break-keep">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
