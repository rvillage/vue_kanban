<template>
  <div :class="{ 'add__card': true, 'add__card-dark': darkMode }">
    <div class="header__container">
      <span class="card__title">Add city</span>
    </div>
    <div class="body__container">
      <PlusIcon />
      <CityIllustration />
    </div>
  </div>
</template>

<script>
  import PlusIcon from '../components/plus-icon.vue'
  import CityIllustration from '../components/city-illustration.vue'

  export default {
    components: {
      PlusIcon,
      CityIllustration
    },
    props: {
      darkMode: { type: Boolean, required: true }
    }
  }
</script>

<style lang="scss" scoped>
  .add__card {
    background-color: #ffffff;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 2rem;
    margin: 2rem;
    width: 19rem;
    height: 30rem;
    justify-items: center;
    cursor: pointer;
    border-radius: 1.75rem;
    animation: 1.25s ease-in-out 0ms 1 fadein;
    color: #443282;

    &-dark {
      background: linear-gradient(to bottom, #711B86, #00057A);
      color: white;
    }
  }

  .card__title {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .body__container {
    align-self: end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  }
</style>
