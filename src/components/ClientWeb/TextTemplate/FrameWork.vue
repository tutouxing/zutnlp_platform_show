
<template>
    <el-container style="margin-top: 10px" class="allboder">
<el-header>
    <img   style="width: 100%; height: 230px"  :src="head" />
</el-header>

<el-main>


       <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" v-for=" item in Allofdata.gotdata" >
                {{item.chName}}
                <div>
                    &lt;!&ndash;   <div>
                            <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item v-for="item in Allofdata.KeJiMsg.Pictures" :key="item">
                                    <img :src="item.Picture"  v-on:click="kejigonext0(item)" />
                                    <h3>{{ item .Picture}}</h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>&ndash;&gt;
                        <div>
                            <div class="divmain" style="float:left;" v-for="items in item.contents" v-on:click="kejigonext1(items)">
                                <img style="margin-top: 15px"  class="photo" :src="items.picture" />
                                <p >{{items.title}}</p>
                            </div>

                            <div class="divaside"  width="500px"  v-for="items in item.contents" v-on:click="kejigonext2(items)">
                                <p class="div-inline">{{items.title}}</p>
                            </div >
                        </div>


                </div>
            </el-menu-item>
        </el-menu>
-->
        <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%">
            <el-tab-pane label="首页" name="first"  >



                 <div class="pictureboder">
                <el-carousel :interval="4000" type="card" height="250px">
                    <el-carousel-item v-for="item in Allofdata.YuLeMsg.Pictures" :key="item">
                        <img :src="item.Picture"  v-on:click="yuletonext2(item)" />
                        <h3>{{ item .Picture}}</h3>
                    </el-carousel-item>
                </el-carousel>

                 </div>

                <el-container >
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

                    <el-aside style="float: left;margin-left: 70px; height: auto;margin-top: 150px">
                        <h4 v-for=" (item,index) in  Allofdata.topdata" v-if="index<=4" v-on:click="yuletonext1(item)">{{item.title}} </h4>
                    </el-aside >
                    <el-aside style="float: left;margin-left: 30px;height: auto;margin-top: 150px">
                        <h4 v-for=" (item,index) in  Allofdata.topdata" v-if="index>4&&index<9" v-on:click="yuletonext1(item)">{{item.title}} </h4>
                    </el-aside >
                    <el-button type="text" style="margin-top: 300px" v-on:click="change()">换一换</el-button>

                </el-container >

                <div style="margin-top: 50px;margin-left:75%" v-for="item in advertisements" v-on:click="ads(item.url)">
                    <img style="width: 300px;height: 200px; cursor: pointer"  :src="item.imgurl" >
                    <br/>
                    <el-button type="text" >{{item.Introduction}}</el-button>
                </div>

                <div  style="margin-top: 100px">
                    <el-button v-for="item in web" type="text"  v-on:click="go(item.url)">{{item.name}}</el-button>
                 <!--  <a href="https://news.qq.com">腾讯新闻</a>-->
                </div>


                       <!-- <div  v-for="(items,index2) in item.contents "  v-if="index2<=1" style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">



                        </div>-->
                   <!-- <el-aside v-for=" (item,index) in  Allofdata.gotdata" v-if="index<=2" style="float: left">
                    <h3>{{item.chName}}</h3>
                    <div  v-for="items in item.contents " style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">

                        <h4>{{items.title}}</h4>

                    </div>

                </el-aside >

                    <el-aside v-for=" (item,index) in  Allofdata.gotdata" v-if="2<index&&index<=5" style="float: left">
                        <h3>{{item.chName}}</h3>
                        <div  v-for="items in item.contents " style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">

                            <h4>{{items.title}}</h4>

                        </div>

                    </el-aside>
                    <el-aside v-for=" (item,index) in  Allofdata.gotdata" v-if="index==6" style="float: left">
                        <h3>{{item.chName}}</h3>
                        <div  v-for="items in item.contents " style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">

                            <h4>{{items.title}}</h4>

                        </div>

                    </el-aside>
               -->
                   <!-- <div style="width: 500px; height: auto;float: left" v-for=" item in  Allofdata.gotdata">

                        <div  v-for="items in item.contents " style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">

                            <h4>{{items.title}}</h4>

                        </div>

                    </div>

