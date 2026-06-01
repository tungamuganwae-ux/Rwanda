<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">
    
    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      Welcome to Southern Province
    </h1>

    <!-- Hero Image -->
    <div class="max-w-6xl mx-auto mb-12">
      <img
        src="/src/assets/nyungew view.jpg"
        alt="Nyungwe Forest"
        class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-lg text-gray-700 leading-8 mb-6">
        Southern Province is home to the famous Nyungwe Forest National Park,
        one of Africa's oldest rainforests. The forest is rich in biodiversity,
        featuring hundreds of bird species, primates, orchids, and beautiful
        hiking trails that attract visitors from around the world.
      </p>

      <p class="text-lg text-gray-700 leading-8">
        One of the most exciting attractions in Nyungwe is the Canopy Walkway.
        Suspended high above the forest floor, this walkway offers breathtaking
        views of the lush rainforest canopy, allowing visitors to experience
        nature from a unique perspective while enjoying unforgettable scenery.
      </p>
    </div>

    <!-- Attraction Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Nyungwe Forest"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            Nyungwe Forest
          </h2>
          <p class="text-gray-600">
            Explore one of Africa's oldest rainforests, home to diverse wildlife,
            waterfalls, and breathtaking hiking trails.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/nyungwe.jpg"
          alt="Canopy Walkway"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            Canopy Walkway
          </h2>
          <p class="text-gray-600">
            Walk high above the rainforest and enjoy spectacular panoramic views
            of the treetops and surrounding mountains.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/src/assets/hi.jpg"
          alt="Wildlife"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold mb-3 text-green-800">
            Wildlife & Nature
          </h2>
          <p class="text-gray-600">
            Discover chimpanzees, monkeys, colorful birds, and unique plant
            species living within the rich ecosystem of Nyungwe.
          </p>
        </div>
      </div>

    </div>

  </section>
</template>
