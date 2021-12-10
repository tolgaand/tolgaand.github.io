import * as S from "./styles";
import OkHandImage from "../../assets/images/ok-hand.png";

const Content = () => {
  return (
    <S.Content>
      <S.ContentWrapper>
        <S.ContentTitle>
          Hey There👋
          <br /> <span>I</span> am Tolga, a full-stack web developer.
        </S.ContentTitle>
        <S.contentDescription>
          I am a self-taught developer with a passion for learning and problem
          solving. I am currently working as a full-stack web developer at De
          Marke Labs.
          <br /> I like to code in JavaScript, React, Node.js, Express, MongoDB,
          and a bit of Rust.
          <br />
          I'm also a huge fan of the open-source community and I'm always open
          to new ideas.
        </S.contentDescription>
        <S.ButtonArea>
          <S.Button type="primary" href="https://linkedin.com/tolgacaglayan">
            Linkedin
          </S.Button>
          <S.Button type="secondary" href="http://github.com/tolgaand">
            View my github profile👀
          </S.Button>
        </S.ButtonArea>
      </S.ContentWrapper>
      <S.HandImage src={OkHandImage} />
    </S.Content>
  );
};

export default Content;
// create the a self-introduction description
