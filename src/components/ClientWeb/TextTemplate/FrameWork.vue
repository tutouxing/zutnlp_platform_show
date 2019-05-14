
<template>
    <el-container style="margin-top: 10px">
    <el-header>
              <div>
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                                   <el-tab-pane label="体育" name="first">
                       <div><!--体育-->
                             <el-container>
                                 <el-aside>
                                   <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TiYuMsG.Left" v-on:click="tiyutonext1(item)">
                                       {{item.title}}
                                   </h3>
                                 </el-aside>

                                 <el-main>
                                    <div>
                                        <!-- <span class="demonstration">默认 Hover 指示器触发</span>     -->
                                        <el-carousel>
                                            <el-carousel-item v-for="item in Allofdata.TiYuMsG.Pictures" :key="item"  v-on:click="tiyutonext0(item)">
                                                <img :src="item.Picture"  height="200px" style="width: 525px;"/>
                                                <p>{{item.Introduction}}</p>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                 </el-main>
                                 <div class="tiyuaside">
                                   <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TiYuMsG.Right" v-on:click="tiyutonext1(item)">
                                       图片侧栏{{item.title}}
                                   </h3>
                                 </div>
                                  </el-container>
                             <el-container>
                                          <el-aside>
                                            <div v-for="item in Allofdata.TiYuMsG.ViodesSide" v-on:click="tiyutonext2(item)">
                                                <p>{{item.Introduction}}</p>
                                            </div>
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
                                              视频侧栏
                                              <div v-for="item in Allofdata.TiYuMsG.RecommendVideos" v-on:click="tiyutonext3(item)">
                                              <p>{{item.title}}</p>
                                              <video  src="item.videos"  width="280" height="240" controls="controls" style="border-top :1px solid darkgray; border-bottom:1px solid darkgray;">
                                                 <!-- Your browser does not support the video tag.-->
                                              </video>
                                              </div>
                                          </div>
                               </el-container>
                           <el-container>
                                        <!--  <el-aside></el-aside>-->
                                        <!--  <el-main></el-main>-->
                                        <!--  <div class="tiyuaside">文字侧栏</div>-->

                           </el-container>
                       </div>
                                   </el-tab-pane>
                                   <el-tab-pane label="科技" name="second">
                            <div>
                               <el-carousel :interval="4000" type="card" height="200px">
                                       <el-carousel-item v-for="item in Allofdata.KeJiMsg.Pictures" :key="item">
                                               <img :src="item.Picture"  v-on:click="kejigonext0(item)" />
                                               <h3>{{ item .Picture}}</h3>
                                           </el-carousel-item>
                                   </el-carousel>
                           </div>

                               <div>
                                   <div class="divmain" style="float:left;" v-for="item in Allofdata.KeJiMsg.PictureAndText" v-on:click="kejigonext1(item)">
                                           <img style="margin-top: 15px"  class="photo" :src="item.picture" />
                                           <p >{{item.title}}</p>
                                       </div>

                                       <div class="divaside"  width="500px"  v-for="item in Allofdata.KeJiMsg.OnlyText" v-on:click="kejigonext2(item)">
                                           <p class="div-inline">{{item.title}}</p>
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
                                   <div>
                                       <el-carousel >
                                           <el-carousel-item v-for="item in Allofdata.YuLeMsg.Pictures" :key="item" >
                                               <img :src="item.Picture"   height="200px" style="width: 500px;" v-on:click="yuletonext2(item)" />
                                               <p>{{item.Introduction}}</p>
                                           </el-carousel-item>
                                       </el-carousel>
                                   </div>
                                   </div>

                               </div>
                           </div>
                       <div class="yu1">
                           <div class="yule3" style="float: bottom;"  v-for="item in Allofdata.YuLeMsg.PicturesAndText" v-on:click="yuletonext0(item)">

                                <div>
                                    <p>{{item.Text.title}}</p>
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.Pictures[0].Picture" />
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.Pictures[1].Picture" />
                                    <img style="margin-top: 15px"  class="yulephoto" :src="item.Pictures[2].Picture" />

                                    </div>
                               </div>
                           <div class="yule4">
                               <div v-for=" item in Allofdata.YuLeMsg.Recommend" style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(item)">
                                   <h4>{{item.title}}</h4></div>
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
    import state from '../../../store/state.js'
    export default {
        name: "FrameWork",

        data(){
            return {
                Allofdata:{
                    KeJiMsg:{
                        Pictures:[
                            {
                                Picture:'../Picture/earth.png ',
                            },
                            {
                                Picture:'../Picture/earth.png ',
                            },
                            {
                                Picture:'../Picture/earth.png ',
                            },
                        ],
                        PictureAndText:[
                            {
                                Content:'内容',//内容
                                picture:'../Picture/earth.png' ,//插图
                                type:'类型',//类型
                                title:' 科技新闻太阳科技新闻太阳科技新闻太阳 '  ,
                            }
                        ],
                        OnlyText:[
                            {
                                Content:'科技新闻太阳科技新闻太阳科技新闻太阳'      ,//内容
                                type:'类型'  ,//类型
                                title:' 科技新闻太阳科技新闻太阳科技新闻太阳'  ,
                            }
                        ]
                    },
                    YuLeMsg:{

                        Vodeos:{
                            Video:'../Picture/movie.ogg',
                        },
                        PicturesAndText:[
                            {
                                Pictures:[
                                    {
                                        Picture:'../Picture/earth.png '
                                    },
                                    {
                                        Picture:'../Picture/earth.png '
                                    },
                                    {
                                        Picture:'../Picture/earth.png '
                                    }
                                ],
                                Text:{
                                    title:'地球',
                                    Introduction:'这是地球啊',
                                    Content:'地球好',
                                }
                            }
                        ],
                        Pictures:[
                            {
                                Picture:'../Picture/earth.png ',
                                Introduction:'earth',
                            },
                            {
                                Picture:'  ../Picture/moon.png',
                                Introduction:'moon',

                            }
                        ],
                        Recommend:[
                            {
                                title:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Content:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Author:'w',
                            },
                            {
                                title:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Content:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Author:'w',
                            }
                        ]

                    },
                    TiYuMsG:{

                        Left:[
                            {
                                title:'火箭总冠军',
                                Content:'哈登mvp'
                            }
                        ],
                        Right:[
                            {
                                title:'火箭总冠军',
                                Content:'哈登mvp'

                            }
                        ],
                        Pictures:[
                            {
                                Picture:'../Picture/earth.png ',
                                Introduction:'earth',
                            }
                        ],
                        Videos:{
                            Video:'../Picture/movie.ogg',
                            title:'熊吃鱼',
                        },
                        RecommendVideos:[
                            {
                                Video:'../Picture/movie.ogg',
                                title:'熊吃鱼',
                            }
                        ],/*又*/
                        ViodesSide :[
                            {
                                Video:'../Picture/movie.ogg',
                                Introduction:'熊吃鱼',
                            }
                        ],/*左*/

                    },



                  /*  TextMessage:[
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
                     },*///图片轮播用
                },
                activeName:  'second' ,
                gotdata:{},
            }
      },
        methods:{
            kejigonext0(item){

                //item是一个对象
                console.log(item);
                console.log("打印的科技0");//展示图片
                this.$router.push({name:'PlayPictureMsg',params:{items:item}});//用路由传递参数唯一标识
                this.$router.push({path:'/PlayPictureMsg'});

            },
            kejigonext1(item){

                console.log(item.title);
                this.$router.push({name:'PlayNewsMsg',params:{items:item}});//用路由传递参数唯一标识
                this.$router.push({path:'/PlayNewsMsg'});
                console.log("打印的科技1");//展示图片带文字
            },
            kejigonext2(item){
                console.log(item.title);
                console.log("打印的科技2");//仅仅展示文字
                this.$router.push({name:'PlayContentMsg',params:{items:item}});//用路由传递参数唯一标识
                this.$router.push({path:'/PlayContentMsg'});
            },
            yuletonext0(item){
                console.log("打印娱乐0");//展示三张图加文字
                this.$router.push({name:'PlayManyPicturesContentMsg',params:{items:item}});
                this.$router.push({path:'/PlayManyPicturesContentMsg'});
            },
            yuletonext1(item){
                console.log("打印娱乐1");//
                this.$router.push({name:'PlayContentMsg',params:{items:item}});
                this.$router.push({path:'/PlayContentMsg'});
            },
            yuletonext2(item){
                console.log("打印娱乐2");//展示1张图加文字
                this.$router.push({name:'PlayNewsMsg',params:{items:item}});
                this.$router.push({path:'/PlayNewsMsg'});
            },

            tiyutonext0(item){
                console.log("打印体育0");//展示三张图加文字
                this.$router.push({name:'PlayNewsMsg',params:{items:item}});
                this.$router.push({path:'/PlayNewsMsg'});
            },
            tiyutonext1(item){
                console.log("打印体育1");//展示三张图加文字
                this.$router.push({name:'PlayContentMsg',params:{items:item}});
                this.$router.push({path:'/PlayContentMsg'});
            },
            tiyutonext2(item){
                console.log("打印体育2");
                this.$router.push({name:'PlayVideosMsg',params:{items:item}});
                this.$router.push({path:'/PlayVideosMsg'});
              //点文字跳转到视频连接
            },
            tiyutonext3(item){
                console.log("打印体育1");//展示三张图加文字
                this.$router.push({name:'PlayVideosMsg',params:{items:item}});
                this.$router.push({path:'/PlayVideosMsg'});
                //点击视频跳转
            },
              /*  sparamtocontent(item){
                    this.$router.push({name:'PlayContentMsg',params:{id:id}});//用路由传递参数唯一标识
                },
                passparamtonewmsg(){
                    this.$router.push({name:'PlayNewsMsg',params:{id:id}});//用路由传递参数唯一标识
                },
                passparamtopicturemsg(){
                    this.$router.push({name:'PlayPictrueMsg',params:{id:id}});//用路由传递参数唯一标识
                },
*/
                handleClick(tab, event) {
                    console.log(tab, event);
                },

        },
        mounted(){
           this.gotdata= state.channel;
                console.log( this.gotdata);
        }
      /*  mounted(){

               let that=this;
               let url=  ''    ;
             that.$axios.get(url, {}).then(function (response) {
                for (let j in response.data)
                 {
                     console.log(response.data[j]);
                 }
                 that.data().Allofdatae.TextMessage=response.data;
              /!*  for (let j in response.data) {
                   that.alltablename.names.push(
                        {
                            value:response.data[j].tablename,
                            label: `${response.data[j].tablename}`,
                            key: Date.now()
                        }
                    );
                }*!/
            }).catch(function (error) {
                console.log(error);
            });
        }*/
    }
