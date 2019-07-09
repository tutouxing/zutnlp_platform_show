<template>
    <div >
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
                        src: require('@/assets/img/school1.png'),
                    },{
                        src: require('@/assets/img/hg.png'),
                    },
                    {
                        src: require('@/assets/img/banner2.png'),
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
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
</style>