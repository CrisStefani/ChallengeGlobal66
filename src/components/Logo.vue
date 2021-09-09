<template>
      <div class="p1-welcome">
          <div class="overlap-group">
            <img class="ellipse-10" src="../assets/ellipse.png" alt="">
            <img class="mask-group" src="../assets/pickachu.png" alt="">
          </div>
      </div>
      
        
      
</template>

<script>
export default {
  name: 'Logo',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p1-welcome{
  align-items: flex-end;
  
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: auto;
}
.overlap-group{
  align-self: center;
  height: 288px;
  margin-left: 1px;
  position: relative;
  width: 325px;  
}
.ellipse-10{
  height: 206px;
  left: 49px;
  position: absolute;
  top: 71px;
  width: 206px;
}
.mask-group{
  height: 288px;
  left: 0;
  position: absolute;
  top: 0;
  width: 325px;
}


</style>
