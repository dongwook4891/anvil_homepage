import Link from "next/link";

export default function ContactSection() {

  return (
    <section id="contact" className="w-full bg-bg-base py-[100px] md:py-[140px] lg:py-[200px] relative overflow-hidden">
      {/* Background Ambient Glows to make it feel like the ultimate destination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-[1000px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        


        <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-text-primary tracking-tight mb-24 md:mb-32 leading-[1.2] break-keep">
          프로젝트 상황을 남겨주시면, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-muted">적합한 진행 방식을 제안드립니다.</span>
        </h2>
        

        {/* Big CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaS5m0BwB-CSQcSOK93bOveri3YivbFf-ijGmu29f5BMgmvA/viewform?usp=publish-editor"
            className="w-full sm:w-auto bg-accent-primary text-bg-base font-bold text-[18px] px-10 h-[64px] rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(182,255,48,0.2)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base cursor-pointer"
          >
            프로젝트 상담 신청하기
            <svg aria-hidden="true" className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
