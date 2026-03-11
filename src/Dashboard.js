import React from "react";
import "./Dashboard.css";
import "./CMODashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CMODashboard from "./CMODashboard";


function Dashboard() {
  return (
    <div className="dashboard container-fluid">
      <div className="row">
        {/* LEFT ICON SIDEBAR */}
        <div className="col-auto sidebar d-flex flex-column align-items-center pt-4">

          {/* REPLACED EMOJIS WITH BOOTSTRAP ICONS */}
          <div className="sidebar-icon mb-5">
            <i className="bi bi-house-door" style={{ fontSize: '30px' }}></i>
          </div>

          <div className="sidebar-icon mb-5">
            <i className="bi bi-gear" style={{ fontSize: '30px' }}></i>
          </div>

          <div className="sidebar-icon mb-5">
            <i className="bi bi-bar-chart" style={{ fontSize: '30px' }}></i>
          </div>

          <div className="sidebar-icon mb-5">
            <i className="bi bi-bell" style={{ fontSize: '30px' }}></i>
          </div>

          <div className="sidebar-icon mt-auto mb-5">
            <i className="bi bi-person-circle" style={{ fontSize: '40px' }}></i>
          </div>
        </div>

        {/* MAIN MIDDLE AREA */}
        <div className="col main-area">
          {/* FIRST ROW: KPI CARD (large) */}
          <div className="row mt-2">
            <div className="col-12">
              <div className="card card-block kpi-large-card">
                <div className="card-header-section">
                  <h5 className="section-title mb-0">Your KPI's</h5>
                </div>
                <div className="card-body">
                  <div className="row small-text kpi-row">
                    {/* KPI 1 – SALES PERFORMANCE IN CRORE */}
                    <div className="col-md-4 col-lg-3 kpi-block-new">
                      <div className="kpi-header-new orange-header">
                        <i className="bi bi-diagram-3" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                        Sales Performance in Crore
                      </div>
                      <div className="kpi-content-new">
                        <div className="kpi-main-content">
                          <div className="kpi-number-new">₹230</div>
                          <div className="kpi-subtext-new">Total Media Investment</div>
                        </div>
                        <div className="kpi-chart-section">
                          <KpiBar label="Harrier" percent={70} />
                          <KpiBar label="Nexon" percent={40} />
                          <KpiBar label="Tigor" percent={25} />
                        </div>
                      </div>
                    </div>

                    {/* KPI 2 – MEDIA SPENDS VS CONTRIBUTION */}
                    <div className="col-md-4 col-lg-3 kpi-block-new">
                      <div className="kpi-header-new white-header">
                        <i className="bi bi-pie-chart" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                        Media Spends Vs Contribution
                      </div>
                      <div className="kpi-content-new">
                        <div className="kpi-main-content">
                          <div className="kpi-number-new">Media Mix</div>
                          <div className="kpi-subtext-new">Distribution</div>
                        </div>
                        <div className="kpi-chart-section">
                          <div className="contribution-donut">
                            <svg viewBox="0 0 120 120" style={{ width: '90px', height: '90px' }}>
                              {/* Harrier - 27% (cyan) */}
                              <circle cx="60" cy="60" r="40" fill="none" stroke="#00d4ff" strokeWidth="14" 
                                strokeDasharray={`${2 * Math.PI * 40 * 0.27} ${2 * Math.PI * 40}`}
                                strokeDashoffset="0"
                                transform="rotate(-90 60 60)" />
                              {/* Nexon - 38% (pink) */}
                              <circle cx="60" cy="60" r="40" fill="none" stroke="#f48fb1" strokeWidth="14"
                                strokeDasharray={`${2 * Math.PI * 40 * 0.38} ${2 * Math.PI * 40}`}
                                strokeDashoffset={`${-(2 * Math.PI * 40 * 0.27)}`}
                                transform="rotate(-90 60 60)" />
                              {/* Tigor - 34% (green) */}
                              <circle cx="60" cy="60" r="40" fill="none" stroke="#a5d6a7" strokeWidth="14"
                                strokeDasharray={`${2 * Math.PI * 40 * 0.34} ${2 * Math.PI * 40}`}
                                strokeDashoffset={`${-(2 * Math.PI * 40 * 0.65)}`}
                                transform="rotate(-90 60 60)" />
                            </svg>
                          </div>
                          <div className="contribution-legend">
                            <div className="legend-item"><span className="legend-color" style={{background: '#00d4ff'}}></span><span>Harrier 27%</span></div>
                            <div className="legend-item"><span className="legend-color" style={{background: '#f48fb1'}}></span><span>Nexon 38%</span></div>
                            <div className="legend-item"><span className="legend-color" style={{background: '#a5d6a7'}}></span><span>Tigor 34%</span></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* KPI 3 – MEDIA-WISE ROI CHANNEL PERFORMANCE */}
                    <div className="col-md-4 col-lg-3 kpi-block-new">
                      <div className="kpi-header-new blue-header">
                        <i className="bi bi-bar-chart-fill" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                        Media-wise ROI Channel Performance
                      </div>
                      <div className="kpi-content-new">
                        <div className="kpi-main-content">
                          <div className="kpi-number-new">2.4x</div>
                          <div className="kpi-subtext-new">Average Channel ROI</div>
                        </div>
                        <div className="kpi-chart-section">
                          <div className="kpi-bar-chart" style={{ width: '100%', height: '70px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '6px', padding: '8px 4px 0 4px' }}>
                            <div style={{ width: '16%', height: '40px', background: '#90caf9', borderRadius: '3px' }} title="Brand TV"></div>
                            <div style={{ width: '16%', height: '60px', background: '#f48fb1', borderRadius: '3px' }} title="Promo TV"></div>
                            <div style={{ width: '16%', height: '25px', background: '#a5d6a7', borderRadius: '3px' }} title="Auto Show"></div>
                            <div style={{ width: '16%', height: '50px', background: '#ffe082', borderRadius: '3px' }} title="Social - FB"></div>
                            <div style={{ width: '16%', height: '18px', background: '#ce93d8', borderRadius: '3px' }} title="Other"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND ROW: CMO DASHBOARD CARD */}
          <CMODashboard />
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="col-lg-3 right-panel ps-0 d-flex flex-column" style={{ marginTop: '16px' }}>
          {/* Critical Alerts */}
          <div className="card card-block mb-2">
            <div className="card-header-section">
              <h6 className="section-title mb-0">Critical Alerts</h6>
            </div>
            <div className="card-body small-text">
              <AlertItem
                title="Harrier"
                text="2% lower sales QOQ & 7% Brand Equity dip"
              />
              <AlertItem
                title="Harrier Brand TV"
                text="Spends too low to see impact"
              />
              <AlertItem
                title="Harrier Brand Erosion"
                text="Potential 3% -ve impact on Nexon sales"
              />
            </div>
          </div>

          {/* Marketing Contribution */}
          <div className="card card-block mb-2">
            <div className="card-header-section">
              <h6 className="section-title mb-0">Marketing Contribution</h6>
            </div>
            <div className="card-body small-text">
              <RightMetric name="Harrier" value="62.1 of total 230 Crore (27%)" />
              <RightMetric name="Nexon" value="29.64 of total 78 Crore (38%)" />
              <RightMetric name="Tigor" value="41.82 of total 123 Crore (34%)" />
            </div>
          </div>

          {/* Channel Performance */}
          <div className="card card-block mb-2">
            <div className="card-header-section">
              <h6 className="section-title mb-0">Channel Performance</h6>
            </div>
            <div className="card-body small-text">
              <table className="table table-sm mb-0" style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Channel</th>
                    <th style={{ textAlign: 'center' }}>Spend %</th>
                    <th style={{ textAlign: 'center' }}>ROI</th>
                    <th style={{ textAlign: 'center' }}>Industry avg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' }}>Brand TV</td>
                    <td style={{ textAlign: 'center' }}>11%</td>
                    <td style={{ textAlign: 'center' }}>0.9</td>
                    <td style={{ textAlign: 'center' }}>2.3</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>Promo TV</td>
                    <td style={{ textAlign: 'center' }}>23%</td>
                    <td style={{ textAlign: 'center' }}>1.2</td>
                    <td style={{ textAlign: 'center' }}>1.9</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>Auto Show</td>
                    <td style={{ textAlign: 'center' }}>14%</td>
                    <td style={{ textAlign: 'center' }}>2.8</td>
                    <td style={{ textAlign: 'center' }}>2.7</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>Social - FB</td>
                    <td style={{ textAlign: 'center' }}>28%</td>
                    <td style={{ textAlign: 'center' }}>1.3</td>
                    <td style={{ textAlign: 'center' }}>2.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Campaign Feed */}
          <div className="card card-block mb-2">
            <div className="card-header-section">
              <h6 className="section-title mb-0">Campaign Feed</h6>
            </div>
            <div className="card-body small-text">
              <table className="table table-sm mb-0" style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Campaign</th>
                    <th style={{ textAlign: 'center' }}>Audience Reach</th>
                    <th style={{ textAlign: 'center' }}>Response Rate</th>
                    <th style={{ textAlign: 'center' }}>ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' }}>FB – New Color</td>
                    <td style={{ textAlign: 'center' }}>43%</td>
                    <td style={{ textAlign: 'center' }}>1.2%</td>
                    <td style={{ textAlign: 'center' }}>1.1</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>Coffee with Drive</td>
                    <td style={{ textAlign: 'center' }}>78%</td>
                    <td style={{ textAlign: 'center' }}>23%</td>
                    <td style={{ textAlign: 'center' }}>2.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Competition & Market Watch */}
          <div className="card card-block">
            <div className="card-header-section">
              <h6 className="section-title mb-0">Competition &amp; Market Watch</h6>
            </div>
            <div className="card-body small-text">
              <p>
                <strong>Mahindra XUV:</strong> Very positive reception
              </p>
              <p>
                <strong>Chip Delays:</strong> Impact on car delivery in market
              </p>
              <p>
                <strong>Mahindra:</strong> Positive reviews on latest ad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL REUSABLE COMPONENTS */

