<template>
  <NavigationComponent />
  <!-- cursor-none -->
  <section
    id="header_video"
    class="header_video relative cursor-none overflow-hidden"
    @mouseover="setHover"
    @mouseout="setHoverOut"
  >
    <video
      src="https://basic-admin.basicagency.com/uploads/reel-loop.mp4"
      class="object-cover w-full h-screen"
      autoplay
      loop
      muted
    ></video>
    <CursorCustom
      :hover="hovr"
      initLeft="0"
      initRight="0"
      initTop="0"
      initBottom="0"
      id="headerCursor"
      parentId="header_video"
    />
  </section>

  <main class="pt-8 pb-36 lg:mt-10">
    <section
      class="about pl-8 mb-10 flex flex-col lg:flex-row lg:justify-between"
    >
      <div class="about_desc lg:w-full">
        <p class="mr-24 lg:mr-0">
          BASIC/DEPT® is a global branding and digital design agency building
          products, services, and eCommerce experiences that turn cultural
          values into company value.
        </p>

        <div
          class="
            btn_more
            uppercase
            rounded-full
            font-bold
            flex
            justify-center
            py-2
            mt-10
          "
        >
          see the work
        </div>
      </div>
      <div class="about-logo pr-8 mt-20 w-full lg:mt-0">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100">
            <path
              d="M0,86.8h41.9c19.6,0,31.3-8.3,31.3-24.5c0-10.2-6-16.2-15.1-19.2c7.2-3.4,12.1-9.4,12.1-19.2c0-12.5-7.9-21.5-27.2-21.5H0 V86.8z M47.2,28.3c0,5.7-3.8,8.7-11.7,8.7H23V19.6h12.5C43.8,19.6,47.2,22.6,47.2,28.3z M49.8,60.8c0,6-3.8,8.7-12.1,8.7H22.6V51.7 h15.1C46,52.1,49.8,54.7,49.8,60.8z M128.3,0h-18.9L73.6,100h18.5L128.3,0z M216.6,44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5 C203.4,86.8,216.6,68.3,216.6,44.5z M192.5,44.5c0,16.6-9.4,22.6-22.3,22.6h-12.1V21.9h12.1C183,21.9,192.5,27.9,192.5,44.5z"
            ></path>
            <path
              d="M224.2,46.4c0,22.6,18.5,41.1,41.1,41.1c22.6,0,41.1-18.5,41.1-41.1S287.9,5.3,265.3,5.3C242.6,5.3,224.2,23.8,224.2,46.4z M232.1,46.4c0-18.9,14.7-34,33.2-34c18.5,0,33.2,15.1,33.2,34s-15.1,34-33.2,34C246.8,80,232.1,64.9,232.1,46.4z M246,66.8h12.8 v-14h7.5l7.5,14h14l-9.4-16.6c4.2-1.9,7.5-6.8,7.5-12.1c0-9.4-6-14-16.6-14h-23.8v42.6H246z M272.8,38.1c0,3.4-2.3,4.9-6.4,4.9h-7.9 V34h7.9C270.9,34.3,272.8,35.1,272.8,38.1z"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <section class="cases px-8 flex flex-nowrap gap-4 overflow-x-auto">
      <div class="case">
        <div class="case-image">
          <img src="https://dummyimage.com/720x920/000/fff.jpg" alt="" />
        </div>
        <div class="case-desc">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="case">
        <div class="case-image">
          <img src="https://dummyimage.com/720x920/000/fff.jpg" alt="" />
        </div>
        <div class="case-desc">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="case">
        <div class="case-image">
          <img src="https://dummyimage.com/720x920/000/fff.jpg" alt="" />
        </div>
        <div class="case-desc">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>

    <div class="separator m-36">
      <div class="border">METTRE LA BORDURE</div>
    </div>

    <section
      id="featured-eng"
      class="featured-eng relative curssor-none overflow-hidden mb-32"
      @mouseover="setHover2"
      @mouseout="setHover2"
    >
      <h2 class="font-bold mb-8 pl-8">FEATURED ENGAGEMENTS</h2>

      <SliderWidget />
      
      <CursorCustom
        :hover="hovr2"
        initLeft="auto"
        initRight="5%"
        initTop="0"
        initBottom="0"
        id="slideCursor"
        parentId="featured-eng"
      />
    </section>

    <section class="aboutus px-8">
      <div
        class="
          flex flex-col
          md:flex-row-reverse md:items-start md:justify-between
          lg:gap-24
        "
      >
        <div class="about-video w-full">
          <video
            src="https://basic-admin.basicagency.com/uploads/Culture-Loop_v1.mp4"
            loop
            autoplay
            muted
          ></video>
        </div>
        <div class="about-title leading-10 w-full md:sticky md:top-1/4">
          <h1 class="font-bold my-8 mt-16 md:mt-0">
            BASIC/DEPT® HELPS BRANDS ●CONNECT W/ CULTURE
          </h1>
          <p>ADWEEK <b>(AGENCY SPOTLIGHT)</b></p>

          <div
            class="about-btn mt-5 rounded-full flex items-center justify-center"
          >
            ABOUT US
          </div>
        </div>
      </div>
    </section>

    <section class="news px-8 my-28">
      <div class="news-title mb-8 flex justify-between items-center">
        <h2 class="font-bold">FEATURED NEWS</h2>

        <div
          class="
            news-btn
            uppercase
            flex
            justify-center
            items-center
            rounded-full
          "
        >
          View all
        </div>
      </div>

      <div class="preview-news">
        <NewFeatured />
        <NewFeatured />
        <NewFeatured />
        <NewFeatured />
        <NewFeatured />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import CursorCustom from "@/components/CursorCustom.vue";
