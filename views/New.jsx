const React = require('react');
const Default = require('./components/Default.jsx');

class New extends React.Component {
  render() {
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <form>
              <div className="form-row">
                <div className="form-group col">
                  <label for="title">Title</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title" />
                </div>
                <div className="form-group col">
                  <label for="composer">Composer</label>
                  <input type="text" className="form-control" id="composer" name="composer" placeholder="Composer" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-3">
                  <label for="key">Key Signature</label>
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
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" rows="1" name="description" placeholder="Optional historical context or facts" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-9">
                  <label for="youtube">Youtube Link</label>
                  <input type="text" className="form-control" id="youtube" name="youtube" placeholder="http://www.youtube.com/" />
                </div>
                <div className="form-group col">
                  <label>Genre(s)</label>
                  <div className="form-row">
                    <select className="form-control col" name="genre1">
                      <option>Classical</option>
                      <option>Pop</option>
                      <option>Musical Theatre</option>
                      <option>Jazz</option>
                      <option>New Age</option>
                      <option>Spiritual</option>
                      <option>Big Band</option>
                      <option>Folk</option>
                      <option>Rock</option>
                      <option>Country</option>
                      <option>Blues</option>
                      <option>Reggae</option>
                      <option>Bluegrass</option>
                      <option>Soundtrack</option>
                    </select>
                    <select className="form-control col" name="genre2">
                      <option>Classical</option>
                      <option>Pop</option>
                      <option>Musical Theatre</option>
                      <option>Jazz</option>
                      <option>New Age</option>
                      <option>Spiritual</option>
                      <option>Big Band</option>
                      <option>Folk</option>
                      <option>Rock</option>
                      <option>Country</option>
                      <option>Blues</option>
                      <option>Reggae</option>
                      <option>Bluegrass</option>
                      <option>Soundtrack</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="type">Type of Music</label>
                <select className="form-control" name="type">
                  <option>Solo Vocal</option>
                  <option>Solo Instrumental</option>
                  <option>Instrumental</option>
                  <option>Instrumental and Vocal</option>
                  <option>Orchestral</option>
                  <option>Choir</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = New;