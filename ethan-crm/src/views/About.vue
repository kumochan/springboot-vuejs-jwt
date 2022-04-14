<template>
  <layout-default>
    <div class="About">
      <h1>AboutAboutAboutAboutAboutAboutAboutAboutAboutAbout</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <h2>Amet sit</h2>
      <p>
        Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "./layouts/LayoutDefault.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>