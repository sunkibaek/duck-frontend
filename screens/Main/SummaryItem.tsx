interface ISummaryProps {
  name: string;
  description: string;
  value: string;
}

const SummaryItem = ({ name, description, value }: ISummaryProps) => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="my-0">{name}</h6>

      <small className="text-muted">{description}</small>
    </div>

    <span className="text-muted">{value}</span>
  </li>
);

export default SummaryItem;
