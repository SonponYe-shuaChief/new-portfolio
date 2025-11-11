export default function Navbar(){
  return (
    <header className="py-6">
      <div className="container-wide flex items-center justify-between">
        <div className="text-xl font-bold text-[var(--text)]">Ye<span className="text-sm text-muted">Portfolio</span></div>
        <nav className="space-x-6 text-[var(--text)]/90">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
