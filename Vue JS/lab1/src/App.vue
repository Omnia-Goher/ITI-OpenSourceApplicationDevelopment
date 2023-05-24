<template>
 <FormComponent />
</template>

<script>
import FormComponent from './components/FormComponent.vue';

export default(await import('vue')).defineComponent ({
 name: 'App',
 components: {
   FormComponent
 }
})
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 color: #2c3e50;
}
</style>