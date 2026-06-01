<template>
  <section class="bg-white text-green-700 min-h-screen w-full py-12 px-6">
    <h1 class="text-4xl font-bold text-center mb-10">
      {{ t.photos.title }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- Bk Arena -->
      <div class="text-center">
        <img
          src="/src/assets/bkArena.jpg"
          alt="Bk arena"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.bkArena }}</h2>
      </div>

      <!-- Mountain Gorillas -->
      <div class="text-center">
        <img
          src="/src/assets/robe.jpg"
          alt="Mountain Gorillas"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.mountainGorillas }}</h2>
      </div>

      <!-- Lake Kivu -->
      <div class="text-center">
        <img
          src="/src/assets/sunset.jpg"
          alt="Lake Kivu"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.lakeKivu }}</h2>
      </div>

      <!-- Nyungwe Forest -->
      <div class="text-center">
        <img
          src="/src/assets/nyungew view.jpg"
          alt="Nyungwe Forest"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.nyungweForest }}</h2>
      </div>

      <!-- Canopy Walkway -->
      <div class="text-center">
        <img
          src="/src/assets/nyungwe.jpg"
          alt="Canopy Walkway"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.nyungweCanopyWalkway }}</h2>
      </div>

      <!-- Akagera National Park -->
      <div class="text-center">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
          alt="Akagera National Park"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.akageranationalPark }}</h2>
      </div>

      <!-- Kigali Convention Centre -->
      <div class="text-center">
        <img
          src="/src/assets/212.jpg"
          alt="Kigali Convention Centre"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.kigaliConventionCentre }}</h2>
      </div>

      <!-- King's Palace Museum -->
      <div class="text-center">
        <img
          src="/src/assets/king.jpg"
          alt="King's Palace Museum"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.kingsPalaceMuseum }}</h2>
      </div>

      <!-- Twin Lakes -->
      <div class="text-center">
        <img
          src="/src/assets/twin.jpg"
          alt="Twin Lakes"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.twinLakes }}</h2>
      </div>

      <!-- Mount Karisimbi -->
      <div class="text-center">
        <img
          src="/src/assets/Park.jpg"
          alt="Mount Karisimbi"
          class="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 class="mt-3 font-bold text-xl">{{ t.photos.mountKarisimbi }}</h2>
      </div>

    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'PhotosView',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>