import React from "react";
import styled from "styled-components";

import iconmenu from "./img/icon-menu.png";
import {IoIosSearch} from "react-icons/io";


const NavigationBar = (props) => {


	return (
		<Container>
			<MainBar>
				<Button>
					<Img url={iconmenu} width="17" height="14"/>
				</Button>
				<p style={{fontFamily: 'icomoon'}}>Wanted</p>
			</MainBar>

			<Ul className="Menu">
				<Li>
					채용
				</Li>
				<Li>
					이벤트
				</Li>
				<Li>
					직군별 연봉
				</Li>
				<Li>
					이력서
				</Li>
				<Li>
					커뮤니티
				</Li>
				<Li>
					프리랜서
				</Li>
				<Li>
					AI 합격예측
				</Li>
			</Ul>

			{/* <aside style={{display:"flex", alignItems:"center", fontWeight: "normal"}}> */}
				<Ul>
					<Li>
						<IoIosSearch/>
					</Li>
					<Li>
						회원가입/로그인
					</Li>
					<Li>
						<RoundBox>
							기업서비스
						</RoundBox>						
					</Li>
				</Ul>
			{/* </aside> */}
		</Container>
	);
}

export default NavigationBar;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* max-width: 1060px; */
	@media screen and (max-width: 992px) {
		width: 1060px;
		height: 50px;
	}
`;

const Button = styled.button`
	border-width: 0;
	background: 0;
	margin: 2px 15px 0 0;
	cursor: pointer;
`;

const MainBar = styled.div`
	display: flex;
	padding: 15px;
`;

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`
	padding: 15px;
	font-size: 14px;
	font-weight: bold;
`;

const Text = styled.div`
	width: 100px;
`; 

const Img = styled.div`
	background-image: url(${(props) => props.url});
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const RoundBox = styled.div`
	display: flex;
	align-items: center;
	height: 28px;
	border: 1px solid #e1e2e3;
	border-radius: 15px;
	color: #666;
	font-size: 13px;
	padding: 0 10px;
`;
