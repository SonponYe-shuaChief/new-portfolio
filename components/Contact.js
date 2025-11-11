import SectionWrapper from './SectionWrapper'
export default function Contact(){
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <h2 className="section-title text-2xl">Let’s build something beautiful</h2>
        <p className="mt-4 text-[var(--text)]/80">Email: <a href="mailto:hello@example.com" className="underline">hello@example.com</a></p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="text-[var(--text)] hover:scale-105 transition-transform">GitHub</a>
          <a href="#" className="text-[var(--text)] hover:scale-105 transition-transform">Twitter</a>
        </div>
      </div>
    </SectionWrapper>
  )
}
