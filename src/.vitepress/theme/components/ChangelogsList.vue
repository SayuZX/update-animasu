<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { data as changelogs } from '../data/changelogs.data'
import Contributors from './Contributors.vue'

const md = new MarkdownIt()

function renderMarkdown(string: string | null | undefined) {
  const body = string ?? 'No changelog provided.'
  const flavoredString = body
    .replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, '[@$2](https://github.com/$2)')
    .replace(/#(\d+)/g, '[#$1](https://github.com/SayuZX/update-animasu//issues/$1)')
    .replace(/https:\/\/github.com\/SayuZX\/update-animasu\/releases\/\//)
    .trim()

  return md.render(flavoredString)
}

const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
})
</script>

<template>
  <div
    v-for="(release) of changelogs"
    :key="release.tag_name"
  >
    <h2 :id="release.tag_name">
      <a
        :href="release.html_url"
      >
        {{ release.tag_name.substring(1) }}
      </a>
      <Badge type="tip" text="Latest" />
      <a
        class="header-anchor"
        :href="`#${release.tag_name}`"
      />
    </h2>
    <time :datetime="release.published_at!">
      {{ dateFormatter.format(new Date(release.published_at!)) }}
    </time>
    <div v-html="renderMarkdown(release.body)" />
    <Contributors
      :body="release.body!"
      :author="release.author.login"
      :tag="release.tag_name"
    />
  </div>
</template>

<style lang="stylus" scoped>
h2 {
  margin-bottom: 0
  display: flex
  align-items: center
  gap: 0.5rem
}

time {
  font-size: 0.875rem
  color: var(--vp-c-text-2)
}
</style>
