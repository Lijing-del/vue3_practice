<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>
      <svg-icon iconName="icon-hanbaopisa" />
    </button>
    <button>
      <svg-icon iconName="icon-tianqi_baoyu" />
    </button>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    h1 {
      color: $component-color;
    }
  }
}
</style>
