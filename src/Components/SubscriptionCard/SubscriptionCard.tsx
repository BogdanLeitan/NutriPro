import "./subscriptionCard.css"

function SubscriptionCard(props: any) {
  return (
    <>
      <div className={props.id}>
        {props.id == "plan-card featured" ? <div className="plan-badge">Popular</div>: null}
        <div className="plan-name">{props.title}</div>
        <div className="plan-price"> {props.price} <span>RON/lună</span></div>
        <ul className="plan-perks">
          <li>{props.benefits[0]}</li>
          <li>{props.benefits[1]}</li>
          <li>{props.benefits[2]}</li>
          <li>{props.benefits[3]}</li>
        </ul>
        <a href="#" className="plan-btn plan-btn-outline">Alege {props.title}</a>
      </div>
    </>
  );
}

export default SubscriptionCard