</script>


<style scoped>
    h4:hover{
        cursor:pointer;
        text-decoration:underline;color: brown;
    }
    p:hover {
        cursor: pointer;
    }
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
        cursor:pointer;
    }
    .yule2{
        width: 500px;
        height: 301px;
        overflow:auto;
        margin-left: 50%;
        cursor:pointer;
    }

    .yule2-1{
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        width: 99%;
        height: 99%;
        cursor:pointer;
    }
  /*  .yule2-2{
        width: 100%;
        height: 50%;
        !*广告的*!
        !*border-bottom:1px solid darkgray;
        border-right:1px solid darkgray;
        border-left:1px solid darkgray;
        background: gold;*!
    }/，*/
    .yule3{
        width: 550px;
        height: 255px;
        overflow:auto;
        /*   background: aqua;*/
        margin-top: 10px;
        border-top :1px solid darkgray;
        border-bottom:1px solid darkgray;
        cursor:pointer;
    }
    .yulephoto{
        width: 32%;
        height: 160px;
        cursor:pointer;
    }
    .yule4{

        position:absolute;
        top: 495px;
        left: 50%;
        width: 500px;
        height:auto;
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
        height: 340px;
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

       /* overflow:auto;*/

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
        height: 350px;
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
        /*     display:inline-block;360*/
        height: 350px;
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
