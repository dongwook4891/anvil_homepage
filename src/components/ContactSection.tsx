import Link from "next/link";

export default function ContactSection() {
  const trustElements = [
    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "24시간 내 이메일 회신" },
    { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", text: "30분 화상 미팅" },
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "상담 후 범위·견적 안내" },
    { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "익명화 산출물 확인 가능" }
  ];

  return (
    <section id="contact" className="w-full bg-bg-base py-[100px] md:py-[140px] lg:py-[200px] relative overflow-hidden">
      {/* Background Ambient Glows to make it feel like the ultimate destination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-[1000px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Trust Elements Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {trustElements.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-text-muted">
              <svg aria-hidden="true" className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-[13px] font-medium break-keep">{item.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-text-primary tracking-tight mb-8 leading-[1.2] break-keep">
          프로젝트 상황을 남겨주시면, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-muted">적합한 진행 방식을 제안드립니다.</span>
        </h2>
        
        <p className="text-[17px] md:text-[20px] text-text-secondary leading-[1.7] break-keep max-w-[720px] mb-6 font-medium">
          아이디어 단계, 기획 단계, 개발 전 단계, 운영 중 개선 단계 모두 가능합니다. 현재 가장 막힌 문제와 원하는 산출물을 알려주시면, 24시간 내 이메일로 회신 후 30분 화상 미팅 일정을 조율합니다.
        </p>

        <div className="inline-block bg-bg-elevated border border-border-subtle rounded-lg px-5 py-3 mb-16 shadow-sm">
          <p className="text-[14px] md:text-[15px] text-text-muted break-keep">
            가격은 프로젝트 범위, 기간, 투입 방식에 따라 달라집니다. <br className="hidden sm:block" />
            <strong className="text-text-primary font-medium">문의 후 상담 과정에서 적합한 진행 방식과 견적 범위를 안내드립니다.</strong>
          </p>
        </div>

        {/* Big CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-accent-primary text-bg-base font-bold text-[18px] px-10 h-[64px] rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(209,250,229,0.2)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
          >
            프로젝트 상담 신청하기
            <svg aria-hidden="true" className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <a 
            href="https://cal.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-btn-secondary-bg text-text-primary border-2 border-border-subtle font-bold text-[17px] px-8 h-[64px] rounded-xl hover:border-text-muted hover:bg-bg-subtle transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
          >
            30분 화상 미팅 요청하기
          </a>
        </div>

      </div>
    </section>
  );
}
