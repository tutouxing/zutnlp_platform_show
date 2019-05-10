 <!--
<template>
    <el-container>
        <el-header>
&lt;!&ndash;
          <img :src="Allofdata.Pictures.HeaderPictureEarth"  style="width: 100%"/>
&ndash;&gt;    <div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="体育" name="first">
                    <div>
                        <el-container>
                            <el-aside>
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </el-aside>
                            <el-main>
                                <div class="block">
                                    <el-carousel  height="260px" style="width: 525px;">
                                        <el-carousel-item v-for="item in Allofdata.Pictures" :key="item">
                                            <h3>{{ item }}</h3>
                                            <img :src="item" />
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-main>
                            <div class="tiyuaside">
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </div>
                        </el-container>
                        <el-container>
                            <el-aside>
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </el-aside>
                            <el-main>视频</el-main>
                            <div class="tiyuaside">
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </div>
                        </el-container>
                        <el-container>
                            <el-aside>
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </el-aside>
                            <el-main>
                                <video width="500" height="255" controls="controls" autoplay="autoplay">
                                  <source src="/i/movie.ogg" type="video/ogg" />
                                <source src="/i/movie.mp4" type="video/mp4" />
                                  <source src="/i/movie.webm" type="video/webm" />
                                  <object data="/i/movie.mp4" width="500" height="255">
                                        <embed width="500" height="255" src="/i/movie.swf" />
                                      </object>
                                </video>
                            </el-main>
                            <div class="tiyuaside">
                                <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                    {{item.title}}
                                </h3>
                            </div>
                        </el-container>

                    </div>&lt;!&ndash;体育&ndash;&gt;</el-tab-pane>
                <el-tab-pane label="科技" name="second">
                    <div>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in Allofdata.Pictures" :key="item">
                            <img :src="item" />
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                    <div>

                        <div class="divmain" style="float:left;" v-for="item in Allofdata.TextMessage">
                            <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                            <p >{{item.title}}</p>
                        </div>

                        <div class="divaside" width="500px"  v-for="item in Allofdata.OnlyText">
                            <p class="div-inline">{{item.introduction}}</p>
                        </div >
                    </div>
                </el-tab-pane>
                <el-tab-pane label="娱乐" name="third">
                    <div>

                        <div class="divmain" style="float:left;" v-for="item in Allofdata.TextMessage">
                            <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                            <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                            <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                            <p >{{item.title}}</p>
                        </div>

                    </div>

                </el-tab-pane>
                <el-tab-pane label="民生" name="fourth">民生</el-tab-pane>
            </el-tabs>

        </div>
        </el-header>


        &lt;!&ndash;   <el-main v-for="item in Allofdata.TextMessage">

                    <div @click="sparamtocontent(item)">
                        <img class="photo" :src="item.picture" />
                        <p>{{item.title}}</p>
                    </div>

                </el-main>
                <el-aside>Aside</el-aside>&ndash;&gt;

        <el-footer>Footer</el-footer>


    </el-container>
