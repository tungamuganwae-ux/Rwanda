<template>
  <section class="bg-gradient-to-b from-green-50 to-white min-h-screen w-full overflow-hidden">

    <!-- Hero Section -->
    <div
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5');"
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-extrabold text-yellow-300 mb-6 drop-shadow-lg">
          Tembera u Rwanda
        </h1>

        <p class="text-lg md:text-2xl text-gray-200 leading-9">
          {{ t.about.description }}
        </p>

        <button
          class="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition duration-300"
        >
          {{ t.about.exploreRwanda }}
        </button>
      </div>
    </div>

    <!-- About Rwanda -->
    <div class="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

      <!-- Image -->
      <div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Rwanda View"
          class="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition duration-500"
        >
      </div>

      <!-- Text -->
      <div>
        <h2 class="text-5xl font-bold text-green-800 mb-6">
          {{ t.about.mainTitle }}
        </h2>

        <p class="text-gray-700 text-lg leading-9 mb-6">
          {{ t.about.mainText }}
        </p>

        <p class="text-gray-700 text-lg leading-9">
          {{ t.about.mainText2 }}
        </p>
      </div>
    </div>

    <!-- Tourism Cards -->
    <div class="bg-green-800 py-24 px-6">

      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-yellow-300 mb-4">
          {{ t.about.exploreTitle }}
        </h2>

        <p class="text-gray-200 text-lg">
          {{ t.about.amazingDestinations }}
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <!-- Card 1 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="/src/assets/Park.jpg"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              {{ t.about.volcanoes }}
            </h3>

            <p class="text-gray-600 leading-7">
              {{ t.about.volcanoesDesc }}
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="/src/assets/sunset.jpg"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              {{ t.about.lakeKivu }}
            </h3>

            <p class="text-gray-600 leading-7">
              {{ t.about.lakeKivuDesc }}
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="/src/assets/bkArena.jpg"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              {{ t.about.kigaliCity }}
            </h3>

            <p class="text-gray-600 leading-7">
              {{ t.about.kigaliCityDesc }}
            </p>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'AboutView',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>

