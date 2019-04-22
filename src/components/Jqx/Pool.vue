<template>
    <div>
        <Table></Table>
        <TreeGrid></TreeGrid>
    </div>
</template>

<script>
    import Table from './Table';
    import TreeGrid from './TreeGrid';
    export default {
        name: "Pool",
        components:{
            Table,TreeGrid
        }
    }
</script>

<style scoped>

</style>