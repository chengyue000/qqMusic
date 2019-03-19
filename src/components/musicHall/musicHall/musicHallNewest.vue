<template>
<!-- newest_album -->
    <div class="newest_album" v-if="value">
            <div class="common_type">
                <h2>最近专辑</h2>
                <a href="##">
                    <img src="../../../assets/imgs/hallImg/gengduo.png" alt="">
                </a>
            </div>
            <div class="ge_dan_content">
                <div class="public_con content_one">
                    <a href="##">
                        <img :src="value.albumImg[0]" alt="">   
                    </a>
                    <span>{{value.albumName[0]}}</span>
                    <span>{{value.albumSinger[0]}}</span>
                </div>
                <div class="public_con content_two">
                    <a href="##">
                        <img :src="value.albumImg[1]" alt="">   
                    </a>
                    <span>{{value.albumName[1]}}</span>
                    <span>{{value.albumSinger[2]}}</span>
                </div>
                <div class="public_con content_three">
                    <a href="##">
                        <img :src="value.albumImg[2]" alt="">
                    </a>
                    <span>{{value.albumName[2]}}</span>
                    <span>{{value.albumSinger[2]}}</span>
                </div>  
            </div>

    </div>
</template>
<script>
export default {
    name:"musicHallNewest",
    props:["value"]
}
</script>
<style>
/* newest_album */
.newest_album .ge_dan_content .public_con span:nth-child(2){
    font-size: 12px;
    display: block;
    color:#2b2b2b;
    margin:.06rem .09rem 0 .06rem;
}
.newest_album .ge_dan_content .public_con span:nth-child(3){
    font-size:12px;
    color:#7e7e7e;
    display: block;
    margin:.06rem .09rem 0 .06rem;
}
</style>


