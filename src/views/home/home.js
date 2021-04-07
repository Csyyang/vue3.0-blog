import { ref } from 'vue'

export default function touchs() {
    const img = [require('@/assets/scenery1.jpeg'), require('@/assets/scenery2.jpeg'), require('@/assets/scenery3.jpeg')]
    const start = ref(0); // 偏移起点
    const touch = ref(null); //HTMLDOM
    const move = ref(0); // 偏移距离
    const imgLength = img.length
    const imgIndex = ref(0); // 当前展示图片下标
    // let setFun = null;
    const canMove = -(imgLength - 1) * 375 // 偏移最大距离

    const touchend = (e) => {
        const x = e.changedTouches[0].pageX - start.value
        if (x > 0) {
            move.value += 375
            if (move.value > 0) {// 超出左边范围
                move.value = move.value - 355
                setTimeout(() => {
                    move.value = 0
                    changeTransform(move.value)
                }, 500)
            }
            setImgIndex('subtract')
            changeTransform(move.value)
        } else {
            move.value -= 375

            if (move.value < canMove) { // 超出右边范围

                move.value = move.value + 355
                setTimeout(() => {
                    move.value = canMove
                    changeTransform(move.value)
                }, 500)
            }
            setImgIndex('add')
            changeTransform(move.value)
        }


    }
    const touchmove = (e) => {
        let x = e.touches[0].pageX - start.value + move.value;
        if (x > 0) {
            x = 20
        }
        if (x < canMove) {
            x = canMove - 20
        }
        changeTransform(x)

    }
    const touchstart = (e) => {
        // console.log(e)

        start.value = e.touches[0].pageX
    }

    const changeTransform = (px) => {
        touch.value.style.transform = `translate(${px / 100}rem, 0)`
    }
    const setImgIndex = (x) => {
        switch (x) {
            case 'add':
                if (imgIndex.value + 1 < imgLength) {
                    imgIndex.value++
                }
                break;
            case 'subtract':
                if (imgIndex.value - 1 >= 0) {
                    imgIndex.value--
                }
                break;
        }
    }

    return {
        img,
        imgIndex,
        touch,
        move,
        touchend,
        touchmove,
        touchstart
    }
}