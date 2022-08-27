import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',// id: 必须的，在所有 Store 中唯一
  state: () => ({
    counter: 0,
    // def : '## Amusic\n' + '\n' + '> Amusic 是一个非常非常好用的音乐播放器，以下是我拿来凑字数的。\n' + '\n' + '**更新日志：**\n' + '\n' + '220820\n' + '\n' + '[ ] 添加了音乐播放列表等功能。\n' + '\n' + '修复了一些bug\n' + '\n' + '优化了UI体验\n' + '\n' + '添加了更多功能～',
    def :" ## Amusic \n > Amusic 是一个非常非常好用的音乐播放器，支持无损音质，沉浸式体验。 \n **更新日志：** \n ##### [1.22.2](https://github.com/lyswhut/lx-music-desktop/compare/v1.22.1...v1.22.2) - 2022-08-18\n##### 优化\n*   为tx、kw源添加 Flac 24bit 音质显示，注：由于之前没有记录此音质，所以之前收藏的歌曲信息中不包含它\n##### 修复\n\n*   修复无法批量排序歌曲的问题\n\n*   修复某些缺失的繁体中文翻译\n\n*   修复企鹅音乐搜索失效的问题\n\n##### 其他\n\n*   降级electron到v15.5.7\n\n#### [1.22.1](https://github.com/lyswhut/lx-music-desktop/compare/v1.22.0...v1.22.1) - 2022-07-09\n\n##### 优化\n\n\n*   歌单列表添加歌单内歌曲数量显示，注：目前只有kw、mg、wy、tx（部分）源支持显示\n\n##### 修复\n\n*   修复处于不支持的源时，歌单、排行榜的右键下载菜单没有禁用的问题\n\n*   修复若桌面歌词窗口与主窗口重叠时，鼠标划过重叠区域鼠标会闪烁的问题，注：此修复只对未启用“鼠标移入歌词区域时降低歌词透明度”时有效\n\n*   修复tx源搜索失效的问题\n\n##### 其他\n\n*   升级Electron到 v17.4.10\n\n#### [1.22.0](https://github.com/lyswhut/lx-music-desktop/compare/v1.21.0...v1.22.0) - 2022-06-19\n\n##### 新增\n\n*   新增设置-以全屏模式启动设置\n\n*   新增设置-桌面歌词设置-鼠标移入歌词区域时降低歌词透明度（#883），默认关闭，此设置不支持linux，注：此功能存在兼容性问题，若鼠标移出后无法恢复到正常透明度，可尝试再移入移出即可恢复\n\n##### 优化\n\n*   添加歌曲到“我的列表”时，若按住`ctrl`键（Mac对应`Command`），则不会自动关闭添加窗口，这对想要将同一首（一批）歌曲添加到多个列表时会很有用\n\n*   支持mg源逐字歌词的播放，感谢 @mozbugbox 提供的帮助\n\n*   添加歌曲列表更新操作的二次确认\n\n*   添加导入文件错误时的指引提示\n\n##### 修复\n\n*   修复若配置了`http_proxy`环境变量时，会意外使用此代理配置的问题\n\n*   修复多选后切换列表后不会清空多选内容的问题\n\n*   修复设置快捷键时的处理逻辑问题\n\n*   修复在新建歌单输入框、歌单内歌曲搜索输入框会意外触发设置的全局快捷键的问题（#879）\n",
    editable: false, //是否可修改
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
