export default function DeliverablesSection() {
  const primaryDeliverables = [
    { name: "MVP 범위 정의서", desc: "검증에 필요한 핵심 기능과 제외할 기능을 명확히 나눈 스펙 문서" },
    { name: "IA (정보구조도)", desc: "서비스의 전체 메뉴, 화면 계층, 페이지별 목적을 정의한 구조도" },
    { name: "화면정책 및 기획서", desc: "외주 개발사나 내부 개발팀이 바로 개발할 수 있는 수준의 상세 화면 기획" },
    { name: "UX 리서치 리포트", desc: "고객 인터뷰와 사용성 테스트를 통해 도출된 핵심 문제와 개선 방안" }
  ];

  const secondaryTags = [
    "데이터 분석 인사이트", "제품 로드맵", "기능 우선순위", "고객 인터뷰 정리", "포트폴리오", "QA/이슈 대응 문서"
  ];

  return (
    <section id="deliverables" className="w-full bg-bg-subtle py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Side: Context */}
        <div className="lg:w-2/5 flex flex-col justify-center">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 leading-[1.25] break-keep">
            미팅에서 확인할 수 있는 산출물
          </h2>
          <p className="text-[17px] md:text-[19px] text-text-secondary leading-[1.7] break-keep max-w-[640px] mb-8">
            보안상 상세 산출물은 홈페이지에 공개하지 않습니다. 30분 미팅 또는 프로젝트 상담 과정에서 익명화된 산출물 예시를 확인하실 수 있습니다.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-bg-elevated border border-border-subtle px-5 py-4 rounded-xl shadow-sm w-fit">
            <div className="w-10 h-10 rounded-full bg-bg-subtle flex items-center justify-center flex-shrink-0">
              <svg aria-hidden="true" className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-text-primary">철저한 보안 유지</p>
              <p className="text-[13px] text-text-muted">모든 포트폴리오는 비식별화 처리됩니다.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Artifacts Grid */}
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {primaryDeliverables.map((item, idx) => (
              <div key={idx} className="bg-bg-base border border-border-subtle p-6 rounded-2xl flex flex-col gap-3 group hover:border-text-muted transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-muted mb-2 group-hover:text-accent-primary transition-colors">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-[18px] font-bold text-text-primary">{item.name}</h3>
                <p className="text-[14px] text-text-secondary leading-[1.65] break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border-subtle">
            <h4 className="text-[13px] font-bold font-mono text-text-muted mb-4 uppercase tracking-wider">Other Deliverables</h4>
            <div className="flex flex-wrap gap-2.5">
              {secondaryTags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded text-[14px] text-text-secondary shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
