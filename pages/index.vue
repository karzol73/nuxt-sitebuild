<template>
  <div>
    <Carousel :products="carousel" @update:option="itemUpdate"/>
    <Compare :items="compare" :currentItem="currentItem" />
    <Info :info="info" />
  </div>
</template>

<script>
  export default {
    
    // fetching data from content
    async asyncData ({ $content }) {
      const info = await $content('information').fetch()
      return {
        info
      }
    },
    // static data for testing
    data() {
      return {
        currentItem: 1,
        carousel: 
          [
            {
              id: 1, 
              title: "Apple TV", 
              img: "apple.png"
            },
            {
              id: 2, 
              title: "Chromecast", 
              img: "chromecast.png"
            },
            {
              id: 3, 
              title: "Click Share", 
              img: "clickshare.png"
            },
            {
              id: 4, 
              title: "wePresent", 
              img: "wepresent.png"
            },
            {
              id: 5,
              title: "Creston", 
              img: "creston.png"
            },
            {
              id: 6, 
              title: "Action Tech", 
              img: "actiontech.png"
            },
            {
              id: 7, 
              title: "Mersive", 
              img: "mersive.png"
            }
          ],
        compare: 
          [
            {
              id: 1,
              title: "Airtame", 
              excerpt: "Ideal for business and schools work.",
              img: "airtame-comp.png",
              lineOneTitle: "Pick Airtame if",
              lineOneText: "If you want a device agnostic option for your school or business that lets you stream wirelessly, Airtame is the Apple TV alternative for your needs.",
              lineTwoTitle: "Airtame for school and work",
              lineTwoText: "Airtame is that Airtame is intended for collaborative work at schools and offices.",
              lineThreeTitle: "Device agnostic",
              lineThreeText: "Work on multiple platforms.",
              icons: ["apple.svg", "windows.svg", "android.svg"]
            },
            {
              id: 2,
              title: "Apple TV", 
              excerpt: "Ideal for your home entertainment.",
              img: "apple-comp.png",
              lineOneTitle: "Pick Apple TV if",
              lineOneText: "If you only own Apple devices and want to easily watch movies and entertainment at home, you should consider the Apple TV.",
              lineTwoTitle: "Apple TV for home",
              lineTwoText: "Apple TV is made for watching TV shows and sharing personal media at home.",
              lineThreeTitle: "Apple-centric",
              lineThreeText: "Work only with Mac and iOS.",
              icons: ["apple.svg"]
            },
            {
              id: 3,
              title: "Chromecast", 
              excerpt: "Ideal for your home entertainment.",
              img: "chromecast-comp.png",
              lineOneTitle: "Pick Chromecast if",
              lineOneText: "If you only own Chromecast devices and want to easily watch movies and entertainment at home, you should consider the Apple TV.",
              lineTwoTitle: "Chromecast for home",
              lineTwoText: "Chromecast is made for watching TV shows and sharing personal media at home.",
              lineThreeTitle: "Android-centric",
              lineThreeText: "Work only with Android.",
              icons: ["android.svg"]
            },
            {
              id: 4,
              title: "Click Share", 
              excerpt: "Ideal for your home entertainment.",
              img: "clickshare-comp.png",
              lineOneTitle: "Pick Click Share if",
              lineOneText: "If you only own Click Share devices and want to easily watch movies and entertainment at home, you should consider the Apple TV.",
              lineTwoTitle: "Click Share for home",
              lineTwoText: "Click Share is made for watching TV shows and sharing personal media at home.",
              lineThreeTitle: "Android-centric",
              lineThreeText: "Work only with Android.",
              icons: ["android.svg"]
            }
          ]
      } 
    },
    // Receive productId from Carousel.vue and update currentItem before pass to Compare.vue
    methods: {
      itemUpdate: function(value) {
        this.currentItem = value
      }
    }
  }
</script>