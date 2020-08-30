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

        <div class="counter__mol">アイテム数量: {{ mCount }}</div>
        <div class="counter__mol">人数x2: {{ double }}</div>
        <div class="counter__mol">稼働工数: {{ calcA }}</div>

        <div class="counter__mol">
          スポットヘルプ追加人数：<br />
          <input v-model="addCount" type="number" />
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

.about
  background: aliceblue
  padding: 24px
  text-align left
  margin auto
  display flex
  flex-direction column
  align-items: center

button, input
  min-height 2em
  background-color white
  border solid 1px orange
button
  line-height 2
  width 120px
  padding 4px 12px
  font-size 24px
  margin 0 4px
  color orange
input
  padding 2px 8px
  font-size 20px
  color teal
</style>
