<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <!--<span class="svg-container"><icon-svg icon-class="jiedianyoujian"></icon-svg></span>-->
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="账户"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <!--<span class="svg-container"><icon-svg icon-class="mima"></icon-svg></span>-->
                <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
        <router-view></router-view>;
    </div>
</template>
<!--<style>-->
<!--body{-->
<!--background: blanchedalmond;-->
<!--}-->
<!--</style>-->
<script>
    import {login} from '../../api/admin/login'
    export default {
        components: {
            // socialSign,
        },
        name: 'login',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [{
                        required: true,
                        message: '账户不能为空',
                        trigger: 'blur'
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '长度在 3 到 20 个字符',
                            trigger: 'blur'
                        }],
                    password: [{
                        required: true,
                        trigger: 'blur',
                        validator: validatePass
                    }]
                },
                loading: false,
                showDialog: false,
                channel:[],//用户返回的一个导航栏目
            }
        },
        methods: {
            handleLogin() {
                this.loading = true;
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        // this.loading=false;
                        // this.$router.push(
                        //     {
                        //         path:'welcome'
                        //     });
                        //     this.$store.commit("SET_USERNAME_STATE",this.loginForm.username)
                        //访问后台，传过来数据

                        login(this.loginForm).then((response)=>{
                            this.loading=false;
                            if(response.data === ""){
                                alert('用户不存在，请重新输入');
                               /* this.loading=false;*/
                            }else {
                                console.log(response)
                                this.$store.commit("SET_USERINFORMATION_STATE", response.data);
                                if(response.data.group.theme=="主题二") {
                                    this.$store.commit("SET_USERTHEME_STATE", "#66a3e0");
                                }
                                if(response.data.group.theme=="主题一") {
                                    this.$store.commit("SET_USERTHEME_STATE", "#545c64");
                                }
                                this.$store.commit("SET_USERNAME_STATE",this.loginForm.username)
                                this.$store.commit("SET_USERID_STATE",response.data.group.userId);
                                console.log(this.$store.state.userid);
                                this.loading = false;
                                this.$store.commit("SET_USERMENUS_STATE",response.data.group.menus);
                                console.log('得到菜单');
                                console.log(response.data.group.menus);
                                this.$store.commit("SET_CHANNEL_STATE",response.data.channel);
                                this.channel = response.data.channel;
                                console.log(this.channel.length);
                                this.$router.push(
                                    {
                                        path:'/welcome'
                                    });
                            }
                        })
                        // requestlogin(loginParams).then(data=>{
                        //      debugger;
                        //      this.loading=false;
                        //      let{msg,code,token}=data;
                        //      if(code=='200') {
                        //          sessionStorage.setItem('access-token', token);
                        //          this.$router.push('/')
                        //      }else {
                        //          this.$message({
                        //              message:msg,
                        //              type:'error'
                        //          })
                        //      }
                        //  })
                        // this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
                        //     this.loading = false;
                        //     this.$router.push({
                        //         path: '/'
                        //     });
                        //     // this.showDialog = true;
                        // }).catch(() => {
                        //     this.loading = false;
                        // });
                        // this.$http.post('/oauth/token', {
                        //   username: this.loginForm.username,
                        //   password: this.loginForm.password
                        // }, {
                        //   headers: {
                        //     Authorization: 'Basic enV1bDp6dXVs'
                        //   },
                        //   emulateJSON: true,
                        //   emulateHTTP: true
                        // }).then(function(response) {
                        //   if (response.status === 200) {
                        //     this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
                        //       this.loading = false;
                        //       this.$router.push({
                        //         path: '/'
                        //       });
                        //       // this.showDialog = true;
                        //     }).catch(() => {
                        //       this.loading = false;
                        //     });
                        //   } else {
                        //     this.loading = false;
                        //     return false;
                        //   }
                        // }, function(error) {
                        //   console.log('server error!!');
                        //   this.loading = false;
                        //   return false;
                        // });

                        }
                    else {
                        this.$router.push("/404");
                        return false;
                    }
                });
            },
            afterQRScan() {
                // const hash = window.location.hash.slice(1);
                // const hashObj = getQueryObject(hash);
                // const originUrl = window.location.origin;
                // history.replaceState({}, '', originUrl);
                // const codeMap = {
                //   wechat: 'code',
                //   tencent: 'code'
                // };
                // const codeName = hashObj[codeMap[this.auth_type]];
                // if (!codeName) {
                //   alert('第三方登录失败');
                // } else {
                //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
                //     this.$router.push({ path: '/' });
                //   });
                // }
            }
        },
        created() {
            // window.addEventListener('hashchange', this.afterQRScan);
        },
        destroyed() {
            // window.removeEventListener('hashchange', this.afterQRScan);
        }
    }
</script>

<style  lang="less">
    .login-container{
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 160px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #ffff ;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        background: -ms-linear-gradient(top,#ace,#00C1DE);
        background: -ms-linear-gradient(top,#ace,#00C1DE);
        background: -webkit-linear-gradient(linear,0% 0%,0% 100%,from(#ace),to(#00C1DE));
        background: -webkit-linear-gradient(top,#ace,#00C1DE);
        background: -o-linear-gradient(top,#ace,#00C1DE);
        .title{
            margin: 0px auto 0px auto;
            text-align: center;
        }
    }
</style>