</template>
-->
<template>
    <el-container style="margin-top: 10px">
    <el-header>


              <div>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                                   <el-tab-pane label="体育" name="first">
                       <div><!--体育-->

                             <el-container>
                                       <el-aside>
                                   <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">
                                       {{item.title}}
                                       </h3></el-aside>
                                       <el-main>
                                    <div class="block">
                                                                          <!-- <span class="demonstration">默认 Hover 指示器触发</span>     -->
                                                                           <el-carousel  height="260px" style="width: 525px;">
                                                                                   <el-carousel-item v-for="item in Allofdata.Pictures" :key="item">

                                                                                           <img :src="item" />
                                                                                       </el-carousel-item>
                                                                               </el-carousel>
                                                                       </div></el-main>
                                       <div class="tiyuaside">
                                   <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TextMessage">\
                                                       \   图片侧栏{{item.title}}\
                                                       \   </h3></div>
                                  </el-container>
                             <el-container>
                                          <el-aside></el-aside>
                                          <el-main>
                                   <video width="500" height="255" controls="controls" autoplay="autoplay">
                                         <source src="/i/movie.ogg" type="video/ogg" />
                                         <source src="/i/movie.mp4" type="video/mp4" />
                                         <source src="/i/movie.webm" type="video/webm" />
                                         <object data="/i/movie.mp4" width="500" height="255">
                                               <embed width="500" height="255" src="/i/movie.swf" />
                                             </object>
                                       </video></el-main>
                                          <div class="tiyuaside">视频侧栏</div>
                               </el-container>
                            <el-container>
                                          <el-aside></el-aside>
                                          <el-main></el-main>
                                          <div class="tiyuaside">文字侧栏</div>
                               </el-container>



                               </div></el-tab-pane>
                                   <el-tab-pane label="科技" name="second">
                            <div>
                               <el-carousel :interval="4000" type="card" height="200px">
                                       <el-carousel-item v-for="item in Allofdata.Pictures" :key="item">
                                               <img :src="item" />
                                               <h3>{{ item }}</h3>
                                           </el-carousel-item>
                                   </el-carousel>
                           </div>

                               <div>

                                   <div class="divmain" style="float:left;" v-for="item in Allofdata.TextMessage">
                                           <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                                           <p >{{item.title}}</p>
                                       </div>

                                       <div class="divaside"  width="500px"  v-for="item in Allofdata.OnlyText">
                                           <p class="div-inline">{{item.introduction}}</p>
                                           </div >
                                   </div>
                       </el-tab-pane>
                                   <el-tab-pane label="娱乐" name="third">
                       <div  class="yu">


                               <div class="yule" style="float:left;">
                                                   <video width="548" height="296" controls="controls" autoplay="autoplay">
                                                                     <source src="/i/movie.ogg" type="video/ogg" />
                                                                   <source src="/i/movie.mp4" type="video/mp4" />
                                                                     <source src="/i/movie.webm" type="video/webm" />
                                                                     <object data="/i/movie.mp4" width="548" height="296">
                                                                               <embed width="548" height="296" src="/i/movie.swf" />
                                                                             </object>
                                                         </video>
                                    </div>
                           <div class="yule2">
                               <div class="yule2-1">
                                   <div class="block">
                                                                           <el-carousel  height="150px" style="width: 500px;">
                                                                                   <el-carousel-item v-for="item in Allofdata.Pictures" :key="item">

                                                                                       <img :src="item" />
                                                                                       </el-carousel-item>
                                                                               </el-carousel>
                                                                       </div>

                                   </div>
                               <div class="yule2-2">
                               广告图片
                               </div>
                               </div>
                           </div>
                       <div class="yu1">
                           <div class="yule3" style="float: bottom;"  v-for="item in Allofdata.TextMessage">

                                <div>
                                    <p>{{item.title}}</p>
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.picture" />
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.picture" />
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.picture" />

                                    </div>
                               </div>
                           <div class="yule4">
                           推荐东西
                           </div>
                           </div>
                       </el-tab-pane>

                     </el-tabs>

               </div>
           </el-header>
       <el-footer></el-footer>
           </el-container>
