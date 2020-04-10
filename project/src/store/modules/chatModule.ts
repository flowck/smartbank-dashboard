interface State {
  emojis: string[];
}

interface EmojisResponse {
  emojis: object[];
}

export default {
  namespaced: true,
  state: {
    emojis: []
  },
  actions: {
    async getEmojis(context: any) {
      try {
        const request = await fetch("/assets/emojis/emojis.json");
        const response: EmojisResponse = await request.json();
        context.commit("SET_EMOJIS", response.emojis);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mutations: {
    SET_EMOJIS(state: State, emojis: any) {
      return (state.emojis = emojis);
    }
  },
  getters: {}
};
