import styled from "styled-components";

const HeaderContainer = styled.header`
  min-height: 33rem;
  padding: 4.5rem 13rem 4.5rem; 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 4rem;


  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1500px) {
    padding: 1rem 25rem 3.5rem 25rem;
  }

  .inner {
    width: 33rem;
    height: 16.5rem;
    text-align: left;
    z-index: 400;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  h1 {
    font-family: "TomatoGroteskBold", sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 3.75rem;
    color: #07969e;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #4a5050;
  }

  .phone {
    width: 14.2rem;
    height: 28.8rem;
    filter: drop-shadow(0px 1.60087px 16.0087px rgba(53, 71, 89, 0.15));
    animation: bounce 2s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1);
    animation-iteration-count: infinite;
  }

  @media (max-width: 900px) {
    margin-top: 3.5rem;
    align-self: center;
  }

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 15px, 0);
    }
  }

  .x1 {
    -webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: -5%;
	top: 5%;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
}

.x2 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 5%;
	top: 80%;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x3 {
    -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 10%;
	top: 40%;
	
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	transform: scale(0.7);
}

.x4 {
    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	-moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 20%;
	top: 0;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x5 {
    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 30%;
	top: 50%;
	
	-webkit-transform: scale(0.5);
	-moz-transform: scale(0.5);
	transform: scale(0.5);
}

  @keyframes animateBubble {
    0% {
        margin-top: 500px;
    }
    100% {
        margin-top: -100%;
    }
  }

  .bubble {
	border-radius: 50%;
  height: 200px;
	position: absolute;
	width: 100%;
  z-index: -999;
}

.bubble:after {
  background: -moz-radial-gradient(center, ellipse cover,  #A0DDE2 0%, #A0DDE2 70%); /* FF3.6+ */
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#A0DDE2), color-stop(70%,#A0DDE2)); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(center, ellipse cover,  #A0DDE2 0%,#A0DDE2 70%); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(center, ellipse cover,  #A0DDE2 0%,#A0DDE2 70%); /* Opera 12+ */
  background: -ms-radial-gradient(center, ellipse cover,  #A0DDE2 0%,#A0DDE2 70%); /* IE10+ */
  background: radial-gradient(ellipse at center,  #A0DDE2 0%,#A0DDE2 70%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px #A0DDE2;
	
	content: "";
  height: 180px;
	left: 10px;
	position: absolute;
	width: 180px;
}
`;

export { HeaderContainer };
