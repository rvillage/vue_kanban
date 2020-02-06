<template>
  <aside :class="{ 'side-menu__container': true, 'side-menu__container-active': showMenu }" @click="$emit('click')">
    <nav :class="{ 'slide-menu': true, 'slide-menu-active': showMenu, 'slide-menu-active-dark': darkMode }">
      <section class="menu-header">
        <span class="greeting__text">Welcome Back</span>
        <div class="profile-image__container">
          <img src="" alt="profile-image" class="profile__image">
        </div>
        <div class="account-details">
          <span class="name__text">User name</span>
          <span class="email__text">user@example.com</span>
        </div>
      </section>

      <section class="menu-body">
        <ul :class="{ 'menu-links': true, 'menu-links-dark': darkMode }">
          <li class="menu-link" @click="toggleMenu">Home</li>
          <li class="menu-link" @click="toggleMenu">Add City</li>
          <li class="menu-link" @click="logout" >Logout</li>
        </ul>
      </section>

      <section class="menu-footer">
        <small :class="{ 'copyright__text': true, 'copyright__text-dark': darkMode }">Copyright © VueWeather</small>
      </section>
    </nav>
  </aside>
</template>

<script>
  export default {
    props: {
      showMenu: { type: Boolean, required: true },
      darkMode: { type: Boolean, required: true }
    },
    methods: {
      toggleMenu () {
        console.log('toggleMenu')
      },
      logout () {
        console.log('logout')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-menu__container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 50;

    &-active {
      pointer-events: auto;
    }

    &::before {
      content: '';
      cursor: pointer;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #0c1066;
      opacity: 0;
      transition: opacity 300ms linear;
      will-change: opacity;
    }

    &-active::before {
      opacity: 0.3;
    }
  }

  .slide-menu {
    box-sizing: border-box;
    transform: translateX(-200%);
    position: relative;
    top: 0;
    left: 0;
    z-index: 50;
    min-height: 100vh;
    width: 90%;
    max-width: 26rem;
    background-color: white;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr 1fr;
    grid-gap: 1rem;
    transition: transform 300ms linear;
    will-change: transform;

    &-active {
      transform: none;

      &-dark {
        background-color: #2B244D;
      }
    }
  }

  .menu-header {
    background: linear-gradient(to right, #00FF9B, #5f84fb);
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: "greeting greeting" "image details";
    box-sizing: border-box;
    width: 100%;
    align-content: center;
    color: white;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);

    &-dark {
      background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    }
  }

  .greeting__text {
    grid-area: greeting;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin-top: 1rem;
    justify-self: center;
    align-self: center;
  }

  .account-details {
    grid-area: details;
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
    align-self: center;
  }

  .name__text {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }

  .email__text {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }

  .menu-body {
    display: grid;
    width: 100%;
  }

  .menu-links {
    display: flex;
    flex-flow: column;
    list-style: none;

    &-dark {
      color: white;
    }
  }

  .link-active {
    color: #495CFC;
    border-bottom: 1px solid #495CFC;
  }

  .menu-link {
    outline: none;
    font-size: 1rem;
    padding: 1rem 0;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .profile-image__container {
    grid-area: image;
    margin-right: 0.5rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    align-self: center;
    margin-left: 2rem;
  }

  .profile__image {
    max-width: 4rem;
  }

  .copyright__text {
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 959px) {
    .menu-header {
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  @media only screen and (max-width: 300px) {
    .slide-menu {
      width: 100%;
    }
  }
</style>
