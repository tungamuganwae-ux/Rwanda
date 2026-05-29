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
          Discover the beauty of Rwanda — the land of a thousand hills,
          breathtaking landscapes, rich culture, wildlife, and unforgettable adventures.
        </p>

        <button
          class="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition duration-300"
        >
          Explore Rwanda
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
          Welcome to Rwanda
        </h2>

        <p class="text-gray-700 text-lg leading-9 mb-6">
          Rwanda is one of Africa’s most beautiful countries,
          known for its green hills, clean cities, peaceful environment,
          and warm hospitality.
        </p>

        <p class="text-gray-700 text-lg leading-9">
          From the stunning Volcanoes National Park to the relaxing shores
          of Lake Kivu, Rwanda offers unforgettable experiences for tourists,
          adventurers, and nature lovers.
        </p>
      </div>
    </div>

    <!-- Tourism Cards -->
    <div class="bg-green-800 py-24 px-6">

      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-yellow-300 mb-4">
          Explore Rwanda
        </h2>

        <p class="text-gray-200 text-lg">
          Amazing destinations waiting for you
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <!-- Card 1 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              Volcanoes
            </h3>

            <p class="text-gray-600 leading-7">
              Experience mountain hiking and discover the famous gorillas
              in Volcanoes National Park.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              Lake Kivu
            </h3>

            <p class="text-gray-600 leading-7">
              Relax by the beautiful beaches and enjoy peaceful boat rides
              on Lake Kivu.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-3xl font-bold text-green-800 mb-4">
              Kigali City
            </h3>

            <p class="text-gray-600 leading-7">
              Explore one of Africa’s cleanest and safest cities filled
              with culture, art, and modern beauty.
            </p>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>