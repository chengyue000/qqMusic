<template>
    <!-- personalInfo -->
    <div class="personalInfo" v-if="data">
        <div class="per_con">
            <img :src="data.userLogoImg" alt="">
            <p>{{data.userName}}</p>
            <img :src="data.userVipImg1" alt="">
            <img :src="data.userVipImg2" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"musicPersonInfo",
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
/* personalInfo */
.per_con{
    width:100%;
    height:.74rem;
    display:-webkit-flex;
    -webkit-justify-content:center;
    -webkit-align-items:center;
}
.per_con img:nth-child(1){
    width:.3rem;
    height:.31rem;
   margin-right: .06rem;
}
.per_con p{
    color:black;
    font-size:.17rem;
}
.per_con img:nth-child(3){
    width:.19rem;
    height:.14rem;
    margin-left:.1rem;
    margin-right:.04rem;
}
.per_con img:nth-child(4){
    width:.19rem;
    height:.14rem;
}
</style>


