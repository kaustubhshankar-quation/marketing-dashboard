import React, { useState } from "react";
import "./CMODashboard.css";

function CMODashboard() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showKPIs, setShowKPIs] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedYear("");
    setShowKPIs(false);
    setExpandedCard(null);
  };

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <>
      {!showKPIs ? (
        // Filter View
        <div className="row mt-4">
          <div className="col-12">
            <div className="card card-block cmo-card">
              {/* CMO Header */}
              <div className="cmo-header-wrapper">
                <div className="cmo-header-icon-box">
                  <i className="bi bi-bar-chart cmo-header-icon"></i>
                </div>
                <div className="cmo-header-content">
                  <h5 className="cmo-title">CMO Dashboard</h5>
                  <p className="cmo-subtitle">Select brand and financial year to view performance insights</p>
                </div>
              </div>

              {/* Filters Section */}
              <div className="card-body">
                <div className="row cmo-filters-section">
                  {/* Brand Dropdown */}
                  <div className="col-md-6 cmo-filter-group">
                    <label className="cmo-filter-label">
                      Brand <span className="cmo-filter-label-required">*</span>
                    </label>
                    <select 
                      className="cmo-select"
                      value={selectedBrand}
                      onChange={(e) => {
                        const newBrand = e.target.value;
                        setSelectedBrand(newBrand);
                        if (newBrand && selectedYear) {
                          setShowKPIs(true);
                        }
                      }}
                    >
                      <option value="" disabled selected>Select Brand</option>
                      <option>MILD FANTASY</option>
                      <option>OUNCE</option>
                      <option>BAD GANGLES</option>
                      <option>MILD URGENCY</option>
                      <option>DADS LOVE</option>
                      <option>CHIPPEE NOODLES</option>
                      <option>SEEDHE SADHE</option>
                    </select>
                  </div>

                  {/* Financial Year Dropdown */}
                  <div className="col-md-6 cmo-filter-group">
                    <label className="cmo-filter-label">Financial Year</label>
                    <select 
                      className="cmo-select"
                      value={selectedYear}
                      onChange={(e) => {
                        const newYear = e.target.value;
                        setSelectedYear(newYear);
                        if (selectedBrand && newYear) {
                          setShowKPIs(true);
                        }
                      }}
                    >
                      <option value="" disabled selected>Select FY</option>
                      <option>2025-26</option>
                      <option>2024-25</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // KPI Cards View
        <div className="row mt-4">
          <div className="col-12 cmo-kpi-header">
            <div className="cmo-reset-section">
              <span className="cmo-selected-info">
                <strong>{selectedBrand}</strong> | <strong>{selectedYear}</strong>
              </span>
              <button className="cmo-reset-btn" onClick={handleReset}>
                <i className="bi bi-arrow-counterclockwise"></i> Reset
              </button>
            </div>
          </div>

          {/* KPI Cards Container */}
          <div className="col-12">
            {/* Card Row */}
            <div className="row g-4">
              {/* KPI Card 1 - Sales Performance */}
              <div className="col-md-6 col-lg-4">
                <div 
                  className="cmo-kpi-card clickable"
                  onClick={() => toggleCard('sales')}
                >
                  <div className="cmo-kpi-header-box teal-border">
                    <i className="bi bi-diamond"></i>
                    <span>Sales Performance in Crore</span>
                  </div>
                </div>
              </div>

              {/* KPI Card 2 - Media Spends Vs Contribution */}
              <div className="col-md-6 col-lg-4">
                <div 
                  className="cmo-kpi-card clickable"
                  onClick={() => toggleCard('media')}
                >
                  <div className="cmo-kpi-header-box orange-border">
                    <i className="bi bi-pie-chart"></i>
                    <span>Media Spends Vs Contribution</span>
                  </div>
                </div>
              </div>

              {/* KPI Card 3 - Media-wise ROI */}
              <div className="col-md-6 col-lg-4">
                <div 
                  className="cmo-kpi-card clickable"
                  onClick={() => toggleCard('roi')}
                >
                  <div className="cmo-kpi-header-box blue-border">
                    <i className="bi bi-graph-up"></i>
                    <span>Media-wise ROI Channel Performance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Content - Full Width */}
            {expandedCard && (
              <div style={{marginTop: "20px"}}>
                {expandedCard === 'sales' && (
                  <div className="cmo-dropdown-panel">
                    <div className="cmo-dropdown-content">
                      <div className="cmo-metrics-container">
                        <div className="cmo-metric-box">
                          <div className="cmo-metric-label">Previous FY</div>
                          <div className="cmo-metric-value">₹ 254.495</div>
                        </div>
                        <div className="cmo-metric-box">
                          <div className="cmo-metric-label">Current FY</div>
                          <div className="cmo-metric-value">₹ 250.24</div>
                        </div>
                        <div className="cmo-metric-box" style={{backgroundColor: "#fce4ec"}}>
                          <div className="cmo-metric-label">YoY Change</div>
                          <div className="cmo-metric-value" style={{color: "#d32f2f"}}>-1.67% ↓</div>
                        </div>
                      </div>
                      <div className="cmo-chart-section">
                        <div className="cmo-chart-box">
                          <h6 className="cmo-chart-title">Quarterly Sales Comparison</h6>
                          <div className="cmo-chart-placeholder">
                            <i className="bi bi-graph-up"></i> Chart Placeholder
                          </div>
                        </div>
                        <div className="cmo-chart-box">
                          <h6 className="cmo-chart-title">Quarter-wise Growth %</h6>
                          <div className="cmo-chart-placeholder">
                            <i className="bi bi-bar-chart"></i> Chart Placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {expandedCard === 'media' && (
                  <div className="cmo-dropdown-panel">
                    <div className="cmo-dropdown-content">
                      <div className="cmo-metrics-wrapper">
                        <div className="cmo-section">
                          <h5 className="cmo-section-title">Media Spends:</h5>
                          <div className="cmo-metrics-container">
                            <div className="cmo-metric-box">
                              <div className="cmo-metric-label">Previous FY</div>
                              <div className="cmo-metric-value">₹ 20.605</div>
                            </div>
                            <div className="cmo-metric-box">
                              <div className="cmo-metric-label">Current FY</div>
                              <div className="cmo-metric-value">₹ 8.211</div>
                            </div>
                            <div className="cmo-metric-box" style={{backgroundColor: "#fce4ec"}}>
                              <div className="cmo-metric-label">YoY Change</div>
                              <div className="cmo-metric-value" style={{color: "#d32f2f"}}>-60.15% ↓</div>
                            </div>
                          </div>
                        </div>

                        <div className="cmo-section">
                          <h5 className="cmo-section-title">Media Contribution:</h5>
                          <div className="cmo-metrics-container">
                            <div className="cmo-metric-box">
                              <div className="cmo-metric-label">Previous FY</div>
                              <div className="cmo-metric-value">₹ 15.477</div>
                            </div>
                            <div className="cmo-metric-box">
                              <div className="cmo-metric-label">Current FY</div>
                              <div className="cmo-metric-value">₹ 22.114</div>
                            </div>
                            <div className="cmo-metric-box" style={{backgroundColor: "#c8e6c9"}}>
                              <div className="cmo-metric-label">YoY Change</div>
                              <div className="cmo-metric-value" style={{color: "#2e7d32"}}>42.89% ↑</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cmo-chart-section">
                        <div className="cmo-chart-box">
                          <h6 className="cmo-chart-title">Media Channel Wise - Spends</h6>
                          <div className="cmo-chart-placeholder">
                            <i className="bi bi-graph-up"></i> Chart Placeholder
                          </div>
                        </div>
                        <div className="cmo-chart-box">
                          <h6 className="cmo-chart-title">Media Channel Wise - Contribution</h6>
                          <div className="cmo-chart-placeholder">
                            <i className="bi bi-bar-chart"></i> Chart Placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {expandedCard === 'roi' && (
                  <div className="cmo-dropdown-panel">
                    <div className="cmo-dropdown-content">
                      <div className="cmo-chart-box">
                        <h6 className="cmo-chart-title">ROI by Media Channel (Financial Year Comparison)</h6>
                        
                        {/* Bar Chart Visualization */}
                        <svg width="100%" height="280" viewBox="0 0 700 280" style={{marginTop: "10px"}}>
                          {/* Y-axis */}
                          <line x1="50" y1="20" x2="50" y2="240" stroke="#e0e0e0" strokeWidth="2"/>
                          
                          {/* X-axis */}
                          <line x1="50" y1="240" x2="680" y2="240" stroke="#e0e0e0" strokeWidth="2"/>
                          
                          {/* Y-axis labels */}
                          <text x="35" y="245" fontSize="12" fill="#666">0.00</text>
                          <text x="35" y="185" fontSize="12" fill="#666">2.00</text>
                          <text x="35" y="125" fontSize="12" fill="#666">4.00</text>
                          <text x="35" y="65" fontSize="12" fill="#666">6.00</text>
                          <text x="35" y="30" fontSize="12" fill="#666">8.00</text>
                          
                          {/* Grid lines */}
                          <line x1="50" y1="180" x2="680" y2="180" stroke="#f0f0f0" strokeWidth="1"/>
                          <line x1="50" y1="120" x2="680" y2="120" stroke="#f0f0f0" strokeWidth="1"/>
                          <line x1="50" y1="60" x2="680" y2="60" stroke="#f0f0f0" strokeWidth="1"/>
                          
                          {/* 2024-25 Bars - Digital */}
                          <rect x="80" y="135" width="35" height="105" fill="#1976d2" rx="3"/>
                          <text x="85" y="250" fontSize="11" fill="#333">Digital</text>
                          <text x="90" y="125" fontSize="11" fill="#1976d2" fontWeight="600">0.95</text>
                          
                          {/* 2024-25 Bars - OTHER_MEDIA_CHANNEL */}
                          <rect x="130" y="175" width="35" height="65" fill="#388e3c" rx="3"/>
                          <text x="125" y="260" fontSize="10" fill="#666">Other</text>
                          <text x="142" y="165" fontSize="11" fill="#388e3c" fontWeight="600">0.35</text>
                          
                          {/* 2024-25 Bars - TV */}
                          <rect x="180" y="150" width="35" height="90" fill="#f57c00" rx="3"/>
                          <text x="185" y="250" fontSize="11" fill="#333">TV</text>
                          <text x="190" y="140" fontSize="11" fill="#f57c00" fontWeight="600">0.71</text>
                          
                          {/* Separator line */}
                          <line x1="230" y1="20" x2="230" y2="240" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                          
                          {/* 2025-26 Bars - Digital */}
                          <rect x="280" y="55" width="35" height="185" fill="#1976d2" rx="3" opacity="0.8"/>
                          <text x="275" y="250" fontSize="11" fill="#333">Digital</text>
                          <text x="290" y="45" fontSize="11" fill="#1976d2" fontWeight="600">7.03</text>
                          
                          {/* 2025-26 Bars - OTHER_MEDIA_CHANNEL */}
                          <rect x="330" y="235" width="35" height="5" fill="#388e3c" rx="3" opacity="0.8"/>
                          <text x="325" y="260" fontSize="10" fill="#666">Other</text>
                          <text x="340" y="230" fontSize="11" fill="#388e3c" fontWeight="600">0.00</text>
                          
                          {/* 2025-26 Bars - TV */}
                          <rect x="380" y="195" width="35" height="45" fill="#f57c00" rx="3" opacity="0.8"/>
                          <text x="385" y="250" fontSize="11" fill="#333">TV</text>
                          <text x="390" y="185" fontSize="11" fill="#f57c00" fontWeight="600">0.84</text>
                          
                          {/* Legend */}
                          <rect x="470" y="60" width="15" height="15" fill="#1976d2" rx="2"/>
                          <text x="495" y="72" fontSize="12" fill="#333">Digital</text>
                          
                          <rect x="470" y="90" width="15" height="15" fill="#388e3c" rx="2"/>
                          <text x="495" y="102" fontSize="12" fill="#333">Other Media</text>
                          
                          <rect x="470" y="120" width="15" height="15" fill="#f57c00" rx="2"/>
                          <text x="495" y="132" fontSize="12" fill="#333">TV</text>
                          
                          {/* Year labels */}
                          <text x="115" y="270" fontSize="12" fontWeight="600" fill="#666">2024-25</text>
                          <text x="310" y="270" fontSize="12" fontWeight="600" fill="#666">2025-26</text>
                        </svg>
                        
                        <div style={{marginTop: "15px", fontSize: "12px", color: "#666"}}>
                          <p style={{margin: "5px 0"}}>
                            <strong>Key Insight:</strong> Digital ROI surged from 0.95 to 7.03 in 2025-26, representing 640% growth year-over-year.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default CMODashboard;
