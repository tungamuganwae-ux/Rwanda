<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">
    
    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      {{ t.southern.title }}
    </h1>

    <!-- Hero Image -->
    <div class="max-w-6xl mx-auto mb-12">
      <img
        src="/src/assets/nyungew view.jpg"
        alt="Nyungwe Forest"
        class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-lg text-gray-700 leading-8 mb-6">
        {{ t.southern.description }}
      </p>

      <p class="text-lg text-gray-700 leading-8">
        {{ t.southern.description2 }}
      </p>
    </div>

    <!-- Attraction Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Nyungwe Forest"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            {{ t.southern.nyungweForest }}
          </h2>
          <p class="text-gray-600">
            {{ t.southern.nyungweForestDesc }}
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/nyungwe.jpg"
          alt="Canopy Walkway"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            {{ t.southern.canopyWalkway }}
          </h2>
          <p class="text-gray-600">
            {{ t.southern.canopyWalkwayDesc }}
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/hi.jpg"
          alt="Wildlife"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            {{ t.southern.wildlifeNature }}
          </h2>
          <p class="text-gray-600">
            {{ t.southern.wildlifeNatureDesc }}
          </p>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { computed } from 'vue'
import translations from '../translate'
import { currentLanguage } from '../languageStore'

export default {
  name: 'SouthernView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>
