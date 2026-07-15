import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      titleKo: "제품관리 컨설팅",
      titleEn: "Product Management Consulting",
      desc: "제품 방향, 고객 문제, 우선순위를 정리합니다.",
      target: "MVP 범위가 불명확하거나 제품 로드맵이 필요한 경우",
      outputs: "문제정의서, 리서치 요약, 제품 로드맵",
      duration: "1~8주"
    },
    {
      titleKo: "서비스 기획",
      titleEn: "Service Planning",
      desc: "아이디어와 요구사항을 개발 가능한 기획서와 화면 흐름으로 구체화합니다.",
      target: "외주 개발 전 요구사항, IA, 화면정책, 기능정의가 필요한 경우",
      outputs: "IA, 기능정의서, 화면정책서, 와이어프레임",
      duration: "4~8주"
    },
    {
      titleKo: "AI MVP 제작",
      titleEn: "AI MVP & Vibe Coding",
      desc: "AI 도구를 활용해 빠르게 검증 가능한 MVP를 만듭니다.",
      target: "아이디어를 빠르게 테스트하고 초기 제품 형태로 검증하고 싶은 경우",
      outputs: "MVP 범위 정의서, 프로토타입, 테스트 결과, 개선 백로그",
      duration: "4~12주"
    },
    {
      titleKo: "PM 파트너십",
      titleEn: "Part-time PM Partner",
      desc: "PM이 부족한 조직의 기획, 우선순위, 개발 커뮤니케이션을 함께 관리합니다.",
      target: "개발팀은 있지만 전담 PM이 없어 프로젝트 진행이 흔들리는 경우",
      outputs: "Jira 백로그, 스프린트 계획, QA 체크리스트, 회의록",
      duration: "2개월 이상"
    }
  ];

  return (
    <section id="services" className="w-full bg-bg-base py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-12 lg:mb-20">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 break-keep leading-[1.25]">
            필요한 단계에 맞춰 <br className="hidden md:block" />
            제품관리 역할을 제공합니다.
          </h2>
          <p className="text-[17px] md:text-[19px] text-text-secondary leading-[1.7] break-keep max-w-[640px]">
            아이디어 검증, 서비스 기획, AI MVP 제작, PM 파트너십까지 현재 프로젝트 단계에 맞는 방식으로 함께합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-bg-elevated p-8 md:p-10 rounded-2xl border border-border-subtle shadow-subtle group hover:border-text-muted transition-colors flex flex-col h-full">
              <div className="mb-6">
                <p className="text-[12px] font-mono text-accent-primary uppercase tracking-wide mb-2">{service.titleEn}</p>
                <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary break-keep leading-[1.3]">{service.titleKo}</h3>
              </div>
              
              <p className="text-text-primary text-[17px] leading-[1.65] mb-10 break-keep font-medium">
                {service.desc}
              </p>
              
              {/* Info Block */}
              <div className="flex flex-col gap-5 mt-auto bg-bg-subtle/50 p-6 rounded-xl border border-border-subtle/50 mb-8">
                <div>
                  <h4 className="text-[12px] font-bold text-text-muted mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    적합한 경우
                  </h4>
                  <p className="text-[15px] text-text-secondary leading-[1.6] break-keep">{service.target}</p>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-text-muted mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    주요 산출물
                  </h4>
                  <p className="text-[15px] text-text-secondary leading-[1.6] break-keep">{service.outputs}</p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-bg-base border border-border-subtle text-[13px] font-mono text-text-secondary">
                    권장 기간: {service.duration}
                  </span>
                </div>
              </div>

              {/* Card CTA (Tertiary) */}
              <div className="mt-auto border-t border-border-subtle pt-6">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-text-primary font-medium text-[15px] hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
                >
                  이 서비스 상담하기
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA (Primary) */}
        <div className="mt-16 lg:mt-20 text-center flex flex-col items-center">
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
            className="inline-flex items-center gap-3 bg-accent-primary text-bg-base font-bold text-[16px] px-10 h-[60px] rounded-xl hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(209,250,229,0.15)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
          >
            어떤 서비스가 맞는지 상담하기
            <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
