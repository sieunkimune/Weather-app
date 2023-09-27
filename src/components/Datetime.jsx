import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { useInterval } from 'use-interval';

const Header = styled.header`
	padding-top: 30px;
	font-size: 20px;
	font-weight: 800;
	text-align: center;
`;

const Span = styled.span`
	&.date {
		margin-right: 5px;
	}
	&.day {
		margin-right: 10px;
	}
`;

const H1 = styled.h1`
	font-size: 18px;
	font-weight: 700;
`;

const Datetime = () => {
	const today = new Date();
	//현재날짜 가져오기

	const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

	const week = ['일', '월', '화', '수', '목', '금', '토'];
	let dayOfweek = week[today.getDay()];

	const [nowTime, setNowTime] = useState(Date.now());

	useInterval(() => {
		setNowTime(Date.now());
	}, 1000);

	return (
		<Header>
			<Span className="date">{formattedDate}</Span>
			<Span className="day">{dayOfweek}요일</Span>
			<Span className="time">
				<Moment format={'HH:mm:ss'} className={'moment-box'}>
					{nowTime}
				</Moment>
			</Span>

			<H1>Enjoy your special day.</H1>
		</Header>
	);
};

export default Datetime;
