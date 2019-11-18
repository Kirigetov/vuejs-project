<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Vue cli app</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag='li' class="nav-item" to="/" exact>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag='li' class="nav-item" to="/users" exact>
            <a class="nav-link">Users list</a>
          </router-link>
          <router-link tag='li' class="nav-item" to="/users/:id" exact>
            <a class="nav-link">Edit user</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  margin-top: 80px;
}
</style>
