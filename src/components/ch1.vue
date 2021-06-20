<template>
  <div
    class="w-[100vw] h-[100vh] bg-indigo-dark flex flex-col items-center overflow-y-auto lg:justify-center"
  >
    <div
      class="bg-indigo-light rounded-md my-12 w-[20rem] flex-grow lg:flex-grow-0 lg:flex lg:flex-row-reverse lg:w-[75%] lg:h-[70%]"
    >
      <div
        id="img"
        class="w-full h-56 bg-indigo-lighter bg-blend-overlay filter brightness-[60%] rounded-t-md lg:rounded-l-none lg:h-full lg:w-1/2 lg:flex-shrink-0 lg:rounded-r-md"
      ></div>
      <div class="px-4 space-y-4 my-8 lg:mx-8 lg:mt-16 lg:space-y-16">
        <div class="text-center lg:text-left">
          <h1
            class="text-white text-3xl lg:text-4xl font-extrabold lg:font-bold font-sans-serif"
          >
            Get <span class="text-indigo-lighter">insights</span> that help your business
            grow.
          </h1>
          <p
            class="text-white opacity-75 lg:text-sm mt-8 lg:leading-6 lg:mr-8 mx-2 leading-7"
          >
            Discover the benefits of data analytics and make better decisions regarding
            revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div class="lg:flex lg:justify-evenly lg:-ml-16 space-y-8 lg:space-y-0">
          <div class="text-white text-center lg:text-left">
            <h2 class="text-2xl font-extrabold font-sans-serif">10k+</h2>
            <p class="uppercase font-normal opacity-60 font-sans text-sm">companies</p>
          </div>

          <div class="text-white text-center lg:text-left">
            <h2 class="text-2xl font-extrabold font-sans-serif">314</h2>
            <p class="uppercase font-normal opacity-60 font-sans text-sm">templates</p>
          </div>

          <div class="text-white text-center lg:text-left">
            <h2 class="text-2xl font-extrabold font-sans-serif">12M+</h2>
            <p class="uppercase font-normal opacity-60 font-sans text-sm">queries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#img {
  background-image: url("../assets/ch1/image-header-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 768px) {
  #img {
    background-image: url("../assets/ch1/image-header-desktop.jpg");
  }
}

#app {
  text-align: left;
}
</style>
