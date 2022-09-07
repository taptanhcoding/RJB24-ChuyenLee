import ChartColumnItem from "../component/ChartColumnItem/ChartColumnItem";

const charts = [
  {
    text: "Today's visitor",
    total: 24599,
    unit: "string",
    percentages: [20, 45, 30, 80, 75],
  },
  {
    text: "yesterday's visitor",
    total: 15699,
    unit: "string",
    percentages: [20, 45, 30, 80, 75],
  },
  {
    text: "total downloads",
    total: 124599,
    unit: "string",
    percentages: [20, 45, 30, 80, 75],
  },
  {
    text: "curent income",
    total: 54599,
    unit: "string",
    percentages: [20, 45, 30, 80, 75],
  },
];
function ChartColumn() {
  return (
    <div className="mt-4 ml-4">
      {charts.map((char, i) => (
        <ChartColumnItem
          key={i}
          text={char.text}
          total={char.total}
          percentages={char.percentages}
        />
      ))}
    </div>
  );
}

export default ChartColumn;
