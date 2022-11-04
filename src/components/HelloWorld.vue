<template>
    <div v-html="htmlContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CherryEngine from 'cherry-markdown/dist/cherry-markdown.engine.core'
const cherryEngineInstance = new CherryEngine()

let htmlContent = ref(0)
htmlContent = cherryEngineInstance.makeHtml('# welcome to cherry editor!')

onMounted(() => {
    console.log()
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
