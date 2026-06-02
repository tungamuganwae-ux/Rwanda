<template>
  <section class="bg-white text-green-700 min-h-screen w-full py-16 px-6">

    <!-- Hero Section -->
    <div class="text-center max-w-5xl mx-auto">
      <h1 class="text-5xl font-bold mb-6 text-green-800">
        {{ t.western.title }}
      </h1>

      <p class="text-lg text-gray-700 leading-8">
        {{ t.western.introText }}
      </p>
    </div>

    <!-- Lake Kivu Image -->
    <div class="max-w-5xl mx-auto mt-12">
      <img
        src="/src/assets/sunset.jpg"
        alt="Lake Kivu"
        class="w-full h-[500px] object-cover rounded-xl shadow-xl"
      />
    </div>

    <!-- About Lake Kivu -->
    <div class="max-w-5xl mx-auto mt-10">
      <h2 class="text-4xl font-bold text-green-800 mb-6">
        {{ t.western.lakeTitle }}
      </h2>

      <p class="text-lg text-gray-700 leading-8">
        {{ t.western.lakeDesc }}
      </p>

      <p class="mt-4 text-lg text-gray-700 leading-8">
        {{ t.western.lakeDesc2 }}
      </p>
    </div>

    <!-- Information Cards -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      <!-- Card 1 -->
      <div class="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t.western.naturalBeauty }}
        </h3>
        <p class="text-gray-700">
          {{ t.western.naturalBeautyDesc }}
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t.western.activities }}
        </h3>
        <p class="text-gray-700">
          {{ t.western.activitiesDesc }}
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t.western.islands }}
        </h3>
        <p class="text-gray-700">
          {{ t.western.islandsDesc }}
        </p>
      </div>

      <!-- Card 4 -->
      <div class="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-green-800 mb-3">
          {{ t.western.culture }}
        </h3>
        <p class="text-gray-700">
          {{ t.western.cultureDesc }}
        </p>
      </div>

    </div>

    <!-- Why Visit -->
    <div class="max-w-5xl mx-auto mt-16 bg-green-700 text-white p-10 rounded-xl shadow-xl">
      <h2 class="text-3xl font-bold mb-4">
        {{ t.western.whyVisit }}
      </h2>

      <p class="leading-8 text-lg">
        {{ t.western.whyVisitDesc }}
      </p>
    </div>

  </section>
</template>

<script>
import { computed } from 'vue'
import translations from '../translate'
import { currentLanguage } from '../languageStore'

export default {
  name: 'WesternView',
  setup() {
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>