export const menu = {
  state: {
    isFold: false
  },
  mutations: {
    changeFold: (state: any) => {
      state.isFold = !state.isFold
    }
  }
}