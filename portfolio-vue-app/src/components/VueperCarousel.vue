<template>
  <div class="container">
    <vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250">
      <vueper-slide
        v-for="i in 6"
        :key="i"
        :title="i.toString()"
        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'



export default {
  name: 'ProjectCarousel',
  components: { VueperSlides, VueperSlide }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: 0 10%;
}
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>
