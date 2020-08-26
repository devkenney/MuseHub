const React = require('react');
const Default = require('../components/Default.jsx');
const Composer = require('../../models/composer.js');

class Show extends React.Component {
  render() {
    const composer = this.props.composer;
    return (
      <Default>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="media mb-4">
              <div className="d-flex flex-column">
                <img className="align-self-start mr-3" style={{ width: 300 }} src={composer.image} />
                <div className="mr-3">
                  {
                    composer.primaryGenres.map((element) => {
                      if (element !== "") {
                        return (
                          <div className="alert alert-secondary" role="alert">
                            {element}
                          </div>
                        )
                      }
                    })
                  }
                </div>
              </div>
              <div className="media-body">
                <div className="d-flex">
                  <h2 className="display-4">{composer.name} <h4><a href={`/composer/${composer._id}/edit`} className="badge badge-pill badge-secondary">Edit</a></h4></h2>
                </div>
                <h3 className="display-5"><small className="text-muted">Primarily a composer of  {composer.primaryType} pieces.</small></h3>
                <p style={{ whiteSpace: "pre-line" }}>{composer.description}</p>
              </div>
            </div>
          </div>
          <div className="row container-fluid w-100 m-0 p-0">
            {
              composer.greatestWorks.map((element) => {
                if (element.title !== "") {
                  return (
                    <div class="card col">
                      <div className="card-header">
                        Greatest work
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.description}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </Default>
    )
  }
}


module.exports = Show;