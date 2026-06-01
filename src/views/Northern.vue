<template>
  <section class="bg-white text-green-700 min-h-screen w-full py-16 px-6">
    
    <!-- Heading -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-800 mb-4">
        {{ t.northern.title }}
      </h1>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        {{ t.northern.subtitle }}
      </p>
    </div>

    <!-- Gorilla Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/robe.jpg"
          alt="Mountain Gorilla"
          class="w-full h-60 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.northern.mountainGorillas }}
          </h2>
          <p class="text-gray-600">
            {{ t.northern.mountainGorillasDesc }}
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/Park.jpg"
          alt="Volcanoes National Park"
          class="w-full h-60 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.northern.volcanoesNationalPark }}
          </h2>
          <p class="text-gray-600">
            {{ t.northern.volcanoesDesc }}
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/sena.jpg"
          alt="Kwita Izina Ceremony"
          class="w-full h-60 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.northern.kwitaIzina }}
          </h2>
          <p class="text-gray-600">
            {{ t.northern.kwitaIzinaDesc }}
          </p>
        </div>
      </div>

    </div>

    <!-- About Kwita Izina -->
    <div class="max-w-5xl mx-auto mt-16 bg-green-50 p-8 rounded-xl shadow">
      <h2 class="text-3xl font-bold text-green-800 mb-4 text-center">
        {{ t.northern.aboutKwitaIzina }}
      </h2>
      <p class="text-gray-700 leading-8 text-center">
        {{ t.northern.kwitaIzinaFullDesc }}
      </p>
    </div>

  </section>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'NorthernView',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>