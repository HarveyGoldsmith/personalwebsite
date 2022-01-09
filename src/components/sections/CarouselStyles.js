import styled from "styled-components";

// background-image: linear-gradient(
//   176deg,
//   hsl(205, 86%, 81%),
//   hsl(205, 89%, 70%)
// );

// border-radius: 5px;
// box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

export const CarouselContainer = styled.ul`
  max-width: 1040px;

  padding: 20px 0px;
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border-radius: 5px;
  background: none;
  align-items: stretch;

  /* overflow-x: hidden; */
  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-bottom: 40px;
  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
    cursor: pointer;
  }
`;

export const CarouselItem = styled.div`
  background-image: linear-gradient(
    176deg,
    hsl(205, 86%, 81%),
    hsl(205, 89%, 70%)
  );

  height: 100%;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 5px;
  max-width: 196px;
  padding: 4px;
  @media screen and (max-width: 800px) {
    max-width: 124px;
    box-shadow: none;
  }

  @media screen and (max-width: 640px) {
    box-shadow: none;
    margin-left: 32px;
    min-width: 120px;

    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    hsl(205, 86%, 17%),
    hsl(205, 72%, 37%) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  @media screen and (max-width: 640px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: hsl(205, 77%, 27%);
  padding-right: 16px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;
  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};
  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: hsl(205, 77%, 27%);
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 800px) {
    padding: 24px 48px 0;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
  @media screen and (max-width: 800px) {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 800px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  margin: ${(props) => (props.divider ? "4rem 0" : "")};
  @media screen and (max-width: 800px) {
    width: 48px;
    height: 4px;
  }
`;
