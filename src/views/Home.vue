<template>
  <div>
    <h2>List</h2>

    <div class="result__lay">
      <div class="result__org">
        <ul v-for="memo in newest" :key="memo.id" class="result__mol">
          <li>{{ memo.memoBody }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Name from '@/components/Name.vue';

export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    newest() {
      return this.$store.state.memos
    },
  },
}
</script>

<style scoped lang="stylus">
@import '../assets/style/component.styl'

.result
  &__org
    max-width 800px
    margin auto
  &__mol
    li
      border-bottom 1px solid lightgray
      font-size 1.5em

</style>