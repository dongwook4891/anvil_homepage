export default function SolutionSection() {
  return (
    <section className="w-full bg-bg-subtle py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 leading-[1.2] break-keep">
            문제정의부터 MVP 검증까지 <br />하나의 제품관리 흐름으로 연결합니다.
          </h2>
          <p className="text-text-secondary text-[17px] md:text-[19px] leading-[1.7] break-keep max-w-[680px]">
            앤빌은 기획서 작성에 머무르지 않습니다. 고객 인터뷰, 데이터 분석, 마켓 리서치, 서비스 기획, AI 기반 MVP 제작, 프로젝트 관리까지 연결해 제품이 실제로 검증될 수 있는 상태를 만듭니다.
          </p>
        </div>

        {/* Option A: 4-step Method Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-border-subtle z-0"></div>

          {/* Step 1: Discover */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                01
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Discover</h3>
              <p className="text-text-muted text-[13px] font-mono mb-6 pb-6 border-b border-border-subtle">발견 및 문제 정의</p>
              
              <ul className="flex flex-col gap-3 text-[16px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  문제 구조화
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  고객·데이터 분석
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Define */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                02
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Define</h3>
              <p className="text-text-muted text-[13px] font-mono mb-6 pb-6 border-b border-border-subtle">전략 및 목표 설정</p>
              
              <ul className="flex flex-col gap-3 text-[16px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  제품 전략
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  우선순위 도출
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  MVP 범위 설정
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Design */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                03
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Design</h3>
              <p className="text-text-muted text-[13px] font-mono mb-6 pb-6 border-b border-border-subtle">서비스 기획 및 설계</p>
              
              <ul className="flex flex-col gap-3 text-[16px] text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  IA 구조도 설계
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  화면 정책 수립
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  기능 정의 및 명세서
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  와이어프레임 설계
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4: Validate */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-accent-primary/5 border border-accent-primary/30 rounded-2xl p-8 h-full flex flex-col group hover:border-accent-primary transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent-primary text-bg-base flex items-center justify-center font-bold font-mono text-[13px] mb-6 shadow-[0_0_15px_rgba(209,250,229,0.3)]">
                04
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Validate</h3>
              <p className="text-text-muted text-[13px] font-mono mb-6 pb-6 border-b border-border-subtle">MVP 검증 및 관리</p>
              
              <ul className="flex flex-col gap-3 text-[16px] text-text-primary font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  AI 기반 MVP 제작
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  사용자 테스트
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  개선 백로그 도출
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  프로젝트 실행관리
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
