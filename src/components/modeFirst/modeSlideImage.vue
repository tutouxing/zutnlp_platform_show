<template>
    <div class="slidImageDiv">
        <el-carousel :interval="4000" type="card" height="300px" width="200px" >
            <el-carousel-item v-for="item in dataimg" :key="item">
                <div style="color: #000000;text-align: center;overflow: hidden;width: 100%;">
                    <img style="width: 100%; height: auto;" class="bannertt" :src="item.src" >
                    <h3>{{ item }}</h3>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "modeSlideImage",
        computed:{},
        data() {
            return {
                dataimg: [
                    {
                        src: require('@/assets/img/hamburger.png'),
                    },{
                        src: require('@/assets/img/hamburger1.png'),
                    },
                    {
                        src: require('@/assets/img/hamburger2.png'),
                    },
                    {
                        src: require('@/assets/img/hamburger3.png'),
                    },
                    {
                        src: require('@/assets/img/hamburger4.png'),
                    },
                    {
                        src: require('@/assets/img/hamburger5.png'),
                    }
                ],
                bannerH:this.setBannerH1,
            }
        },
        methods: {
            setBannerH(){
                this.bannerH=document.getElementsByClassName("bannertt")[0].height
            },
            setBannerH1(){
                var bwidth=document.getElementsByClassName("bannertt")[0].width;
                var bheight=document.getElementsByClassName("bannertt")[0].height;
                var ssss=document.body.clientWidth;
                this.bannerH=ssss*(bheight/bwidth);
            },
        },
        mounted(){
            this.setBannerH1()//初始值根据图片的缩放比率和屏幕大小来定，不然走马灯开始时候就会默认一个值
            window.addEventListener('resize',()=>{
                this.setBannerH()
            },false)
        }
    }
</script>

<style scoped>
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
    .slidImageDiv{
        margin-left: 5%;
        margin-right: 5%;
    }
    gg{
        display: inline;
        height: 300px;
        width: 200px;
    }
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#2361b9}
    a:active{color: #ffffff}
</style>