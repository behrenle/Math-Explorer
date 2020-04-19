<template>
  <Category :name="$t('settings.categories.language')">
    <Item
      :name="$t('settings.language')"
      type="select"
      :variants="variants.language"
      storeGet="language"
      storeSet="setLanguage"
      :onChange="changeRootLanguage"
    />

    <Item
      :name="$t('settings.decimal_mode')"
      type="select"
      :variants="variants.language"
      storeGet="decimalMode"
      storeSet="setDecimalMode"
    />

    <Item
      :name="$t('settings.math_lang_tag')"
      type="select"
      :variants="variants.language"
      storeGet="mathLangTag"
      storeSet="setMathLangTag"
    />
  </Category>
</template>

<script>
import Category from "../common/Category.vue";
import Item from "./Item.vue";

export default {
  name: "LanguageSettings",

  components: {
    Category,
    Item
  },

  methods: {
    changeRootLanguage() {
      this.$root.$i18n.locale = this.$store.state.language;
    }
  },

  data() {
    return {
      variants: {
        language: [
          { label: this.$t("langs.english"), value: "en" },
          { label: this.$t("langs.german"), value: "de" }
        ]
      }
    }
  },
}
</script>
