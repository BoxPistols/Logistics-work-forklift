<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Counter</h2>

    <div class="counter__lay">
      <div class="counter__org">
        <div class="counter__mol">
          <button @click="decrement" class="count">Minus</button>
          <button @click="increment" class="count">Add</button>
        </div>

        <div class="counter__mol">
          <!-- {{ count }} -->
          count: {{ mCount }}
        </div>
        <div class="counter__mol">double: {{ double }}</div>
        <div class="counter__mol">calcA: {{ calcA }}</div>

        <div class="counter__mol">
          <input v-model="addCount" type="number" /> inputA
          <p>
            総合計に追加
            <br />
            {{ resultA }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCount: 0,
    }
  },
  computed: {
    mCount() {
      return this.$store.state.count
    },
    double() {
      return this.$store.getters.double
    },
    calcA() {
      const gettersDouble = this.$store.getters.double
      const stateCount = this.$store.state.count
      return gettersDouble + stateCount
    },
    resultA() {
      return parseFloat(this.addCount) + this.$store.state.count + this.$store.getters.double
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      // this.count = this.count -= 1
      this.$store.commit('decrement')
    },
  },
}
</script>

<style lang="stylus" scoped>
.counter
  &__mol
    font-size 20px
    margin-bottom 16px

button, input
  min-height 2em
  background-color white
  border solid 1px #aaa
button
  line-height 2
  width 120px
  padding 4px 12px
  font-size 24px
  margin 0 4px
input
  padding 2px 8px
  font-size 16px
</style>
