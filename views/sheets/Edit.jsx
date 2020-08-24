const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const sheet = this.props.sheet;
    let keyArray = sheet.key.split(" ");
    keyArray[0].split("");
    console.log(keyArray);
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
                      <option selected={sheet.genre1 === 'Classical' ? true : false}>Classical</option>
                      <option selected={sheet.genre1 === 'Pop' ? true : false}>Pop</option>
                      <option selected={sheet.genre1 === 'Musical Theatre' ? true : false}>Musical Theatre</option>
                      <option selected={sheet.genre1 === 'Jazz' ? true : false}>Jazz</option>
                      <option selected={sheet.genre1 === 'New Age' ? true : false}>New Age</option>
                      <option selected={sheet.genre1 === 'Spiritual' ? true : false}>Spiritual</option>
                      <option selected={sheet.genre1 === 'Big Band' ? true : false}>Big Band</option>
                      <option selected={sheet.genre1 === 'Folk' ? true : false}>Folk</option>
                      <option selected={sheet.genre1 === 'Rock' ? true : false}>Rock</option>
                      <option selected={sheet.genre1 === 'Country' ? true : false}>Country</option>
                      <option selected={sheet.genre1 === 'Blues' ? true : false}>Blues</option>
                      <option selected={sheet.genre1 === 'Reggae' ? true : false}>Reggae</option>
                      <option selected={sheet.genre1 === 'Bluegrass' ? true : false}>Bluegrass</option>
                      <option selected={sheet.genre1 === 'Soundtrack' ? true : false}>Soundtrack</option>
                    </select>
                    <select className="form-control col" name="genre2">
                      <option selected={sheet.genre2 === '' ? true : false}></option>
                      <option selected={sheet.genre2 === 'Classical' ? true : false}>Classical</option>
                      <option selected={sheet.genre2 === 'Pop' ? true : false}>Pop</option>
                      <option selected={sheet.genre2 === 'Musical Theatre' ? true : false}>Musical Theatre</option>
                      <option selected={sheet.genre2 === 'Jazz' ? true : false}>Jazz</option>
                      <option selected={sheet.genre2 === 'New Age' ? true : false}>New Age</option>
                      <option selected={sheet.genre2 === 'Spiritual' ? true : false}>Spiritual</option>
                      <option selected={sheet.genre2 === 'Big Band' ? true : false}>Big Band</option>
                      <option selected={sheet.genre2 === 'Folk' ? true : false}>Folk</option>
                      <option selected={sheet.genre2 === 'Rock' ? true : false}>Rock</option>
                      <option selected={sheet.genre2 === 'Country' ? true : false}>Country</option>
                      <option selected={sheet.genre2 === 'Blues' ? true : false}>Blues</option>
                      <option selected={sheet.genre2 === 'Reggae' ? true : false}>Reggae</option>
                      <option selected={sheet.genre2 === 'Bluegrass' ? true : false}>Bluegrass</option>
                      <option selected={sheet.genre2 === 'Soundtrack' ? true : false}>Soundtrack</option>
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