<template>
    <form action="">
        <div class="search-bar">
            <div>
        <img class="image" src="../assets/search.png" alt="">
        </div>
        <div class="text-4">
           <input type="text"  placeholder="Search"> 
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style>
.search-bar{
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #0000000a;
    display: flex;
    height: 35px;
    overflow: hidden;
    padding: 0 15px;
    padding-top: 1%;
    width: 570px;
    margin-left: 20%;
    margin-top: 5%;
    flex-wrap: wrap;
  flex-direction: row;
  justify-content: normal;
  align-items: auto;
  align-content: start;
  

}
.text-4{
   color: #bfbfbf;
   font-family: montserrat;
   font-size: medium;
   font-weight: 500;
   letter-spacing: 0;
   margin-left: 10px;
   min-height: 22px;
   min-width: 58px; 
}
.image{
    height: 18px;
    width: 18px;
}
input{
    border:0;
}
</style>