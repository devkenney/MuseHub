const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const genre = this.props.genre;
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <h2>New Genre</h2>
            <form action="/genres" method="POST">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="genreName">Genre Name</label>
                  <input className="form-control" type="text" id="genreName" name="genreName" defaultValue={genre.genreName} />
                </div>
                <div className="form-group col">
                  <label htmlFor="image">Image Link</label>
                  <input className="form-control" type="text" id="image" name="image" defaultValue={genre.image} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3" name="description" defaultValue={genre.description} />
              </div>
              <h3>Influential Musicians/Composers <small className="text-muted">(Up to 4)</small></h3>
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist1">Artist/Composer Name</label>
                    <input className="form-control" id="artist1" type="text" name="artName1" defaultValue={genre.innovatorList[0].artist} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc1">Description</label>
                    <textarea className="form-control" id="artistDesc1" rows="5" name="description1" defaultValue={genre.innovatorList[0].description} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist2">Artist/Composer Name</label>
                    <input className="form-control" id="artist2" type="text" name="artName2" defaultValue={genre.innovatorList[1].artist} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc2">Description</label>
                    <textarea className="form-control" id="artistDesc2" rows="5" name="description2" defaultValue={genre.innovatorList[1].description} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist3">Artist/Composer Name</label>
                    <input className="form-control" id="artist3" type="text" name="artName3" defaultValue={genre.innovatorList[2].artist} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc3">Description</label>
                    <textarea className="form-control" id="artistDesc3" rows="5" name="description3" defaultValue={genre.innovatorList[2].description} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist4">Artist/Composer Name</label>
                    <input className="form-control" id="artist4" type="text" name="artName4" defaultValue={genre.innovatorList[3].artist} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc4">Description</label>
                    <textarea className="form-control" id="artistDesc4" rows="5" name="description4" defaultValue={genre.innovatorList[3].description} />
                  </div>
                </div>
              </div>
              <input className="btn btn-primary" type="submit" name="" value="Create" />
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Edit;