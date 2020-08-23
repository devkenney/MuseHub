const React = require('react');
const Default = require('./components/Default.jsx')

class Home extends React.Component {
  render() {
    return (
      <Default>
        <div className="container my-3">
          <div className="card text-white bg-dark">
            <div className="card-header">
              Quote
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>Those who danced were thought quite insane by those who could not hear the music.</p>
                <footer className="blockquote-footer">Angela Monet</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-md-around">
            <div className="card text-white bg-dark" style={{ width: 300 }}>
              <img src="media/sheetMusic.jpg" className="card-img-top" alt="Sheets" style={{ height: 200 }} />
              <div className="card-body">
                <h5 className="card-title">Sheet Music</h5>
                <p className="card-text">Whether you want to find a new piece to play or sing, or just explore what's out there, this is the place for you.</p>
                <a href="/sheets" className="btn btn-primary">Go There</a>
              </div>
            </div>
            <div className="card text-white bg-dark" style={{ width: 300 }}>
              <img src="media/beethoven.jpg" className="card-img-top" alt="composers" style={{ height: 200 }} />
              <div className="card-body">
                <h5 className="card-title">Composers</h5>
                <p className="card-text">From Beethoven to Stephen Sondheim, you'll find all the most influential composers here.</p>
                <br />
                <a href="/composers" className="btn btn-primary">Go There</a>
              </div>
            </div>
            <div className="card text-white bg-dark" style={{ width: 300 }}>
              <img src="media/musicNotes.jpg" className="card-img-top" alt="genres" style={{ height: 200 }} />
              <div className="card-body">
                <h5 className="card-title">Genres</h5>
                <p className="card-text">If you ever wonder what a certain genre is defined by, check here!</p>
                <br />
                <br />
                <a href="/genres" className="btn btn-primary">Go There</a>
              </div>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Home;