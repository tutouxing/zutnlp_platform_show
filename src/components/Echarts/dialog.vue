<template>
  <el-dialog title="选择配置" :visible="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="数据类型" :label-width="formLabelWidth" style="float: left">
        <tree v-bind:data="data_show" v-bind:defaultProps="defaultProps" v-on:selection="showSelection" border/>
      </el-form-item>
      <el-form-item label="展示类型" :label-width="formLabelWidth" style="flex: 50px">
        <el-select v-model="form.show_type" placeholder="请选择Echarts/treegrid" @change="choose">
          <el-option-group v-for="(option,index) in show_type" :label="option.label" :key="index">
            <el-option v-for="(selection,i) in option.children" :label="selection.label"
                       :value="option.label+selection.label" :key="i">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="float: bottom">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
    import bus from '../../assets/eventBus.js';
    import Bar_2D from '../../components/Echarts/twodimensional/Bar'
    import Line_2D from '../../components/Echarts/twodimensional/Line'
    import Pie_2D from '../../components/Echarts/twodimensional/Pie'
    import UserTreeGrid from '../../views/editable/UserTreeGrid'
    import ServiceTreeGrid from '../../views/editable/ServiceTreeGrid'
    import CodeTreeGrid from '../../views/editable/CodeTreeGrid'
    import tree from '../../components/Tree/index'
    //存放选择的id，只有最后确定的两个值
    let temp = [];
    export default {
        name: "",
        data() {
            return {
                form: {
                    selection: '',
                    show_type: ''
                },
                formLabelWidth: '120px',
                // dialogFormVisible: false,
                show_type: [
                    {
                        id: 1,
                        label: "2D",
                        children: [
                            {
                                id: 4,
                                label: "Bar"
                            },
                            {
                                id: 5,
                                label: "Pie"
                            },
                            {
                                id: 6,
                                label: "Line"
                            },
                        ]
                    },
                    {
                        id: 2,
                        label: "3D",
                        children: [
                            {
                                id: 7,
                                label: "Bar"
                            },
                            {
                                id: 8,
                                label: "Pie"
                            },
                            {
                                id: 9,
                                label: "Line"
                            },
                        ]
                    },
                    {
                        id: 3,
                        label: "网状图",
                        children: [
                            {
                                id: 10,
                                label: "TreeGrid"
                            }
                        ]
                    },
                ],
                data_show: [
                    {
                        id: 1,
                        label: '用户组',
                    },
                    {
                        id: 2,
                        label: '代码表单',
                    },
                    {
                        id: 3,
                        label: '服务组',
                    },
                    {
                        id: 4,
                        label: '图像处理',
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        components:{tree,UserTreeGrid,ServiceTreeGrid,CodeTreeGrid},
        computed: {
            dialogFormVisible() {
                return this.$store.state.dialogFormVisible;
            }
        },
        methods: {
            choose() {
                console.log(this.form.show_type);
            },
            closeDialog() {
                //给父组件传参
                this.$store.commit("SET_DIALOGFORMVISIBLE_STATE", false);
            },
            showSelection(selection) {
                for (let i = 0; i < selection.length; i++) {
                    this.form.selection = selection[i].label;
                }
                console.log(this.form.selection);
            },
            submit() {
                this.form.selection += '';
                if(this.form.show_type==""){
                    this.$notify({
                        title: '提示',
                        message: '请选择展示类型',
                        type: 'error',
                        duration: 1500
                    });
                }
                if(this.form.selection==""){
                    this.$notify({
                        title: '提示',
                        message: '请选择数据类型',
                        type: 'error',
                        duration: 1500
                    });
                }

                if (this.form.selection!="" && this.form.show_type!="") {
                    this.$store.commit("SET_DIALOGFORMVISIBLE_STATE", false);
                    this.$store.commit("SET_SHOWTYPE_STATE",this.form.show_type);
                    this.$store.commit("SET_SELECTION_STATE",this.form.selection);
                    bus.$emit("passComponent")
                }

                // this.requestData();
            },
        }
    }
</script>
