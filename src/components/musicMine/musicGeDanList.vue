<template>
    <!-- gedan_list -->
    <div class="gedan_list" v-if="data">
        <div class="gedan_list_con">
            <div class="gedan_list_left">
                <img :src="data.makeMusicList.musicListImg[0]" alt="">
                <p>
                    <span>{{data.makeMusicList.musicListTitle[0]}}</span>
                    <span>{{data.makeMusicList.musicListInfo[0]}}</span>
                </p>
            </div>
            <img src="../../assets/imgs/mineImg/dayu.png" alt="">
        </div>
        <div class="gedan_list_con">
            <div class="gedan_list_left">
                <img :src="data.makeMusicList.musicListImg[1]" alt="">
                <p>
                    <span>{{data.makeMusicList.musicListTitle[1]}}</span>
                    <span>{{data.makeMusicList.musicListInfo[1]}}</span>
                </p>
            </div>
            <img src="../../assets/imgs/mineImg/dayu.png" alt="">
        </div>
        <div class="gedan_list_con">
            <div class="gedan_list_left">
                <img :src="data.makeMusicList.musicListImg[2]" alt="">
                <p>
                    <span>{{data.makeMusicList.musicListTitle[2]}}</span>
                    <span>{{data.makeMusicList.musicListInfo[2]}}</span>
                </p>
            </div>
            <img src="../../assets/imgs/mineImg/dayu.png" alt="">
        </div>
            <div class="gedan_list_con">
                <div class="gedan_list_left">
                    <img :src="data.makeMusicList.musicListImg[3]" alt="">
                    <p>
                        <span>{{data.makeMusicList.musicListTitle[3]}}</span>
                        <span>{{data.makeMusicList.musicListInfo[3]}}</span>
                    </p>
                </div>
                <img src="../../assets/imgs/mineImg/dayu.png" alt="">
            </div>
            <div class="gedan_list_con">
                    <div class="gedan_list_left">
                        <img :src="data.makeMusicList.musicListImg[4]" alt="">
                        <p>
                            <span>{{data.makeMusicList.musicListTitle[4]}}</span>
                            <span>{{data.makeMusicList.musicListInfo[4]}}</span>
                        </p>
                    </div>
                    <img src="../../assets/imgs/mineImg/dayu.png" alt="">
                </div>
            <div class="gedan_list_con">
                <div class="gedan_list_left">
                    <img :src="data.makeMusicList.musicListImg[5]" alt="">
                    <p>
                        <span>{{data.makeMusicList.musicListTitle[5]}}</span>
                        <span>{{data.makeMusicList.musicListInfo[5]}}</span>
                    </p>
                </div>
                <img src="../../assets/imgs/mineImg/dayu.png" alt="">
            </div>
            <div class="gedan_list_con">
                <div class="gedan_list_left">
                    <img :src="data.makeMusicList.musicListImg[6]" alt="">
                    <p>
                        <span>{{data.makeMusicList.musicListTitle[6]}}</span>
                        <span>{{data.makeMusicList.musicListInfo[6]}}</span>
                    </p>
                </div>
                <img src="../../assets/imgs/mineImg/dayu.png" alt="">
            </div>
            <div class="gedan_list_con">
                <div class="gedan_list_left">
                    <img :src="data.makeMusicList.musicListImg[7]" alt="">
                    <p>
                        <span>{{data.makeMusicList.musicListTitle[7]}}</span>
                        <span>{{data.makeMusicList.musicListInfo[7]}}</span>
                    </p>
                </div>
                <img src="../../assets/imgs/mineImg/dayu.png" alt="">
            </div>
            <div class="gedan_list_con">
                <div class="gedan_list_left">
                    <img :src="data.makeMusicList.musicListImg[8]" alt="">
                    <p>
                        <span>{{data.makeMusicList.musicListTitle[8]}}</span>
                        <span>{{data.makeMusicList.musicListInfo[8]}}</span>
                    </p>
                </div>
                <img src="../../assets/imgs/mineImg/dayu.png" alt="">
            </div>
    </div>
</template>
<script>
export default {
    name:"musicGeDanList",
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
/* gedan_list */
.gedan_list_con{
    width:3.47rem;
    margin:0 auto;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content: space-between;
}
.gedan_list_left{
    display: -webkit-flex;
    -webkit-align-items:center;
}
.gedan_list_left img:first-child{
    width:.6rem;
    height:.6rem;
    margin-right: .1rem;
    margin-bottom: .07rem;
}
.gedan_list_con img:last-child{
    width:.07rem;
    height:.11rem;
    margin-right: .08rem;
}
.gedan_list_left  p span:nth-child(1){
    font-size:.15rem;
    color:black;
    display: block;
}
.gedan_list_left  p span:nth-child(2){
    font-size:12px;
    color:#666666;
    display: block;
    line-height: .18rem;
}
</style>


