<template>
  <div class="px-8 flex flex-nowrap gap-4 overflow-x-auto">
    <div class="brands flex gap-2 pb-10">
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
      <div class="brand">
        <div class="logo">
          <img src="https://dummyimage.com/100x39/000/fff.jpg" alt="" />
        </div>
        <h3 class="font-bold uppercase mt-8 mb-4">Brand text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          asperiores.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.brands {
  .brand {
    width: calc(100vw / 1.5);
    .logo {
      position: relative;
      height: 60px;
      img {
        max-height: 40px;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        border-bottom: 2px solid black;
      }
    }
  }
}

@media (min-width: 768px) {
 .brands {
  .brand {
    width: calc(100vw / 1.5) * 0.68;
    
  }
}
}


@media (min-width: 1024px) {
  .brands {
  .brand {
    width: calc(100vw / 1.5) * 0.4;

    p{
      width: 70%;
    }
    
  }
}
}
</style>