<template>
    <nav class="fixed top-0 left-0 ralative height-4 full-width bcg-white z-10" :class="{ 'box-shadow': !view.atTopOfPage }">
        <div class="nav-container relative flex flex-row flex-align-center height-4">
            
            <!-- Company Logo used both the Mobile and the Desktop Navigation -->
            <img class="nav-logo" 
                src="~/assets/img/airtame-logo-inline-black.svg" alt="logo">
            
            <!------------------------>
            <!-- Desktop Navigation -->
            <!------------------------>
            <div class="desktop-nav flex flex-row flex-align-center text-uppercase">
                <!-- Menu Items -->
                <div class="margin-left-2 flex flex-row flex-between">
                    <NuxtLink v-for="menuItem in menuItems" :key="menuItem.name" :to="menuItem.link"  
                    class="menu-hover menu-items text-bold color-black">
                    {{ menuItem.name }}
                    </NuxtLink>
                </div>
                <!-- Right Select Buttons -->
                <div class="absolute right-0 flex flex-row flex-between">
                    <NuxtLink to="/" class="margin-right-small menu-hover menu-items color-black text-bold">Book Demo</NuxtLink>
                    <NuxtLink to="/" class="btn-hover btn bcg-blue menu-items color-white text-bold">Buy Now</NuxtLink>
                </div>
            </div> <!-- End of Desktop Navigation -->
            
            <!----------------------->
            <!-- Mobile Navigation -->
            <!----------------------->
            <div class="mobile-nav absolute right-0 height-2 width-2 flex flex-row flex-align-center">
                <!-- Animated Hamburger Menu -->
                <div class="nav-icon" @click="openMobile = !openMobile" :class="{ open : openMobile }"> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div><!-- End of Animated Hamburger Menu -->
            </div>
        
        <!-- Mobile Navigation Menu Items -->
        <transition name="nav">
            <div v-if="openMobile" class="mobile-nav-content fixed top-4 left-0 bcg-white full-width z-10">
                
                <!-- Menu Items -->
                <div class="text-bold padding-top-2">
                    
                    <NuxtLink v-for="menuItem in menuItems" :key="menuItem.name" :to="menuItem.link" 
                    class="margin-left-4 margin-bottom-2 text-bold color-black">
                        {{ menuItem.name }}
                    </NuxtLink>
                    
                </div>
            
                <!-- Select Buttons -->
                <div class="div-line margin-top-2 margin-bottom-2"></div>
                <div class="text-center">
                    <NuxtLink to="/" class="margin-left-2 margin-right-2 btn btn-hover bcg-dark-gray color-white text-bold">Book Demo</NuxtLink>
                    <div class="div-line margin-top-2 margin-bottom-2"></div>
                    <NuxtLink to="/" class="margin-left-2 margin-right-2 btn btn-hover bcg-blue color-white text-bold">Buy Now</NuxtLink>
                    <div class="div-line margin-top-2 margin-bottom-6"></div>
                </div>
            </div>
        </transition>
        </div><!-- End of Mobile Navigation -->
    </nav>
</template>

<script>
export default {

    layoutTransition: {
        name: 'layout',
        mode: 'out-in'
    },
    
    data() {
        return {
            openMobile: false,
            menuItems: [ 
                {
                    name: "Product",
                    link: "/"
                },
                {
                    name: "Businnes",
                    link: "/"
                },
                {
                    name: "Education",
                    link: "/"
                },
                {
                    name: "Pricing",
                    link: "/"
                },
                {
                    name: "Support",
                    link: "/"
                },
                {
                    name: "Blog",
                    link: "/"
                }
            ],
            view: {
                atTopOfPage: true
            }
        }
    },
    // Scrollable Nav: call to add a listener to the window
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    }, 
    methods: {
        // function to call when the user scrolls, added as a method
        handleScroll(){
            if(window.pageYOffset>0){
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
            }
         }
    }
}
</script>

<style lang="sass">
    // nav style at @/assets/sass/3-components/_nav.sass

// Mobile nav-content animation
.nav-enter-active
    transition: all .3s ease

.nav-leave-active
    transition: all .2s

.nav-enter, .nav-leave-to
    transform: translateY(-15px)
    opacity: 1

</style>