import SliderWidget from "@/components/SliderWidget.vue";
import NewFeatured from "@/components/NewFeatured.vue";

const hovr = ref(false);
const hovr2 = ref(false);

function setHover() {
  hovr.value = true;
}

function setHoverOut() {
  hovr.value = false;
}

function setHover2() {
  hovr2.value = !hovr2.value;
}


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
    rect.bottom >=
      (window.innerHeight/2 || document.documentElement.clientHeight/2)
    
  );
}

onMounted(() => {
  const boxChangeTheme = document.getElementsByClassName("aboutus")[0];
  window.addEventListener(
    "scroll",
    function () {
      isInViewport(boxChangeTheme)
        ? document.body.classList.add("blackPink")
        : document.body.classList.remove("blackPink");
    },
    {
      passive: true,
    }
  );
});
</script>

<style lang="scss">
body,
html {
  background-color: $backLightColor;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textColorDefault;

  section.about {
    p {
      font-size: 22px;
      line-height: 1.2;
    }

    .btn_more {
      font-size: 11px;
      border: 1px solid black;
      max-width: 145px;
    }

    .about-logo {
      .logo {
        max-width: 265px;
        margin-right: 0;
        margin-left: auto;
      }
    }
  }

  section.cases {
    .case {
      .case-image {
        width: calc((100vw / 1.5) * 0.9);
        img {
          width: 100%;
        }
      }

      .case-desc {
        margin-top: 1em;
        h3 {
          font-weight: bold;
        }
      }
    }
  }

  section.aboutus {
    .about-btn {
      border: 1px solid black;
      width: 120px;
      height: 32px;
    }
  }

  section.news {
    .news-btn {
      border: 1px solid black;
      width: 120px;
      height: 32px;
    }
  }
}

@media (min-width: 768px) {
  #app {
    section.about {
      .about_desc {
        width: 53%;
      }
      .about-logo {
        .logo {
          max-width: 465px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  #app {
    section.about {
      .about_desc {
        width: 100%;
      }
      p {
        font-size: 38px;
        line-height: 1.2;
      }
      .about-logo {
        .logo {
          max-width: 565px;
        }
      }
    }

    section.cases {
      .case {
        .case-image {
          width: 100%;
        }

        .case-desc {
          width: 50%;
        }
      }
    }

    section.aboutus {
      .about-title {
        h1 {
          font-size: 6.25vw !important;
          line-height: 0.9;
        }
      }
    }
  }
}
</style>
