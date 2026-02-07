import './App.css'

function App() {
  return (
    <div className="app">
      <div className="snowflakes" aria-hidden="true">
        {[...Array(20)].map((_, i) => <div key={i} className="snowflake">❄</div>)}
      </div>

      <header>
        <h1>Hi Fjola! 🎅✨</h1>
        <p className="subtitle">A little page just for you</p>
      </header>

      <section className="card">
        <div className="photo-container">
          <img src={import.meta.env.BASE_URL + "fjola.jpg"} alt="Fjola as Santa" className="photo" />
        </div>
        <h2>Santa Fjola 🎄</h2>
        <p>The best Santa we've ever seen! Spreading joy and good vibes. 🎁</p>
      </section>

      <section className="card">
        <div className="photo-container">
          <img src={import.meta.env.BASE_URL + "cookie.jpg"} alt="Cookie the cat" className="photo" />
        </div>
        <h2>Cookie 🍪</h2>
        <p>
          And of course, Fjola's beloved Cookie — the most photogenic, laziest, 
          computer-restarting cat in all of the Netherlands. 
          A true icon. 😻
        </p>
      </section>

      <footer>
        <p>Made with ❤️ by Jimmy Rogers 🏍️</p>
      </footer>
    </div>
  )
}

export default App
