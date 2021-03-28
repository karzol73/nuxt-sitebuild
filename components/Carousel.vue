<template>
    <section class="container margin-top-5">
        
        <h3 class="text-extra-bold margin-bottom-1 margin-left-1">Compare</h3>
        
        <!-- Vue Slick Carousel -->
        <VueSlickCarousel v-bind="slickOptions">    
           
           <!-- Compare Items -->
            <div class="product-items relative margin-right-1 bcg-light-gray z-2"
                v-for="product in products"
                :key="product.id"
                :data-product="product.id"
                v-on:click.prevent="getProduct">
                    <h5 class="absolute bottom-small margin-center text-center text-extra-bold">
                        {{ product.title }}
                    </h5>
                    <img class="products-img align-center padding-bottom-1"
                    :src="require(`~/assets/img/${product.img}`)"/>
            </div><!-- End of Compare Items -->
        
        </VueSlickCarousel><!-- End of Vue Slick Carousel -->
    
    </section>
</template>

<script>
export default {
    
    props: [
            "products"
    ],

    // Configure the Vue Slick Carousel
    data() {
        return {
            slickOptions: {
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                swipe: false,
                touchMove: true,
                variableWidth: false,
                nextArrow: ".right-arrow",
                responsive: [
                    {
                        breakpoint: 1472,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            arrows: true,
                            swipe: true
                        }
                    },
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            arrows: true,
                            swipe: true
                        }
                    },
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            variableWidth: true,
                            swipe: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                            swipe: true,
                            arrows: false
                        }
                    },
                ]
            }
        }
    },
    // Get the productId and pass to index.vue
    methods:{
        getProduct: function (e) {
            var productId = e.currentTarget.getAttribute("data-product")
            // In test mode the selected items limited to the first three: Apple TV, Chromecast, and Click Share
            // If you have more data remove the if statement
            if(productId < 4) {
                this.$emit("update:option", productId)
            }
        }
    }
}
</script>

<style lang="sass">
    // carousel style at @/assets/sass/3-components/_carousel.sass
</style>