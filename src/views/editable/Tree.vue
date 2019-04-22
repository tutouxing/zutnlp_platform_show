<template>
    <tree :data="data" :defaultProps="defaultProps" border/>
</template>

<script>
    import tree from '../../components/Tree/index';
    export default {
        name: "Tree",
        components:{tree},
        data() {
            return {
                data: [
                    {
                    id: 1,
                    label: '用户组',
                    },
                    {
                    id: 2,
                    label: '销售',
                    children: [{
                        id: 5,
                        label: '服装'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                    },
                    {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    }
</script>

<style scoped>

</style>