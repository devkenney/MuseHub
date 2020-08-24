const React = require('react');
const Default = require('../components/Default.jsx')

class New extends React.Component {
  render() {
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <h2>New Genre</h2>
            <form action="/genres" method="POST">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="genreName">Genre Name</label>
                  <input className="form-control" type="text" id="genreName" name="genreName" placeholder="Genre Name" />
                </div>
                <div className="form-group col">
                  <label htmlFor="image">Image Link</label>
                  <input className="form-control" type="text" id="image" name="image" placeholder="http://somesite.com/yourimage.jpg" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3" name="description" placeholder="What this genre is all about" />
              </div>
              <h3>Influential Musicians/Composers <small className="text-muted">(Up to 4)</small></h3>
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist1">Artist/Composer Name</label>
                    <input className="form-control" id="artist1" type="text" name="artName1" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc1">Description</label>
                    <textarea className="form-control" id="artistDesc1" rows="5" name="description1" placeholder="Info about this musician/composer" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist2">Artist/Composer Name</label>
                    <input className="form-control" id="artist2" type="text" name="artName2" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc2">Description</label>
                    <textarea className="form-control" id="artistDesc2" rows="5" name="description2" placeholder="Info about this musician/composer" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist3">Artist/Composer Name</label>
                    <input className="form-control" id="artist3" type="text" name="artName3" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc3">Description</label>
                    <textarea className="form-control" id="artistDesc3" rows="5" name="description3" placeholder="Info about this musician/composer" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="artist4">Artist/Composer Name</label>
                    <input className="form-control" id="artist4" type="text" name="artName4" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="artistDesc4">Description</label>
                    <textarea className="form-control" id="artistDesc4" rows="5" name="description4" placeholder="Info about this musician/composer" />
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

module.exports = New;