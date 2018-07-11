<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Days To Go
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <h4 class="powered-by">
        {{poweredBy}}
      </h4>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <br/>
      <div>
        <a target="_blank" class="button--grey" @click="onTap">
          Tap me! {{this.count}}
        </a>
      </div>
      <br/>

      <div>
        <input type="text" v-model="name"/>
        <h4 class="subtitle">{{name}}</h4>
      </div>
    </div>
    
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  head() {
    return {
      title: this.seo_data.title
    }
  },
  data() {
    return {
      poweredBy: 'Powered by ChidiyaJS',
      seo_data: null, //initialize
      count: 1,
      name: 'Two Way Binding Example'
    }
  },
  methods: { 
    onTap() {
      console.log("onTap called.");
      this.count++;
    }
  },
  async asyncData({req}) {
    console.log("This Function will be called SERVER_SIDE.");
    console.log("RequestData: ", req.data);
    const seo_data = req.data;
    return {
      seo_data //override (default seo_data)
    }
  }
}
</script>

<style>
input {
  padding: 10px;
  height:40px;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.powered-by {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  color: #cacaca;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
