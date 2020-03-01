export default {
  namespaced: true,
  state: {
    lists: [],
    dragging: {
      taskId: null,
      fromListId: null,
      toListId: null,
    }
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
    },
    moveTask ({ commit, _state }, { id, listId }) {
      const task = { id, listId }
      commit('setDraggingFromListId', task)
      commit('setDraggingToListId', task)
    },
    moveFromList ({ commit, _state }, { id, listId }) {
      const task = { id, listId }
      commit('setDraggingFromListId', task)
    },
    moveToList ({ commit, _state }, { id, listId }) {
      const task = { id, listId }
      commit('setDraggingToListId', task)
    },
    performTaskMoving ({ commit, _state }, { beforeSortOrder, afterSortOrder }) {
      commit('moveTask', { beforeSortOrder, afterSortOrder })
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
    },
    setDraggingFromListId (state, task) {
      state.dragging.taskId = task.id
      state.dragging.fromListId = task.listId
    },
    setDraggingToListId (state, task) {
      state.dragging.taskId = task.id
      state.dragging.toListId = task.listId
    },
    moveTask (state, { beforeSortOrder, afterSortOrder }) {
      const { taskId, fromListId, toListId } = state.dragging
      // リセット
      state.dragging.taskId = null
      state.dragging.fromListId = null
      state.dragging.toListId = null
      // listIdがないときは無視
      if (fromListId === null) {
        return
      }
      // 移動元からtaskを取り出す
      const fromList = state.lists.find(list => list.id === fromListId)
      const task = fromList.items[beforeSortOrder]
      fromList.items.splice(beforeSortOrder, 1)
      // 移動先にtaskを入れる
      task.listId = toListId
      const toList = state.lists.find(list => list.id === toListId)
      toList.items.splice(afterSortOrder, 0, task)
    }
  }
}
