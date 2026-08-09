import { useEffect, useState } from "react";
import "./stats.scss";

const Stats = () => {
  type Stats = {
    title: string;
    description: string;
    number: number;
    unit: string;
    image: string;
  };
  const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    fetch("data/stats.json")
      .then((res) => res.json())
      .then((data: Stats[]) => setStats(data));
  }, [stats]);

  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <article className="stats-card" key={index}>
          <div className="stats-card__header">
            <img src={stat.image} alt={stat.title} />
            <h3>
              {stat.number.toLocaleString()}
              <span className="unit">{stat.unit}</span>
            </h3>
          </div>
          <div className="stats-card__footer">
            <h4>{stat.title}</h4>
            <p>{stat.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
export default Stats;
