export default {
  beforeCreated () {
    console.log('mixin beforeCreated')
  },
  created () {
    console.log('mixin created')
  },
  beforeMount () {
    console.log('mixin beforeMount')
  },
  mounted () {
    console.log('mixin mounted')
  },
  beforeUpdate () {
    console.log('mixin beforeUpdate')
  },
  update () {
    console.log('mixin update')
  },
  beforeDestory () {
    console.log('mixin beforeDestory')
  },
  destory () {
    console.log('mixin destory')
  }
}
