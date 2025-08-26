import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
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
        <ContactMe />
      </Layout>
    </>
  )
}

export default App
