<template>
  <!-- background -->
  <div
    class="gradient-radial w-[100vw] h-[100vh] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 py-8"
  >
    <!-- scoreboard -->
    <div
      class="ring ring-gray-400 lg:col-span-2 lg:col-start-2 col-span-full col-start-1 rounded-2xl flex items-center px-8 justify-between h-4/5 w-4/5 lg:w-auto mx-auto lg:mx-0 relative z-10"
    >
      <img src="../../ch2/images/logo-bonus.svg" class="h-4/5" alt="" />
      <!-- white box -->
      <div
        class="bg-white rounded-lg h-4/5 px-16 w-1/4 flex flex-col justify-center py-4 items-center"
      >
        <h3 class="uppercase text-[hsl(229,64%,46%)] font-normal tracking-wide text-lg">
          score
        </h3>
        <h1 class="font-bold text-6xl text-[hsl(229,25%,31%)] whitespace-nowrap">
          {{ score }}
        </h1>
      </div>
    </div>
    <!-- Game -->
    <TransitionRoot
      as="div"
      appear
      :show="!picked"
      class="col-span-1 row-span-2 row-start-2 col-start-2 place-self-center w-full h-full grid place-items-center grid-cols-3 grid-rows-3 lg:ml-[100%]"
      enter="transition-all duration-500 ease-out delay-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-all duration-300"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-0"
    >
      <img
        class="row-span-full col-span-full w-auto h-auto"
        src="../../ch2/images/bg-pentagon.svg"
        alt=""
      />
      <Piece
        @click="
          picked = 'scissors';
          pickHouse();
        "
        :color="colors['scissors']"
        class="row-start-1 col-start-2"
        :icon="icons['scissors']"
      >
      </Piece>
      <Piece
        :color="colors['paper']"
        :icon="icons['paper']"
        class="row-start-2 col-start-3 self-start justify-self-end"
        @click="
          picked = 'paper';
          pickHouse();
        "
      ></Piece>
      <Piece
        @click="
          picked = 'rock';
          pickHouse();
        "
        class="row-start-3 col-start-3 self-end justify-self-start"
        :icon="icons['rock']"
        :color="colors['rock']"
      ></Piece>

      <Piece
        @click="
          picked = 'lizard';
          pickHouse();
        "
        class="row-start-3 col-start-1 self-end justify-self-end"
        :icon="icons['lizard']"
        :color="colors['lizard']"
      ></Piece>

      <Piece
        @click="
          picked = 'spock';
          pickHouse();
        "
        class="row-start-2 col-start-1 self-start justify-self-start"
        :icon="icons['spock']"
        :color="colors['spock']"
      ></Piece>
    </TransitionRoot>
    <!-- step 2 -->
    <TransitionRoot
      :show="picked.length > 0"
      class="col-span-2 row-span-2 row-start-2 col-start-2 lg:place-self-center w-3/5 h-full grid grid-cols-4"
      enter="transition-opacity duration-500 ease-out delay-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div
        class="flex flex-col items-center col-start-1 space-y-16 duration-500 ease-out z-10 delay-500"
        :class="{ 'transform -translate-x-32': house.length > 0 }"
      >
        <p class="uppercase text-white text-lg font-bold whitespace-nowrap z-10">
          you picked
        </p>
        <Piece
          :icon="icons[picked]"
          :color="colors[picked]"
          classes="w-48 h-48 ring-[2rem] cursor-default hover:scale-100"
          :class="{ 'win-gradient': info.playerWon && house.length > 0 }"
          img-class="w-1/2 h-1/2"
        ></Piece>
      </div>

      <TransitionRoot
        :show="house.length > 0"
        class="col-span-2 col-start-2 self-center justify-self-center flex flex-col items-center w-full z-10 relative"
        enter="transition-all transform duration-500 ease-out delay-500"
        enter-from="opacity-0 scale-0"
        enter-to="opacity-100 scale-100"
        leave="transition-opacity duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <h1
          class="text-white text-5xl text-bold uppercase font-mono font-extrabold whitespace-nowrap"
        >
          {{ info.msg }}
        </h1>
        <button
          @click="reset"
          class="uppercase font-normal py-3 w-full tracking-widest text-lg bg-white rounded-lg focus:outline-none shadow-2xl transform hover:scale-105 duration-300 ease-in-out"
          :class="{ 'text-red-700': !info.playerWon }"
        >
          Play again
        </button>
      </TransitionRoot>

      <div
        class="flex flex-col col-start-4 items-center space-y-16 duration-500 ease-out z-0 delay-500"
        :class="{ 'transform translate-x-32': house.length > 0 }"
      >
        <p class="uppercase text-white text-lg font-bold whitespace-nowrap z-10">
          the house picked
        </p>
        <div
          class="rounded-full bg-black h-48 w-48 transition-all duration-500 ease-out delay-300"
          :class="{
            'opacity-20': house.length == 0,
            'win-gradient': !info.playerWon && house.length > 0,
          }"
        >
          <TransitionRoot
            :show="house.length > 0"
            enter="transition-all transform duration-500 ease-out"
            enter-from="opacity-0 scale-0"
            enter-to="opacity-100 scale-100"
            leave="transition-opacity duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
            class="w-full h-full flex justify-center items-center bg-white rounded-full ring-[2rem]"
            :class="colors[house]"
          >
            <img class="w-1/2 h-1/2" :src="icons[house]" alt="" />
          </TransitionRoot>
        </div>
      </div>
    </TransitionRoot>

    <!-- Rules -->
    <div
      class="row-start-4 col-start-2 lg:row-start-3 lg:col-start-4 w-full h-full flex justify-center items-end z-10"
    >
      <button
        @click="rulesOpen = !rulesOpen"
        class="focus:outline-none bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg uppercase text-sm font-bold tracking-wider"
      >
        Rules
      </button>
    </div>
  </div>

  <TransitionRoot :show="rulesOpen" as="template">
    <Dialog as="div" @close="closeRules()">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center flex justify-center items-center">
          <DialogOverlay class="fixed inset-0 bg-black opacity-20" />
          <TransitionChild
            as="div"
            enter="transition-opacity duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-300 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            class="w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl flex flex-col space-y-8 justify-center items-center"
          >
            <DialogTitle as="h3" class="self-start flex justify-between w-full">
              <span class="text-3xl font-bold font-mono text-gray-900 uppercase"
                >Rules</span
              >
              <button class="focus:outline-none" @click="closeRules()">
                <img
                  src="../../ch2/images/icon-close.svg"
                  class="h-1/2 cursor-pointer"
                  alt=""
                />
              </button>
            </DialogTitle>
            <img src="../../ch2/images/image-rules-bonus.svg" alt="" />
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

