<template>
    <div >
<!--        <el-carousel :interval="4000" type="card" height="300px" width="200px" >-->
<!--            <el-carousel-item v-for="item in dataimg" :key="item">-->
<!--                <div style="color: #000000;text-align: center;overflow: hidden;width: 100%;">-->
<!--                    <img style="width: 100%; height: auto;" class="bannertt" :src="item.src" >-->
<!--                    <h3>{{ item }}</h3>-->
<!--                </div>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->
        <el-carousel indicator-position="outside"  height="400px" :autoplay="true">
            <el-carousel-item v-for="item in dataimg" :key="item">
                    <img  :src="item.src" height="400px" width="1400px">
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
                        src: require('@/assets/img/school1.jpg'),
                    },{
                        src: require('@/assets/img/hg.jpg'),
                    },
                    {
                        src: require('@/assets/img/banner2.jpg'),
                    }

                ],
                bannerH:this.setBannerH1,
            }
        },
        methods: {
        },
        mounted(){
            this.setBannerH1()//初始值根据图片的缩放比率和屏幕大小来定，不然走马灯开始时候就会默认一个值
            window.addEventListener('resize',()=>{
                this.setBannerH()
            },false)
        },
        setSize: function () {
            this.bannerHeight = 740 / 2560 * this.screenWidth
            if(this.bannerHeight > 740) this.bannerHeight = 740
            if(this.bannerHeight < 360) this.bannerHeight = 360
        }
    }
</script>

<style scoped>
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
</style>