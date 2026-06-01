<template>
  <section class="bg-gradient-to-br from-green-50 to-white min-h-screen w-full py-16 px-6">

    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-800 mb-4">
        {{ t.services.title }}
      </h1>
      <p class="text-xl text-gray-600">
        {{ t.services.subtitle }}
      </p>
    </div>

    <!-- Services -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Service 1 -->
      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="text-5xl mb-4">🦍</div>
        <h2 class="text-2xl font-bold text-green-700 mb-3">
          Gorilla Trekking Information
        </h2>
        <p class="text-gray-600">
          We provide information about mountain gorilla trekking experiences
          in Volcanoes National Park and other wildlife adventures.
        </p>
      </div>

      <!-- Service 2 -->
      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="text-5xl mb-4">🏞️</div>
        <h2 class="text-2xl font-bold text-green-700 mb-3">
          Tourism Guidance
        </h2>
        <p class="text-gray-600">
          Discover Rwanda's top attractions including Lake Kivu,
          Nyungwe Forest, Akagera National Park, and cultural heritage sites.
        </p>
      </div>

      <!-- Service 3 -->
      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="text-5xl mb-4">📸</div>
        <h2 class="text-2xl font-bold text-green-700 mb-3">
          Travel Recommendations
        </h2>
        <p class="text-gray-600">
          Get recommendations on places to visit, activities to enjoy,
          and memorable experiences throughout Rwanda.
        </p>
      </div>

    </div>

    <!-- Location Section -->
    <div class="max-w-4xl mx-auto mt-16">
      <div class="bg-green-700 text-white rounded-2xl p-10 shadow-lg text-center">
        <h2 class="text-3xl font-bold mb-4">
          {{ t.services.location }}
        </h2>
        <p class="text-lg">
          {{ t.services.locationCity }}
        </p>
        <p class="mt-2 text-green-100">
          {{ t.services.locationDesc }}
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'ServicesView',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>