-->
              <!--  <div  class="yule4"    v-for="(items,num) in item.contents " style="margin-top: 10px; margin-left: 10px" v-on:click="yuletonext1(items)">
                    <h4>{{items.title}}</h4>
                </div>-->
            </el-tab-pane>


         <el-tab-pane :label="item.chName" :name="second" v-for="item in Allofdata.gotdata" >
                 <div v-show="true" class="tiyuaside"  >

<!--//
                     <video width="500" height="255" controls="controls" autoplay="autoplay">
                         <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
                         <source src="/i/movie.webm" type="video/webm" />
                         <object data="/i/movie.mp4" width="500" height="255">
                             <embed width="500" height="255" src="/i/movie.swf" />
                         </object>
                     </video>-->

                     <video v-if="isshow" width="500" height="255" controls="controls" muted="muted" autoplay="autoplay" ><!--autoplay="autoplay" //默认自动播放-->
                        <source :src="mainvideo" type="video/mp4" />
                        <source src="/i/movie.webm" type="video/webm" />
                        <object data="/i/movie.mp4" width="500" height="255">
                            <embed width="500" height="255" src="/i/movie.swf" />
                        </object>
                    </video>
                     <div style="float: right; height: auto; margin-left: 100px;width: 500px;margin-top: 20px">
                        <h4 v-for=" (item,index) in  item.contents" v-if="index<4" v-on:click="yuletonext1(item)">{{item.title}} </h4>
                    </div >

                     <div style="float: left" v-for="mv in videos">
                           <h4  style="margin-top: 30px">{{mv.name}}</h4>
                           <video  width="255" height="255" controls="controls" preload="auto" muted="muted" v-on:click="playvideo(mv)">
                               <source :src="mv.url" type="video/mp4" /><!--:poster="" -->
                               <object data="/i/movie.mp4" width="500" height="255">
                                   <embed width="500" height="255" src="/i/movie.swf" />
                               </object>
                           </video>
                       </div>

                 </div>
             <!--当两个容器嵌套时,如果外层容器和内层容器之间没有别的元素,firefox会把内层元素的margin-top作用与父元素。-->
             <div v-show="true" style=" width: 90%; margin: auto; border-top :5px dashed  darkgray;clear: both">

                 <div style="margin-top:30px;float: left;" class="showpicture" v-for="item in Allofdata.YuLeMsg.Photos" v-on:click="yuletonext0(item)"><!-- clear: both清除上一个浮动对下一个的影响显示图片-->
                     <a><img style="width: 230px;height: 200px;":src="item[0].url"/><label>{{item[0].Introduction}}</label>{{item.length}}张</a>
                 </div>
             </div>


                 <div style="height: auto;">
                 <div style="float: left" v-if="num>=4" class="divmain" v-for="(items,num) in item.contents" v-on:click="kejigonext1(items)">
                     <img v-if="items.pictures.length>0" style="margin-top: 15px"   class="photo"  :src="items.pictures[0].url" />
                     <img v-if="items.pictures.length===0" style="margin-top: 15px"   class="photo"  :src="url" />

                     <p >{{items.title}}</p>
                 </div>
                 </div>



         </el-tab-pane>

        </el-tabs>
</el-main>
      <!--  <div>
                 <el-tabs v-model="activeName" @tab-click="handleClick">

                                   <el-tab-pane label="体育" name="first">
                       <div>
                             <el-container>
                                 <el-aside>
                                   <h3 style="margin-top: 10px;margin-left: 5px" v-for="item in Allofdata.TiYuMsG.Left" v-on:click="tiyutonext1(item)">
                                       {{item.title}}
                                   </h3>
                                 </el-aside>

                                 <el-main>
                                    <div>
                                     <span class="demonstration">默认 Hover 指示器触发</span>
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
                                                 &lt;!&ndash; Your browser does not support the video tag.&ndash;&gt;
                                              </video>
                                              </div>
                                          </div>
                               </el-container>
                           <el-container>
                                      <el-aside></el-aside>
                                      <el-main></el-main>
                                        <div class="tiyuaside">文字侧栏</div>

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


        </div>sssss-->
           </el-container>
