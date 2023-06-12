import React, { useState } from "react";
import styled from "styled-components";
import retro_toy from "../../img/retro_toy.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import profile_img from "../../img/profile_img.png";
import mana_pay from "../../img/mana_pay.png";
import like_btn from "../../img/like-btn.png";
import like_btn_red from "../../img/like-btn-red.png";
import watermark from "../../img/watermark.png";
import mana from "../../img/mana.png";
import { useNavigate, useParams } from "react-router-dom";
const ProductSpec = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const map_path_to_img = {
    0: ["toy-1", "toy-2", "toy-3", "toy-4", "toy-5"],
    1: ["car-1", "car-2", "car-3", "car-4", "car-5"],
    2: ["ranger-1", "ranger-2", "ranger-3", "ranger-4", "ranger-5"],
    3: ["ranger-6", "ranger-7", "ranger-8", "ranger-9", "ranger-10"],
    4: ["antman-1", "antman-2", "antman-3", "antman-4", "antman-5"],
    5: ["boy-1", "boy-2", "boy-3", "boy-4", "boy-5"],
  };

  const map_path_to_content = {
    0: {
      title: "레트로토이 철인28호",
      price: "146,000원",
      content:
        "요코야마 미츠테루의 만화와 동명의 애니메이션 시리즈. 사상 최초의 거대로봇물 작품으로 거대로봇 장르의 첫 장을 연 전설적인 작품이다. 철인 이전에도 거대 로봇이라는 메카닉 캐릭터가 없던 것은 아니지만, 주역으로 등장한 것은 이 작품이 최초다. 철완 아톰, 마징가 Z, 건담, 신세기 에반게리온와 함께 일본에서 가장 잘 알려진 국민적인 로봇 작품이었고, 지금도 일본 만화/애니메이션 발전과 역사에 대해 논할 때 빠지지 않는 기념비적인 작품이다.",
    },
    1: {
      title: "86 포니엑셀 가져가세요!",
      price: "64,000원",
      content:
        "현대자동차의 전륜구동 소형 승용차. 개발 프로젝트 코드네임은 X카.[4] 포니의 후속 모델로 1985년 2월에 출시했으며, 대한민국 최초의 전륜구동 승용차이다. 사이즈 가로 27 세로 50 폭 25 전체적으로 박스 구성품 모두 있으며, 디테일과 레트로 감성 너무 좋아서 인테리어 감성 최고에요. 타 중고사이트에서 116,000원에 팔린 이력 있어요… 쿨거래시 5,000원!!!",
    },
    2: {
      title: "84태권V 리미티드 한정판!!",
      price: "279,000원",
      content:
        "로보트 태권 V 리미트드 한정판 지하대탈출 - 당초 유현목 제작, 김청기 감독, 지상학 각본으로 제작되려던 이 시나리오는 지구 내부에 살고 있는 지하 제국의 갈등에 우연히 끼어 든 태권 V의 활약 및 가짜 훈이의 등장 등을 다루려 했지만, 수중특공대의 흥행실패로 결국 이는 불발되었다. 이후 로보트 태권 V와 황금날개의 대결이 제작되었다. 그러나 1981년에 제작된 <소년 007 지하제국>편과 스토리가 흡사해 아마도 해당 시나리오가 여기에 쓰여진 게 아닐까 추측되고 있다.",
    },
    3: {
      title: "태권V SILVER 리미티드!",
      price: "69,000원",
      content:
        "2인승인 탑승용 메카 제비호를 이용해서 두부에 올라간 뒤 메인 파일럿인 김훈이 가슴 부근의 조종실로 이동해서 조종하는 것으로 움직인다. 이후 제비호는 두부에서 이탈하여 주변 정찰을 하게 된다. 조종 방법은 별거 없이 의자에 앉아서 훈이가 상황에 맞춰 레버를 당기면 태권도 품세를 취한다. 태권도 부분은 실제 태권도 선수의 움직임을 보고 그렸다고 한다. 예를 들어서 “돌려차라!”라고 말하면 바로 돌려차기를 할 수있다. 개량형인 ‘슈퍼 태권브이, 84태권브이’에 존재하는 일심동체 시스템은 초기형 태권브이에는 존재하지 않는다. ",
    },
    4: {
      title: "가면라이더 오리지널",
      price: "123,000원",
      content:
        "세계정복을 노리는 악의 비밀결사 쇼커에게 납치당한 청년 혼고 타케시가 쇼커의 개조수술을 받고 메뚜기의 특징과 능력을 가진 괴인이 된 모습. 쇼커측에 협력하고 있던 은사 미도리카와 박사의 도움으로 쇼커의 손에서 벗어난 혼고 타케시는 쇼커의 위협에 맞서 인간의 자유를 지키기 위해 ‘가면라이더’라는 이름의 히어로로서 싸우길 결심한다. 혼고와 함께 싸우는 또 하나의 가면라이더, 이치몬지 하야토 또한 쇼커의 개조수술을 통해 탄생한 메뚜기형 괴인이다. 혼고가 쇼커 유럽지부를 쫓아 일본을 떠난 사이 가면라이더 2호로서 혼고 대신 일본을 지켰으며 이후 귀국한 혼고와 함께 더블 라이더로 활약하며 쇼커의 야망을 분쇄한다.",
    },
    5: {
      title: "철완 아톰 1:30 스케일 한정판",
      price: "318,000원",
      content:
        "제작자인 과학성 장관 텐마 박사의 아들인 텐마 토비오의 외형을 본딴 로봇으로 토비오가 사고로 사망하게 되자 텐마 박사가 만들었다. 로봇이라서 친아들 토비오처럼 성장하지 않는다고 텐마 박사에게 구박 받다가 서커스단에 팔리게 되지만,[2] 우여곡절 끝에 텐마 박사의 후임 장관이 된 오챠노미즈 박사에게 구원받고 새로운 삶을 살게 된다. 가족은 본인보다 나이가 어린 로봇 부모[3]가 있으며, 남동생 코발트와 여동생 우란이 있다.",
    },
  };

  const handleNext = (images) => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = (images) => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };
  return (
    <Container images={map_path_to_img[id]} activeIndex={activeIndex}>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>레트로토이</h1>
        </div>
        <ShoppingCartTwoToneIcon />
      </div>
      <div className="img-holder">
        <div className="img-map">
          {map_path_to_img[id].map((el, id) => (
            <img
              key={id}
              className="product-image"
              src={require(`../../img/product_img/${el}.png`)}
              alt="retro-toy"
            />
          ))}
        </div>
        <NavigateBeforeIcon
          className="prev"
          onClick={() => handlePrev(map_path_to_img[id])}
        >
          Prev
        </NavigateBeforeIcon>
        <NavigateNextIcon
          className="next"
          onClick={() => handleNext(map_path_to_img[id])}
        >
          Next
        </NavigateNextIcon>
        <div className="tab-1">
          <img className="watermark" src={watermark} alt="watermark" />
          <img className="like-btn-red" src={like_btn_red} alt="like_btn_red" />
        </div>
        <div className="tab-2">
          <p>{activeIndex + 1 + "/" + map_path_to_img[id].length}</p>
        </div>
        <div className="tab-3">
          <img src={mana_pay} alt="mana-pay" />
          <p>지금 마나페이로 구매하고, 마나를 모으세요!</p>
        </div>
      </div>
      <section className="sub-content">
        <div className="inner-content">
          <img className="profile-pic" src={profile_img} alt="profile_img" />
          <h1>니가가라 하와이</h1>
        </div>
        <div className="inner-content">
          <p>
            <span>♥</span> 184 follows
          </p>
          <div className="inner-content">
            <img className="coin" src={mana} alt="coin" />
            <p>521 mana</p>
          </div>
        </div>
      </section>
      <section className="sub-content-1">
        <h1>{map_path_to_content[id].title}</h1>
        <div className="inner-content">
          <div className="price-wrap">
            <h1>{map_path_to_content[id].price}</h1>
            <img src={mana_pay} alt="mana-pay-logo" />
          </div>
          <p>♥ 15</p>
        </div>
        <div className="description-wrap">
          <h3>포니 엑셀 피규어 RED / 레드컬러 / 1 :30 스케일 / 완전포장</h3>
          <p>장난감 / 레트로. 3시간 전</p>
        </div>
      </section>
      <section className="text-area">
        <p className="light">관심 12 / 조회 268</p>

        <p>{map_path_to_content[id].content}</p>

        <p className="footer">
          <strong>거래팁</strong> 마나페이로 간편하게 송금이 가능해요.{" "}
          <span className="underline">자세히보기</span>
        </p>
      </section>
      <section className="bottom-bar">
        <img src={like_btn} alt="like-btn" />
        <div className="btn-wrap">
          <button className="go-chat-btn">채팅하기</button>
          <button className="go-pay-btn">마나페이 구매</button>
        </div>
      </section>
    </Container>
  );
};

