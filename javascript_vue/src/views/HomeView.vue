<script setup lang="ts">
import ContractorDirectory from '@/components/ContractorDirectory.vue';

</script>

<template>
  <main class="App">
    <h1>Flexile Contractor Directory</h1>
    <div class="container">
      <ContractorDirectory />
    </div>
    <div>
      <h2>
        Github: <a
          className="github-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/shanrauf/Flexile-Compensation-Picker-Demo"
        >https://github.com/shanrauf/Flexile-Compensation-Picker-Demo
        </a>
      </h2>
    </div>
  </main>
</template>

<style scoped>
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.scrolling-disabled {
 overflow-y: hidden;
 height: 100%;
}

.github-link {
  word-wrap: break-word;
}

.App {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  background: #c4d3f6;
}

.container {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

</style>