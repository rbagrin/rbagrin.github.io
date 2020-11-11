<template>
    <v-app>
        <v-app-bar
        
        app
        
      color="#6A76AB"
      dark
       
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"

      fade-img-on-scroll
    >
    <a class="link" href="/"><h1>Radu Bagrin</h1></a>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-spacer></v-spacer>

    <h3>Software Engineer</h3>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
            <v-tab><a class="link" @click="$vuetify.goTo('#about', options)" >About me</a></v-tab>
          <v-tab><a class="link" @click="$vuetify.goTo('#experience', options)">Experience</a></v-tab>
          <v-tab><a class="link" @click="$vuetify.goTo('#education', options)">Education</a></v-tab>
          <v-tab><a class="link" @click="$vuetify.goTo('#courses', options)">Courses</a></v-tab>
          <v-tab><a class="link" @click="$vuetify.goTo('#portfolio', options)">Portfolio</a></v-tab>
          <v-tab><a class="link" @click="$vuetify.goTo('#contact', options)">Contact</a></v-tab>

          <v-spacer></v-spacer>

          <v-btn text @click="handleScroll(3)">dowload CV</v-btn>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>

    


<div @mouseover="handleScroll(0)" style="height:400px; background-color: red">
    <h2 id=about>About me</h2>
</div>

<div @mouseover="handleScroll(1)" style="height:350px; background-color: green">
    <h2 id=experience>Experience</h2>
</div>

<div @mouseover="handleScroll(2)" style="height:300px; background-color: blue">
    <h2 id=education>Education</h2>
</div>

<div @mouseover="handleScroll(3)" style="height:500px; background-color: purple">
    <h2 id=courses>Courses</h2>
</div>

<div  @mouseover="handleScroll(4)" style="height:350px; background-color: brown">
    <h2 id=portfolio>Portfolio</h2>
</div>

<div @mouseover="handleScroll(5)" style="height:400px; background-color: orange">
    <h2 id=contact>Contact</h2>
</div>

</v-main>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
    name: 'App',

    components: {
        // HelloWorld,
    },

    data () {
      return {
        tab: 0,
        handleScroll: function(tab) {
            this.tab = tab;
        }
        }
    },
};
</script>


<style>

.link, .link:visited, .link:link, .link:hover, .link:active {
    text-decoration: none;
    color: inherit !important;
}

</style>