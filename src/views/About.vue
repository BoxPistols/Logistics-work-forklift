<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Counter</h2>
    <div class="counter__lay">
      <div class="counter__org">
        <div class="counter__mol">
          <button @click="increment" class="count">Add</button>
          <button @click="decrement" class="count">Minus</button>
        </div>
        <div class="counter__mol">
          <!-- {{ count }} -->
          {{ mCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    mCount() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      // this.count = this.count += 1
      this.$store.commit('increment')
    },
    decrement() {
      // this.count = this.count -= 1
      this.$store.commit('decrement')
    },
  },
}
</script>

<style lang="stylus" scoped></style>
