<script setup>
const scrollMehod1 = (event) => {
  let limit = event.target.scrollTop + event.target.clientHeight / 2
  let children = event.target.children
  for (let i = 0; i < children.length; i++) {
    let item = children[i]
    if (limit > item.offsetTop && limit < (item.offsetTop + item.offsetHeight)) {
      let name = item.getAttribute("name")
      let targetparent = document.getElementById('scroll2')
      let targets = targetparent.children
      for (let j = 0; j < targets.length; j++) {
        let target = targets[j]
        if (target.getAttribute('name') === name) {
          targetparent.scrollTop = target.offsetTop - (targetparent.clientHeight - target.offsetHeight) / 2
          target.setAttribute("active", "true")
        } else {
          target.removeAttribute("active")
        }
      }
    }
  }
};
const clickMethod = (event) => {
  let target = document.getElementById("scroll1")
  for (let i = 0; i < target.children.length; i++) {
    let item = target.children[i]
    if (item.getAttribute('name') === event.target.getAttribute('name')) {
      target.scrollTop = item.offsetTop
      break
    }
  }
}

</script>

<template>
  <div style="width:100%;height:100%;display:flex;overflow: hidden;">
    <div style="width:50%;overflow: auto;height: 100%;background-color: burlywood;" @scroll="scrollMehod1" id="scroll1"
      class="scroll1">
      <div name="blok1"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok1
      </div>
      <div name="blok2"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok2
      </div>
      <div name="blok3"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok3
      </div>
      <div name="blok4"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok4
      </div>
      <div name="blok5"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok5
      </div>
      <div name="blok6"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;">blok6
      </div>
    </div>
    <div style="flex:1;overflow: auto;height: 100%;background-color: azure;scroll-behavior: smooth;" id="scroll2"
      class="scroll2">
      <div name="blok1"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok1
      </div>
      <div name="blok2"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok2
      </div>
      <div name="blok3"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok3
      </div>
      <div name="blok4"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok4
      </div>
      <div name="blok5"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok5
      </div>
      <div name="blok6"
        style="height:500px;border: 1px solid red;display: flex; align-items: center;justify-content: center;"
        @click="clickMethod">blok6
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll2 {
  div[active='true'] {
    background-color: red;
  }
}
</style>