</template>
<script>
    export default {
        name: "FrameWork",

        data(){
            return {
                Allofdata:{
                    TextMessage:[
                        {
                            content:''      ,//内容
                            picture:  ' ../Picture/earth.png  ' ,//插图
                            type:    ''  ,//类型
                            title:  ' 科技新闻太阳科技新闻太阳科技新闻太阳 '  ,//标题

                        }
                    ],
                    OnlyText:[
                        {
                            type: '文本'     ,
                            title:  '标题'    ,
                            content:  '内容'    ,
                            introduction:'内容主旨介绍'

                        }
                    ],
                     Pictures:{
                         HeaderPictureEarth:  '../Picture/earth.png '   ,
                         HeaderPictureMoon:  ' ../Picture/moon.png'   ,
                         HeaderPictureSun:  '../Picture/sun.png '   ,
                     },//图片轮播用
                },
                activeName:  'second' ,
            }
      },
        methods:{

                sparamtocontent(item){
                    this.$router.push({name:   connectionupdata   ,params:{conname:connectionname}});//用路由传递参数唯一标识
                },
                passparamtonewmsg(){
                    this.$router.push({name:   connectionupdata   ,params:{conname:connectionname}});//用路由传递参数唯一标识
                },
                passparamtopicturemsg(){
                    this.$router.push({name:   connectionupdata   ,params:{conname:connectionname}});//用路由传递参数唯一标识
                },

                handleClick(tab, event) {
                    console.log(tab, event);
                },

        },
        mounted(){

               let that=this;
               let url=  ''    ;
             that.$axios.get(url, {}).then(function (response) {
                for (let j in response.data)
                 {
                     console.log(response.data[j]);
                 }
                 that.data().Allofdatae.TextMessage=response.data;
              /*  for (let j in response.data) {
                   that.alltablename.names.push(
                        {
                            value:response.data[j].tablename,
                            label: `${response.data[j].tablename}`,
                            key: Date.now()
                        }
                    );
                }*/
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<!--
<style scoped>
    .tiyuaside{
        width: 300px;
        height: 300px;
        margin-top: 5%;
        background: blue;
        margin-right: 5%;
        cursor:pointer;/*鼠标放上去是一个手*/
    }
    .  el-tab-pane{
        background: aqua;
    }
    p:hover{
         color: aquamarine;
     }
    h3:hover{
        color: aquamarine;
    }
    img:hover{
        transform: scale(1.4);
        transition: all 0.6s;
    }
    .divmain{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        cursor:pointer;/*鼠标放上去是一个手*/

        align:center;
        margin-left: 16% ;
        height: 150px;
        width: 500px;
        overflow:auto;
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
    }
    .divaside{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        cursor:pointer;/*鼠标放上去是一个手*/

        height: 150px;
        width:500px;
        margin-left: 60%;

        overflow:auto;

        text-align: center;
        line-height: 200px;

        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        /*   display:inline-block;不能加   这个和 overflow:auto;冲突*/
    }
    .photo{
        float:left;
        width: 200px;
        height:100px;
    }
    boder{
        border-radius: 4px;
        border-left:1px solid #000;
        border-right:1px solid #000;
        border-top :1px solid #000;
        border-bottom:1px solid #000;
    }
    .el-aside{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        height: 300px;
        margin-left: 5%;
        margin-top: 5%;
        /*  background-color: #D3DCE6;*/
        /*  background: black;*/
        color: #333;
        cursor:pointer;/*鼠标放上去是一个手*/
    }
    .el-main{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        background: red;
        margin-top: 5%;
        cursor:pointer;/*鼠标放上去是一个手*/
        /*     display:inline-block;*/
        height: 300px;
        width: 300px;
    }
    .el-carousel{
        margin-left: 15%;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n    1) {
        background-color: #d3dce6;
    }
</style>-->
<style>
    .yu{
        margin-top: 10%;
    }
    .yu1{
        margin-top: 5%;
    }
    .yule{
        width: 550px;
        height: 300px;
        /*background: azure;*/
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        border-right:1px solid darkgray;
        border-left:1px solid darkgray;
        overflow:auto;
    }
    .yule2{
        width: 500px;
        height: 300px;
        overflow:auto;
        margin-left: 50%;
    }

    .yule2-1{
        width: 100%;
        height: 50%;
        background: blue;
    }
    .yule2-2{
        width: 100%;
        height: 50%;
        /*广告的*/

        /*border-bottom:1px solid darkgray;
        border-right:1px solid darkgray;
        border-left:1px solid darkgray;
        background: gold;*/
    }
    .yule3{
        width: 550px;
        height: 255px;
        overflow:auto;
        /*   background: aqua;*/
        margin-top: 10px;
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
    }
    .yulephoto{
        width: 32%;
        height: 160px;
    }
    .yule4{
        position:absolute;
        top: 495px;
        left: 50%;
        width: 500px;
        height: 800px;
        /*     overflow:auto;*/
        /*        margin-left: 50%;*/
        /*推荐东西的*/
        /* background: gainsboro;*/
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        border-right:1px solid darkgray;
        border-left:1px solid darkgray;
    }
    .tiyuaside{
        width: 300px;
        height: 300px;
        margin-top: 5%;
        /*   background: blue;*/
        margin-right: 5%;
        cursor:pointer;/*鼠标放上去是一个手*/
        border-left:1px solid #000;
        border-right:1px solid #000;
        border-top :1px solid #000;

        border-bottom:1px solid #000;
    }
    .  el-tab-pane{
        background: aqua;
    }
    p:hover{
        /*    color: aqua;*/
        color: aquamarine;
    }
    h3:hover{
        color: aquamarine;
    }
    img:hover{
        transform: scale(1.4);
        transition: all 0.6s;
    }
    .divone{
        position:absolute;
        left: 60%;
        top: 48%;
        overflow:auto;
        text-align: center;
        line-height: 200px;

        border-top :1px solid aliceblue;
        border-bottom :1px solid aliceblue;
        border-left :1px solid aliceblue;
        border-right :1px solid aliceblue;
    }
    .divmain{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        cursor:pointer;/*鼠标放上去是一个手*/

        align:center;
        margin-left: 16% ;
        height: 150px;
        width: 500px;
        overflow:auto;
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
    }
    .divaside{
        box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
        word-wrap:break-word ;
        border-radius: 4px;
        cursor:pointer;/*鼠标放上去是一个手*/

        height: 150px;
        width:500px;
        margin-left: 60%;

        overflow:auto;

        text-align: center;
        line-height: 200px;

        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        /*   display:inline-block;不能加   这个和 overflow:auto;冲突*/
    }

    .photo{
        float:left;
        width: 200px;
        height:100px;
    }
    .el-aside{
        /* box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);*/
        word-wrap:break-word ;
        border-radius: 4px;
        height: 300px;
        margin-left: 5%;
        margin-top: 5%;
        /*  background-color: #D3DCE6;*/
        /*  background: black;*/
        color: #333;
        cursor:pointer;/*鼠标放上去是一个手*/
        /*      text-align: center;*/
        border-left:1px solid #000;
        border-right:1px solid #000;
        border-top :1px solid #000;

        border-bottom:1px solid #000;
    }
    .el-main{
        /*   box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);*/
        word-wrap:break-word ;
        border-radius: 4px;
        /*  background: red;*/
        margin-top: 5%;
        /*     display:inline-block;*/
        height: 300px;
        width: 300px;
        cursor:pointer;/*鼠标放上去是一个手*/

    }
    p{
        /* margin-left: 20px;
         font-size:30px*/

    }
    .boder{
        border-radius: 4px;
        border-left:1px solid #000;
        border-right:1px solid #000;
        border-top :1px solid #000;

        border-bottom:1px solid #000;
    }

    .el-carousel{
        /*  margin-left: 15%;*/
    }
    .bg{
        width: 750px;
        height: 600px;
        background:url(   ../Picture/earth.png   );
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
