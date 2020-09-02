<template lang="html">
    <div class="hello">
        <h1>{{ msg }}</h1>
        <slot name="a"></slot>
        <slot name="b"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello',
        }
    },
}
</script>

<style scoped lang="stylus"></style>
