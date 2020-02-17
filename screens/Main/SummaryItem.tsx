interface ISummaryProps {
  id: string;
  name: string;
  description: string;
  value: string;
}

const SummaryItem = ({ id, name, description, value }: ISummaryProps) => (
  <li
    className="list-group-item d-flex justify-content-between lh-condensed"
    id={id}
  >
    <div>
      <h6 className="my-0">{name}</h6>

      <small className="text-muted">{description}</small>
    </div>

    <span className="text-muted">{value === "" ? "-" : value}</span>
  </li>
);

export default SummaryItem;
