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

  static create(jwt, params) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: params.text
      })
    };

    return super
      .authFetch(
        `${super.endpoint}/foods/${params.foodId}/notices`,
        jwt,
        options
      )
      .then(response => response.json())
      .then(food => new Food(food));
  }

  static remove(jwt, params) {
    const options = {
      method: "DELETE"
    };

    return super.authFetch(
      `${super.endpoint}/foods/${params.foodId}/notices/${params.id}`,
      jwt,
      options
    );
  }
}

Notice.emptyParams = {
  id: 0,
  text: ""
};

export default Notice;
