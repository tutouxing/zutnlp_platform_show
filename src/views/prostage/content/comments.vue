<template>
    <div>
        <el-row>
            <el-col :span="16">
                <div class="waPer">
                    <div class="head">
                        <h1>发表留言</h1>
                    </div>
                    <div class="body">
                        <div class="body-head">
                            <div>
                                <el-form>
                                    <el-form-item label="类别" :label-width="120px" prop="classed">
                                        <el-select v-model="userForm.classed" clearable placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="邮箱" :label-width="120px" prop="email">
                                        <el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
                                    </el-form-item>
                                    <el-form-item label="电话" :label-width="120px" prop="phoneNum">
                                        <el-input v-model="userForm.phoneNum" placeholder="请输入电话"></el-input>
                                    </el-form-item>
                                    <el-form-item label="QQ" :label-width="120px" prop="QQ">
                                        <el-input v-model="userForm.QQ" placeholder="请输入QQ"></el-input>
                                    </el-form-item>
                                    <el-form-item label="标题" :label-width="120px" prop="title">
                                        <el-input type="text" v-model="userForm.title"></el-input>
                                    </el-form-item>
                                    <el-form-item label="内容" :label-width="120px" prop="title">
                                        <el-input type="text" v-model="userForm.text"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submit()">提交</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="(n,item) in depictions" :key="item">
                            <img :src="n.idView"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="wapper">
                    <div class="title">
                        <h3>大家都在搜</h3>
                    </div>
                    <div class="newscontent" >
                        <div class="mode1">
                            <img src=""/>
                            <span>图像内容图像内容图像内容图像内容图像内哦让那个图像内容图像</span>
                        </div>
                        <div class="libiao">
                            <ul class="model2" v-for="(n,index) in content1" :key="index">
                                <li v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "comments",
        data() {
        return {
            options: [{
                value: '选项1',
                label: '普通'
            }, {
                value: '选项2',
                label: '投诉'
            }],
            userForm:{
                classed:'',//将options中的value值返回
                email:'',
                phoneNum:'',
                QQ:'',
                title:'',
                text:'',
            },
            depictions:[
                {  idView:'http://i2.chinanews.com/simg/2019/190610//100691130.JPG'},
                {  idView:'http://www.chinanews.com/tp/2019/06-10/U601P4T8D8860193F107DT20190610100920.jpg'},
                {  idView:'http://www.chinanews.com/2019/06-10/U601P4T8D8860261F107DT20190610105043.jpg'},
                {  idView:'http://www.chinanews.com/2019/06-10/U610P4T8D8860189F107DT20190610100429.jpg'},
            ],
            content1:[],
        }
    },
        computed:{
            count:function () {
                return this.$store.state.channel;
            }
        },
        methods:{
            submit(){

            },
            helloWord(){//初始化页面
                this.list=this.count;
                for (let i=0;i<this.list.length;i++){
                    if (this.$route.params.chName === this.list[i].chName) {
                        this.content=this.list[i].contents;
                        break;
                    }
                }
                this.content1=[];
                for (let j=0;j<5;j++){
                    this.content1.push(this.content[j]);
                }
            }
        }

    }
</script>

<style scoped>
    .waPer{
        padding-left: 20px;
    }
    .waPer head{
        border-bottom: 1px dotted #99a9bf;
    }
    .waPer h1{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .wapper{
        width: 400px;
        /*border: 1px solid #ccc;*/
    }
    .wapper .title{
        color: #FFA195;
        text-align: left;
        border-bottom: 1px solid #99a9bf;
        padding-bottom: 5px;
        margin-bottom: 20px;
    }
    .newscontent .liebiao{
        margin-right: 20px;
    }
    .newscontent .mode1{
        background-color: #eee;
        overflow: auto;
        margin-bottom: 20px;
    }
    .newscontent .mode1 img{
        overflow: hidden;/*隐藏溢出图片内容*/
        transition-duration: 0.5s;
        width:150px;
        height:75px;
        /*background: green;*/
        float: left;
        margin-right:10px;
        float: left;
    }
    .newscontent .mode1 span{
        width:170px;
        text-align: left;
    }
    .newscontent .mode1 span:hover{
        color: red;
    }
    .newscontent .libiao ul{
        padding: 10px;
    }
    .newscontent .libiao ul li{
        color: darkslateblue;
        text-align: left;
        /*border-bottom: 1px solid #ccc;*/
    }
    .newscontent .libiao ul li:hover{
        color: red;
        transition-duration: 0.5s;
    }

</style>