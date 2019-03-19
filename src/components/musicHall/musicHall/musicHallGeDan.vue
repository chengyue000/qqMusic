<template>
<!-- ge_dan -->
    <div class=" ge_dan" v-if="value&&value.recommendList">
        <div class="common_type">
            <h2>为你推荐歌单</h2>
            <a href="##">
                <img :src="value.publicImg" alt="">
            </a>
        </div>
        <div class="ge_dan_content">
            <a href="##">
                <img :src="value.recommendList.SongListImg[0]" alt="">
                <span>{{value.recommendList.SongListTitle[0]}}</span>
            </a>
            <a href="##">
                <img :src="value.recommendList.SongListImg[1]" alt="">
                <span>{{value.recommendList.SongListTitle[1]}}</span>
            </a>
            <a href="##"><img :src="value.recommendList.SongListImg[2]" alt=""><span>{{value.recommendList.SongListTitle[2]}}</span></a>
            <a href="##"><img :src="value.recommendList.SongListImg[3]" alt=""><span>{{value.recommendList.SongListTitle[3]}}</span></a>
            <a href="##"><img :src="value.recommendList.SongListImg[4]" alt=""><span>{{value.recommendList.SongListTitle[4]}}</span></a>
            <a href="##"><img :src="value.recommendList.SongListImg[5]" alt=""><span>{{value.recommendList.SongListTitle[5]}}</span></a>
        </div>
        <div class="huan">
            <button>
                <img src="../../../assets/imgs/hallImg/huan-1.png" alt="">
                <span>换一批</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:"musicHallGeDan",
    props:["value"]
}
</script>
<style>

.common_type{
    display: -webkit-flex;
    align-items: center;
    height:.56rem;
    margin-top:.07rem;

}
.common_type h2{
    font-size: .17rem;
    font-weight:100;
    margin:0 auto;
}
.common_type a img{
    width:.19rem;
    height:.19rem;
    margin-right: .15rem;
}
.ge_dan_content{
    flex-wrap: wrap;
    display: -webkit-flex;
    justify-content: space-between;
}
.ge_dan_content a{
    display: block;
    width:1.23rem;
}
.ge_dan_content a span{
    font-size: 12px;
    display: block;
    line-height: .18rem;
    color:#1f1f1f;
    height:.57rem;
    margin:.06rem .09rem 0 .06rem;
}
.ge_dan_content img{
    width:1.23rem;
    height:1.23rem;
}
.ge_dan .huan{
    width:1.29rem;
    height:.31rem;
    margin:0 auto;
}
.ge_dan .huan button{
    width:1.29rem;
    height:.31rem;
    display: -webkit-flex;
    align-items: center;
    background-color: white;
    border:none;
    border:1px solid #b3b3b3;
    justify-content: center;
    
}
.ge_dan .huan button img{
    width:.14rem;
    height:.15rem;
    margin-right: .13rem;
    border-radius: 3px;
}
.ge_dan .huan button span{
    font-size: 13px;
    color:#111111;
    display:block;
}
</style>


