import styled, { css } from "styled-components";
import {
  FONT_STYLE_CONTENT,
  FONT_STYLE_V1,
} from "../../style/fontStyle";
import 군대 from "../../asset/letterTheme/군대-theme.png";
import 냥냥편지 from "../../asset/letterTheme/냥냥편지-theme.png";
import 리본 from "../../asset/letterTheme/리본-theme.png";
import 수박 from "../../asset/letterTheme/수박-theme.png";
import 알록달록 from "../../asset/letterTheme/알록달록-theme.png";
import 체리 from "../../asset/letterTheme/체리-theme.png";
import 클로버 from "../../asset/letterTheme/클로버-theme.png";
import 정월대보름 from "../../asset/letterTheme/정월대보름-theme.png";
import 얼룩 from "../../asset/letterTheme/얼룩-theme.png";
import 오리 from "../../asset/letterTheme/오리-theme.png";
import 구름 from "../../asset/letterTheme/구름-theme.png";

//편지테마 및 뒷장
export const LetterTheme = styled.div`
  ${(props) => {
    switch (props.LetterTheme) {
      case "군대":
        return css`
          background-image: url(${군대});
        `;
      case "냥냥편지":
        return css`
          background-image: url(${냥냥편지});
        `;
      case "리본":
        return css`
          background-image: url(${리본});
        `;
      case "수박":
        return css`
          background-image: url(${수박});
        `;
      case "알록달록":
        return css`
          background-image: url(${알록달록});
        `;
      case "얼룩":
        return css`
          background-image: url(${얼룩});
        `;
      case "체리":
        return css`
          background-image: url(${체리});
        `;
      case "클로버":
        return css`
          background-image: url(${클로버});
        `;
      case "정월대보름":
        return css`
          background-image: url(${정월대보름});
        `;
      case "오리":
        return css`
          background-image: url(${오리});
        `;
      case "구름":
        return css`
          background-image: url(${구름});
        `;
      default:
        break;
    }
}};

  ${(props) => {
    switch (props.LetterBackround) {
      case "군대":
        return css`
          background: #dfeace;
        `;
      case "냥냥편지":
        return css`
          background: #f3e016;
        `;
      case "리본":
        return css`
          background: #fdf6b2;
        `;
      case "수박":
        return css`
          background: #f5c5b9;
        `;
      case "알록달록":
        return css`
          background: #a9e0ff;
        `;
      case "얼룩":
        return css`
          background: #c4c6c8;
        `;
      case "체리":
        return css`
          background: #d3e3e2;
        `;
      case "클로버":
        return css`
          background: #d0ffe6;
        `;
      case "정월대보름":
        return css`
          background: #71b2c5;
        `;
      case "오리":
        return css`
          background: #daffff;
        `;
      case "구름":
        return css`
          background: #a9e0ff;
        `;
      default:
        break;
    }
}};
  
  /* ${(props) => {
    switch (props.LetterTheme) {
      case "군대":
        return css`
          background-image: url("../../asset/letterTheme/군대-theme.png");
        `;
      case "냥냥편지":
        return css`
          background-image: url("../../asset/letterTheme/냥냥편지-theme.png");
        `;
      case "리본":
        return css`
          background-image: url("../../asset/letterTheme/리본-theme.png");
        `;
      case "수박":
        return css`
          background-image: url("../../asset/letterTheme/수박-theme.png");
        `;
      case "알록달록":
        return css`
          background-image: url("../../asset/letterTheme/알록달록-theme.png");
        `;
      case "얼룩":
        return css`
          background-image: url("../../asset/letterTheme/얼룩-theme.png");
        `;
      case "체리":
        return css`
          background-image: url("../../asset/letterTheme/체리-theme.png");
        `;
      case "클로버":
        return css`
          background-image: url("../../asset/letterTheme/클로버-theme.png");
        `;
      case "정월대보름":
        return css`
          background-image: url("../../asset/letterTheme/정월대보름-theme.png");
        `;
      case "오리":
        return css`
          background-image: url("../../asset/letterTheme/오리-theme.png");
        `;
      case "구름":
        return css`
          background-image: url("../../asset/letterTheme/구름-theme.png");
        `;
      default:
        break;
    }
}}; */
`;

//To, from, Date Text
export const Text = styled.div`
  ${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.body.body_20_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_20;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_22_bold;
      case "에스코어 드림":
        return FONT_STYLE_CONTENT.scoredream_20;
      case "태백 은하수체":
        return FONT_STYLE_CONTENT.taebaek_20;
      case "다채사랑":
        return FONT_STYLE_CONTENT.dachelove_22;
      case "백의의 천사":
        return FONT_STYLE_CONTENT.whiteangle_22;
      case "고딕 아니고 고딩":
        return FONT_STYLE_CONTENT.gothicgoding_22;
      case "혁이체":
        return FONT_STYLE_CONTENT.hyukee_22;
      case "이서윤체":
        return FONT_STYLE_CONTENT.leeseoyun_20;
      case "신비는 일곱살":
        return FONT_STYLE_CONTENT.sangsang_26;
      case "카페24 고운밤":
        return FONT_STYLE_CONTENT.cafe24oneprettynight_22;
      case "제주명조":
        return FONT_STYLE_CONTENT.jejumyeongjo_20;
      case "리디바탕":
        return FONT_STYLE_CONTENT.ridibatang_20;
      case "나눔스퀘어 네오":
        return FONT_STYLE_CONTENT.nanumneo_20;
      default:
        break;
    }
  }}
`;

//편지 콘텐츠(내용) 폰트
export const Contentfonts = styled.div`
${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.body.body_18_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_18;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_20_bold;
      case "에스코어 드림":
        return FONT_STYLE_CONTENT.scoredream_18;
      case "태백 은하수체":
        return FONT_STYLE_CONTENT.taebaek_18;
      case "다채사랑":
        return FONT_STYLE_CONTENT.dachelove_20;
      case "백의의 천사":
        return FONT_STYLE_CONTENT.whiteangle_20;
      case "고딕 아니고 고딩":
        return FONT_STYLE_CONTENT.gothicgoding_20;
      case "혁이체":
        return FONT_STYLE_CONTENT.hyukee_20;
      case "이서윤체":
        return FONT_STYLE_CONTENT.leeseoyun_18;
      case "신비는 일곱살":
        return FONT_STYLE_CONTENT.sangsang_24;
      case "카페24 고운밤":
        return FONT_STYLE_CONTENT.cafe24oneprettynight_20;
      case "제주명조":
        return FONT_STYLE_CONTENT.jejumyeongjo_18;
      case "리디바탕":
        return FONT_STYLE_CONTENT.ridibatang_18;
      case "나눔스퀘어 네오":
        return FONT_STYLE_CONTENT.nanumneo_18;
      default:
        break;
    }
  }}
`;

//플립 색상
export const Bordercolors = styled.div`
  ${(props) => {
      switch (props.bordercolor) {
        case "군대":
          return css`
            border-color: #81c200;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "냥냥편지":
          return css`
            border-color: #84e524;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "리본":
          return css`
            border-color: #f297b4;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "수박":
          return css`
            border-color: #ed927e;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "알록달록":
          return css`
            border-color: #ffe093;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "얼룩":
          return css`
            border-color: #fbfdd9;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "체리":
          return css`
            border-color: #b4ded6;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "클로버":
          return css`
            border-color: #64f6a0;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "정월대보름":
          return css`
            border-color: #85cbdf;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "오리":
          return css`
            border-color: #00dafb;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "구름":
          return css`
            border-color: #ffffff;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        default:
          break;
      }
    }};
`;
