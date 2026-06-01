<template>
  <section class="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-20 px-6">
    
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-800 mb-4">
        {{ t.contact.title }}
      </h1>
      <p class="text-gray-600 text-lg">
        {{ t.contact.subtitle }}
      </p>
    </div>

    <!-- Contact Cards -->
    <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

      <!-- Phone -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div class="text-5xl mb-4">📞</div>
        <h2 class="text-2xl font-bold text-green-700 mb-2">
          {{ t.contact.phone }}
        </h2>
        <p class="text-gray-600">
          {{ t.contact.phoneNumber }}
        </p>
      </div>

      <!-- Email -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div class="text-5xl mb-4">📧</div>
        <h2 class="text-2xl font-bold text-green-700 mb-2">
          {{ t.contact.email }}
        </h2>
        <p class="text-gray-600 break-all">
          {{ t.contact.emailAddress }}
        </p>
      </div>

      <!-- Social Media -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div class="text-5xl mb-4">🌍</div>
        <h2 class="text-2xl font-bold text-green-700 mb-2">
          {{ t.contact.socialMedia }}
        </h2>
        <p class="text-gray-600">
          {{ t.contact.instagram }}
        </p>
        <p class="text-gray-600 mt-2">
          {{ t.contact.twitter }}
        </p>
      </div>

    </div>

    <!-- Bottom Section -->
    <div class="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
      <h2 class="text-3xl font-bold text-green-800 mb-4">
        {{ t.contact.siteName }}
      </h2>
      <p class="text-gray-700 leading-7">
        {{ t.contact.description }}
      </p>
    </div>

  </section>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'ContactView',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t
    }
  }
}
</script>