import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Levi – AI-Powered Restaurant Assistant',
    desc: 'AI assistant to streamline restaurant operations: reminders, purchase logs, and analytics. Integrated ElevenLabs for human-like voice interactions.',
    tech: ['LLM APIs','ElevenLabs','React','Supabase'],
    icon: '/icons/ai.svg'
  },
  {
    title: 'UG Navigate',
    desc: 'Campus shortest path finder using graph algorithms to compute optimal routes across campus.',
    tech: ['Algorithms','React Native'],
    icon: '/icons/mobile.svg'
  },
  {
    title: 'Restaurant Management System',
    desc: 'Full-stack solution built with React Native and Supabase featuring modern UI and automated reporting.',
    tech: ['React Native','Supabase'],
    icon: '/icons/web.svg'
  },
  {
    title: 'Aya – AI Powered Store',
    desc: 'AI system assisting sellers with customer interactions and order facilitation.',
    tech: ['LLM APIs','React'],
    icon: '/icons/ai.svg'
  },
  {
    title: 'Figma Design — Restaurant App',
    desc: 'High-fidelity UI design created in Figma showcasing modern, user-centred screens.',
    link: 'https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled',
    tech: ['Figma','UI/UX'],
    icon: '/icons/figma.svg'
  }
]

export default function ProjectsSection(){
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title text-2xl">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
