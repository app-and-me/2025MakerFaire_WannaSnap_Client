import styled from "styled-components";
import { motion } from "framer-motion";
import { Base } from "../components/Base";

const Loading = styled(Base)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingBar = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 2.5px solid #C0C0C0;
  border-top: 2.5px solid #facc15;
  border-radius: 50%;
`;

const Box = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const MainText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #444;
`;

export default function LoadingPage() {
  return (
    <Loading>
      <LoadingBar animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}/>
      <Box>
        <MainText>사진을 준비하고 있어요</MainText>
        <SubText>잠시만 기다려주세요!</SubText>
      </Box>
    </Loading>
  );
}
