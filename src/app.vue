<template>
  <div id="text">
    {{text}}
    <Modal></Modal>
  </div>
</template>
 
<script>
import mixin from './mixin'
import Modal from './modal'

export default {
  data() {
    return {
      text: 'lrxu'
    }
  },
  mixins: [mixin],
  components: {
    Modal
  },
  beforeCreated () {
    console.log('main beforeCreated')
  },
  created () {
    console.log('main created')
  },
  beforeMount () {
    console.log('main beforeMount')
  },
  mounted () {
    console.log('main mounted')
  },
  beforeUpdate () {
    console.log('main beforeUpdate')
  },
  update () {
    console.log('main update')
  },
  beforeDestory () {
    console.log('main beforeDestory')
  },
  destory () {
    console.log('main destory')
  }
}
</script>
 
<style>
  #text {
    color: red;
  }
</style>