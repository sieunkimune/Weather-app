import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Section = styled.section`
	width: 75%;
	margin: 50px auto;
	height: 300px;
	border: 11px solid #80a2d7;
	border-radius: 40px;

	> h2 {
		text-align: center;
	}
	> .inputBox {
		position: relative;
		width: 90%;
		height: 48px;
		margin: 0 auto;

		> form {
			&.on {
				display: flex;
			}
			display: none;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			padding: 10px 0;
			> label {
				text-indent: -9999px;
			}
			> input {
				background: none;
				border: none;
				outline: none;
				flex: 1;
				padding: 12px;
				font-size: 16px;
				text-align: center;
				border-bottom: 2px solid #838383;
			}
		} //end of form
	} //end of .inputBox
`;

const Todo = () => {
	return (
		<Container>
			<Section>
				<h2 class="sr-only">TodoList</h2>
				<div class="inputBox">
					<form name="frmTodoAdd" class="on">
						<label class="sr-only" for="addTask">
							할일
						</label>
						<input
							type="text"
							name="addTask"
							id="addTask"
							autocomplete="off"
							placeholder="Enter your today's task and press enter"
						/>
					</form>
				</div>
			</Section>
		</Container>
	);
};

export default Todo;
