import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

const DailyEventWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 100%;
  background-image: url("https://img2.tgcom24.mediaset.it/binary/fotogallery/istockphoto/41.$plit/C_2_fotogallery_3084643_9_image.jpg?20171215053032");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  margin-top: 75px;
`;

const DailyEventWindow: React.FC = () => {
  return (
    <DailyEventWindowContainer>
      <TextsContainer>
        <h1> DailyEventWindow </h1>
        <h2> Subtitle </h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          optio facere! Consectetur sequi ratione porro, sunt fugiat saepe illum
          aspernatur magni quis quas dolore distinctio!
        </p>
      </TextsContainer>

      <ButtonsContainer>
        <Button
          height="55px"
          width="115px"
          backgroundColor="#fefefe"
          text="Play"
          textColor="#000000"
          textSize={18}
          icon="playIcon"
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
        />
        <Button
          height="55px"
          width="115px"
          backgroundColor="#fefefe"
          text="Other Info"
          textColor="#000000"
          textSize={18}
          icon="infoIcon"
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
        />
      </ButtonsContainer>
    </DailyEventWindowContainer>
  );
};

export default DailyEventWindow;
