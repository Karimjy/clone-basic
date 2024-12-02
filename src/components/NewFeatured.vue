<template>
  <div class="new flex flex-col mb-5 md:flex-row md:items-stretch">
    <div class="new-img">
      <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="" />
    </div>
    <div class="md:flex md:flex-col md:justify-between md:pl-4">
      <div class="md:flex md:justify-between">
        <div
          class="new-title uppercase font-bold mt-5 md:m-0 md:mr-10 md:w-full"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem nemo corrupti impedit.
        </div>
        <div class="arrow hidden md:block md:w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
            <rect x="0.1" y="7.5" width="14" height="2"></rect>
            <path d="M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z"></path>
            <path d="M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z"></path>
          </svg>
        </div>
      </div>
      <div class="new-footer flex justify-between items-center mt-10 md:mt-0">
        <div class="typeDate flex items-center">
          <div class="type uppercase font-bold">TYPE</div>
          <div class="date ml-2">11.11.1111</div>
        </div>
        <div class="arrow md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
            <rect x="0.1" y="7.5" width="14" height="2"></rect>
            <path d="M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z"></path>
            <path d="M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.new {
  border-top: 1px solid black;
  padding-top: 20px;
  .new-title {
    font-size: 24px;
    line-height: 1.2;
  }

  .new-footer {
    font-size: 11px;
  }

  .arrow {
    width: 20px;
  }
}
@media (min-width: 768px) {
  .new {
    .arrow {
      width: 40px;
    }
  }
}

@media (min-width: 1024px) {
  .new {
    .new-title {
    font-size: 42px;
    line-height: 1.1;
    width: 70%;
  }
  }
}
</style>