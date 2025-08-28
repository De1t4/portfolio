import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Education from "./components/Education"
import Experience from "./components/Experience"
import HeroProfile from "./components/HeroProfile"
import Projects from "./components/Projects"
import Layout from "./layout/Layout"

function App() {

  return (
    <>
      <Layout>
        <HeroProfile />
        <AboutMe />
        <Projects />
        <Education />
        <Experience />
        <ContactMe />
      </Layout>
    </>
  )
}

export default App
