<template>
    <div class="custom-tree-container">
        <div class="block">
            <p style="text-align: left">TreeGrid</p>
            <el-tree
                    :data="data5"
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    @node-drag-start="handleDragStart"
                    @node-drag-enter="handleDragEnter"
                    @node-drag-leave="handleDragLeave"
                    @node-drag-over="handleDragOver"
                    @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop"
                    draggable
                    :allow-drop="allowDrop"
                    :allow-drag="allowDrag"
                    ref="tree">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span @click="getCurrentKey">
                    {{ node.label }}
                </span>
                <i class="iconfont icon-jiahao1" style="size: A3;float: start" @click="() => append(data)"></i>
                <i class="iconfont icon-close" style="size: A3" @click="() => remove(node,data)"></i>
            </span>
            </el-tree>
        </div>
    </div>
</template>


<script>
    let id = 1000;

    export default {
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                data4: JSON.parse(JSON.stringify(data)),
                data5: JSON.parse(JSON.stringify(data))
            }
        },

        methods: {
            getCurrentKey() {
                console.log(this.$refs.tree.getCurrentKey());
            },
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            },
            append(data) {
                const newChild = {id: id++, label: 'testtest', children: []};
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
        }
    };
</script>

<style>
    @import url("http://at.alicdn.com/t/font_926813_2c4yoi208d.css");
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: 14px;
        padding-right: 8px;
    }
</style>