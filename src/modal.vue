<template>
  <div>11</div>
</template>

<script>

export default {
  beforeCreated () {
    console.log('components beforeCreated')
  },
  created () {
    console.log('components created')
  },
  beforeMount () {
    console.log('components beforeMount')
  },
  mounted () {
    console.log('components mounted')
  },
  beforeUpdate () {
    console.log('components beforeUpdate')
  },
  update () {
    console.log('components update')
  },
  beforeDestory () {
    console.log('components beforeDestory')
  },
  destory () {
    console.log('components destory')
  }
}
</script>
