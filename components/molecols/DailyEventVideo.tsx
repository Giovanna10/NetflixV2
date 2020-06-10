import React from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";


const DailyEventVideoContainer = styled.div`
  height: 650px;
  opacity: 0.75;
  margin-top: 50px;
`;

interface DailyEventVideoProps {
    playVideo: boolean;
    videoId: string;
}

const DailyEventVideo: React.FC<DailyEventVideoProps> = ({playVideo, videoId}) => {
    return (
        <DailyEventVideoContainer>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          loop
          playing={playVideo}
          style={{ transform: "scale(1.8, 1.35)" }}
          height="100%"
          width="100%"
          config={{
            youtube: {
              playerVars: {
                rel: 0,
                mute: 1,
                start: 5,
                end: 20,
              },
            },
          }}
        />
      </DailyEventVideoContainer>
    );
};

export default DailyEventVideo;