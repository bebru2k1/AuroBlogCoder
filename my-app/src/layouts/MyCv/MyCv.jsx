import React, { useRef } from "react";
import "./MyCv.css";
import avatar from "../../assets/image/meabout.jpg";
import * as Icon from "react-feather";
import useGetWidthHeight from "../../hooks/useGetWidthHeight";
import { Link } from "react-router-dom";
function MyCv() {
  // const des = useRef();
  // const skill = useRef();
  // const project = useRef();
  // const education = useRef();

  // const [widthDes, heightDes] = useGetWidthHeight(des);
  // const [widthSkill, heightSkill] = useGetWidthHeight(skill);
  // const [widthProject, heightProject] = useGetWidthHeight(project);
  // const [widthEdu, heightEdu] = useGetWidthHeight(education);
  // console.log(heightEdu);
  return (
    <div className="mycv row">
      <div className="mycv__left col c-12 lm-6">
        <div className="mycv__left__image">
          <img src={avatar} alt="" />
        </div>
        <div className="mycv__left__subimage">
          <p className="mycv__left__subimage__name">Lê Đức Anh</p>
          <p className="mycv__left__subimage__dev">Web Developer</p>
        </div>
        <div className="mycv__left__info">
          <div className="mycv__left__info__item">
            <Icon.Gift className="mycv__left__info__item-icon" />
            <span>20/03/2001</span>
          </div>
          <div className="mycv__left__info__item">
            <Icon.User className="mycv__left__info__item-icon" />
            <span>Nam</span>
          </div>
          <div className="mycv__left__info__item">
            <Icon.PhoneCall className="mycv__left__info__item-icon" />
            <span>0369923897</span>
          </div>
          <div className="mycv__left__info__item">
            <Icon.Mail className="mycv__left__info__item-icon" />
            <span>ducanhlaze2k1@gmail.com</span>
          </div>
          <div className="mycv__left__info__item">
            <Icon.Home className="mycv__left__info__item-icon" />
            <span>Số 13, Nguyễn Kiệm, TP.Vinh</span>
          </div>
        </div>
        <div className="mycv__left__yourself">
          <h2 className="mycv__left__yourself__title textcolor-green">
            TÓM TẮT BẢN THÂN
          </h2>
          <div className="mycv__left__yourself__item">
            <p>- Là một người điềm tĩnh</p>
            <br />

            <p>- Thích ứng nhanh với môi trường mới</p>
            <br />

            <p>- Không ngại khó khăn</p>
            <br />

            <p>- Hứng thú với việc tìm ra hướng giải quyết cho vấn đề</p>
          </div>
        </div>
        <div className="mycv__left__contact"></div>
      </div>
      <div className="mycv__right col c-12 lm-6">
        <div className="mycv__right__des mycv__right-item">
          <h2 className="flex-alight">
            <Icon.Activity className="mr-10" />
            <span>MỤC TIÊU NGHỀ NGHIỆP</span>
          </h2>
          <div className="mycv__right-item-lorem box-quoute">
            <p>- Có một công việc ổn định</p>
            <br />
            <p>- Học hỏi thêm những kiến thức mới</p>
            <br />

            <p>- Cống hiến hết mình cho công việc</p>
            <br />
          </div>
        </div>

        {/* <div className="mycv__right__des mycv__right-item">
          <h2 className="flex-alight">
            <Icon.Activity className="mr-10" />
            <span>TÓM TẮT BẢN THÂN</span>
          </h2>
          <div className="mycv__right-item-lorem box-quoute">
            <p>- Là một người điềm tĩnh</p>
            <br />

            <p>- Thích ứng nhanh với môi trường mới</p>
            <br />

            <p>- Không ngại khó khăn</p>
            <br />

            <p>- Hứng thú với việc tìm ra hướng giải quyết cho vấn đề</p>
          </div>
        </div> */}
        <div className="mycv__right__skill mycv__right-item">
          <h2 className="flex-alight">
            <Icon.Activity className="mr-10" />
            <span>KỸ NĂNG</span>
          </h2>
          <div className="mycv__right-item-lorem mycv__right__skill__content">
            <div className="mycv__right__skill-left">
              <p className="mycv__right-item-lorem-text textcolor-green flex-alight">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>HTML</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Khá Tốt</span>
              </p>
              <p className="mycv__right-item-lorem-text textcolor-green flex-alight">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>CSS</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Khá Tốt</span>
              </p>
              <p className=" mycv__right-item-lorem-text textcolor-green flex-alight">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>JAVASCRIPT</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Cơ bản</span>
              </p>
            </div>
            <div className="mycv__right__skill-right ">
              <p className=" mycv__right-item-lorem-text textcolor-green flex-alight ">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>REACT</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Cơ bản</span>
              </p>
              <p className=" mycv__right-item-lorem-text textcolor-green flex-alight ">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>REDUX</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Cơ bản</span>
              </p>
              <p className=" mycv__right-item-lorem-text textcolor-green flex-alight ">
                <Icon.Zap className="mycv__right-item-lorem-icon" />
                <span>EXPRESS</span>
              </p>
              <p className="mycv__right-item-lorem__rating flex-alight ">
                <Icon.ThumbsUp className="mr-10 mycv__right-item-lorem__rating-icon" />
                <span>Cơ bản</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mycv__right__project mycv__right-item">
          <h2 className="flex-alight">
            <Icon.Activity className="mr-10" />
            <span>MỘT SỐ DỰ ÁN</span>
          </h2>
          <div className="mycv__right__project__content flex-alight">
            <Icon.Link className="mycv__right__project__content-icon" />
            <Link to="/" className="mycv__right__project__content-link">
              Aurora Blog
            </Link>
          </div>
          {/* <div className="mycv__right__project__content flex-alight">
            <Icon.Link className="mycv__right__project__content-icon" />
            <Link to="/" className="mycv__right__project__content-link">
              Realtime Chat
            </Link>
          </div> */}
        </div>

        <div className="mycv__right__education mycv__right-item">
          <h2 className="flex-alight">
            <Icon.Activity className="mr-10" />
            <span>HỌC VẤN</span>
          </h2>
          <div className="mycv__right-item-lorem box-quoute">
            <p>
              <strong>Đại Học Vinh</strong>
            </p>
            <br />
            <p>Sinh viên năm 2</p>
            <br />
            <p>Chuyên ngành Sư Phạm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCv;