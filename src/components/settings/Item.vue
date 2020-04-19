<template>
  <div class="settings-element theme-settings-element">
    <label class="label">{{ name }}</label>
    <select
      v-if="type === 'select'"
      v-model="internalModel"
      class="settings-button theme-settings-button"
    >
      <option
        v-for="variant in variants"
        :value="variant.value"
      >
        {{ variant.label }}
      </option>
    </select>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      name: String,
      type: String,
      variants: Array,
      setter: Function,
      getter: Function,
    },

    computed: {
      internalModel: {
        get() {
          return this.getter();
        },

        set(value) {
          this.setter(value);
        }
      }
    }
  }
</script>

<style scoped>
.settings-element {
  box-sizing: border-box;
  padding: 10px 15px;
  overflow: auto;
  display: flex;
}

.label {
  padding: 5px 0px;
  margin-right: auto;
}

.settings-button {
  height: calc(32pt + 20px);
  padding: 10px 10px;
  cursor: pointer;
  min-width: 200px;
  font-size: 32pt;
  box-sizing: border-box;
  outline: none;
  float: right;
}
</style>
