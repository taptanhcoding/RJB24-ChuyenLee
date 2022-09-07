import ProgessItem from "../component/ProgessItem/ProgessItem";

const progess = [
  {
    text: "Bandwidth",
    percentage: 20,
    type: "danger",
  },
  {
    text: "storage",
    percentage: 50,
    type: "info",
  },
  {
    text: "users",
    percentage: 70,
    type: "success",
  },
  {
    text: "visitors",
    percentage: 30,
    type: "warning",
  },
  {
    text: "emails",
    percentage: 45,
    type: "purple",
  },
  {
    text: "basic",
    percentage: 80,
    type: "pink",
  },
  {
    text: "others",
    percentage: 37,
    type: "primary",
  },
];
function ChartBar1() {
  return (
    <div className="wrapper">
      {progess.map((pr,i) => (
        <ProgessItem key={i} percentage={pr.percentage} type={pr.type}>{pr.text}</ProgessItem>
      ))}
    </div>
  );
}
export default ChartBar1;
