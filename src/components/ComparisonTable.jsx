import React from 'react';

const data = [
  {
    their: "One size fits all",
    our: "Customized using AI"
  },
  {
    their: "Retail",
    our: "Shipped directly to your door"
  },
  {
    their: "Expensive dermatologist visit",
    our: "Free AI analysis"
  },
  {
    their: "Costly follow-up costs",
    our: "Unlimited medical support"
  },
  {
    their: "Harmful ingredients",
    our: "Cutting-edge, clean ingredients"
  },
  {
    their: "Cosmetic grade with limited functionality",
    our: "High-efficacy, clinically-tested proprietary formulas"
  }
];

const ComparisonTable = () => {
  return (
    <section className="comparison-section">
      <div>
        <h2 className="comparison-title">Superior total care,<br />tailored to <span className='highlight1'>you.</span></h2>
      </div>
      <div className="comparison-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="their-heading"><em>Their Products</em></th>
              <th></th>
              <th className="our-heading">Our Products</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="their-cell">{row.their}</td>
                <td className="vs">vs.</td>
                <td className="our-cell">{row.our}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
