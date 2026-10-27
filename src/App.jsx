import './App.css'

const checklist = ['Gas', 'Electric', 'Hybrid']

function App() {
  return (
    <main className="mockup-page">
      <div className="design-board">
        <aside className="layer-panel">
          <div className="panel-header">Frame</div>
          <ul className="layer-list">
            <li className="layer-item active">Rectangle</li>
            <li className="layer-item">Rectangle</li>
            <li className="layer-item">Rectangle</li>
            <li className="layer-item">Rectangle</li>
            <li className="layer-item">Rectangle</li>
          </ul>
        </aside>

        <section className="canvas-area">
          <div className="canvas-shell">
            <div className="hero-row">
              <article className="hero-card left-card">
                <span className="pill green">New feature</span>
                <h1>Make sense of numbers today</h1>
                <p>
                  Decipad is an interactive notebook that helps everyone tell stories
                  using data.
                </p>
                <button type="button">Join beta</button>
              </article>

              <article className="hero-card right-card">
                <span className="pill green">New feature</span>
                <h1>Make sense of numbers today</h1>
                <p>
                  Decipad is an interactive notebook that helps everyone tell stories
                  using data.
                </p>
                <button type="button">Join beta</button>
              </article>
            </div>

            <div className="center-heading">
              <h2>A notebook for numbers. It&apos;s that simple.</h2>
            </div>

            <div className="comparison-card">
              <div className="comparison-header">
                <span className="number-badge">1</span>
                <p>Should I buy an electric car?</p>
              </div>

              <div className="summary-row">
                <div className="summary-copy">
                  <p>Express ideas like a human, not a machine.</p>
                  <p className="small">No more SQL + Shell + combine text.</p>
                </div>
                <div className="summary-box">
                  <span className="box-label">15000 miles per g</span>
                </div>
              </div>

              <div className="stats-row">
                {checklist.map((item) => (
                  <span key={item} className="stat-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="price-box">
                <div className="price-value">1200 x 600</div>
                <div className="price-meta">Electric vehicle</div>
              </div>
            </div>
          </div>
        </section>

        <aside className="property-panel">
          <div className="property-head">
            <span className="property-title">Rectangle</span>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default App
