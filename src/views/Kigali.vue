<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">

    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      {{ t.kigali.title }}
    </h1>

    <!-- Hero Image -->
    <div class="max-w-6xl mx-auto mb-12">
      <img
        src="/src/assets/yowe.jpg"
        alt="Smart Kigali City"
        class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-lg text-gray-700 leading-8 mb-6">
        {{ t.kigali.description }}
      </p>

      <p class="text-lg text-gray-700 leading-8">
        {{ t.kigali.description2 }}
      </p>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Smart Kigali -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/Kigali.jpg"
          alt="Smart Kigali"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.kigali.smartKigali }}
          </h2>
          <p class="text-gray-600">
            {{ t.kigali.smartKigaliDesc }}
          </p>
        </div>
      </div>

      <!-- BK Arena -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/bkArena.jpg"
          alt="BK Arena"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.kigali.bkArena }}
          </h2>
          <p class="text-gray-600">
            {{ t.kigali.bkArenaDesc }}
          </p>
        </div>
      </div>

      <!-- Amahoro Stadium -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/load.jpg"
          alt="Amahoro Stadium"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.kigali.amahoroStadium }}
          </h2>
          <p class="text-gray-600">
            {{ t.kigali.amahoroStadiumDesc }}
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
  name: 'KigaliView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>