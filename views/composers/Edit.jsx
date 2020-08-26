const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const genres = this.props.genres;
    const composer = this.props.composer;
    return (
      <Default>
        <div className="container">
          <div className="jumbotron">
            <h2>Edit Composer</h2>
            <form action={`/composers/${composer._id}/?_method=PUT`} method="POST">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="name">Composer Name</label>
                  <input className="form-control" type="text" id="name" name="name" defaultValue={composer.name} />
                </div>
                <div className="col form-row">
                  <div className="form-group col-6">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" name="dob" defaultValue={composer.dob} />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="primaryType">Primary Type of Music</label>
                    <input type="text" className="form-control" id="primaryType" defaultValue={composer.primaryType} name="primaryType" />
                  </div>
                </div>
                <div className="form-group col form-row">
                  <div className="col">
                    <label htmlFor="primaryGenre1">Primary Genre(s)</label>
                    <select className="form-control" name="genre1" id="primaryGenre1">
                      {
                        genres.map((element) => {
                          return (
                            <option selected={composer.primaryGenres[0] === element.genreName ? true : false}>{element.genreName}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="primaryGenre2" style={{ opacity: 0 }}>________</label>
                    <select className="form-control" name="genre2" id="primaryGenre2">
                      <option></option>
                      {
                        genres.map((element) => {
                          return (
                            <option selected={composer.primaryGenres[1] === element.genreName ? true : false}>{element.genreName}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group form-row">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="form-control" name="description" defaultValue={composer.description} rows="5" />
              </div>
              <div className="form-group form-row">
                <label htmlFor="image">Image Link</label>
                <input type="text" className="form-control" name="image" id="image" defaultValue={composer.image} />
              </div>
              <h3>Greatest Works <small className="text-muted">(up to 4)</small></h3>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="workName1">Title</label>
                  <input type="text" id="workName1" name="workName1" defaultValue={composer.greatestWorks[0].title} className="form-control" />
                  <label htmlFor="workDesc1">Description</label>
                  <textarea id="workDesc1" className="form-control" defaultValue={composer.greatestWorks[0].description} name="workDesc1" rows="5" />
                </div>
                <div className="form-group col">
                  <label htmlFor="workName2">Title</label>
                  <input type="text" id="workName2" name="workName2" defaultValue={composer.greatestWorks[1].title} className="form-control" />
                  <label htmlFor="workDesc2">Description</label>
                  <textarea id="workDesc2" className="form-control" defaultValue={composer.greatestWorks[1].description} name="workDesc2" rows="5" />
                </div>
                <div className="form-group col">
                  <label htmlFor="workName3">Title</label>
                  <input type="text" id="workName3" name="workName3" defaultValue={composer.greatestWorks[2].title} className="form-control" />
                  <label htmlFor="workDesc3">Description</label>
                  <textarea id="workDesc3" className="form-control" defaultValue={composer.greatestWorks[2].description} name="workDesc3" rows="5" />
                </div>
                <div className="form-group col">
                  <label htmlFor="workName4">Title</label>
                  <input type="text" id="workName4" name="workName4" defaultValue={composer.greatestWorks[3].title} className="form-control" />
                  <label htmlFor="workDesc4">Description</label>
                  <textarea id="workDesc4" className="form-control" defaultValue={composer.greatestWorks[3].description} name="workDesc4" rows="5" />
                </div>
              </div>
              <input type="submit" name="" className="btn btn-primary" value="Make Changes" disabled />
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Edit;