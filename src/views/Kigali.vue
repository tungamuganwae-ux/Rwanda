<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">

    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      Welcome to Kigali City
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
        Kigali is the capital city of Rwanda and one of the cleanest and fastest-growing
        cities in Africa. The city is known for modern buildings, technology,
        innovation, safety, and beautiful green hills.
      </p>

      <p class="text-lg text-gray-700 leading-8">
        Visitors enjoy exploring Kigali's modern infrastructure, cultural sites,
        conference centers, and world-class sports facilities such as BK Arena
        and Amahoro Stadium.
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
            Smart Kigali
          </h2>
          <p class="text-gray-600">
            Kigali continues to grow as a smart city with modern technology,
            clean streets, reliable services, and innovative urban development.
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
            BK Arena
          </h2>
          <p class="text-gray-600">
            BK Arena is one of East Africa's most modern indoor arenas,
            hosting basketball games, concerts, conferences, and international events.
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
            Amahoro Stadium
          </h2>
          <p class="text-gray-600">
            Amahoro Stadium is Rwanda's national stadium and hosts football matches,
            ceremonies, and major national events.
          </p>
        </div>
      </div>

    </div>

  </section>
</template>