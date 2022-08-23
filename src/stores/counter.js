import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',// id: 必须的，在所有 Store 中唯一
  state: () => ({
    counter: 0,
    def : '## Amusic\n' + '\n' + '> Amusic 是一个非常非常好用的音乐播放器，以下是我拿来凑字数的。\n' + '\n' + '**更新日志：**\n' + '\n' + '220820\n' + '\n' + '[ ] 添加了音乐播放列表等功能。\n' + '\n' + '修复了一些bug\n' + '\n' + '优化了UI体验\n' + '\n' + '添加了更多功能～',
    editable: true, //是否可修改
    output : '', //文档修改之前的内容
    doc : '', //文档最新内容
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
