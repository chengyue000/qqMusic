<template>
    <!-- about_music -->
    <div class="about_music" v-if="data">
        <ul class="music_con">
            <li>
                <a href="##">
                    <span class="iconfont icon-yinle"></span>
                    <span>全部音乐</span>
                    <span>{{data.aboutMusic[0]}}</span>
                </a>
            </li>
            <li>
                <a href="##">
                    <span class="iconfont icon-xiazai"></span>
                    <span>下载音乐</span>
                    <span>历史{{data.aboutMusic[1]}}</span>
                </a>
            </li>
            <li>
                <a href="##">
                    <span class="iconfont icon-bofang"></span>
                    <span>最近播放</span>
                    <span>{{data.aboutMusic[2]}}</span>
                </a>
            </li>
            <li>
                <a href="##">
                    <span class="iconfont icon-xihuan"></span>
                    <span>我喜欢</span>
                    <span>{{data.aboutMusic[3]}}</span>
                </a>
            </li>
            <li>
                <a href="##">
                    <span class="iconfont icon-yigouyinyue"></span>
                    <span>已购音乐</span>
                    <span>{{data.aboutMusic[4]}}</span>
                </a>
            </li>
            <li>
                <a href="##">
                    <span class="iconfont icon-paobu"></span>
                    <span>跑步电台</span>
                    <span>{{data.aboutMusic[5]}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"musicAboutMusic",
    props:["data"],
    data(){
        return{
            obj:{
                
            }
        }
    }
}
</script>
<style>
/* about_music */
.about_music{
    width:100%;
}
.music_con{
    display:-webkit-flex;
    flex-wrap: wrap;

}
.music_con li {
    width:1.23rem;
    display:block;
    height:.87rem;
    
}
.music_con li a span{
    display:block;
    text-align: center;
}
.music_con li a span:nth-child(1){
    font-size:.3rem;
    color:#5ec184;
    font-weight: 600;
    margin-top:.11rem;
}
.music_con li a span:nth-child(2){
    font-size:14px;
    color:#000000;
    line-height: .3rem;
}
.music_con li a span:nth-child(3){
    font-size:12px;
    color:#666566;
}
</style>