function AlertItem({ title, text }) {
    return (
      <div className="d-flex alert-item">
        <span className="alert-icon me-2">▶</span>
        <p className="mb-0">
          <strong>{title}:</strong> {text}
        </p>
      </div>
    );
}

function KpiBar({ label, percent }) {
  return (
    <div className="mb-1">
      <div className="d-flex justify-content-between">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress kpi-progress">
        <div
          className="progress-bar"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function RightMetric({ name, value }) {
  return (
    <div className="mb-2">
      <div className="d-flex justify-content-between">
        <strong>{name}</strong>
        <span className="triangle-icon-small">▲</span>
      </div>
      <div className="text-muted">{value}</div>
    </div>
  );
}

function MediaChannelChart() {
  const channelData = [
    { channel: 'Facebook', nov24: 0.31, nov25: 1.59 },
    { channel: 'Halotv', nov24: 0.34, nov25: 0.28 },
    { channel: 'TV_DF', nov24: 0.18, nov25: 0.01 },
    { channel: 'Marie Light', nov24: 1.41, nov25: 0.42 },
    { channel: 'Sunfeast', nov24: 1.38, nov25: 3.22 },
    { channel: 'TV Spends', nov24: 3.80, nov25: 1.47 },
    { channel: 'DV360', nov24: 2.55, nov25: 0.8 },
    { channel: 'YouTube', nov24: 0.8, nov25: 6.5 },
  ];

  const maxValue = 8;
  const chartHeight = 120;

  return (
    <div className="media-channel-chart">
      <svg viewBox="0 0 800 150" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: 'auto', minHeight: '150px' }}>
        {/* Y-axis labels */}
        <text x="15" y="130" fontSize="10" fill="#a8a8a8" textAnchor="end">₹0</text>
        <text x="15" y="85" fontSize="10" fill="#a8a8a8" textAnchor="end">₹2</text>
        <text x="15" y="40" fontSize="10" fill="#a8a8a8" textAnchor="end">₹4</text>
        <text x="15" y="10" fontSize="10" fill="#a8a8a8" textAnchor="end">₹6</text>

        {/* Grid lines */}
        <line x1="25" y1="130" x2="800" y2="130" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="25" y1="85" x2="800" y2="85" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="25" y1="40" x2="800" y2="40" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />

        {/* Nov24 Line (Olive/Yellow) */}
        <polyline
          points={channelData.map((d, i) => {
            const x = 25 + (i * 96) + 48;
            const y = 130 - (d.nov24 / maxValue) * 115;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="#c4a747"
          strokeWidth="2"
        />

        {/* Nov25 Line (Green) */}
        <polyline
          points={channelData.map((d, i) => {
            const x = 25 + (i * 96) + 48;
            const y = 130 - (d.nov25 / maxValue) * 115;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="#4caf50"
          strokeWidth="2"
        />

        {/* Data points and labels */}
        {channelData.map((d, i) => {
          const x = 25 + (i * 96) + 48;
          const y24 = 130 - (d.nov24 / maxValue) * 115;
          const y25 = 130 - (d.nov25 / maxValue) * 115;
          return (
            <g key={i}>
              {/* Nov24 point */}
              <circle cx={x} cy={y24} r="2.5" fill="#c4a747" />
              {/* Nov25 point */}
              <circle cx={x} cy={y25} r="2.5" fill="#4caf50" />
              {/* Value label for higher point */}
              {d.nov24 > d.nov25 ? (
                <text x={x} y={y24 - 8} fontSize="9" fill="#c4a747" textAnchor="middle" fontWeight="bold">₹{d.nov24.toFixed(2)}</text>
              ) : (
                <text x={x} y={y25 - 8} fontSize="9" fill="#4caf50" textAnchor="middle" fontWeight="bold">₹{d.nov25.toFixed(2)}</text>
              )}
              {/* Channel label */}
              <text x={x} y="145" fontSize="9" fill="#a8a8a8" textAnchor="middle" textLength="90">{d.channel}</text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="channel-legend mt-2">
        <div className="legend-item-channel">
          <span className="legend-dot" style={{ background: '#c4a747' }}></span>
          <span>2024-25 (November - 2024)</span>
        </div>
        <div className="legend-item-channel">
          <span className="legend-dot" style={{ background: '#4caf50' }}></span>
          <span>2025-26 (November - 2025)</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
