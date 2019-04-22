<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <el-scrollbar style="overflow-x: hidden;">
          <login/>
        </el-scrollbar>
      </div>
      <video style="width: 100%;" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="@/assets/vedio/Modem-lights.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <!--<source src="PATH_TO_WEBM" type="video/webm"/>-->
        <!--浏览器不支持 video 标签，建议升级浏览器。-->
      </video>

      <!--<div class="poster hidden" v-if="!vedioCanPlay">-->
      <!--<img style="width: 1000px;height: auto" src="@/assets/vedio/Xmas-Lights-Bokeh.jpg" alt="">-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-01-09 10:29
     */
    import login from './login'

    export default {
        name: "bgImg",
        data() {
            return {
                vedioCanPlay: false,
                fixStyle: ''
            }
        },
        methods: {
            canplay() {
                this.vedioCanPlay = true
            }
        },
        components: {
            login
        },
        mounted: function () {
            window.onresize = () => {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    this.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    this.fixStyle = {
                        height: windowHeight + 'px',
                        width: windowHeight / 0.5625 + 'px',
                        'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                        'margin-bottom': 'initial'
                    }
                }
            }
            window.onresize()
        }
    }
</script>

<style scoped>
  .homepage-hero-module,
  .video-container {
    /*position: relative;*/
    height: 100%;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    /*position: absolute;*/
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }
</style>