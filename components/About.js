import SectionWrapper from './SectionWrapper'

export default function About(){
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center">
          <img src="/profile.svg" alt="profile" className="w-56 h-56 rounded-lg object-cover shadow-soft" />
        </div>
        <div>
          <h2 className="section-title text-2xl">About</h2>
          <p className="mt-4 text-[var(--text)]/90 leading-relaxed">I design and build simple systems that respect people's time and attention. I believe minimal interfaces with generous whitespace are kinder, clearer, and more human.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
