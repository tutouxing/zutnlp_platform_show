<template>
  <!--  <div  style="text-align:center; width: 520px; margin-left: 30%" >
        <h2>{{AllMsg.OnlyMsg.HeadLine}}</h2>
        <div v-for="(item ,index) in AllMsg.TextMsg[0].Text" >
            <p>{{item}}</p>
            <img src="AllMsg.TextMsg.Iconographs[index].picture" style="width: 510px;height: 316px"/>
        </div>

        <p>{{AllMsg.TextMsg[0].TailText}} </p>
    </div>-->
    <div id="ps" style="text-align:center;margin: auto; width:100%;height: 100%;" >
        <div v-for="(item ,index) in AllMsg.Pictures" v-if="index<1" v-on:click="nextone()" @mousemove="getMousePos"><!--v-for="(item ,index) in AllMsg.Pictures"-->
        <img style="margin-top: 20%; width: 800px;height: 600px"  :src="AllMsg.Pictures[AllMsg.num].url" />
            <p style="font-size: 40px">{{item.Introduction}}        第{{AllMsg.num+1}}张  </p>
            <p style="font-size: 40px">{{AllMsg.coordinatesofmouse.x}}</p>
        </div>
    </div>
</template>

<script>
    import left from '../Picture/left.jpg'
    import right from '../Picture/right.jpg'

    export default {
        name: "PlayManyPicturesContentMsg",
        data(){
            return {
                AllMsg:{
                   /* //TextMsg:[
                        {
                            HeadLine:'标题',/////大字标题
                            TextContent:'sdsadasdasdasdasda',//文本内容
                            Iconographs:[
                                {

                                }
                            ],//插图
                            Text:[
                                {
                                    msg:'',
                                }
                            ],
                        }
                    ],
                    OnlyMsg:{

                    }*/
                   Pictures:{},
                    num:0,
                    hint:false,
                    directions:{
                       left:left,
                        right:right
                    },
                    coordinatesofmouse:{
                       x:'',
                        y:'',
                    }

                },
            }
        },
        watch:{

        },
        methods:{


                getMousePos() {
                let obj = document.getElementById("ps");

                    var e = event || window.event;
                    this.AllMsg.coordinatesofmouse.x=e.clientX;//获取鼠标的位置信息
                if(this.AllMsg.coordinatesofmouse.x<=680)
                {
                    console.log("111111111");
                    obj.setAttribute("class","ShapeLeft");
                   // this.$forceUpdate();
                }else if(this.AllMsg.coordinatesofmouse.x>680)
                {
                    console.log("222222222222");
                   obj.setAttribute("class","ShapeRigth");
                   // this.$forceUpdate();
    }
            },
            nextone(){

                //obj.style.cursor=left;

               /* var obj = document.getElementById("ps");
                obj.style.backgroundColor= "black";*/

              if(this.AllMsg.coordinatesofmouse.x<=680&&this.AllMsg.num>0){
                  this.AllMsg.num--;
               }else if( this.AllMsg.coordinatesofmouse.x>680&&this.AllMsg.num<this.AllMsg.Pictures.length){
                  this.AllMsg.num++;
               }
                if(this.AllMsg.num>=this.AllMsg.Pictures.length)
                {
                    this.$alert("最后一张了");
                }
            }
        },
        mounted(){
            this.AllMsg.Pictures=this.$route.params.items;//接收唯一标识id
            this.getMousePos();
            /*  this.AllMsg.TextMsg[0].Iconographs =this.AllMsg.OnlyMsg.Iconographs;
              let that=this;
              for(let i=0;i<this.AllMsg.TextMsg[0].Iconograph.length;i++)
              {
                  this.AllMsg.TextMsg.Text[i].msg=this.AllMsg.OnlyMsg.TextContent.toString().substr(i*that.AllMsg.OnlyMsg.TextContent.length/that.AllMsg.TextMsg[0].Iconograph.length,(i+1)*that.AllMsg.OnlyMsg.TextContent.length/that.AllMsg.TextMsg[0].Iconograph.length);
              }*/

        }
    }
</script>

<style scoped>
    .Shape{
        cursor:pointer;
    }
    .ShapeLeft{
        cursor: url("../Picture/left.jpg"),pointer;
    }
    .ShapeRigth{
        cursor: url("../Picture/right.jpg"),pointer;
    }
</style>