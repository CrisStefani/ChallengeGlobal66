<template>
  
    <router-link class="btn-normal" to="/search"><p class="text-3">Get started</p></router-link>
      
  
  
</template>

<script>
export default {
    name: 'FormButton'
}
</script>

<style>
.btn-normal{
display: flex;
flex-direction: row;
align-items: center;
padding: 11px 20px;

position: absolute;

height: 25px;

top: 50%;
left: 40%;


background: #F22539;
border-radius: 60px;
}
.text-3{
  position: static;
width: 95px;
height: 22px;
left: 25px;
top: 11px;

font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 20px 5px;
}
</style>