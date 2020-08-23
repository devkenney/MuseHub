const React = require('react');
const Default = require('../components/Default.jsx');

class Show extends React.Component {
  render() {
    const sheet = this.props.sheet[0];
    const youtube = (sheet.youtube.split('=').pop())
    console.log(youtube);
    return (
      <Default>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="media mb-4">
              <img className="align-self-start mr-3" style={{ width: 300 }} src={sheet.image} />
              <div className="media-body">
                <h2 className="display-4">{sheet.title}<a href={`/sheets/${sheet._id}/edit`} className="badge badge-secondary">Edit</a></h2>
                <h3 className="display-5"><small className="text-muted">{sheet.composer}</small></h3>
                <p>{sheet.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="alert alert-dark">
                  Key: {sheet.key}
                </div>
              </div>
              <div className="col">
                <div className="alert alert-dark">
                  Genre(s): {sheet.genre1} {sheet.genre2}
                </div>
              </div>
              <div className="col">
                <div className="alert alert-dark">
                  Type of Music: {sheet.type}
                </div>
              </div>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              {
              youtube === "" ? '' : <iframe className="embed-responsive-item" src={`https://youtube.com/embed/${youtube}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
              }
            </div>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Show;