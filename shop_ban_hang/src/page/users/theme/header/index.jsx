import { memo } from "react";
import "./style.scss";
import { BsFacebook, BsMessenger, BsTwitterX } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-6 ">Trai</div>
          <div className="col-6 header__top_right">
            <ul>
              <Link to={""}><li><BsFacebook /></li></Link>
              <Link to={"a"}><li><BsTwitterX /></li></Link>
              <Link to={"a"}><li><BsMessenger /></li></Link>
              <Link to={"a"}><li><AiOutlineUser /></li></Link>
              <span>Login</span>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
