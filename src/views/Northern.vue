<template>
  <section class="bg-white text-green-700 min-h-screen w-full py-16 px-6">
    
    <!-- Heading -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-800 mb-4">
        Welcome to Northern Province
      </h1>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">
        Northern Province is home to Rwanda's famous Mountain Gorillas,
        breathtaking volcanoes, and the internationally celebrated
        Kwita Izina ceremony.
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
            Mountain Gorillas
          </h2>
          <p class="text-gray-600">
            Mountain gorillas are one of Rwanda's greatest treasures.
            They live in Volcanoes National Park and attract visitors
            from around the world who come to experience gorilla trekking.
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
            Volcanoes National Park
          </h2>
          <p class="text-gray-600">
            Located in Musanze District, Volcanoes National Park is known
            for its stunning volcanic mountains, rich biodiversity, and
            conservation efforts that protect endangered gorillas.
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
            Kwita Izina
          </h2>
          <p class="text-gray-600">
            Kwita Izina is Rwanda's annual gorilla naming ceremony.
            Newborn gorillas are given names that reflect Rwanda's culture,
            conservation achievements, and commitment to protecting wildlife.
          </p>
        </div>
      </div>

    </div>

    <!-- About Kwita Izina -->
    <div class="max-w-5xl mx-auto mt-16 bg-green-50 p-8 rounded-xl shadow">
      <h2 class="text-3xl font-bold text-green-800 mb-4 text-center">
        About Kwita Izina
      </h2>
      <p class="text-gray-700 leading-8 text-center">
        Kwita Izina is inspired by the traditional Rwandan practice of naming
        children after birth. Every year, conservationists, community leaders,
        tourists, and international guests gather in Musanze to celebrate the
        birth of baby gorillas. The ceremony highlights Rwanda's success in
        wildlife conservation and promotes sustainable tourism.
      </p>
    </div>

  </section>
</template>