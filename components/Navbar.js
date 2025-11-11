export default function Navbar(){
  return (
    <header className="py-6">
      <div className="container-wide flex items-center justify-between">
        <div className="text-xl font-bold text-[var(--text)] nav-brand">Ye<span className="text-sm text-muted">...</span></div>
        <nav className="space-x-6 text-[var(--text)]/90">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}
