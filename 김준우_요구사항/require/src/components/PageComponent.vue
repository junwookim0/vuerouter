<template>
    <div class="page">
        <h1>1 페이지 입니다</h1>
        
      
        <li v-for="item in test" :key="item.name">

          <div>
              <img width="200" height="150" :src="item.image_url"/>
              {{item.name}}
          </div>
        </li>
    </div>
</template>



<script>
import test from '@/assets/test.json'


export default {
    name : 'PageComponent',
    data : function(){
      return{
        test : test,
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
