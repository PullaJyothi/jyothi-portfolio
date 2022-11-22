import React from 'react'

const profile_image = "https://cdn-icons-png.flaticon.com/512/3135/3135823.png"

function About() {
  return (
    <section id="about" className="d-flex align-items-start">
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">About Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim commodi voluptates pariatur sapiente, porro totam ducimus distinctio nesciunt voluptate id dolores inventore omnis, eligendi ex beatae mollitia officiis exercitationem quo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={profile_image} alt="no image" className='card-img-top'/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body bg-white">
                            <h5 className="text-center text-teal card-title">
                                Personal Details
                            </h5>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non doloremque tenetur velit ipsum.</p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">DOB</strong>
                            <span className="text-teal float-end">04/08/2000</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Email</strong>
                            <span className="text-teal float-end">jyothipulla48@gmail.com</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Mobile</strong>
                            <span className="text-teal float-end">8328345408</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">City</strong>
                            <span className="text-teal float-end">Bengalore , Karnataka</span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong className="text-secondary">Qualification</strong>
                            <span className="text-teal float-end">BSC(Mscs)</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Father Name</strong>
                            <span className="text-teal float-end">P.Sreenivasulu</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Hobbies</strong>
                            <span className="text-teal float-end">Listening Music, Drawing</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="text-secondary">Marital Status</strong>
                            <span className="text-teal float-end">Unmarried</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>

     <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal"> Technical Skills</h3>
                </div>
            </div>
             

             <div className='row'>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>HTML</strong>
                                <strong className='text-teal float-end'>98%</strong>
                            </p>
                            <div className='progress-bar bg-info' style={{ width: '98%'}}>98%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>CSS</strong>
                                <strong className='text-teal float-end'>60%</strong>
                            </p>
                            <div className='progress-bar bg-warning' style={{ width: '60%'}}>60%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>JQUERY</strong>
                                <strong className='text-teal float-end'>50%</strong>
                            </p>
                            <div className='progress-bar bg-info' style={{ width: '50%'}}>50%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>BOOTSTRAP</strong>
                                <strong className='text-teal float-end'>60%</strong>
                            </p>
                            <div className='progress-bar bg-warning' style={{ width: '60%'}}>60%</div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>JAVASCRIPT</strong>
                                <strong className='text-teal float-end'>60%</strong>
                            </p>
                            <div className='progress-bar bg-warning' style={{ width: '60%'}}>60%</div> 
                            </li>
                            <li className="list-group-item">
                            <p>
                                <strong className='text-secondary'>REACT</strong>
                                <strong className='text-teal float-end'>60%</strong>
                            </p>
                            <div className='progress-bar bg-info' style={{ width: '60%'}}>60%</div> 
                            </li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
</div>
    </section>
  )
}

export default About