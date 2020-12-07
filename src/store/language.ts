export const language = {
  state: {
    local: null as any,
    get current() {
      return {
        type: this.local ? this.local.code : 'ZH_TW',
        label: this.local ? this.local.name : '繁体'
      }
    },
    set current(value: any) {
      this.local = value
    },
    lang: {}
  }
}