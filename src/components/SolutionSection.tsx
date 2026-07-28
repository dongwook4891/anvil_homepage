export default function SolutionSection() {
  return (
    <section className="w-full bg-bg-subtle py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 leading-[1.2] break-keep">
            더욱 체계적이고 효율적인 <br /><strong>Product Management</strong>
          </h2>
          <p className="text-text-secondary text-[18px] md:text-[20px] font-medium leading-[1.7] break-keep max-w-[640px]">
            고객 인터뷰, 데이터 분석, 마켓 리서치, 서비스 기획, MVP 제작, 프로젝트 관리까지 연결해 제품을 실제로 검증합니다.
          </p>
        </div>

        {/* Option A: 4-step Method Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-border-subtle z-0"></div>

          {/* Step 1: Discover */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 md:p-10 pb-12 md:pb-16 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                01
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Discover</h3>
              <p className="text-text-secondary text-[15px] md:text-[16px] font-medium mb-6 pb-6 border-b border-border-subtle">발견 및 문제 정의</p>
              
              <ul className="flex flex-col gap-4 text-[17px] md:text-[18px] font-medium text-text-primary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  문제 구조화
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  고객·데이터 분석
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  UX 리서치
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Define */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 md:p-10 pb-12 md:pb-16 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                02
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Define</h3>
              <p className="text-text-secondary text-[15px] md:text-[16px] font-medium mb-6 pb-6 border-b border-border-subtle">전략 및 목표 설정</p>
              
              <ul className="flex flex-col gap-4 text-[17px] md:text-[18px] font-medium text-text-primary">
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
                <li className="flex items-start gap-2 whitespace-nowrap">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  요구사항 구체화 및 확정
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Design */}
          <div className="relative z-10 flex flex-col">
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 md:p-10 pb-12 md:pb-16 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                03
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Design</h3>
              <p className="text-text-secondary text-[15px] md:text-[16px] font-medium mb-6 pb-6 border-b border-border-subtle">서비스 기획 및 설계</p>
              
              <ul className="flex flex-col gap-4 text-[17px] md:text-[18px] font-medium text-text-primary">
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
            <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 md:p-10 pb-12 md:pb-16 h-full flex flex-col group hover:border-text-muted transition-colors">
              <div className="w-10 h-10 rounded-full bg-bg-subtle border border-border-subtle flex items-center justify-center text-accent-primary font-mono text-[13px] mb-6">
                04
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-2 font-mono uppercase tracking-wider">Validate</h3>
              <p className="text-text-secondary text-[15px] md:text-[16px] font-medium mb-6 pb-6 border-b border-border-subtle">MVP 검증 및 관리</p>
              
              <ul className="flex flex-col gap-4 text-[17px] md:text-[18px] font-medium text-text-primary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1 text-[10px]">■</span>
                  MVP 제작
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
