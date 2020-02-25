export default {
  namespaced: true,
  state: {
    lists: []
  },
  actions: {
    fetchLists ({ commit, _state }) {
      const lists = [
        { id: 1, name: 'TODO', items: [] },
        { id: 2, name: 'WIP', items: [] },
        { id: 3, name: 'DONE', items: [] }
      ]
      commit('setLists', lists)
    },
    addTask ({ commit, _state }, { listId, name }) {
      const task = { listId: listId, name: name }
      commit('setTask', task)
    },
    removeTask ({ commit, _state }, { id, listId }) {
      const task = { id, listId }
      commit('removeTask', task)
    }
  },
  mutations: {
    setLists (state, lists) {
      state.lists = lists
    },
    setTask (state, task) {
      let list = state.lists.find(list => {
        return list.id === task.listId
      })
      task.id = list.items.length + 1
      list.items.push(task)
    },
    removeTask (state, task) {
      let list = state.lists.find(list => {
        return list.id === task.listId
      })
      list.items = list.items.filter(item => item.id !== task.id)
    }
  }
}