import Piece from "../../ch2/Piece.vue";

const colors = {
  paper: "ring-blue-500",
  scissors: "ring-yellow-500",
  rock: "ring-red-500",
  lizard: "ring-purple-500",
  spock: "ring-green-500",
};

const icons = {
  paper: "../../ch2/images/icon-paper.svg",
  scissors: "../../ch2/images/icon-scissors.svg",
  rock: "../../ch2/images/icon-rock.svg",
  lizard: "../../ch2/images/icon-lizard.svg",
  spock: "../../ch2/images/icon-spock.svg",
};

const picked = ref("");

const house = ref("");

const rulesOpen = ref(false);

const info = reactive({
  msg: "",
  playerWon: false,
});

const score = ref(0);

const rules = {
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  rock: ["scissors", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

function pickHouse(skip = false) {
  if (!skip) {
    setTimeout(() => {
      pickHouse(true);
    }, 1000);
    return;
  }
  switch (Math.ceil(Math.random() * 10) % 5) {
    case 0:
      house.value = "paper";
      break;
    case 1:
      house.value = "scissors";
      break;
    case 2:
      house.value = "rock";
      break;
    case 3:
      house.value = "lizard";
      break;
    case 4:
      house.value = "spock";
      break;

    default:
      break;
  }

  if (house.value == picked.value) {
    pickHouse(true);
    return;
  }

  info.msg = playerWon();
  info.playerWon = info.msg.includes("win");
}

function playerWon() {
  if (picked.value == house.value) return "Tie";
  if (rules[picked.value].find((el) => el == house.value)) {
    score.value += 1;
    return "You win";
  } else score.value -= score.value == 0 ? 0 : 1;
  return "You lose";
}

function reset(skip = false) {
  if (!skip) {
    setTimeout(() => {
      pickHouse(true);
    }, 1000);
    return;
  }
  house.value = "";
  picked.value = "";
  info.value = {};
}

function closeRules() {
  rulesOpen.value = false;
}
</script>
<style scoped>
.gradient-radial {
  background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}

.win-gradient {
  box-shadow: 0 0 0 5rem hsl(214 40% 35% / 40%), 0 0 0 10rem hsl(214 40% 30% / 40%),
    0 0 0 15rem hsl(214 47% 30% / 20%);
}
</style>
