import React from 'react'

export default function Portfolio(props) {
  return (
    <section id="portfolio" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">Portfolio</h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={`https://img.freepik.com/premium-vector/light-blue-project-management-concept_23-2147782704.jpg?w=2000`} alt="project-1" className='img-fluid rounded-start' />
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-center text-teal">Project-1</h4>
                                <p className="text-secondary text-center">
                                    This is my first project of MERN FullStack developer
                                </p>
                                <div className="d-flex justify-content-evenly">
                                    <a href='#' target={'_blank'} className="btn btn-sm btn-primary">Code</a>
                                    <a href='#' target={'_blank'} className="btn btn-sm btn-success">Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>

            </div>
        </div>
    </section>
  )
}

 