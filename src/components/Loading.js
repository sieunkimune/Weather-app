import React from 'react';
import styled from 'styled-components';
import Spinner from './asset/img/loading.gif';

const Loading = () => {
	<div>
		<h3>잠시만 기다려주세요.</h3>
		<img src={Spinner} alt="로딩중" width="10%" />
	</div>;
};

export default Loading;
