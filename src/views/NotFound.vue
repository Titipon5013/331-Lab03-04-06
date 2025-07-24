<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <RouterLink to="/" class="back-btn">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  max-width: 400px;
  margin: 80px auto;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
}
.not-found h1 {
  color: #e74c3c;
  font-size: 2em;
  margin: 0;
}
.back-btn {
  display: inline-block;
  margin-top: 24px;
  padding: 8px 20px;
  background: #3498db;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #217dbb;
}
</style>
