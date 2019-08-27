import Base from "./base";
import Food from "./food";

class ShopPlan extends Base {
  constructor(params) {
    super();

    this.id = params.id;
    this.notice = params.notice;
    this.done = params.done;
    this.amount = params.amount;
    this.food = new Food(params.food);
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }

  static getAll(jwt) {
    return super
      .authFetch(`${super.endpoint}/shop_plans`, jwt)
      .then(response => response.json())
      .then(plans => plans.map(plan => new Food(plan)));
  }
}

export default ShopPlan;
