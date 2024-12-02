<template>
  <!-- lg:h-auto lg:inset-auto lg:m-none -->
  <div class="cursorCustom absolute inset-0 m-auto h-max text-center" :id="id">
    <div class="cursor-circle uppercase text-black font-bold">
      <div
        class="circle rounded-full bg-white flex flex-col justify-center mb-2"
      >
        <div
          class="
            overflow-hidden
            relative
            h-3/4
            flex flex-col
            justify-center
            items-center
          "
        >
          <div class="word absolute">Play reel</div>
          <div class="nextWord absolute translate-y-full">Play reel</div>
        </div>
      </div>
      BASIC/DEPT® 2010-22
    </div>
  </div>
</template>

<script setup>
import { defineProps, watch, toRef, onMounted } from "vue";
import gsap from "gsap";
import { useMouse } from "@/composables/mouse.js";

const props = defineProps([
  "hover",
  "initLeft",
  "initRight",
  "initTop",
  "initBottom",
  "id",
  "parentId",
]);

const hoverStats = toRef(props, "hover");

var tl = gsap.timeline({});

onMounted(async () => {
  gsap.set(`#${props.id}`, {
    css: {
      height: "0px",
      top: props.initTop,
      left: props.initLeft,
      right: props.initRight,
      bottom: props.initBottom,
      margin: "none",
    },
  });
});

let follow = false;

watch(hoverStats, (newValue) => {
  console.log(newValue, `#${props.id}`);
  if (newValue) {
    tl.to(`#${props.id}`, { autoAlpha: 0, onComplete:() => follow = true });
    tl.to(".word", { duration: 0.3, y: "-100%", delay: 0.3 });
    tl.to(".nextWord", { duration: 0.3, y: "0%" });
  } else {
    tl.set(".word", { y: "0%" });
    tl.set(".nextWord", { y: "100%" });
    tl.to(`#${props.id}`, {
      autoAlpha: 0,
      onComplete: () => {
        gsap.set(`#${props.id}`, {
          css: {
            height: "0px",
            top: props.initTop,
            left: props.initLeft,
            right: props.initRight,
            bottom: props.initBottom,
            onComplete: () => {
              follow = false
              gsap.to(`#${props.id}`, {
                autoAlpha: 1,
              });
            },
          },
        });
      },
    });
  }
});

const pos = useMouse(props.parentId);

gsap.ticker.add(() => {
  if (hoverStats.value && follow) {
    gsap.set(`#${props.id}`, {
      css: {
        height: "auto",
        right: "auto",
        left: pos.x.value - 60,
        top: pos.y.value - 60,
        margin: "none",
        onComplete: () => {
              gsap.to(`#${props.id}`, {
                autoAlpha: 1,
              });
            },
      },
    });
  }
});
</script>

<style lang="scss" scoped>
$sizeCircle: 80px;
$sizeCircleTab: 120px;

.cursorCustom {
  width: $sizeCircle;
  font-size: 10px;
  pointer-events: none;

  .circle {
    width: $sizeCircle;
    height: $sizeCircle;
    padding: 15px;
  }
}

@media (min-width: 768px) {
  .cursorCustom {
    width: $sizeCircleTab;
    font-size: 11px;

    .circle {
      width: $sizeCircleTab;
      height: $sizeCircleTab;
      font-size: 14px;
      padding: 30px;
    }
  }
}
</style>