<template>
  <div id="app">
    <el-container>
      <el-header id="header"><h1>Avatar</h1></el-header>
      <el-container>
        <el-aside id="sidenav" width="300px">
          <Employes />        
        </el-aside>
        <el-container>
          <el-main id="mainframe">          
            <DetailedEmploye />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import DetailedEmploye from "./components/DetailedEmploye.vue";
import Employes from "./components/Employes.vue";

export default {
  name: "app",
  components: {
    DetailedEmploye,
    Employes
  }
};
</script>

<style>
#header {
  background-color: rgb(79, 99, 179);
  color: white;
  text-align: left;
}
#header.h1 {
  vertical-align: middle;
}

#sidenav {
  text-align: left;
  height: calc(100vh - 60px);
  background-color: rgb(224, 220, 255);
}

#mainframe {
  text-align: left;
  background-color: rgb(243, 242, 250);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
