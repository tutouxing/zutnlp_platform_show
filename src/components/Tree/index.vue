<template>
    <el-tree
            :data="formatData"
            show-checkbox
            node-key="id"
            ref="tree"
            default-expand-all
            :props="defaultProps"
            @check="handleChange">
    </el-tree>
</template>

<script>
    import treeToArray from './eval.js';
    export default {
        name: "index",
        props:{
            data:{
                type: [Array, Object],
                required: true
            },
            defaultProps:{
                type:Object,
                default: () => {}
            },
            evalFunc: Function,
            evalArgs: Array,
            expandAll: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            // 格式化数据源
            formatData(){
                this.i = 0;
                let tmp;
                if (!Array.isArray(this.data)) {
                    tmp = [this.data]
                } else {
                    tmp = this.data
                }
                const func = this.evalFunc || treeToArray;
                const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll];
                return func.apply(null, args)
            },
        },
        data(){
            return {
                i:0
            }
        },
        methods:{
            handleChange(data,checked,node) {
                // console.log(this.key);
                this.i++;
                if(this.i%2===0){
                    if(checked){
                        this.$refs.tree.setCheckedNodes([]);
                        this.$refs.tree.setCheckedNodes([data]);
                        //交叉点击节点
                    }else{
                        this.$refs.tree.setCheckedNodes([]);
                        //点击已经选中的节点，置空
                    }
                }
                this.$emit("selection",this.$refs.tree.getCheckedNodes())
            },
        }
    }
</script>

<style scoped>

    .tree .el-icon-caret-right:before{
        content: "\E602";
    }
    .tree .expanded.el-icon-caret-right{
        transform: rotate(0);
    }
    .tree .expanded.el-icon-caret-right:before{
        content: "\E63C";
    }

    .tree .el-checkbox__inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        display: inline-block;
    }
    .tree .el-checkbox__inner:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        border: none;
        left:30%;
        top:30%;
        -webkit-transform: translate(-50%,-50%) scale(0);
        transform: translate(-50%,-50%) scale(0);
        -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
        transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6), -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6),-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
    }

    .is-focusable > .el-tree-node__content .el-checkbox{display: none}
    .el-tree-node__children .is-focusable   .el-tree-node__content .el-checkbox{display: inline-block}
    .el-tree-node__children .is-focusable   .el-tree-node__content .el-tree-node__expand-icon {display: none}
</style>