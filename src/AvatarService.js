import axios from "axios";
import EnvStore from "./EnvStore";

class AvatarService {
  constructor() {
    this.rootUrl = EnvStore.rootUrl();
  }
  async getUser() {
    const response = await axios.get(this.rootUrl);
    return response.data.results;
  }
  async getUsers() {
    const users = [];
    for (let i = 0; i < 10; i++) {
      await this.getUser().then(user => {
        users.push(...user);
      });
    }
    return users;
  }
}

const avatarService = new AvatarService();
export default avatarService;
