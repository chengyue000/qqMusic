<template>
    <header>
        <ul class="hall_nav">
            <li><a href="##"><span class="iconfont icon-faxian"></span></a></li>
            <li><router-link to="/musicMine" tag="a" class="h_select">我的</router-link></li>
            <li><router-link to="/musicHall" tag="a" class="h_select">音乐馆</router-link></li>
            <li><router-link to="/musicFind" tag="a" class="h_select">发现</router-link></li>
            <li><a href="##"><span class="iconfont icon-jiahao"></span></a></li>
        </ul>
        <p>
            <img src="img/hallImg/h-h-1.png" alt="">
            <a href="##">搜索</a>
        </p>
    </header>
</template>

<script>
export default {
    name:"musicHallHeader"
}
</script>
<style>
header{
    width:100%;
    background-color:#62bf82;
    padding-bottom: .08rem;
}
header .hall_nav{
    display: -webkit-flex;
    -webkit-align-items: center;
    height:.49rem;
}
header .hall_nav span{
    font-size:.21rem;
    color:#ffffff;
    display:block;
}
header .hall_nav a{
    font-size:.18rem;
    color:#edf8f2;
    display:block;
}
header p{
    display: -webkit-flex;
    width:3.59rem;
    background-color: #55a872;
    height:.33rem;
    margin:0 auto;
    -webkit-justify-content: center;
    -webkit-align-items: center;
}
header p img{
    width:.14rem;
    height:.14rem;
    margin-right: .08rem;
}
header p a{
    color:#ebf6f0;
    font-size:.14rem;
}
header .icon-faxian{
    margin-left: .13rem;
    margin-right: .54rem;
    font-weight: 600;
}
.hall_nav .h_select{
    margin:0 .12rem;
}
.hall_nav .icon-jiahao{
    margin-left: .55rem;
}

</style>


