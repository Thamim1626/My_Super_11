import { subscriptionDetails } from "../../Object/index";
import "./style.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <h1 className="home-about-heading">Subscription Plans </h1>
      <ul className="subscription-list">
        {subscriptionDetails.map((eachItems) => {
          const { planList } = eachItems;
          return (
            <li className="subscription-item" key={eachItems.id}>
              <p className="subscription-item-heading">{eachItems.plan}</p>
              <p className="subscription-item-price">{eachItems.price} </p>
              <ul className="subscription-inner-list">
                {planList.map((eachItem) => (
                  <li className="subscription-inner-item" key={eachItem.id}>
                    {eachItem.planDes}
                  </li>
                ))}
              </ul>
              <button className="subscription-item-button">SELECT</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subscription;
