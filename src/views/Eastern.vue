<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">

    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      {{ t.eastern.title }}
    </h1>

    <!-- Hero Image -->
    <div class="max-w-6xl mx-auto mb-12">
      <img
        src="/src/assets/akagera.jpg"
        alt="Akagera National Park"
        class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-lg text-gray-700 leading-8 mb-6">
        {{ t.eastern.description }}
      </p>

      <p class="text-lg text-gray-700 leading-8">
        {{ t.eastern.wildlifeText }}
      </p>
    </div>

    <!-- Animal Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Lion -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/lion.jpg"
          alt="Lion"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.lion }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.lionDesc }}
          </p>
        </div>
      </div>

      <!-- Elephant -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/ele.jpg"
          alt="Elephant"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.elephant }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.elephantDesc }}
          </p>
        </div>
      </div>

      <!-- Giraffe -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/gira.jpg"
          alt="Giraffe"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.giraffe }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.giraffeDesc }}
          </p>
        </div>
      </div>

      <!-- Zebra -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/down.jpg"
          alt="Zebra"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.zebra }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.zebraDesc }}
          </p>
        </div>
      </div>

      <!-- Rhino -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/ttt.jpg"
          alt="Rhino"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.rhino }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.rhinoDesc }}
          </p>
        </div>
      </div>

      <!-- Buffalo -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/Instagram.jpg"
          alt="Buffalo"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            {{ t.eastern.buffalo }}
          </h2>
          <p class="text-gray-600">
            {{ t.eastern.buffaloDesc }}
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
  name: 'EasternView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>