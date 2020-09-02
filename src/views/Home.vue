<template lang="html">
    <div>
        <Hello>
            <h2 slot="slot-title">slot title</h2>

            <template v-if="this.lists.length > 0">
                <div slot="slot-list">
                    <ul v-for="item in lists" :key="item.id">
                        <li>{{ item.name }}</li>
                    </ul>
                </div>
            </template>

        </Hello>

        <h2>List</h2>
        <div class="result__lay">
            <div class="result__org">
                <ul v-for="memo in newest" :key="memo.id" class="result__mol">
                    <li>{{ memo.id }}: {{ memo.memoBody }}</li>
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
        return {
            lists: [
                { id: '1', name: 'Kato koji' },
                { id: '2', name: 'Sato koji' },
                { id: '3', name: 'Moto skoji' },
            ],
        }
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
