import styled, { keyframes } from "styled-components";
import 'styles.css';

const Flow = () => {
    return (
        <Container>
         <FlowBox>
          <FlowWrap>
            <Flow>
              <span>King of pirates</span>
              <span>King of pirates</span>
              <span>King of pirates</span>
              <span>King of pirates</span>
            </Flow>
          </FlowWrap>
        </FlowBox>
        </Container>
    )
}
export default AboutFlow;

const Container = styled.div`
	margin:100px 0 0 0;
    border-top:1px solid #000;
    border-bottom: 1px solid #000;
`
const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

const FlowBox = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
`

const FlowWrap = styled.div`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`


const Flow = styled.div`
    font-size: clamp(15px, 10vw, 8rem);
    animation: ${flowing} 8s linear infinite;
    span{
        display:inline-block;
        font-weight:600;
        padding:0 20px;
    }