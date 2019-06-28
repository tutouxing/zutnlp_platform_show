<template>
    <el-form style="margin-top: 80px">


    <el-form-item class="frames">
    <label >选择需要生成的工程</label>
    <el-select style="margin-top: 50px" v-model="ProjectNames.values" clearable placeholder="请选择工程名">
        <el-option
                v-for="item in ProjectNames.proname"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
        <el-form-item style="margin-top: 50px">
            <el-button  type="danger" round  v-on:click="LastcreCode">确 认</el-button>
        </el-form-item>
    </el-form-item>


    </el-form>
</template>

<script>
    export default {
        name: "createcode",
        data(){
            return{
                ProjectNames:{
                    proname:[
                        {
                            value:'',
                            label:''
                        }
                    ],
                    values:''
                }
            }
        },
        methods:{
            Findprojectname(){
                console.log("掉获取工程名接口Project");
                let that=this;
                let url='http://202.196.37.147:8848/TableMessage/GenALLProjectName';
                this.$axios(
                    {
                        method:'get',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        withCredentials:true,
                    }
                ).then(function (res) {
                    for(let i=0; i<res.data.length;i++)
                    {
                        that.ProjectNames.proname.push(
                            {
                                value:res.data[i].toString(),
                                label: `${res.data[i].toString()}`,
                            }
                        );

                    }
                });
                console.log("掉获取工程名接口Project完毕");
            },
          /*  LastcreCode(){
                let that=this;
                if(this.ProjectNames.values=='')
                {
                    this.$alert("工程名为空");
                }else {
                    /!*console.log(that.message.createpath+"生成代码参数");
                   Code().then(res=>{

                    })
                    this.$axios.defaults.headers.post["Content-Type"]='application/json;charset=UTF-8';*!/
                    let url='http://202.196.37.147:8848/GenCode/GetEntiredProjectZip';
                    this.$axios({
                        method:'get',
                        url,
                        headers:{
                            'Content-Type':'application/x-msdownload',
                            // 'Content-disposition':'attachment;filename=zutnlp-admin.zip'
                        },
                        withCredentials:true,
                        params:{
                            ProjectName:that.ProjectNames.values,
                        }
                    });
                    this.$alert("生成成功");
                }
               this.$router.push({path:"formconfig/formoperate"});
            },//调用创建代码*/
          LastcreCode(){
              let url="http://202.196.37.147:8848/GenCode/GetEntiredProjectZip?ProjectName="+this.ProjectNames.values;
             /* this.$http({
                  method:"get",
                  url:url+"?data="+encodeURI(JSON.stringify(this.value)),
                  responseType:'blob'
              }).then((res)=>
              {
                  //这里res.data是返回的blob对象
                  var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
                  var contentDisposition = res.headers['content-disposition'];  //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;

                  var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
                  var result = patt.exec(contentDisposition);
                  var filename = result[1];
                  var downloadElement = document.createElement('a');
                  var href = window.URL.createObjectURL(blob); //创建下载的链接
                  downloadElement.style.display = 'none';
                  downloadElement.href = href;
                  downloadElement.download =filename ; //下载后文件名
                  document.body.appendChild(downloadElement);
                  downloadElement.click(); //点击下载
                  document.body.removeChild(downloadElement); //下载完成移除元素
                  window.URL.revokeObjectURL(href); //释放掉blob对象
              })*/
                  window.open(url);
          }

        },
        mounted(){
            this.Findprojectname();
        }

    }
</script>

<style scoped>
    .frames{
        /*     background: white;*/
     /*solid gainsboro*/
        margin: auto;
        border-top:2px solid gainsboro;
        border-bottom:2px solid gainsboro;
        border-left:2px solid gainsboro;
        border-right:2px solid gainsboro;
        /* border-bottom:2px solid black;
        border-right:2px solid black;*/
        padding-bottom:35px;
        width: 22cm;
        height: 5cm;

    }
    label{
      margin-right: 50px;
        font-size: 25px;

    }
</style>
