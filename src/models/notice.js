import Base from "./base";
import User from "./user";
import Food from "./food";

class Notice extends Base {
  constructor(params) {
    super();

    this.id = params.id;
    this.text = params.text;
    this.createdAt = params.created_at;
    this.updatedAt = params.updated_at;
    this.createdUser = new User(params.created_user);
    this.updatedUser = new User(params.updated_user);
  }

  static create(jwt, foodId, body) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: body.text
      })
    };

    return super
      .authFetch(`${super.endpoint}/foods/${foodId}/notices`, jwt, options)
      .then(response => response.json())
      .then(food => new Food(food));
  }
}

Notice.emptyParams = {
  id: 0,
  text: ""
};

export default Notice;
