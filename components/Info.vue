<template>
    <section class="container margin-top-4 margin-bottom-4">
        
        <h1 class="text-extra-bold margin-left-1 margin-bottom-2">Information</h1>
        
        <!-- Info Container includes Content -->
        <div class="info-container margin-bottom-1 padding-left-1" v-for="text in info" :key="text.id">
            <h2 class="info-column text-extra-bold margin-bottom-1">{{ text.title }}</h2>    
            <nuxt-content class="info-column" :document="text"/>
        </div>
    
    </section>
</template>

<script>
    export default {
        props: [
            "info"
        ]
    }
</script>

<style lang="sass">
    // info style at @/assets/sass/3-components/_info.sass
</style>