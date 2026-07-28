export default function ProcessSection() {
  const steps = [
    { title: "문의 접수", desc: "프로젝트의 간략한 상황과 고민을 남겨주세요." },
    { title: "사전 질문지 확인", desc: "더 깊은 이해를 위해 필요한 기초 질문을 주고받습니다." },
    { title: "30분 화상 미팅", desc: "현재 가장 막혀있는 병목을 파악하고 해결 방향을 논의합니다." },
    { title: "범위 및 진행 방식 정리", desc: "미팅 내용을 바탕으로 프로젝트 범위와 역할을 구조화합니다." },
    { title: "제안 및 견적 안내", desc: "도출된 범위에 따른 구체적인 견적과 일정을 제안해 드립니다." },
    { title: "계약 후 진행", desc: "협의 완료 후, 즉각적으로 투입되어 프로젝트를 가속합니다." },
  ];

  return (
    <section id="process" className="w-full bg-bg-base py-[80px] md:py-[120px] lg:py-[160px] border-b border-border-subtle overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-text-primary tracking-tight mb-6 leading-[1.25] break-keep">
            문의 후 이렇게 진행됩니다.
          </h2>
          <p className="text-[18px] md:text-[20px] font-medium text-text-secondary leading-[1.7] break-keep max-w-[680px]">
            프로젝트의 목적, 현재 단계, 필요한 산출물에 따라 진행 방식은 달라집니다. 먼저 상황을 파악한 뒤 가장 적합한 범위와 진행 방식을 제안합니다.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-border-subtle z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col relative group">
                
                {/* Number Circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-bg-elevated border-[4px] border-bg-base shadow-[0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center text-[24px] font-bold font-mono text-text-muted group-hover:text-accent-primary group-hover:border-accent-primary/20 transition-colors mb-6 z-10 relative">
                  {idx + 1}
                  
                  {/* Small connecting line for mobile */}
                  {idx !== steps.length - 1 && (
                    <div className="block md:hidden absolute top-full left-1/2 w-[2px] h-[32px] bg-border-subtle -translate-x-1/2"></div>
                  )}
                </div>

                <div className="flex flex-col h-full bg-bg-elevated/50 p-6 rounded-xl border border-border-subtle/50 group-hover:border-text-muted transition-colors shadow-sm">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-text-primary mb-3 break-keep leading-[1.3]">{step.title}</h3>
                  <p className="text-[16px] md:text-[17px] font-medium text-text-secondary leading-[1.65] break-keep">{step.desc}</p>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
