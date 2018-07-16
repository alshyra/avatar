class EnvStore {
  rootUrl() {
    return "https://randomuser.me/api/"; // window.location.origin;
  }
}

export default new EnvStore();
