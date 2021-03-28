<template>
    <section class="container relative margin-top-1">

            <!-- Compare Box Container -->
            <div class="compare-container relative flex full-width">
                
                <!-- Compare Box 1: Airtame -->
                <div class="compare-box relative bcg-light-gray">
                    <h1 class="text-extra-bold margin-bottom-1">{{items[0].title}}</h1>
                    <p class="margin-bottom-2">{{items[0].excerpt}}</p>
                    <!-- Airtame Img -->
                    <div class="full-width flex flex-center margin-top-4 margin-bottom-4">
                        <img class="compare-img margin-center" 
                    :src="require(`~/assets/img/${items[0].img}`)"/>
                    </div><!-- End of Airtame Img -->
                    <h2 class="text-extra-bold margin-bottom-1">{{items[0].lineOneTitle}}</h2>
                    <p class="margin-bottom-2 height-6">{{items[0].lineOneText}}</p>
                    <h2 class="text-extra-bold margin-bottom-1">{{items[0].lineTwoTitle}}</h2>
                    <p class=" margin-bottom-2 height-4">{{items[0].lineTwoText}}</p>
                    <h2 class="text-extra-bold margin-bottom-1">{{items[0].lineThreeTitle}}</h2>
                    <p class=" margin-bottom-2 height-4">{{items[0].lineTwoText}}</p>
                    <!-- Compare Icons -->
                    <div class="flex">
                        <img v-for="(icon, i) in items[0].icons" :key="i" 
                        class="height-2 margin-right-1" 
                        :src="require(`~/assets/img/${icon}`)"/>
                    </div>
                        <!-- VS Icon -->
                        <div class="vs-icon z-2 bcg-dark-gray">
                            <div class="vs-icon-text align-center text-spacing color-white">vs</div>
                        </div><!-- End of VS Icon -->
                </div> <!-- End of Compare Box 1: Airtame -->

                <!-- Compare Box 2: Selected Items -->
                <div class="compare-box relative bcg-light-gray">
                    <transition name="slide-fade">
                        <div :key="currentItem">
                            <h1 class="text-extra-bold margin-bottom-1">{{items[currentItem].title}}</h1>
                            <p class="margin-bottom-2">{{items[currentItem].excerpt}}</p>
                            <!-- Compare Img -->
                            <div class="full-width flex flex-center margin-top-4 margin-bottom-4">
                                <img class="compare-img margin-center" 
                            :src="require(`~/assets/img/${items[currentItem].img}`)"/>
                            </div><!-- End of Compare Img -->
                            <h2 class="text-extra-bold margin-bottom-1">{{items[currentItem].lineOneTitle}}</h2>
                            <p class="margin-bottom-2 height-6">{{items[currentItem].lineOneText}}</p>
                            <h2 class="text-extra-bold margin-bottom-1">{{items[currentItem].lineTwoTitle}}</h2>
                            <p class=" margin-bottom-2 height-4">{{items[currentItem].lineTwoText}}</p>
                            <h2 class="text-extra-bold margin-bottom-1">{{items[currentItem].lineThreeTitle}}</h2>
                            <p class=" margin-bottom-2 height-4">{{items[currentItem].lineTwoText}}</p>
                            <!-- Compare Icons -->
                            <div class="flex">
                                <img v-for="(icon, i) in items[currentItem].icons" :key="i" 
                                class="height-2 margin-right-1" 
                                :src="require(`~/assets/img/${icon}`)"/>
                            </div>
                        </div>
                    </transition>    
                </div> <!-- End of Compare Box 2: Selected Items -->

            </div><!-- End of Compare Box Container -->
            
    </section>
</template>

<script>
    export default {

        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        },

        props: [
            "items",
            "currentItem"
        ]
    }
</script>

<style lang="sass">
    // compare style at @/assets/sass/3-components/_compare.sass

.slide-fade-enter-active
    transition: all .3s ease
    transition-delay: 0.5s

.slide-fade-leave-active
    transition: all .3s

.slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px)
    //letter-spacing: 0.05rem
    opacity: 0

</style>