import React from 'react'

export default function messages() {
    return (
        <div className="row justify-content-center mt-3">
                <div className="col-12">
                    <p className="text-muted text-center">Messages starting from 10th of June, 2020</p>
                </div>
                <div className="col-12">
                    <div className="card bg-white border-light p-4 mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="font-small">
                                <a href="#">
                                    <img className="avatar-sm img-fluid rounded-circle mr-2"
                                        src="../assets/img/team/profile-picture-1.jpg" alt="avatar" />
                                    <span className="font-weight-bold">Neil Sims</span>
                            </a>
                            <span className="ml-2">March 26, 19:25</span>
                            </span>
                            <div className="d-none d-sm-block">
                                <button className="btn btn-link text-dark" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone">
                                    <span className="fas fa-mobile-alt"></span>
                                </button>
                            </div>
                        </div>
                        <p className="m-0">
                            Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches on the internet.
                        </p>
                    </div>
                    <div className="card bg-primary text-white border-light p-4 ml-md-5 ml-lg-6 mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="font-small">
                            <span className="font-weight-bold">Your Answer</span>
                            <span className="ml-2">March 26, 19:25</span>
                            </span>
                            <div className="d-none d-sm-block">
                                <button className="btn btn-link text-white" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone">
                                    <span className="fas fa-mobile-alt"></span>
                                </button>
                            </div>
                        </div>
                        <p className="m-0">
                            Hi Neil, thanks for sharing your thoughts regarding Spaces. Hi Neil, thanks for sharing your thoughts regarding Spaces.
                        </p>
                    </div>
                    <form action="#" className="mt-4">
                        <textarea className="form-control border border-light-gray mb-4" id="message" placeholder="Your Message" rows="6" maxlength="1000" required></textarea>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="file-field">
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex">
                                        <span className="icon icon-md h6"><span className="fas fa-paperclip mr-3"></span></span>
                                        <input type="file" /> 
                                        <div className="d-block text-left d-sm-block">
                                            <div className="font-weight-normal text-dark mb-lg-1">Attach File</div> 
                                            <div className="text-gray small pr-3 pr-lg-11 d-none d-md-inline">Supported files are: jpg, jpeg, png, doc, pdf, gif, zip, rare, tar, txt, xls, docx, xlsx, odt
                                            </div>
                                        </div>                                           
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-secondary text-dark"><span className="fas fa-paper-plane mr-2"></span>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}
