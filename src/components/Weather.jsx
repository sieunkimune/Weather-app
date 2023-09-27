import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from './asset/img/background1.jpg';
import img2 from './asset/img/background2.jpg';
import img3 from './asset/img/background3.jpg';
import img4 from './asset/img/background4.jpg';
import img5 from './asset/img/background5.jpg';
import img6 from './asset/img/background6.jpg';

const Section = styled.section`
	&.weather {
		width: 99%;
		margin: 0 auto;
		height: 845px;
		text-align: center;
		border: 11px solid #80a2d7;
		border-radius: 40px;
		> h2 {
			.city {
				color: #b8b7c4;
				text-shadow: 3px 3px 3px #000;
			}
		} //end of h2
		> article.current {
			position: absolute;
			left: 50%;
			top: 85px;
			margin-left: -150px;
			width: 300px;
			height: 300px;
			background-color: #b0c4a9;
			border-radius: 50%;
			> img {
				padding-top: 15px;
				width: 122px;
			}
			> h3 {
				color: #fff;
				font-size: 35px;
				text-shadow: 3px 3px 3px #80a2d7;
			}
		} //end of .current
	} //end of .weather
`;

const Weather = () => {
	//랜덤 배경이미지
	const backgroundArr = [img1, img2, img3, img4, img5, img6];
	const randomIndex = Math.floor(Math.random() * backgroundArr.length);
	const backgroundImg = backgroundArr[randomIndex];

	const Container = styled.div`
		position: relative;
		width: 77%;
		margin: 0 auto;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(${backgroundImg});
		border-radius: 40px;
	`;

	const [wther, setWther] = useState('');
	const { location, temp, icon } = wther;

	const getweather = (position) => {
		const lat = position.coords.latitude; //위도
		const lon = position.coords.longitude; //경도

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=8d383995954b0269e951247e28f0988f`;

		fetch(url)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				const location = data.name;
				const temp = data.main.temp.toFixed(1);
				const iconcode = data.weather[0].icon;
				const icon = `http://openweathermap.org/img/wn/${iconcode}@2x.png`;

				const wther = { location, temp, icon };
				setWther(wther);
			});
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(getweather);
	}, []);

	return (
		<Container>
			<Section className="weather">
				<h2>
					<span className="city">{location}</span> Weather
				</h2>
				<article className="current">
					<img src={icon} alt="weather"></img>
					<h3>{temp}°C</h3>
				</article>
			</Section>
		</Container>
	);
};

export default Weather;
