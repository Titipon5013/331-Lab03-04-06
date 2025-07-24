<template>
  <div class="passenger-details">
    <h2>User Detail View</h2>
    <RouterLink :to="`/passenger/${$route.params.id}`">Info</RouterLink> |
    <RouterLink :to="`/passenger/${$route.params.id}/airline`">Company</RouterLink>
    <RouterView />
  </div>
</template>

<style scoped>
.passenger-details {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.passenger-details h2 {
  margin-bottom: 16px;
  color: #2c3e50;
}
.passenger-details a {
  color: #3498db;
  text-decoration: none;
  margin: 0 8px;
  font-weight: bold;
}
.passenger-details a.router-link-exact-active {
  text-decoration: underline;
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
