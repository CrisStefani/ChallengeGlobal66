<template>
  <div class="text-1">
      Welcome to Pokédex
  </div>
  <div class="text-2">
      The digital encyclopedia created by Professor Oak is an invaluable tool 
      to Trainers in the Pokémon world.
  </div>
</template>

<script>
export default {
name: 'Text'
}
</script>

<style>
.text-1{
 
width: 100%;
height: 31px;
margin: auto;

font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 31px;

text-align: center;

color: #353535;  
 ;
}
.text-2{
    position: absolute;
width: 50%;
height: 54px;
left: 20%;
top: 350px;

font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;
/* or 27px */

text-align: center;

color: #5E5E5E;

}
</style>