<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding:0;
  margin:0;
}
.logo {
  width: 100px;
}
.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button,
.login button,
.add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: white;
  cursor: pointer;
}
.register button:hover,
.login button:hover,
.add button:hover {
  background-color: rgb(3, 173, 240);
}
.del {
  margin-top:10px;
  border: 2px solid gainsboro;
  background-color: darkred;
  color: whitesmoke;
  cursor: pointer;
}
.del:hover {
  background-color: whitesmoke;
  color: darkred;
}
</style>
