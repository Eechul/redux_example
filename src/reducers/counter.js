import * as types from '../actions/ActionTypes';

// 리듀스의 초기상태 정의
const initialState = {
	number : 0
};

// 리듀스는 기본적으로 '함수' 입니다.
export default function counter(state = initialState, action) {
	/*기능을 구현하는 부분 */
	switch (action.type) {
		case types.INCREMENT:
			return { ...state, number: state.number + 1}
			// 보시다 시피 state를 직접 바꾸는것이 아닌
	* 		// 새로운 상태를 반환하는것이다.
			// state에 여러 속성이 존재하고 하나만 바꾸고 싶다면 spread 문법이 좋다
			// 속성값이 객체고 객체안의 속성값을 변경하고 싶다면
			/*
				{
					...state, number: state.number + 1,
					Object: {...state.Object, c: (값) }
				}
			*/
		case types.DECREMENT:
			return {
				...state,
				number: state.number - 1
			}
		default:
			return state;

		default:

	}

	return state;
}