</template>
<script>
    import state from '../../../store/state.js'
    import earth from '../Picture/earth.png'
    import moon from '../Picture/moon.png'
    import movie from '../Picture/movie.ogg'
    import sun from '../Picture/sun.png'
    import head from  '../Picture/head.jpg'
    import  kobe1 from '../Picture/kobe1.jpg'
    import  kobe2 from '../Picture/kobe2.jpg'
    import  ai1 from '../Picture/ai1.jpg'
    import  ai2 from '../Picture/ai2.jpg'
    import  ai3 from '../Picture/ai3.jpg'
    import  zine1 from '../Picture/zine1.jpg'
    import  zine2 from '../Picture/zine2.jpg'

    export default {
        name: "FrameWork",

        data(){
            return {
                Allofdata:{

                    /*KeJiMsg:{
                        Pictures:[
                            {
                                Picture:'../Picture/earth.png ',
                            },
                        ],
                        PictureAndText:[
                            {
                                text:'内容',//内容
                                picture:'../Picture/earth.png' ,//插图
                                type:'类型',//类型
                                title:' 科技新闻太阳科技新闻太阳科技新闻太阳 '  ,
                            }
                        ],
                        OnlyText:[
                            {
                                text:'科技新闻太阳科技新闻太阳科技新闻太阳'      ,//内容
                                type:'类型'  ,//类型
                                title:' 科技新闻太阳科技新闻太阳科技新闻太阳'  ,
                            }
                        ]
                    },
                    TiYuMsG:{

                       Left:[
                           {
                               title:'火箭总冠军',
                               text:'哈登mvp'
                           }
                       ],
                       Right:[
                           {
                               title:'火箭总冠军',
                               text:'哈登mvp'

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
                       ],/!*又*!/
                       ViodesSide :[
                           {
                               Video:'../Picture/movie.ogg',
                               Introduction:'熊吃鱼',
                           }
                       ],/!*左*!/

                   },*/
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
                    YuLeMsg:{

                       /* Vodeos:{
                            Video:'../Picture/movie.ogg',
                        },
                        PicturesAndText:[
                            {
                                Pictures:[
                                    {
                                        Picture:'../Picture/earth.png '
                                    },
                                ],
                                Text:{
                                    title:'地球',
                                    Introduction:'这是地球啊',
                                    text:'地球好',
                                }
                            }
                        ],
                        Recommend:[
                            {
                                title:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                text:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Author:'w',
                            },
                            {
                                title:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                text:'科技新闻太阳科技新闻太阳科技新闻太阳',
                                Author:'w',
                            }
                        ],*/
                        Pictures:[
                            {
                                Picture:earth,
                                Introduction:'earth',
                            },
                            {
                                Picture:moon,
                                Introduction:'moon',

                            },
                            {
                                Picture:sun,
                                Introduction:'sun',
                            }
                        ],
                        Photos:[
                            [
                                {
                                    Introduction:'kobe',
                                    url:kobe1
                                },
                                {
                                    Introduction:'kobe',
                                    url:kobe2
                                }
                            ],
                            [
                                {
                            Introduction:'zine',
                                url:zine1
                            },{
                                Introduction:'zine',
                                url:zine2
                            }],
                            [
                                {
                                Introduction:'Ai',
                                url:ai1
                            },
                                {
                                    Introduction:'Ai',
                                    url:ai2
                                },
                                {
                                    Introduction:'Ai',
                                    url:ai3
                                },
                            ],
                            [
                                {
                                    Introduction:'Ai',
                                    url:ai1
                                },
                                {
                                    Introduction:'Ai',
                                    url:ai2
                                },
                                {
                                    Introduction:'Ai',
                                    url:ai3
                                },
                            ]
                        ]
                    },

                    gotdata:{},
                    topdata:[],
                    obj:{}

                },
                activeName:  'first' ,
                activeIndex: '1',
           /*     backs:{
                  //  backgroundImage: "url(" + require("../Picture/head.jpg") + ")",
                    backgroundImage: 'url(' + require('../Picture/moon.png') + ')',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%'
                },*/
                web:[
                    {
                        name:"百度",
                        url:'http://www.baidu.com'
                    },
                    {
                        name:"腾讯新闻",
                        url:'https://news.qq.com'
                    },
                    {
                        name:"今日头条",
                        url:'https://www.toutiao.com'
                    },
                    {
                        name:"bbc中文网",
                        url:'http://www.businessnews.cn'
                    },


                ],
                videos:[
                    {
                    name:'鸟',
                    url:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                },
                    {
                        name:'沙漠',
                        url:'https://media.w3.org/2010/05/sintel/trailer.mp4'
                    },
                    {
                        name:'人',
                        url:'http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4'
                    },

                ],
                mainvideo:'http://vjs.zencdn.net/v/oceans.mp4',
                advertisements:[
                    {

                        url:'https://m.tb.cn/h.eTvsdS6?sm=616b6a',
                        imgurl:'https://img.alicdn.com/imgextra/i1/2200614154414/O1CN01Plq9sO1iTelMdPWF0_!!2200614154414.jpg_430x430q90.jpg',
                        Introduction:'折叠遥控迷你无人机航模高清专业飞行航拍器'
                    }
                ],
                isshow:true,//用来更新视频
                url:earth,
                video:movie,
                head:head,
                

            }
      },
        watch:{
          topdata(){
              //this.change();

    }
        },
        computed: {



        },
        provide(){
            playvideo:this.playvideo
        },//用来更新视频
        methods:{
            ads(url){
                window.open(url);
            },
            playvideo(mv){
                //用来更新视频
              this.mainvideo= mv.url;
                this.isshow = false
                this.$nextTick(() => (this.isshow = true))
            },
            go(url){
                window.open(url);
           /*window.open("http://www.baidu.com");*/
            /*    window.location.href = 'http://www.baidu.com';*/
            },
            change(){

                let that=this;
                for(let p=0;p<8;p++)
                {
                    let first= Math.round(Math.random() * (that.Allofdata.topdata.length - 8)) + 8;
                    // let second=Math.round(Math.random() * (8 - 0)) + 0;
                    let ob=that.Allofdata.topdata[first];
                    that.Allofdata.topdata[first]=that.Allofdata.topdata[p];
                    that.Allofdata.topdata[p]= ob;
                    console.log("first"+first);
                    /* console.log("second"+second);*/

                }
                console.log("换一换");
                //   return this.Allofdata.topdata;
                this.$forceUpdate();//调用本函数会重新渲染页面
            },
            kejigonext0(item){
                //item是一个对象
                console.log(item);
                console.log("打印的科技0");//展示图片
                this.$router.push({name:'PlayPictureMsg',params:{items:item}});//用路由传递参数唯一标识
                this.$router.push({path:'/PlayPictureMsg'});

            },
            kejigonext1(item){

               /* console.log(item.title);*/
                this.$router.push({name:'PlayNewsMsg',params:{items:item}});//用路由传递参数唯一标识
                this.$router.push({path:'/PlayNewsMsg'});
                console.log("打印的科技1");//展示图片带文字
            },
            kejigonext2(item){
               /* console.log(item.title);*/
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
                this.$router.push({name:'PlayPhoto',params:{items:item}});
                this.$router.push({path:'/PlayPhoto'});
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
          /*  tiyutonext2(item){
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
            },*/
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


            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }

        },
        mounted(){

           this.Allofdata.gotdata= state.channel;

           let j;let i;let w;let that=this;
           // console.log( this.Allofdata.gotdata+"：：整体数据");
           // console.log("整体数据输出完毕");
           // console.log(this.Allofdata.gotdata[0].contents[0].pictures[0].url+'图片');
         //   console.log( this.Allofdata.gotdata.contents[0]+"图片");

         /*   console.log( this.Allofdata.gotdata[0].contents[0].text+"输出");*/
          /*  console.log( state.channel[0].contents[0].title+"输出1");*/
           for(i=0;i<this.Allofdata.gotdata.length;i++)
           {
               console.log( "输出2");
               for(w=0;w<this.Allofdata.gotdata[i].contents.length;w++)
               {
                   console.log( "输出3");
                   this.Allofdata.topdata.push(that.Allofdata.gotdata[i].contents[w]);
               }
           }


           this.change();

         /*  for(let p=0;p<that.Allofdata.topdata.length;p++)
           {
               let first= Math.round(Math.random() * (that.Allofdata.topdata.length - 8)) + 8;
               let second=Math.round(Math.random() * (8 - 0)) + 0;
               this.Allofdata.obj=that.Allofdata.topdata[first];
               that.Allofdata.topdata[first]=that.Allofdata.topdata[second];
               that.Allofdata.topdata[second]=this.Allofdata.obj;
               let ob=that.Allofdata.topdata[first];
              /!* console.log(ob.title+"title");
               console.log("first"+first);
               console.log("second"+second);*!/
           }
*/
            console.log( this.Allofdata.topdata.length+"长度");
/*

            this.Allofdata.TiYuMsG.Right.push({

            });
            this.Allofdata.TiYuMsG.Left
            this.Allofdata.TiYuMsG.ViodesSide
            this.Allofdata.TiYuMsG.RecommendVideos
            this.Allofdata.TiYuMsG.Videos



            this.Allofdata.YuLeMsg.PicturesAndText
            this.Allofdata.YuLeMsg.Recommend
            this.Allofdata.YuLeMsg.Pictures
            this.Allofdata.YuLeMsg.Vodeos


            this.Allofdata.KeJiMsg.PictureAndText
            this.Allofdata.KeJiMsg.OnlyText
            this.Allofdata.KeJiMsg.Pictures
*/

           /* console.log(  this.gotdata[0].contents[0].title+"：：：标题");
            console.log(  this.gotdata[0].contents[0].text+"：：：内容");
            console.log(  this.gotdata[0].contents[0].type+"：：：类型");*/
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
    .showpicture{
        width: 230px;
        height: 230px;
        cursor: pointer;
       /* clear: both;clear: both清除上一个浮动对下一个的影响显示图片 也不许当前浮动*/
      /*  clear: both;*/
        margin-left: 25px;
     /*   padding-top:200px;*/


        border-top :10px solid darkgray;
        border-bottom:10px solid darkgray;
        border-right:10px solid darkgray;
        border-left:10px solid darkgray;
    }
    .allboder{
      /*  border-top :50px solid deepskyblue;*/
        height: auto;
        border-bottom:20px solid deepskyblue;
        border-right:20px solid deepskyblue;
        border-left:20px solid deepskyblue;
    }
    .pictureboder{
        margin-top: 85px;
        width: 100%;
        /*border-top :10px solid deepskyblue;
        border-bottom:10px solid deepskyblue;
        border-right:10px solid deepskyblue;
        border-left:10px solid deepskyblue;*/
    }
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
        height: 301px;
        overflow:auto;
       /* margin-left: 50%;*/
        margin-top: 130px;
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
        width: auto;
        height: auto;
        margin-top: 4%;
        /*   background: blue;*/
     /*   margin-right: 5%;*/
        cursor:pointer;/*鼠标放上去是一个手*/
        margin-left: 10px;
        border-left:20px solid #99a9bf;
        border-right:20px solid #99a9bf;
        border-top :30px solid #99a9bf;

        border-bottom:20px solid #99a9bf;
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

        margin-left: 100px;
        margin-top: 10px;

        height: 150px;
        width: 500px;

        align:center;

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
        margin-top: 10px;

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
       /* word-wrap:break-word ;
        border-radius: 4px;
        height: 350px;
        color: #333;
        cursor:pointer;*//*鼠标放上去是一个手*/
        /* box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);*/

    /*    margin-left: 5%;*/
    /*    margin-top: 5%;*/
        /*  background-color: #D3DCE6;*/
        /*  background: black;*/

        /*      text-align: center;*/
       /* border-left:1px solid #000;
        border-right:1px solid #000;
        border-top :1px solid #000;

        border-bottom:1px solid #000;*/
    }
    .el-main{



      /*  word-wrap:break-word ;
        border-radius: 4px;
        margin-top: 5%;
        height: 350px;
        width: 300px;
        cursor:pointer;*//*鼠标放上去是一个手*/
        /*   box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);*/

        /*  background: red;*/

        /*     display:inline-block;360*/


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
