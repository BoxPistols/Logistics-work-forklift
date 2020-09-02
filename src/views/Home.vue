<template lang="html">
    <div>
        <Hello>
            <p slot="a">aaa</p>
            <!-- <p slot="b">bbb</p> -->
        </Hello>

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

<script>
import Hello from '@/components/Hello.vue'

export default {
    name: 'home',
    data() {
        return {}
    },
    computed: {
        newest() {
            return this.$store.state.memos.slice().reverse()
        },
    },
    components: {
        Hello,
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
