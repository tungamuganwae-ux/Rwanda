<template>
  <section class="bg-white text-green-700 min-h-screen w-full py-12 px-6">
    <h1 class="text-4xl font-bold text-center mb-10">
      {{ t.videos.title }}
    </h1>

    <p class="text-center text-lg mb-10">
      {{ t.videos.subtitle }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- Video 1 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.intoreDance }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/3fM6Jj6rGJY"
          title="Intore Dance"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Video 2 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.rwandaCulturalPerformance }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/watch?v=_5a6-z1essM"
          title="Rwanda Culture"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Video 3 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.traditionalDrumming }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/L5D6YjYwT7Y"
          title="Traditional Drumming"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Video 4 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.culturalWeddingSongs }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/1bM7M4M2vNQ"
          title="Wedding Songs"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Video 5 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.intoreWarriorsDance }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Zs6vYQzN1xE"
          title="Intore Warriors"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Video 6 -->
      <div>
        <h2 class="font-bold text-xl mb-3 text-center">
          {{ t.videos.rwandaHeritageMusic }}
        </h2>
        <iframe
          class="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Q3M9Kqf4xQ8"
          title="Heritage Music"
          allowfullscreen>
        </iframe>
      </div>

    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import translations from '../translate'
import { currentLanguage } from '../languageStore'

export default {
  name: 'VideosView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>