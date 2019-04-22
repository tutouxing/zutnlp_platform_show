<template>
    <div class="app-container calendar-list-container">
                            <el-card>
                                <el-row>
                                    <el-col :span="10">
                                        <el-form :model="pageForm" ref="pageForm" label-width="100px" style="width: 500px;margin-left: 20px;margin-top: 100px">
                                            <el-form-item label="主题样式选择:" :label-width="formLabelWidth" >
                                                <el-select class="filter-item" v-model="pageForm.themeStyle" placeholder="请选择" @change="changeShow">
                                                    <el-option v-for="item in  setThemeOption" :key="item" :label="item" :value="item"> </el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="页面一样式选择:" :label-width="formLabelWidth" >
                                                <el-select class="filter-item" v-model="pageForm.pageOneStyle" placeholder="请选择" @change="changeShow">
                                                    <el-option v-for="item in  setOneOption" :key="item.value" :label="item.table" :value="item.value"> </el-option>
                                                </el-select>
                                            </el-form-item>
                                            <!-- <el-form-item label="页面二样式选择:" :label-width="formLabelWidth" >
                                                 <el-select class="filter-item" v-model="pageForm.pageTwoStyle" placeholder="请选择" @change="changeShow">
                                                     <el-option v-for="item in  setTwoOption" :key="item.value" :label="item.table" :value="item.value"> </el-option>
                                                 </el-select>
                                             </el-form-item>-->
                                        </el-form>
                                        <el-button size="small" type="warning" @click="updatePage('pageForm')" class="el-icon-setting">保存</el-button>
                                    </el-col>
                                    <el-col :span="10">
                                        <el-card :style="photoShow">
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </el-card>
    </div>
</template>
<script>
    import {setObj}from '../../api/admin/user/index.js'
    export default {
        name: "personalize1",
        data() {

            return {
                photoShow: {
                    backgroundImage: 'url(' + require('../../assets/img/welcome.png') + ')',
                    width: '700px',
                    height: '500px',
                },
                pageSet: [],
                pageForm: {
                    themeStyle: '',
                    pageOneStyle: '',
                    pageTwoStyle: '',
                },
                setThemeOption: ['主题一', '主题二'],
                setOneOption: [{table: '样式一', value: '页面1-1'}, {table: '样式二', value: '页面1-2'}],
                setTwoOption: [{table: '样式一', value: '页面2-1'}, {table: '样式二', value: '页面2-2'}],
                formLabelWidth: '120px',
            }
        },
        methods: {
            changeShow(val) {
                console.log(val);
                if (val == "主题一")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themeone.png') + ')';
                if (val == "主题二")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themetwo.png') + ')';
                if (val == "页面1-1")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styleone.png') + ')';
                if (val == "页面1-2")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styletwo.png') + ')';
                /*  if(val=="页面2一1")
                      this.photoUrl="/static/img/bar.fdc119c1.png";
                  if(val=="页面2-2")
                      this.photoUrl="/static/img/bar.fdc119c1.png";
                  this.$refs.photo.src=this.photoUrl;*/
            },
            updatePage() {
                this.pageSet.push(this.pageForm.themeStyle);
                this.pageSet.push(this.pageForm.pageOneStyle);
                this.pageSet.push(this.pageForm.pageTwoStyle);
                console.log(this.pageSet);
                console.log(this.$store.state.userid);
                setObj(this.$store.state.userid, this.pageSet).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '配置成功,重新登陆后刷新',
                        type: 'success',
                        duration: 2000
                    });
                    this.pageSet = [];
                    this.pageForm.pageTwoStyle='';
                    this.pageForm.pageOneStyle='';
                    this.pageForm.themeStyle='';
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/welcome.png') + ')';
                })
            },
        }
    }
</script>

<style >
    .el-table__header th, .el-table__header tr{
        line-height: 40px;
    }

    .filter-container{
        float: left;
        margin-bottom:20px;
    }
</style>
