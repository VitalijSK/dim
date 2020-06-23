export function getParams(state) {
  return state.questions.params;
}

export function getQuestion(state, id) {
  return state.questions.byId[id];
}

export function getQuestions(state) {
  return Object.values(state.questions.byId);
}
