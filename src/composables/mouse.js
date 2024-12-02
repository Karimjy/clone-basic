import {
    ref,
    reactive,
    toRefs,
    onMounted,
    onUnmounted
} from 'vue'
import gsap from "gsap";

export function useMouse(targetId) {
    const mouseX = ref(0);
    const mouseY = ref(0);
    const speed = 0.35;

    let target;

    const pos = reactive({
        x: 0,
        y: 0,
      });

    function update(e) {
        if(e.target.offsetParent && e.target.offsetParent.id == targetId){
            target = e.target.offsetParent;
        }
        
        if (target == null){
            return;
        }
        let topPos = target.getBoundingClientRect().top + window.scrollY;

        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        mouseX.value = e.pageX;
        mouseY.value = e.pageY;

        pos.x += (mouseX.value - pos.x) * dt;
        pos.y += (mouseY.value - pos.y - topPos) * dt;
    }


    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return toRefs(pos)
}