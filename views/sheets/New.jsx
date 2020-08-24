const React = require('react');
const Default = require('../components/Default.jsx');

class New extends React.Component {
  render() {
    const genres = this.props.genres;
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <h2>New Sheet</h2>
            <form action="/sheets" method="POST">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title" />
                </div>
                <div className="form-group col">
                  <label htmlFor="composer">Composer</label>
                  <input type="text" className="form-control" id="composer" name="composer" placeholder="Composer" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-3">
                  <label htmlFor="key">Key Signature</label>
                  <div className="form-row">
                    <select className="form-control col" name="key" id="key">
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>F</option>
                      <option>G</option>
                    </select>
                    <select className="form-control col" name="keyMod">
                      <option></option>
                      <option>#</option>
                      <option>b</option>
                    </select>
                    <select className="form-control col" name="majMin">
                      <option>Maj</option>
                      <option>Min</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" rows="1" name="description" placeholder="Historical context or facts about the piece" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-9">
                  <label htmlFor="youtube">Youtube Link</label>
                  <input type="text" className="form-control" id="youtube" name="youtube" placeholder="http://www.youtube.com/watch?v=something" />
                </div>
                <div className="form-group col">
                  <label>Genre(s)</label>
                  <div className="form-row">
                    <select className="form-control col" name="genre1">
                      {
                        genres.map((element) => {
                          return (
                            <option>{element.genreName}</option>
                          )
                        })
                      }
                    </select>
                    <select className="form-control col" name="genre2">
                      <option></option>
                      {
                        genres.map((element) => {
                          return (
                            <option>{element.genreName}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
              <div className="form-group col-2">
                <label htmlFor="type">Type of Music</label>
                <select className="form-control" name="type">
                  <option>Solo Vocal</option>
                  <option>Solo Instrumental</option>
                  <option>Instrumental</option>
                  <option>Instrumental and Vocal</option>
                  <option>Orchestral</option>
                  <option>Choir</option>
                </select>
              </div>
              <div className="form-group col-8">
                <label htmlFor="image">Cover Image Link</label>
                <input type="text" className="form-control" id="image" name="image" placeholder="http://www.somesite.com/yourpicture" />
              </div>
              <div className="form-group col">
                <label htmlFor="submit" style={{opacity: 0}}>________________</label>
                <input className="form-control btn btn-primary" id="submit" type="submit" name="" value="Create" />
              </div>
              </div>
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = New;