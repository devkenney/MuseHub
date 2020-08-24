const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const sheet = this.props.sheet;
    let keyArray = sheet.key.split(" ");
    keyArray[0].split("");
    const genres = this.props.genres;
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <h2>Edit Sheet</h2>
            <form action={`/sheets/${sheet._id}/?_method=PUT`} method="POST">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" name="title" defaultValue={sheet.title} />
                </div>
                <div className="form-group col">
                  <label htmlFor="composer">Composer</label>
                  <input type="text" className="form-control" id="composer" name="composer" defaultValue={sheet.composer} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-3">
                  <label htmlFor="key">Key Signature</label>
                  <div className="form-row">
                    <select className="form-control col" name="key" id="key">
                      <option selected={keyArray[0] === 'A' ? true : false}>A</option>
                      <option selected={keyArray[0] === 'B' ? true : false}>B</option>
                      <option selected={keyArray[0] === 'C' ? true : false}>C</option>
                      <option selected={keyArray[0] === 'D' ? true : false}>D</option>
                      <option selected={keyArray[0] === 'E' ? true : false}>E</option>
                      <option selected={keyArray[0] === 'F' ? true : false}>F</option>
                      <option selected={keyArray[0] === 'G' ? true : false}>G</option>
                    </select>
                    <select className="form-control col" name="keyMod">
                      <option selected={keyArray.length < 3 ? true : false}></option>
                      <option selected={keyArray[1] === '#' ? true : false}>#</option>
                      <option selected={keyArray[1] === 'b' ? true : false}>b</option>
                    </select>
                    <select className="form-control col" name="majMin">
                      <option selected={keyArray[1 || 2] === 'Maj' ? true : false}>Maj</option>
                      <option selected={keyArray[1 || 2] === 'Min' ? true : false}>Min</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" rows="1" name="description" defaultValue={sheet.description} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-9">
                  <label htmlFor="youtube">Youtube Link</label>
                  <input type="text" className="form-control" id="youtube" name="youtube" defaultValue={sheet.youtube} />
                </div>
                <div className="form-group col">
                  <label>Genre(s)</label>
                  <div className="form-row">
                    <select className="form-control col" name="genre1">
                    {
                        genres.map((element) => {
                          return (
                            <option selected={sheet.genre2 === element.genreName ? true : false}>{element.genreName}</option>
                          )
                        })
                      }
                    </select>
                    <select className="form-control col" name="genre2">
                      <option selected={sheet.genre2 === '' ? true : false}></option>
                      {
                        genres.map((element) => {
                          return (
                            <option selected={sheet.genre2 === element.genreName ? true : false}>{element.genreName}</option>
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
                  <option selected={sheet.type === 'Solo Vocal' ? true : false}>Solo Vocal</option>
                  <option selected={sheet.type === 'Solo Instrumental' ? true : false}>Solo Instrumental</option>
                  <option selected={sheet.type === 'Instrumental' ? true : false}>Instrumental</option>
                  <option selected={sheet.type === 'Instrumental and Vocal' ? true : false}>Instrumental and Vocal</option>
                  <option selected={sheet.type === 'Orchestral' ? true : false}>Orchestral</option>
                  <option selected={sheet.type === 'Choral' ? true : false}>Choral</option>
                </select>
              </div>
              <div className="form-group col-8">
                <label htmlFor="image">Cover Image Link</label>
                <input type="text" className="form-control" id="image" name="image" defaultValue={sheet.image} />
              </div>
              <div className="form-group col">
                <label htmlFor="submit" style={{opacity: 0}}>________________</label>
                <input className="form-control btn btn-primary" id="submit" type="submit" name="" value="Make Changes" />
              </div>
              </div>
            </form>
            <form action={`/sheets/${sheet.id}/?_method=DELETE`} method="POST">
              <input className="form-control btn btn-primary" id="delete" type="submit" name="" value="Delete" />
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Edit;