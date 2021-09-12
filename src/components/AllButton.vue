<template>
    <div class="btn" role="button">
        
    <router-link class="btn-active" to="/search">
    <div><img src="../assets/list.png" alt=""></div>
    <div><p class="text-5">All</p></div>
    </router-link>
    
     </div>

     <div class="btn-2">         
     <router-link class="btn-inactive" to="/search">
     <div><img src="../assets/star.png" alt=""></div>
     <div ><p class="text-5">Favorites</p></div>
     </router-link>    
     </div> 
  
  
</template>

<script>
export default {
    name: 'AllButton'
}
</script>

<style>

.btn-active{
display: flex;
flex-direction: row;
align-items: center;
padding: 11px 20px;
width: 200px;
position: absolute;
justify-content: center;
height: 21px;
top: 100%;
left: 20%;
background: #F22539;
border-radius: 60px;
}
.btn-inactive{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 11px 20px;
width: 200px;
position: absolute;
height: 21px;
top: 100%;
left: 20%;
background: #bfbfbf;
border-radius: 60px;
}
.btn{
    height: 100%;
    position:absolute;
    height:30px;
    z-index:0;
    left: 20%;
    
}
.btn-2{
    height: 100%;
    position:absolute;
    height:30px;
    z-index:0;
    left: 45%;
}
.text-5{
 color: #ffffff;
 margin-left: 20%;   
}

</style>