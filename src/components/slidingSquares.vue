<template>
  <div
    class="bg-gray-800 w-[100vw] h-[100vh] overflow-auto flex flex-col space-y-4 justify-center items-center text-white text-xl"
  >
    <div
      id="matrix"
      class="w-96 h-96 rounded-md border border-white grid grid-cols-4 grid-rows-4 gap-2 p-1 relative"
    >
      <div
        @click="moveSquare"
        id="square"
        class="w-full h-full bg-gray-200 border border-white rounded-md flex justify-center items-center"
        data-x="0"
        data-y="0"
      >
        <div class="number text-black text-3xl pointer-events-none select-none">1</div>
      </div>
      <div
        id="empty"
        class="w-full h-full flex justify-center items-center"
        style="order: 16"
        data-x="3"
        data-y="3"
      ></div>
    </div>
    <button
      @click="shuffle"
      class="rounded-md bg-green-500 px-3 py-2 text-lg text-white transform transition-transform duartion-100 active:scale-95"
    >
      Shuffle!
    </button>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let template = document.querySelector("#square");
  let parent = document.querySelector("#matrix");

  console.log(template, parent);

  for (let x = 1, y = 0; 4 * y + x < 15; x++, y += Math.floor(x / 4), x %= 4) {
    let clone = template.cloneNode(true);
    let num = clone.querySelector(".number");

    num.id = `${4 * y + x + 1}`;
    num.innerHTML = num.id;
    clone.style.order = num.id; //Very important

    clone.setAttribute("data-x", x);
    clone.setAttribute("data-y", y);
    clone.addEventListener("click", moveSquare);

    parent.appendChild(clone);
  }
});
async function moveSquare(event) {
  let x = event.target.getAttribute("data-x");
  let y = event.target.getAttribute("data-y");

  const empty = document.querySelector("#empty");

  const space = { x: empty.getAttribute("data-x"), y: empty.getAttribute("data-y") };
  //Deterine if space is near

  if (getDistance({ x, y }, space) == 1) {
    //swap
    event.target.setAttribute("data-x", space.x);
    event.target.setAttribute("data-y", space.y);

    empty.setAttribute("data-x", x);
    empty.setAttribute("data-y", y);

    //animate movement

    event.target.classList.add("transition-all", "duration-300");

    event.target.style.transform = `translate(calc(${delta(
      x,
      space.x
    )}*110%), calc(${delta(y, space.y)}*110%))`;

    await timeout(300);

    event.target.classList.remove("transition-all", "duration-300");
    event.target.style.transform = "";

    //move square

    // let emptyStyle = empty.style.order;
    // let fullStyle = event.target.style.order;
    // empty.style.order = fullStyle;
    // event.target.style.order = emptyStyle;

    immediateMove(empty, event.target);
  } else {
    event.target.classList.add("anim-shake");
    await timeout(300);
    event.target.classList.remove("anim-shake");
  }
}

function immediateMove(empty, full) {
  let emptyStyle = empty.style.order;
  let fullStyle = full.style.order;
  empty.style.order = fullStyle;
  full.style.order = emptyStyle;
}

function getDistance(first, second) {
  return Math.abs(first.x - second.x) + Math.abs(first.y - second.y);
}

function delta(from, to) {
  return to > from ? 1 : to == from ? 0 : -1;
}

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function shuffle() {
  const times = 100;

  const empty = document.querySelector("#empty");
  const coords = (el) => {
    return { x: el.getAttribute("data-x"), y: el.getAttribute("data-y") };
  };

  let prev = { x: 20, y: 20 };

  for (let i = 0; i < times; i++) {
    const space = coords(empty);
    let movable = Array.from(document.querySelectorAll("#matrix div")).filter((el) => {
      const coord = coords(el);
      return coord != prev && getDistance(coord, space) == 1;
    });
    prev = { ...space };
    let index = Math.floor(Math.random() * movable.length);

    try {
      immediateMove(empty, movable[index]);
    } catch (err) {
      debugger;
    }
    await timeout(300);
  }
}
</script>

<style scoped>
.anim-shake {
  transition: all;
  animation: shake 300ms linear;
}

@keyframes shake {
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
