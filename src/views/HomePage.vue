<template>
  <div class="bixbox hothome">
    <div class="releases">
      <h3>
        <span>Hot Komik Update</span>
      </h3>
    </div>
    <HotComicCard></HotComicCard>
  </div>
</template>

<script>
import HotComicCard from "../components/HotComicCard.vue";
export default {
  name: "HomePage",
  components: {
    HotComicCard,
  },
};
</script>

<style>
.bixbox {
  background: #fff;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  margin-bottom: 18px;
  overflow: hidden;
  -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
  -khtml-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px rgb(0, 0, 0 / 10%);
}

.hothome {
  margin-top: 10px;
}

.releases {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid white;
  padding: 8px 15px;
}

.releases h3 {
  font-size: 1.1em;
  color: #3367d6;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  position: relative;
  text-transform: uppercase;
}
</style>
