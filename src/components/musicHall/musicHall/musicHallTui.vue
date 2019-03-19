<template>
    <!-- tui_jian -->
    <div class="tui_jian" v-if="value">
        <div class="tui_left">
            <a href="##">
                <img :src="value.tuiLeftImg" alt="">
            </a>
        </div>
        <div class="tui_right">
            <div class="tui_right_one">
                <a href="##">
                    <span class="new_music">新歌新碟</span>
                    <span class="huxia">{{value.newMusicTitle}}</span>
                </a>
                <a href="##">
                    <img :src="value.newMusicImg" alt="">
                </a>               
            </div>
            <div class="tui_right_one">
                    <a href="##">
                        <span class="new_music">数字专辑.票务</span>
                        <span class="huxia">{{value.ticketTitle}}</span>
                    </a>
                    <a href="##">
                        <img :src="value.ticketImg" alt="">
                    </a>               
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"musicHallTui",
    props:["value"]
}
</script>
<style>
/* tui_jian */
.tui_jian{
    /* margin-top:1rem; */
    display: -webkit-flex;
    justify-content: space-around;
}
.tui_jian .tui_left a {
    display: block;
    width:1.25rem;
    height:1.25rem;
}
.tui_jian .tui_left a img{
    width:1.25rem;
    height:1.25rem;
}
.tui_jian .tui_right_one {
    display: -webkit-flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    width:2.07rem;
    padding-left: .14rem;
    margin-bottom:.05rem;
} 
.tui_jian .tui_right_one .new_music{
    font-size: .15rem;
    color:black;
    display: block;
    margin-top:.14rem;
}
.tui_jian .tui_right_one .huxia{
    font-size:11px;
    color:#626262;
    display: block;

}
.tui_jian .tui_right_one a:last-child img{
    width:.6rem;
    height:.6rem;
}
</style>


