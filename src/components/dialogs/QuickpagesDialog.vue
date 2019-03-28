<template>
  <k-dialog
    ref="dialog"
    class="k-pages-dialog"
    size="medium"
    @cancel="$emit('cancel')"
    @submit="submit"
  >
    <template v-if="issue">
      <k-box :text="issue" theme="negative" />
    </template>
    <template v-else>

      <header v-if="model" class="k-pages-dialog-navbar">
        <k-button
          :disabled="!model.id"
          :tooltip="$t('back')"
          icon="angle-left"
          @click="back"
        />
        <k-headline>{{ model.title }}</k-headline>
      </header>

      <input class="quickpages-input" type="text" :placeholder="$t('quickpages.placeholder')" v-model="searchQuery">

      <k-list v-if="filteredPages.length">
        <k-list-item
          v-for="page in filteredPages"
          :key="page.id"
          :text="page.text"
          :info="page.info"
          :image="page.image"
          :icon="page.icon"
          @click="toggle(page)"
        >
          <template slot="options">
            <k-button
              v-if="isSelected(page)"
              slot="options"
              :autofocus="true"
              :icon="checkedIcon"
              :tooltip="$t('remove')"
              theme="positive"
            />
            <k-button
              v-else
              slot="options"
              :autofocus="true"
              :tooltip="$t('select')"
              icon="circle-outline"
            />
            <k-button
              v-if="model"
              :disabled="!page.hasChildren"
              :tooltip="$t('open')"
              icon="angle-right"
              @click.stop="go(page)"
            />
          </template>
        </k-list-item>
      </k-list>
      <k-empty v-else icon="page">
        No pages to select
      </k-empty>
    </template>
  </k-dialog>
</template>

<script>
import {accentMap} from '../../helpers/code-folding.js'

export default {
    extends: 'k-pages-dialog',
    data() {
        return {
            searchQuery: '',
        }
    },
    props: {
        start: Boolean,
    },
    computed: {
        filteredPages() {
            return this.pages.filter(el => {
                let text  = this.removeCase(el.text).toLowerCase()
                let query = this.removeCase(this.searchQuery).toLowerCase()
                return this.start ? this.startsWith(query, text) : text.includes(query)
            })
        }
    },
    methods: {
        startsWith(needle, haystack) {
            return haystack.slice(0, needle.length) == needle;
        },
        removeCase(s) {
            if (!s) { return ''; }
            var ret = '';
            for (var i=0; i<s.length; i++) {
                ret += accentMap[s.charAt(i)] || s.charAt(i);
            }
            return ret;
        }
    }
}
</script>