export default ProductSpec;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 120px;

    .inner-wrap {
      display: flex;
      align-items: center;
      gap: 30px;

      h1 {
        font-size: 24px;
        font-weight: 400;
        color: #191919;
      }
    }
  }
  .img-holder {
    position: relative;

    width: 100%;
    .img-map {
      display: flex;
      overflow: hidden;

      .product-image {
        width: 100vw;
        max-height: 430px;
        object-fit: cover;
        transition: transform 0.5s ease-in-out;
        transform: translateX(
          -${(props) => props.activeIndex * (500 / props.images.length)}%
        );
      }
    }
    .next {
      position: absolute;
      right: 20px;
      top: 50%;
      color: #999999;
    }
    .prev {
      position: absolute;
      left: 20px;
      top: 50%;
      color: #999999;
    }
    .tab-1 {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img {
        padding: 20px 30px;
      }
      .like-btn-red {
        width: 25px;
      }
      .watermark {
        width: 120px;
      }
    }
    .tab-2 {
      position: absolute;
      display: flex;
      align-items: flex-end;
      width: 100%;
      justify-content: flex-end;
      bottom: 40px;

      p {
        margin: 30px;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.2);
        color: #ffffff;
        font-weight: 600;
        border-radius: 5px;
      }
    }
    .tab-3 {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);

      p {
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
      }
      img {
        width: 60px;
        padding-left: 15px;
      }
    }
  }

  .sub-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f7f7;
    padding: 15px;
    .inner-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      h1 {
        font-size: 14px;
        font-weight: 600;
      }

      .profile-pic {
        width: 40px;
      }
      .coin {
        width: 20px;
      }
      p {
        font-size: 12px;
        font-weight: 600;
        color: #999999;
        span {
          color: #ff9771;
        }
      }
    }
  }
  .sub-content-1 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    border-bottom: 1px solid #ededed;
    h1 {
      margin: 0;
      font-weight: 600;
      font-size: 25px;
    }
    p {
      margin: 0;
    }

    .inner-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .price-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img {
          width: 60px;
        }
      }
      p {
        color: #999999;
        font-weight: 600;
      }
    }
    .description-wrap {
      h3 {
        margin: 10px 0;
        font-size: 14px;
      }
      p {
        color: #999999;
        font-weight: 600;
      }
    }
  }

  .text-area {
    padding: 25px;

    .light {
      color: #999999;
      font-weight: 600;
      margin-bottom: 40px;
      font-size: 14px;
    }
    p {
      color: #000000;
      font-weight: 500;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      padding: 15px 10px;
      margin: 20px 0;
      font-size: 13px;
      background-color: #ededed;
      border-radius: 10px;

      .underline {
        text-decoration: underline;
      }
    }
  }

  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 30px 20px;
    border-top: 1px solid #ededed;

    img {
      width: 20px;
    }

    .btn-wrap {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        border: none;
        outline: none;
        padding: 10px 25px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 600;
      }

      .go-chat-btn {
        background-color: #ff9771;
        color: #ffffff;
      }
      .go-pay-btn {
        background-color: #65bc7b;
      }
    }
  }
`;
