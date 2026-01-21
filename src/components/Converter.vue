<template>
  <div id="converter">
    <p>{{ label }}</p>
    <input v-model.number="convert" type="number" :placeholder="enterVal" />
    <div class="output-grid" :class="{ single: !hasSecondaryOutput }">
      <div class="output-block">
        <p>{{ outputLabel }}</p>
        <p class="result">{{ convertedOutput }}</p>
      </div>
      <div v-if="hasSecondaryOutput" class="output-block">
        <p>{{ secondaryOutputLabel }}</p>
        <p class="result">{{ convertedSecondaryOutput }}</p>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "Converter",
  props: {
    label: String,
    outputLabel: String,
    enterVal: String,
    output: Function,
    secondaryOutputLabel: String,
    secondaryOutput: Function,
  },
  data() {
    return {
      convert: "",
    };
  },
  computed: {
    convertedOutput() {
      return this.output(this.convert);
    },
    convertedSecondaryOutput() {
      if (!this.hasSecondaryOutput) return "";
      return this.secondaryOutput(this.convert);
    },
    hasSecondaryOutput() {
      return (
        typeof this.secondaryOutput === "function" && this.secondaryOutputLabel
      );
    },
  },
};
</script>

<style scoped>
#converter {
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  background-color: #eee;
  display: flex;
  width: 80%;
  margin: auto;
  padding: 10px 14px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 14pt;
}
input:focus {
  background-color: #fff;
  padding: 10.5px 14px;
  margin: #fff;
}
p {
  font-size: 14pt;
  font-weight: bold;
  margin: 6px 0;
}
.result {
  font-size: 18pt;
}
.output-grid {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
}
.output-grid.single {
  justify-content: center;
}
.output-block {
  min-width: 0;
  text-align: center;
}
</style>
