import Header from "./Header"
import Details from "./Details"
import Resume from "./Resume"
import "../styles/App.css"

function App() {
    
  return (
      <>
        <Header />
        <div className="main">
          <Details />
          <Resume />
        </div>
      </>
  )
}

export default App