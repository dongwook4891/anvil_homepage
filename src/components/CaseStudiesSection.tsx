import Link from "next/link";

export default function CaseStudiesSection() {
  const cases = [
    {
      tag: "E-commerce",
      title: "버티컬 이커머스 제품 개선",
      summary: "회원·주문·결제·재구매 경험 개선",
      problem: "회원 경험, 주문·결제 흐름, 재구매 편의성을 개선해야 했습니다.",
      approach: "서비스 이용 행태와 구매 흐름을 분석하고, 회원 등급, 포인트, 소셜 가입, 재구매 경험 등 고객 접점별 문제를 정리했습니다.",
      result: "주문 수 2배 성장 기여\n연 매출 300억 규모 서비스 경험",
      capabilities: ["이커머스 제품기획", "전환 흐름 개선", "서비스 운영 기획"]
    },
    {
      tag: "B2B Platform",
      title: "B2B 플랫폼 상품/판매자센터 개선",
      summary: "상품 등록 UX와 판매자센터 개선",
      problem: "도매 판매자의 상품 등록, 상품 정보 관리, 판매자 경험을 개선해야 했습니다.",
      approach: "판매자 인터뷰, 상품 등록 행태 분석, 중복 상품 등록 패턴 분석, AI 상품 이미지 태깅 이용 데이터 모니터링을 수행했습니다.",
      result: "상품 도메인과 판매자센터 개선 프로젝트 수행\n고객 리서치와 데이터 분석 기반 로드맵 설계",
      capabilities: ["B2B 플랫폼 기획", "판매자 UX 개선", "데이터 분석", "사용자 인터뷰"]
    },
    {
      tag: "AI / LMS",
      title: "AI 튜터/LMS 서비스 기획",
      summary: "AI 기반 학습 서비스와 LMS 기능 기획",
      problem: "AI 기반 학습 서비스와 LMS 기능을 사용자 관점에서 설계해야 했습니다.",
      approach: "IA, 사용자 흐름, 기능 구조, 고객 검증, UX 리서치, 데이터 분석을 수행했습니다.",
      result: "AI 튜터 및 LMS 서비스의 초기 제품 구조와 운영 흐름 정리",
      capabilities: ["AI 서비스 기획", "LMS 기획", "IA 설계", "고객 검증", "데이터 분석"]
    }
  ];

  return (
    <section id="case-studies" className="w-full bg-bg-subtle py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12 lg:mb-20 flex flex-col items-start">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 leading-[1.25] break-keep">
            유사한 제품 문제를 구조화하고<br className="hidden md:block" /> 개선해왔습니다.
          </h2>
          <p className="text-text-secondary text-[17px] md:text-[19px] leading-[1.7] break-keep max-w-[680px]">
            이커머스, B2B 플랫폼, AI/LMS 서비스에서 고객 리서치, 데이터 분석, 서비스 기획, 프로젝트 관리를 수행했습니다. 상세 산출물은 미팅에서 익명화된 형태로 확인하실 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {cases.map((item, idx) => (
            <div key={idx} className="group bg-bg-elevated rounded-2xl border border-border-subtle p-8 md:p-12 shadow-sm hover:border-text-muted transition-all flex flex-col lg:flex-row gap-10 lg:gap-16">
              
              {/* Left Column: Title & Tag */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="text-[12px] font-mono text-accent-primary border border-accent-primary/30 bg-accent-primary/5 px-3 py-1.5 rounded inline-flex w-fit">
                  {item.tag}
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary leading-[1.3] break-keep">{item.title}</h3>
                <p className="text-[16px] text-text-secondary pb-6 border-b border-border-subtle break-keep">{item.summary}</p>
                
                {/* Capabilities Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.capabilities.map((cap, i) => (
                    <span key={i} className="text-[13px] text-text-muted bg-bg-base border border-border-subtle px-2.5 py-1 rounded-md">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="lg:w-2/3 flex flex-col gap-8">
                <div>
                  <h4 className="text-[13px] font-bold font-mono text-text-muted mb-2.5 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
                    Problem
                  </h4>
                  <p className="text-text-primary text-[16px] md:text-[17px] leading-[1.7] break-keep">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold font-mono text-text-muted mb-2.5 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
                    Approach
                  </h4>
                  <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.7] break-keep">{item.approach}</p>
                </div>
                
                {/* Result Highlight Box */}
                <div className="bg-accent-primary/5 p-6 md:p-8 rounded-xl border border-accent-primary/20 relative overflow-hidden mt-2 shadow-sm">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-primary"></div>
                  <h4 className="text-[13px] font-bold font-mono text-accent-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    Result
                  </h4>
                  <div className="flex flex-col gap-2">
                    {item.result.split('\n').map((line, i) => (
                      <p key={i} className="text-text-primary text-[16px] md:text-[18px] font-bold leading-[1.6] break-keep flex items-start gap-2.5">
                        <svg aria-hidden="true" className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Micro CTA */}
        <div className="mt-16 lg:mt-24 text-center flex flex-col items-center">
          <Link 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-btn-secondary-bg text-text-primary border border-border-subtle hover:border-text-muted font-medium text-[16px] px-8 h-[56px] rounded-xl transition-all shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          >
            유사 프로젝트 상담하기
            <svg aria-hidden="true" className="w-4 h-4 text-text-muted group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
