import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'

const projects = [
  { title: 'CalmNotes', desc: 'A minimal note-taking app with distraction-free UI.', tech:['React','Next','Tailwind'] },
  { title: 'GreenShop', desc: 'Eco-friendly e-commerce template focusing on clarity.', tech:['React','Stripe','SSR'] },
  { title: 'FlowCharts', desc: 'Simple diagramming with smooth interactions.', tech:['Canvas','TS'] },
]

export default function ProjectsSection(){
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title text-2xl">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
