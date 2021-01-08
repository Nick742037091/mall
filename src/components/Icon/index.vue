<template>
  <svg class="icon" v-on="$listeners" :style="iconStyle">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 12
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle() {
      const res = {
        fontSize: this.size + 'px',
        color: this.color
      }
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
