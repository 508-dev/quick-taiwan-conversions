<template>
  <div id="converter">
    <p>{{ label }}</p>
    <input v-model.number="convert" type="number" :placeholder="enterVal" />
    <p>{{ outputLabel }}</p>
    <p id="result">{{ convertedOutput }}</p>
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
  },
};
</script>

<style scoped>
#converter {
  height: 150px;
  padding: 10px;
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

[data-theme="dark"] input {
  background-color: #444;
  color: #fff;
  border-color: #666;
}

[data-theme="dark"] input:focus {
  background-color: #555;
  color: #fff;
}

p {
  font-size: 14pt;
  font-weight: bold;
}
#result {
  font-size: 18pt;
}
</style>
