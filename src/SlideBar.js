import React from "react";
import styled from 'styled-components';

import wanted from "./img/wanted.jpg"
import 오늘의집 from "./img/오늘의집.jpg"
import 케어닥 from "./img/케어닥.jpg"

const SlideBar = (props) => {

	return (
		<Container>

			<div>
				<Img src={wanted} alt="원티드" />
			</div>
			<div>
				<Img src={오늘의집} alt="오늘의집" />
			</div>
			<div>
				<Img src={케어닥} alt="케어닥" />
			</div>

			<LeftButton>
				&lang;
			</LeftButton>
			<RightButton>
				&rang;
			</RightButton>
		</Container>
	)
}

export default SlideBar

const Container = styled.div`
	padding-top: 25px;
	border-top: 1px solid;
	position: relative;
`;

const Img = styled.img`
	padding: 0 12px;
`;

const LeftButton = styled.button`
	width: 30px;
	height: 60px;
	border-radius: 15px;
	border-width: 0;
	background: rgba(255, 255, 255,);
	/* z-index: 10; */
	position: absolute;
	left: calc((100% - 1210px) / 2);
	top: 120px;
`;

const RightButton = styled.button`
	width: 30px;
	height: 60px;
	border-radius: 15px;
	border-width: 0;
	background: rgba(255, 255, 255,);
	position: absolute;
	right: calc((100% - 1200px) / 2);
	top: 120px;
`;

