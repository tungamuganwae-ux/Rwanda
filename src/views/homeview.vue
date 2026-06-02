<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5');"
  >
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative text-center px-6">
      <h1 class="text-5xl md:text-7xl font-bold text-yellow-300 mb-6">
        {{ t.home.welcomeTitle }}
      </h1>

      <p class="text-lg md:text-2xl max-w-2xl mx-auto mb-10">
        {{ t.home.welcomeSubtitle }}
      </p>

      <!-- Cards -->
      <div class="flex flex-col md:flex-row gap-6 justify-center items-center">

        <!-- Explore Card -->
        <div
          class="bg-white/20 backdrop-blur-md p-6 rounded-2xl w-72 shadow-lg hover:scale-105 hover:bg-green-700/70 transition duration-300"
        >
          <h2 class="text-2xl font-bold text-yellow-300 mb-3">
            {{ t.home.exploreCardTitle }}
          </h2>

          <p class="text-gray-100 mb-4">
            {{ t.home.exploreCardText }}
          </p>

          <button
            class="bg-yellow-300 text-green-900 px-5 py-2 rounded-full font-semibold hover:bg-white transition"
          >
            {{ t.home.exploreButton }}
          </button>
        </div>

        <!-- Learn More Card -->
        <div
          class="bg-white/20 backdrop-blur-md p-6 rounded-2xl w-72 shadow-lg hover:scale-105 hover:bg-yellow-500/70 transition duration-300"
        >
          <h2 class="text-2xl font-bold text-green-200 mb-3">
            {{ t.home.learnMoreCardTitle }}
          </h2>

          <p class="text-gray-100 mb-4">
            {{ t.home.learnMoreCardText }}
          </p>

          <button
            class="bg-green-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800 transition"
          >
            {{ t.home.learnMoreButton }}
          </button>
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
  name: 'HomeView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>