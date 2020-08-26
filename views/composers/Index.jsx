const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
  render() {
    const { composers } = this.props;
    console.log(this.props.composers);
    const page = parseInt(this.props.page);
    const numPages = this.props.numPages;
    return (
      <Default>
        <div className="container mt-3">
          <ul className="list-unstyled">
            {
              composers.map((element => {
                return (
                  <li className="media bg-dark text-white p-2">
                    <img src={element.image} className="mr-3 align-self-center ml-1" alt={element.genreName} style={{ width: 200 }} />
                    <div className="media-body">
                      <h4 className="mt-0">{element.name}</h4>
                      <p style={{ overflow: "hidden", maxHeight: 50 }}>{element.description}</p>
                      <br />
                      <a href={`/composers/${element._id}`} className="btn btn-secondary">View More</a>
                    </div>
                  </li>
                )
              }))
            }
            <li className="bg-dark text-white p-2 text-center"><a href="/composers/new" className="btn btn-primary">New Composer</a></li>
          </ul>
          <div className="container d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link bg-dark text-white" href={page > 1 ? `/composers?page=${page - 1}` : `#`} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link bg-dark text-white" href={page === 1 ? `#` : `/composers?page=${page - 1}`}>{page === 1 ? `1` : `${page - 1}`}</a></li>
              <li class="page-item"><a class="page-link bg-dark text-white" href={numPages < 2 ? `#` : page === 1 ? `/composers?page=2` : `#`}>{page !== 1 ? `${page}` : `${page + 1}`}</a></li>
              <li class="page-item"><a class="page-link bg-dark text-white" href={numPages < 3 ? `#` : page === 1 ? `/composers?page=3` : `/composers?page=${page + 1}`}>{page === 1 ? `${page + 2}` : `${page + 1}`}</a></li>
              <li class="page-item">
                <a class="page-link bg-dark text-white" href={page < numPages ? `/composers?page=${page + 1}` : `#`} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </Default>
    )
  }
}

module.exports = Index;