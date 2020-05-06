<template>
<!--    上传弹出框-->
    <div>
        <el-card>
            <el-form  :model="form" label-width="80px" class="login-box">
                <h3 class="login-title">上传文件</h3>
                <el-form-item label="文件描述" prop="description">
                    <el-input type="text" placeholder="请输入内容" v-model="form.description"/>
                </el-form-item>
                <el-form-item label="上传时间" prop="releaseTime">
                    <el-input type="date" placeholder="请输入内容" v-model="form.releaseTime"/>
                </el-form-item>
                <el-form-item>
                    <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="http://localhost:8848/File/upload"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-error="uploadError"

                            :auto-upload="false"
                            :data="form"
                            :beforeUpload="beforeUploadFile"
                            :before-remove="beforeRemove">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "SysReourceUp",
        data() {
            return {
                form:{
                    // file:'',
                    description:'',
                    releaseTime:'',
                },
                tableData:[],
            };
        },
        props:["tranToSon"],
        methods: {
            beforeUploadFile(file) {
                if (JSON.stringify(this.tranToSon).includes(file.name))
                {
                    this.$alert('该文件已经存在,确认覆盖？', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            console.log('before upload，准备覆盖');
                            console.log(file)
                            this.$refs.upload.submit();
                        }
                    })
                }
            },
            submitUpload(file,fileList) {
                this.$refs.upload.submit();
                if (JSON.stringify(this.tranToSon).includes(file.name)){

                    console.log("hhhahaha你被调用了");
                }
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(":on-preview="+file);
            },
            uploadError(error){
                const result = JSON.parse(error.message);
                this.$message({
                    message: this.$t('tips.uploadFailed') + " " + result.message,
                    type: 'error',
                    showClose: true
                });
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }

    }
</script>

<style lang="scss" scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 480px;
    }
</style>
