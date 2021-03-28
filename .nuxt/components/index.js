export { default as Carousel } from '../..\\components\\Carousel.vue'
export { default as Compare } from '../..\\components\\Compare.vue'
export { default as Info } from '../..\\components\\Info.vue'
export { default as Nav } from '../..\\components\\Nav.vue'

export const LazyCarousel = import('../..\\components\\Carousel.vue' /* webpackChunkName: "components_Carousel" */).then(c => c.default || c)
export const LazyCompare = import('../..\\components\\Compare.vue' /* webpackChunkName: "components_Compare" */).then(c => c.default || c)
export const LazyInfo = import('../..\\components\\Info.vue' /* webpackChunkName: "components_Info" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components_Nav" */).then(c => c.default || c)
