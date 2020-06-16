<template>
    <svg class="c-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name: 'CareIcon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .c-icon { width: 1em; height: 1em; }
</style>