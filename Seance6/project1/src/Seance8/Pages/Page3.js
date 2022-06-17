import React from "react";

export default function Page3() {
  return (
    <div>
      Page3
      <div className="cardbox shadow-lg bg-white">
        <div className="cardbox-heading">
          {/* START dropdown*/}
          <div className="dropdown float-right">
            <button
              className="btn btn-flat btn-flat-icon"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <em className="fa fa-ellipsis-h" />
            </button>
            <div
              className="dropdown-menu dropdown-scale dropdown-menu-right"
              role="menu"
              style={{
                position: "absolute",
                transform: "translate3d(-136px, 28px, 0px)",
                top: 0,
                left: 0,
                willChange: "transform",
              }}
            >
              <a className="dropdown-item" href="#">
                Hide post
              </a>
              <a className="dropdown-item" href="#">
                Stop following
              </a>
              <a className="dropdown-item" href="#">
                Report
              </a>
            </div>
          </div>
          {/*/ dropdown */}
          <div className="media m-0">
            <div className="d-flex mr-3">
              <a href>
                <img
                  className="img-fluid rounded-circle"
                  src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg"
                  alt="User"
                />
              </a>
            </div>
            <div className="media-body">
              <p className="m-0">Benjamin Robinson</p>
              <small>
                <span>
                  <i className="icon ion-md-pin" /> Nairobi, Kenya
                </span>
              </small>
              <small>
                <span>
                  <i className="icon ion-md-time" /> 10 hours ago
                </span>
              </small>
            </div>
          </div>
          {/*/ media */}
        </div>
        {/*/ cardbox-heading */}
        <div className="cardbox-item">
          <img
            className="img-fluid"
            src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg"
            alt="Image"
          />
        </div>
        {/*/ cardbox-item */}
        <div className="cardbox-base">
          <ul className="float-right">
            <li>
              <a>
                <i className="fa fa-comments" />
              </a>
            </li>
            <li>
              <a>
                <em className="mr-5">12</em>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-share-alt" />
              </a>
            </li>
            <li>
              <a>
                <em className="mr-3">03</em>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                <i className="fa fa-thumbs-up" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                  className="img-fluid rounded-circle"
                  alt="User"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                  className="img-fluid rounded-circle"
                  alt="User"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                  className="img-fluid rounded-circle"
                  alt="User"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                  className="img-fluid rounded-circle"
                  alt="User"
                />
              </a>
            </li>
            <li>
              <a>
                <span>242 Likes</span>
              </a>
            </li>
          </ul>
        </div>
        {/*/ cardbox-base */}
        <div className="cardbox-comments">
          <span className="comment-avatar float-left">
            <a href>
              <img
                className="rounded-circle"
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg"
                alt="..."
              />
            </a>
          </span>
          <div className="search">
            <input placeholder="Write a comment" type="text" />
            <button>
              <i className="fa fa-camera" />
            </button>
          </div>
          {/*/. Search */}
        </div>
        {/*/ cardbox-like */}
      </div>
    </div>
  );
}
