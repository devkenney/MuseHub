const React = require('react');
const Default = require('../components/Default.jsx')

class Show extends React.Component {
  render() {
    const genre = this.props.genre;
    return (
      <Default>
        <div className="jumbotron jumbotron-fluid d-flex flex-column">
          <div className="media container">
            <img className="mr-3" src={genre.image} alt={genre.genreName} style={{ width: 300 }} />
            <div className="media-body">
              <div className="d-flex">
                <h2 className="display-4">{genre.genreName} <h4><a href={`/genres/${genre._id}/edit`} className="badge badge-pill badge-secondary">Edit</a></h4></h2>
              </div>
              <p style={{ whiteSpace: "pre-line" }}>{genre.description}</p>
            </div>
          </div>
          <div className="row container-fluid w-100 m-0 p-0">
            {
              genre.innovatorList.map((element) => {
                if (element.artist !== "") {
                  return (
                    <div class="card col">
                      <div class="card-header">
                        Featured Innovator
                    </div>
                      <div class="card-body">
                        <h5 class="card-title">{element.artist}</h5>
                        <p class="card-text">{element.description}</p>
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