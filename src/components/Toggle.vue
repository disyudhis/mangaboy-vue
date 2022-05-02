<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input type="checkbox" :checked="mode === 'dark' ? 'checked' : false" @change="$emit('toggle')" />
      <span class="toggler round"></span>
    </label>
    <!-- <div class="toggle form-check form-switch">
      <input
        class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-contain bg-no-repeat bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-500" for="flexSwitchCheckDefault">{{ mode }} Mode</label>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202b;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: #2196f3;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196f3;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>
