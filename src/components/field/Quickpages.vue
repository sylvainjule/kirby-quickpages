<template>
  <k-field v-bind="$props" class="k-pages-field k-quickpages-field">
    <k-button
      v-if="more"
      slot="options"
      icon="add"
      @click="open"
    >
      {{ $t('select') }}
    </k-button>
    <template v-if="selected.length">
      <k-draggable
        :element="elements.list"
        :handle="true"
        :list="selected"
        :data-size="size"
        @end="onInput"
      >
        <component
          v-for="(page, index) in selected"
          :is="elements.item"
          :key="page.id"
          :sortable="selected.length > 1"
          :text="page.text"
          :info="page.info"
          :link="page.link"
          :icon="page.icon"
          :image="page.image"
        >
          <k-button slot="options" icon="remove" @click="remove(index)" />
        </component>
      </k-draggable>
    </template>
    <k-empty
      v-else
      :layout="layout"
      icon="page"
      @click="open"
    >
      {{ empty || $t('field.pages.empty') }}
    </k-empty>
    <k-quickpages-dialog ref="selector" :start="start" @submit="select" />
  </k-field>
</template>

<script>
export default {
    extends: 'k-pages-field',
    props: {
        start: Boolean,
    }
};
</script>

<style lang="scss">
    @import '../../assets/css/styles.scss'
</style>