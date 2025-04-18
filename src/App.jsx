import './index.css'

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>On The Wing</h1>
        <p>Where Passion Takes Flight</p>
        <a href="https://form.jotform.com/yourformlink" target="_blank" rel="noopener noreferrer">
          <button>Explore Experiences</button>
        </a>
      </header>
      <section className="trips">
        <h2>Upcoming Experiences</h2>
        <div className="trip-list">
          <div className="trip-card">
            <img src="https://via.placeholder.com/300x150" alt="Trip 1"/>
            <h3>Champions League Nights in Madrid</h3>
          </div>
          <div className="trip-card">
            <img src="https://via.placeholder.com/300x150" alt="Trip 2"/>
            <h3>Premier League Weekender</h3>
          </div>
          <div className="trip-card">
            <img src="https://via.placeholder.com/300x150" alt="Trip 3"/>
            <h3>F1 Monaco Grand Prix</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App