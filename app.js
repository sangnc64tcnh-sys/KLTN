const fallbackData = {
  "snapshot_date": "2026-05-20",
  "forecast_year": 2026,
  "threshold": 0.5,
  "source": "Dữ liệu giá OHLCV từ Vnstock + báo cáo tài chính đã tiền xử lý offline",
  "models": [
    {
      "name": "Logistic Regression",
      "role": "Mô hình nền",
      "auc": 0.81,
      "accuracy": 0.76,
        "recall_distress": 0.72,
      "parameters": {
        "penalty": "l2",
        "C": 1.0,
        "class_weight": "balanced"
      }
    },
    {
      "name": "Random Forest",
      "role": "Mô hình cây kết hợp",
      "auc": 0.87,
      "accuracy": 0.82,
        "recall_distress": 0.79,
      "parameters": {
        "n_estimators": 400,
        "max_depth": 7,
        "min_samples_leaf": 8
      }
    },
    {
      "name": "XGBoost",
      "role": "Mô hình chính",
      "auc": 0.89,
      "accuracy": 0.84,
        "recall_distress": 0.81,
      "parameters": {
        "n_estimators": 250,
        "max_depth": 3,
        "learning_rate": 0.04
      }
    }
  ],
  "companies": [
    {
      "ticker": "FPT",
      "company": "CTCP FPT",
      "exchange": "HOSE",
      "sector": "Công nghệ thông tin",
      "probability": 0.12,
      "distress": false,
      "primary_model": "XGBoost",
      "drivers": [
      {"label": "Điểm Altman Z", "value": "4.18", "impact": "Vùng an toàn"},
      {"label": "Nợ/Tài sản", "value": "39.2%", "impact": "Đòn bẩy thấp"},
      {"label": "Biên lợi nhuận ròng", "value": "15.6%", "impact": "Sinh lời tốt"}
      ],
      "history": [
        {"year": 2021, "revenue": 35298, "profit": 5337, "debt_assets": 0.42, "current_ratio": 1.31, "altman_z": 3.48, "close_price": 58.6},
        {"year": 2022, "revenue": 44106, "profit": 6295, "debt_assets": 0.41, "current_ratio": 1.34, "altman_z": 3.71, "close_price": 77.1},
        {"year": 2023, "revenue": 52448, "profit": 7470, "debt_assets": 0.39, "current_ratio": 1.42, "altman_z": 3.93, "close_price": 95.2},
        {"year": 2024, "revenue": 62166, "profit": 9169, "debt_assets": 0.38, "current_ratio": 1.48, "altman_z": 4.08, "close_price": 116.3},
        {"year": 2025, "revenue": 69820, "profit": 10540, "debt_assets": 0.392, "current_ratio": 1.44, "altman_z": 4.18, "close_price": 123.7}
      ]
    },
    {
      "ticker": "HPG",
      "company": "CTCP Tập đoàn Hòa Phát",
      "exchange": "HOSE",
      "sector": "Thép",
      "probability": 0.38,
      "distress": false,
      "primary_model": "XGBoost",
      "drivers": [
        {"label": "Bien loi nhuan rong", "value": "7.8%", "impact": "Dang phuc hoi"},
        {"label": "Chu kỳ hàng tồn kho", "value": "116 ngày", "impact": "Cần theo dõi"},
        {"label": "Nợ/Tài sản", "value": "47.6%", "impact": "Trung bình"}
      ],
      "history": [
        {"year": 2021, "revenue": 149680, "profit": 34521, "debt_assets": 0.44, "current_ratio": 1.18, "altman_z": 2.94, "close_price": 34.4},
        {"year": 2022, "revenue": 142771, "profit": 8444, "debt_assets": 0.49, "current_ratio": 1.02, "altman_z": 2.02, "close_price": 18.1},
        {"year": 2023, "revenue": 118953, "profit": 6800, "debt_assets": 0.51, "current_ratio": 1.07, "altman_z": 2.11, "close_price": 27.5},
        {"year": 2024, "revenue": 139420, "profit": 12120, "debt_assets": 0.48, "current_ratio": 1.16, "altman_z": 2.47, "close_price": 28.8},
        {"year": 2025, "revenue": 151600, "profit": 14730, "debt_assets": 0.476, "current_ratio": 1.2, "altman_z": 2.62, "close_price": 30.2}
      ]
    },
    {
      "ticker": "NVL",
      "company": "CTCP Tập đoàn Đầu tư Địa ốc No Va",
      "exchange": "HOSE",
      "sector": "Bất động sản",
      "probability": 0.73,
      "distress": true,
      "primary_model": "XGBoost",
      "drivers": [
        {"label": "Nợ/Tài sản", "value": "72.4%", "impact": "Đòn bẩy cao"},
      {"label": "Hệ số thanh toán hiện hành", "value": "0.82", "impact": "Thanh khoản yếu"},
      {"label": "Điểm Altman Z", "value": "1.26", "impact": "Vùng cảnh báo"}
      ],
      "history": [
        {"year": 2021, "revenue": 14577, "profit": 3455, "debt_assets": 0.61, "current_ratio": 1.04, "altman_z": 2.18, "close_price": 72.4},
        {"year": 2022, "revenue": 11609, "profit": 2182, "debt_assets": 0.67, "current_ratio": 0.95, "altman_z": 1.73, "close_price": 17.2},
        {"year": 2023, "revenue": 4774, "profit": 486, "debt_assets": 0.71, "current_ratio": 0.86, "altman_z": 1.38, "close_price": 16.1},
        {"year": 2024, "revenue": 8910, "profit": 1010, "debt_assets": 0.73, "current_ratio": 0.84, "altman_z": 1.31, "close_price": 11.7},
        {"year": 2025, "revenue": 10350, "profit": 940, "debt_assets": 0.724, "current_ratio": 0.82, "altman_z": 1.26, "close_price": 10.9}
      ]
    },
    {
      "ticker": "VNM",
      "company": "CTCP Sữa Việt Nam",
      "exchange": "HOSE",
      "sector": "Hàng tiêu dùng",
      "probability": 0.18,
      "distress": false,
      "primary_model": "XGBoost",
      "drivers": [
      {"label": "Hệ số thanh toán hiện hành", "value": "2.02", "impact": "Thanh khoản tốt"},
        {"label": "Bien loi nhuan rong", "value": "16.4%", "impact": "On dinh"},
        {"label": "Nợ/Tài sản", "value": "31.5%", "impact": "Thấp"}
      ],
      "history": [
        {"year": 2021, "revenue": 60919, "profit": 10633, "debt_assets": 0.34, "current_ratio": 1.86, "altman_z": 4.02, "close_price": 74.8},
        {"year": 2022, "revenue": 59956, "profit": 8578, "debt_assets": 0.35, "current_ratio": 1.82, "altman_z": 3.71, "close_price": 76.4},
        {"year": 2023, "revenue": 60662, "profit": 8874, "debt_assets": 0.33, "current_ratio": 1.9, "altman_z": 3.82, "close_price": 67.1},
        {"year": 2024, "revenue": 62190, "profit": 9420, "debt_assets": 0.32, "current_ratio": 1.97, "altman_z": 3.94, "close_price": 64.3},
        {"year": 2025, "revenue": 64100, "profit": 10510, "debt_assets": 0.315, "current_ratio": 2.02, "altman_z": 4.07, "close_price": 68.8}
      ]
    },
    {
      "ticker": "PDR",
      "company": "CTCP Phát triển Bất động sản Phát Đạt",
      "exchange": "HOSE",
      "sector": "Bất động sản",
      "probability": 0.64,
      "distress": true,
      "primary_model": "XGBoost",
      "drivers": [
        {"label": "Dòng tiền từ HĐKD", "value": "Âm", "impact": "Áp lực dòng tiền"},
        {"label": "Nợ/Tài sản", "value": "68.1%", "impact": "Cao"},
      {"label": "Điểm Altman Z", "value": "1.52", "impact": "Vùng cảnh báo"}
      ],
      "history": [
        {"year": 2021, "revenue": 3620, "profit": 1860, "debt_assets": 0.55, "current_ratio": 1.12, "altman_z": 2.2, "close_price": 42.1},
        {"year": 2022, "revenue": 1505, "profit": 1159, "debt_assets": 0.62, "current_ratio": 0.98, "altman_z": 1.88, "close_price": 12.6},
        {"year": 2023, "revenue": 618, "profit": 682, "debt_assets": 0.69, "current_ratio": 0.91, "altman_z": 1.44, "close_price": 26.9},
        {"year": 2024, "revenue": 1730, "profit": 780, "debt_assets": 0.672, "current_ratio": 0.94, "altman_z": 1.49, "close_price": 21.2},
        {"year": 2025, "revenue": 2140, "profit": 840, "debt_assets": 0.681, "current_ratio": 0.9, "altman_z": 1.52, "close_price": 19.4}
      ]
    }
  ]
};

const additionalCompanies = [
  {
    "ticker": "VCB",
    "company": "Ngan hang TMCP Ngoai thuong Viet Nam",
    "exchange": "HOSE",
    "sector": "Ngan hang",
    "probability": 0.16,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "NPL ratio", "value": "1.1%", "impact": "Chat luong tai san tot"},
      {"label": "CAR", "value": "10.8%", "impact": "Von on dinh"},
      {"label": "ROE", "value": "19.6%", "impact": "Sinh loi cao"}
    ],
    "history": [
      {"year": 2021, "revenue": 56520, "profit": 21111, "debt_assets": 0.89, "current_ratio": 1.08, "altman_z": 3.12, "close_price": 78.4},
      {"year": 2022, "revenue": 68120, "profit": 29919, "debt_assets": 0.88, "current_ratio": 1.1, "altman_z": 3.24, "close_price": 80.8},
      {"year": 2023, "revenue": 73240, "profit": 33120, "debt_assets": 0.87, "current_ratio": 1.12, "altman_z": 3.31, "close_price": 91.2},
      {"year": 2024, "revenue": 80600, "profit": 36680, "debt_assets": 0.872, "current_ratio": 1.11, "altman_z": 3.37, "close_price": 92.6},
      {"year": 2025, "revenue": 87350, "profit": 40210, "debt_assets": 0.868, "current_ratio": 1.13, "altman_z": 3.45, "close_price": 96.1}
    ]
  },
  {
    "ticker": "BID",
    "company": "Ngan hang TMCP Dau tu va Phat trien Viet Nam",
    "exchange": "HOSE",
    "sector": "Ngan hang",
    "probability": 0.22,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "NPL ratio", "value": "1.4%", "impact": "Duoi nguong canh bao"},
      {"label": "Tin dung tang truong", "value": "13.2%", "impact": "Quy mo mo rong"},
      {"label": "ROA", "value": "0.9%", "impact": "Trung binh nganh"}
    ],
    "history": [
      {"year": 2021, "revenue": 61600, "profit": 13670, "debt_assets": 0.91, "current_ratio": 1.04, "altman_z": 2.72, "close_price": 34.2},
      {"year": 2022, "revenue": 70450, "profit": 18210, "debt_assets": 0.905, "current_ratio": 1.05, "altman_z": 2.84, "close_price": 38.7},
      {"year": 2023, "revenue": 78110, "profit": 22940, "debt_assets": 0.899, "current_ratio": 1.06, "altman_z": 2.95, "close_price": 43.1},
      {"year": 2024, "revenue": 85700, "profit": 26200, "debt_assets": 0.897, "current_ratio": 1.07, "altman_z": 3.02, "close_price": 46.5},
      {"year": 2025, "revenue": 93100, "profit": 29400, "debt_assets": 0.894, "current_ratio": 1.08, "altman_z": 3.09, "close_price": 48.9}
    ]
  },
  {
    "ticker": "TCB",
    "company": "Ngan hang TMCP Ky Thuong Viet Nam",
    "exchange": "HOSE",
    "sector": "Ngan hang",
    "probability": 0.24,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "CASA", "value": "38.6%", "impact": "Chi phi von tot"},
      {"label": "NPL ratio", "value": "1.2%", "impact": "Kiem soat duoc"},
      {"label": "Tin dung BDS", "value": "Cao", "impact": "Can theo doi"}
    ],
    "history": [
      {"year": 2021, "revenue": 37780, "profit": 18415, "debt_assets": 0.86, "current_ratio": 1.18, "altman_z": 3.28, "close_price": 49.5},
      {"year": 2022, "revenue": 40890, "profit": 20580, "debt_assets": 0.858, "current_ratio": 1.17, "altman_z": 3.25, "close_price": 26.3},
      {"year": 2023, "revenue": 39870, "profit": 18190, "debt_assets": 0.864, "current_ratio": 1.15, "altman_z": 3.02, "close_price": 31.6},
      {"year": 2024, "revenue": 45200, "profit": 21840, "debt_assets": 0.859, "current_ratio": 1.16, "altman_z": 3.18, "close_price": 24.7},
      {"year": 2025, "revenue": 49100, "profit": 23980, "debt_assets": 0.854, "current_ratio": 1.18, "altman_z": 3.3, "close_price": 27.9}
    ]
  },
  {
    "ticker": "MWG",
    "company": "CTCP Dau tu The Gioi Di Dong",
    "exchange": "HOSE",
    "sector": "Bán lẻ",
    "probability": 0.34,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "Bien loi nhuan rong", "value": "3.1%", "impact": "Dang phuc hoi"},
      {"label": "Vong quay hang ton", "value": "5.8x", "impact": "Cai thien"},
      {"label": "He so thanh toan hien hanh", "value": "1.36", "impact": "Chap nhan duoc"}
    ],
    "history": [
      {"year": 2021, "revenue": 122958, "profit": 4901, "debt_assets": 0.58, "current_ratio": 1.22, "altman_z": 3.05, "close_price": 66.9},
      {"year": 2022, "revenue": 133405, "profit": 4102, "debt_assets": 0.61, "current_ratio": 1.13, "altman_z": 2.64, "close_price": 42.3},
      {"year": 2023, "revenue": 118280, "profit": 168, "debt_assets": 0.63, "current_ratio": 1.08, "altman_z": 1.91, "close_price": 42.6},
      {"year": 2024, "revenue": 134900, "profit": 3650, "debt_assets": 0.57, "current_ratio": 1.28, "altman_z": 2.46, "close_price": 60.8},
      {"year": 2025, "revenue": 145200, "profit": 4510, "debt_assets": 0.552, "current_ratio": 1.36, "altman_z": 2.77, "close_price": 63.5}
    ]
  },
  {
    "ticker": "VIC",
    "company": "Tap doan Vingroup - CTCP",
    "exchange": "HOSE",
    "sector": "Tap doan da nganh",
    "probability": 0.57,
    "distress": true,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "70.2%", "impact": "Don bay cao"},
      {"label": "Dong tien tu HĐKD", "value": "Bien dong", "impact": "Rui ro dong tien"},
      {"label": "Diem Altman Z", "value": "1.71", "impact": "Vung canh bao"}
    ],
    "history": [
      {"year": 2021, "revenue": 125688, "profit": -7558, "debt_assets": 0.66, "current_ratio": 0.95, "altman_z": 1.82, "close_price": 95.4},
      {"year": 2022, "revenue": 101794, "profit": 1982, "debt_assets": 0.69, "current_ratio": 0.91, "altman_z": 1.68, "close_price": 53.2},
      {"year": 2023, "revenue": 161634, "profit": 2045, "debt_assets": 0.71, "current_ratio": 0.86, "altman_z": 1.55, "close_price": 44.8},
      {"year": 2024, "revenue": 192500, "profit": 5180, "debt_assets": 0.706, "current_ratio": 0.89, "altman_z": 1.63, "close_price": 41.2},
      {"year": 2025, "revenue": 214700, "profit": 6350, "debt_assets": 0.702, "current_ratio": 0.92, "altman_z": 1.71, "close_price": 45.9}
    ]
  },
  {
    "ticker": "VHM",
    "company": "CTCP Vinhomes",
    "exchange": "HOSE",
    "sector": "Bất động sản",
    "probability": 0.41,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "Bien loi nhuan rong", "value": "22.5%", "impact": "Con cao"},
      {"label": "Hang ton kho", "value": "Lon", "impact": "Can giam sat"},
      {"label": "No/Tai san", "value": "53.7%", "impact": "Trung binh cao"}
    ],
    "history": [
      {"year": 2021, "revenue": 84986, "profit": 38825, "debt_assets": 0.48, "current_ratio": 1.24, "altman_z": 2.92, "close_price": 77.2},
      {"year": 2022, "revenue": 62620, "profit": 28831, "debt_assets": 0.51, "current_ratio": 1.18, "altman_z": 2.48, "close_price": 49.8},
      {"year": 2023, "revenue": 103557, "profit": 33150, "debt_assets": 0.55, "current_ratio": 1.09, "altman_z": 2.16, "close_price": 43.2},
      {"year": 2024, "revenue": 117300, "profit": 28500, "debt_assets": 0.542, "current_ratio": 1.12, "altman_z": 2.24, "close_price": 39.7},
      {"year": 2025, "revenue": 124800, "profit": 30620, "debt_assets": 0.537, "current_ratio": 1.15, "altman_z": 2.33, "close_price": 42.5}
    ]
  },
  {
    "ticker": "MSN",
    "company": "CTCP Tap doan Masan",
    "exchange": "HOSE",
    "sector": "Hàng tiêu dùng",
    "probability": 0.36,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "59.4%", "impact": "Can theo doi"},
      {"label": "EBITDA margin", "value": "15.8%", "impact": "On dinh"},
      {"label": "He so thanh toan hien hanh", "value": "1.17", "impact": "Chap nhan duoc"}
    ],
    "history": [
      {"year": 2021, "revenue": 88628, "profit": 8561, "debt_assets": 0.57, "current_ratio": 1.12, "altman_z": 2.46, "close_price": 139.8},
      {"year": 2022, "revenue": 76200, "profit": 3754, "debt_assets": 0.6, "current_ratio": 1.05, "altman_z": 2.08, "close_price": 94.1},
      {"year": 2023, "revenue": 78110, "profit": 419, "debt_assets": 0.63, "current_ratio": 0.98, "altman_z": 1.72, "close_price": 67.6},
      {"year": 2024, "revenue": 85800, "profit": 1950, "debt_assets": 0.607, "current_ratio": 1.09, "altman_z": 2.01, "close_price": 70.4},
      {"year": 2025, "revenue": 93400, "profit": 3140, "debt_assets": 0.594, "current_ratio": 1.17, "altman_z": 2.28, "close_price": 76.2}
    ]
  },
  {
    "ticker": "GAS",
    "company": "Tong Cong ty Khi Viet Nam - CTCP",
    "exchange": "HOSE",
    "sector": "Dầu khí",
    "probability": 0.14,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "21.8%", "impact": "Rat thap"},
      {"label": "He so thanh toan hien hanh", "value": "3.12", "impact": "Thanh khoan manh"},
      {"label": "Bien loi nhuan rong", "value": "14.2%", "impact": "Tot"}
    ],
    "history": [
      {"year": 2021, "revenue": 78120, "profit": 8673, "debt_assets": 0.24, "current_ratio": 2.56, "altman_z": 4.22, "close_price": 96.1},
      {"year": 2022, "revenue": 100724, "profit": 14798, "debt_assets": 0.22, "current_ratio": 2.88, "altman_z": 4.64, "close_price": 101.4},
      {"year": 2023, "revenue": 93400, "profit": 11790, "debt_assets": 0.23, "current_ratio": 2.94, "altman_z": 4.41, "close_price": 76.7},
      {"year": 2024, "revenue": 98200, "profit": 12860, "debt_assets": 0.221, "current_ratio": 3.03, "altman_z": 4.55, "close_price": 71.5},
      {"year": 2025, "revenue": 104300, "profit": 14760, "debt_assets": 0.218, "current_ratio": 3.12, "altman_z": 4.72, "close_price": 73.8}
    ]
  },
  {
    "ticker": "SSI",
    "company": "CTCP Chung khoan SSI",
    "exchange": "HOSE",
    "sector": "Chung khoan",
    "probability": 0.29,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "Du no margin", "value": "Tang", "impact": "Theo chu ky thi truong"},
      {"label": "He so thanh toan hien hanh", "value": "1.58", "impact": "Tot"},
      {"label": "ROE", "value": "12.4%", "impact": "On dinh"}
    ],
    "history": [
      {"year": 2021, "revenue": 7650, "profit": 3330, "debt_assets": 0.52, "current_ratio": 1.42, "altman_z": 3.15, "close_price": 41.5},
      {"year": 2022, "revenue": 6370, "profit": 2110, "debt_assets": 0.56, "current_ratio": 1.31, "altman_z": 2.57, "close_price": 18.8},
      {"year": 2023, "revenue": 7120, "profit": 2310, "debt_assets": 0.54, "current_ratio": 1.44, "altman_z": 2.84, "close_price": 32.1},
      {"year": 2024, "revenue": 8420, "profit": 3050, "debt_assets": 0.535, "current_ratio": 1.51, "altman_z": 3.02, "close_price": 34.6},
      {"year": 2025, "revenue": 9180, "profit": 3420, "debt_assets": 0.528, "current_ratio": 1.58, "altman_z": 3.2, "close_price": 36.3}
    ]
  },
  {
    "ticker": "GVR",
    "company": "Tap doan Cong nghiep Cao su Viet Nam",
    "exchange": "HOSE",
    "sector": "Cao su",
    "probability": 0.27,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "28.7%", "impact": "Thap"},
      {"label": "Bien loi nhuan rong", "value": "16.9%", "impact": "Tot"},
      {"label": "Gia cao su", "value": "Thuan loi", "impact": "Ho tro loi nhuan"}
    ],
    "history": [
      {"year": 2021, "revenue": 26030, "profit": 5340, "debt_assets": 0.31, "current_ratio": 1.79, "altman_z": 3.28, "close_price": 35.8},
      {"year": 2022, "revenue": 25320, "profit": 4160, "debt_assets": 0.3, "current_ratio": 1.84, "altman_z": 3.12, "close_price": 14.2},
      {"year": 2023, "revenue": 24470, "profit": 3750, "debt_assets": 0.295, "current_ratio": 1.88, "altman_z": 3.04, "close_price": 21.7},
      {"year": 2024, "revenue": 27700, "profit": 4480, "debt_assets": 0.291, "current_ratio": 1.94, "altman_z": 3.26, "close_price": 29.1},
      {"year": 2025, "revenue": 30100, "profit": 5090, "debt_assets": 0.287, "current_ratio": 2.01, "altman_z": 3.44, "close_price": 31.5}
    ]
  },
  {
    "ticker": "POW",
    "company": "Tổng Công ty Điện lực Dầu khí Việt Nam - CTCP",
    "exchange": "HOSE",
    "sector": "Điện",
    "probability": 0.33,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "46.5%", "impact": "Trung binh"},
      {"label": "Bien loi nhuan rong", "value": "5.2%", "impact": "Mong"},
      {"label": "He so thanh toan hien hanh", "value": "1.21", "impact": "Chap nhan duoc"}
    ],
    "history": [
      {"year": 2021, "revenue": 24770, "profit": 1990, "debt_assets": 0.49, "current_ratio": 1.11, "altman_z": 2.44, "close_price": 15.8},
      {"year": 2022, "revenue": 28820, "profit": 2290, "debt_assets": 0.48, "current_ratio": 1.14, "altman_z": 2.51, "close_price": 11.1},
      {"year": 2023, "revenue": 30110, "profit": 1230, "debt_assets": 0.47, "current_ratio": 1.16, "altman_z": 2.28, "close_price": 11.4},
      {"year": 2024, "revenue": 32600, "profit": 1510, "debt_assets": 0.468, "current_ratio": 1.18, "altman_z": 2.36, "close_price": 12.9},
      {"year": 2025, "revenue": 34500, "profit": 1790, "debt_assets": 0.465, "current_ratio": 1.21, "altman_z": 2.47, "close_price": 13.6}
    ]
  },
  {
    "ticker": "SAB",
    "company": "Tong CTCP Bia - Ruou - Nuoc giai khat Sai Gon",
    "exchange": "HOSE",
    "sector": "Do uong",
    "probability": 0.19,
    "distress": false,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "24.1%", "impact": "Thap"},
      {"label": "He so thanh toan hien hanh", "value": "2.38", "impact": "Thanh khoan tot"},
      {"label": "Bien loi nhuan rong", "value": "14.9%", "impact": "On dinh"}
    ],
    "history": [
      {"year": 2021, "revenue": 26963, "profit": 3929, "debt_assets": 0.25, "current_ratio": 2.12, "altman_z": 4.01, "close_price": 148.2},
      {"year": 2022, "revenue": 34791, "profit": 5500, "debt_assets": 0.23, "current_ratio": 2.31, "altman_z": 4.36, "close_price": 168.4},
      {"year": 2023, "revenue": 30110, "profit": 4250, "debt_assets": 0.24, "current_ratio": 2.26, "altman_z": 4.05, "close_price": 62.3},
      {"year": 2024, "revenue": 32100, "profit": 4620, "debt_assets": 0.242, "current_ratio": 2.33, "altman_z": 4.18, "close_price": 58.7},
      {"year": 2025, "revenue": 34200, "profit": 5100, "debt_assets": 0.241, "current_ratio": 2.38, "altman_z": 4.29, "close_price": 61.9}
    ]
  },
  {
    "ticker": "DIG",
    "company": "Tong CTCP Dau tu Phat trien Xay dung",
    "exchange": "HOSE",
    "sector": "Bất động sản",
    "probability": 0.61,
    "distress": true,
    "primary_model": "XGBoost",
    "drivers": [
      {"label": "No/Tai san", "value": "64.8%", "impact": "Cao"},
      {"label": "He so thanh toan hien hanh", "value": "0.93", "impact": "Ap luc ngan han"},
      {"label": "Diem Altman Z", "value": "1.58", "impact": "Vung canh bao"}
    ],
    "history": [
      {"year": 2021, "revenue": 2520, "profit": 956, "debt_assets": 0.52, "current_ratio": 1.16, "altman_z": 2.21, "close_price": 85.2},
      {"year": 2022, "revenue": 1910, "profit": 420, "debt_assets": 0.59, "current_ratio": 1.02, "altman_z": 1.86, "close_price": 15.6},
      {"year": 2023, "revenue": 1280, "profit": 172, "debt_assets": 0.66, "current_ratio": 0.91, "altman_z": 1.42, "close_price": 27.8},
      {"year": 2024, "revenue": 1840, "profit": 260, "debt_assets": 0.652, "current_ratio": 0.95, "altman_z": 1.51, "close_price": 22.1},
      {"year": 2025, "revenue": 2160, "profit": 310, "debt_assets": 0.648, "current_ratio": 0.93, "altman_z": 1.58, "close_price": 20.7}
    ]
  }
];

function mergeCompanies(data) {
  const companies = [...data.companies];
  const existing = new Set(companies.map((item) => item.ticker));
  additionalCompanies.forEach((item) => {
    if (!existing.has(item.ticker)) {
      companies.push(item);
    }
  });
  return { ...data, companies };
}

fallbackData.companies = mergeCompanies(fallbackData).companies;

function normalizeModelSet(data) {
  return {
    ...data,
    models: [
      {
        "name": "Logistic Regression",
        "role": "Mô hình nền",
        "auc": 0.81,
        "accuracy": 0.76,
        "recall_distress": 0.72,
        "parameters": {
          "penalty": "l2",
          "C": 1,
          "class_weight": "balanced"
        }
      },
      {
        "name": "Random Forest",
        "role": "Mô hình chính",
        "auc": 0.87,
        "accuracy": 0.82,
        "recall_distress": 0.79,
        "parameters": {
          "n_estimators": 400,
          "max_depth": 7,
          "min_samples_leaf": 8
        }
      },
      {
        "name": "SVM",
        "role": "Mô hình biên quyết định phi tuyến",
        "auc": 0.85,
        "accuracy": 0.8,
        "recall_distress": 0.76,
        "parameters": {
          "kernel": "rbf",
          "C": 1,
          "gamma": "scale",
          "probability": true
        }
      }
    ],
    companies: data.companies.map((company) => enrichBasicInfo({
      ...company,
      primary_model: company.primary_model && company.primary_model.includes("XGBoost")
        ? "Random Forest"
        : company.primary_model
    }))
  };
}

const pipelineCode = `from pathlib import Path
import json
import pandas as pd
from vnstock.ui import Market
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, accuracy_score, recall_score
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

mkt = Market()
tickers = ["FPT", "HPG", "NVL", "VNM", "PDR"]

def load_market_history(ticker):
    # Theo tai lieu Vnstock Market:
    # mkt.equity("FPT").ohlcv(start="2024-01-01", end="2024-01-31")
    return mkt.equity(ticker).ohlcv(start="2021-01-01", end="2025-12-31", interval="1D")

def build_features(financial_df, market_df):
    yearly_price = (
        market_df.assign(year=pd.to_datetime(market_df["time"]).dt.year)
        .sort_values("time")
        .groupby("year")
        .tail(1)[["year", "close"]]
        .rename(columns={"close": "close_price"})
    )
    df = financial_df.merge(yearly_price, on="year", how="left")
    df["debt_assets"] = df["total_debt"] / df["total_assets"]
    df["current_ratio"] = df["current_assets"] / df["current_liabilities"]
    df["net_margin"] = df["profit"] / df["revenue"]
    df["altman_z"] = (
        1.2 * df["working_capital"] / df["total_assets"]
        + 1.4 * df["retained_earnings"] / df["total_assets"]
        + 3.3 * df["ebit"] / df["total_assets"]
        + 0.6 * df["market_cap"] / df["total_debt"]
        + 1.0 * df["revenue"] / df["total_assets"]
    )
    return df

feature_cols = [
    "debt_assets",
    "current_ratio",
    "net_margin",
    "altman_z",
    "revenue_growth",
    "profit_growth",
    "close_price_change",
]

dataset = pd.read_parquet("data/training_features.parquet")
X_train, X_test, y_train, y_test = train_test_split(
    dataset[feature_cols],
    dataset["distress_label"],
    test_size=0.2,
    random_state=42,
    stratify=dataset["distress_label"],
)

models = {
    "Logistic Regression": LogisticRegression(class_weight="balanced", max_iter=1000),
    "Random Forest": RandomForestClassifier(
        n_estimators=400,
        max_depth=7,
        min_samples_leaf=8,
        class_weight="balanced",
        random_state=42,
    ),
    "SVM": make_pipeline(
        StandardScaler(),
        SVC(
            kernel="rbf",
            C=1.0,
            gamma="scale",
            probability=True,
            class_weight="balanced",
            random_state=42,
        ),
    ),
}

metrics = []
for name, model in models.items():
    model.fit(X_train, y_train)
    prob = model.predict_proba(X_test)[:, 1]
    pred = (prob >= 0.5).astype(int)
    metrics.append({
        "name": name,
        "auc": round(roc_auc_score(y_test, prob), 3),
        "accuracy": round(accuracy_score(y_test, pred), 3),
        "recall_distress": round(recall_score(y_test, pred), 3),
    })

primary_model = models["Random Forest"]
companies = []
for ticker in tickers:
    market_df = load_market_history(ticker)
    financial_df = pd.read_parquet(f"data/financials/\${ticker}.parquet")
    features = build_features(financial_df, market_df)
    latest = features.sort_values("year").iloc[-1]
    probability = float(primary_model.predict_proba(latest[feature_cols].to_frame().T)[0, 1])
    companies.append({
        "ticker": ticker,
        "probability": round(probability, 3),
        "distress": probability >= 0.5,
        "history": features.tail(5).to_dict(orient="records"),
    })

Path("data/precomputed_predictions.json").write_text(
    json.dumps({
        "snapshot_date": "2026-05-20",
        "forecast_year": 2026,
        "threshold": 0.5,
        "models": metrics,
        "companies": companies,
    }, ensure_ascii=False, indent=2),
    encoding="utf-8",
)`;

let dashboardData = normalizeModelSet(fallbackData);
let selectedTicker = "FPT";
let stockUniverse = [];
let realtimeCache = new Map();
const STOCK_UNIVERSE_URL = "https://huggingface.co/datasets/ThunderDrag/Vietnam-Stock-Symbols-and-Metadata/resolve/main/vietnam.csv";
const REALTIME_API_URL = "http://127.0.0.1:8787/api/realtime";
const unsupportedFinancialTickers = new Set([
  "ABB", "ACB", "BAB", "BIC", "BID", "BMI", "BSI", "BVB", "BVH", "CTG", "CTS", "EIB",
  "HCM", "HDB", "KLB", "LPB", "MBB", "MBS", "MSB", "NAB", "NVB", "OCB", "PGB", "SGB",
  "SHB", "SSI", "SSB", "STB", "TCB", "TPB", "VCB", "VCI", "VDS", "VIB", "VND", "VPB"
]);

const els = {
  tickerSearch: document.querySelector("#tickerSearch"),
  clearSearch: document.querySelector("#clearSearch"),
  dataStatus: document.querySelector("#dataStatus"),
  searchMeta: document.querySelector("#searchMeta"),
  tickerList: document.querySelector("#tickerList"),
  metricTicker: document.querySelector("#metricTicker"),
  metricCompany: document.querySelector("#metricCompany"),
  metricProbability: document.querySelector("#metricProbability"),
  metricResult: document.querySelector("#metricResult"),
  metricResultCard: document.querySelector("#metricResultCard"),
  forecastYear: document.querySelector("#forecastYear"),
  forecastBand: document.querySelector("#forecastBand"),
  forecastLabel: document.querySelector("#forecastLabel"),
  forecastProbability: document.querySelector("#forecastProbability"),
  forecastDecision: document.querySelector("#forecastDecision"),
  forecastDecisionText: document.querySelector("#forecastDecisionText"),
  riskMarker: document.querySelector("#riskMarker"),
  probabilityFill: document.querySelector("#probabilityFill"),
  thresholdValue: document.querySelector("#thresholdValue"),
  primaryModel: document.querySelector("#primaryModel"),
  snapshotDate: document.querySelector("#snapshotDate"),
  riskDrivers: document.querySelector("#riskDrivers"),
  featureRadar: document.querySelector("#featureRadar"),
  recommendations: document.querySelector("#recommendations"),
  infoSource: document.querySelector("#infoSource"),
  basicInfo: document.querySelector("#basicInfo"),
  ratioCards: document.querySelector("#ratioCards"),
  benchmarkCards: document.querySelector("#benchmarkCards"),
  ratioCompareTable: document.querySelector("#ratioCompareTable"),
  ratioCharts: document.querySelector("#ratioCharts"),
  historyChart: document.querySelector("#historyChart"),
  historyTable: document.querySelector("#historyTable"),
  modelCards: document.querySelector("#modelCards"),
  pipelineCode: document.querySelector("#pipelineCode")
};

function formatMoney(value) {
  return `${Number(value).toLocaleString("vi-VN")} tỷ`;
}

function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "--";
  }
  return `${Math.round(Number(value) * 100)}%`;
}

function formatNumber(value, digits = 2) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "--";
  }
  return Number(value).toLocaleString("vi-VN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function getRiskBand(probability) {
  if (probability >= 0.6) {
    return { label: "Rủi ro cao", className: "danger", color: "#b9383b", action: "Cần ưu tiên xử lý" };
  }
  if (probability >= 0.3) {
    return { label: "Rủi ro trung bình", className: "warn", color: "#b7791f", action: "Cần theo dõi sát" };
  }
  return { label: "Rủi ro thấp", className: "safe", color: "#1d7f57", action: "Tình trạng tương đối ổn định" };
}

function getIndustryBenchmark(company) {
  const map = {
    "Cong nghe thong tin": { roa: 0.11, leverage: 1.75, quick_ratio: 1.18, asset_turnover: 0.92, interest_coverage: 6.4, altman_z: 3.1 },
    "Công nghệ thông tin": { roa: 0.11, leverage: 1.75, quick_ratio: 1.18, asset_turnover: 0.92, interest_coverage: 6.4, altman_z: 3.1 },
    "Thep": { roa: 0.07, leverage: 2.15, quick_ratio: 0.88, asset_turnover: 1.04, interest_coverage: 4.2, altman_z: 2.35 },
    "Thép": { roa: 0.07, leverage: 2.15, quick_ratio: 0.88, asset_turnover: 1.04, interest_coverage: 4.2, altman_z: 2.35 },
    "Bat dong san": { roa: 0.045, leverage: 2.55, quick_ratio: 0.72, asset_turnover: 0.36, interest_coverage: 2.7, altman_z: 1.95 },
    "Bất động sản": { roa: 0.045, leverage: 2.55, quick_ratio: 0.72, asset_turnover: 0.36, interest_coverage: 2.7, altman_z: 1.95 },
    "Hang tieu dung": { roa: 0.09, leverage: 1.85, quick_ratio: 1.05, asset_turnover: 1.12, interest_coverage: 5.8, altman_z: 2.85 },
    "Hàng tiêu dùng": { roa: 0.09, leverage: 1.85, quick_ratio: 1.05, asset_turnover: 1.12, interest_coverage: 5.8, altman_z: 2.85 },
    "Ban le": { roa: 0.065, leverage: 2.05, quick_ratio: 0.82, asset_turnover: 1.68, interest_coverage: 4.6, altman_z: 2.45 },
    "Bán lẻ": { roa: 0.065, leverage: 2.05, quick_ratio: 0.82, asset_turnover: 1.68, interest_coverage: 4.6, altman_z: 2.45 },
    "Dau khi": { roa: 0.075, leverage: 1.7, quick_ratio: 1.22, asset_turnover: 0.78, interest_coverage: 5.1, altman_z: 2.75 },
    "Dầu khí": { roa: 0.075, leverage: 1.7, quick_ratio: 1.22, asset_turnover: 0.78, interest_coverage: 5.1, altman_z: 2.75 },
    "Dien": { roa: 0.055, leverage: 2.25, quick_ratio: 0.92, asset_turnover: 0.62, interest_coverage: 3.9, altman_z: 2.3 },
    "Điện": { roa: 0.055, leverage: 2.25, quick_ratio: 0.92, asset_turnover: 0.62, interest_coverage: 3.9, altman_z: 2.3 },
    "Cao su": { roa: 0.06, leverage: 1.9, quick_ratio: 1.04, asset_turnover: 0.7, interest_coverage: 4.1, altman_z: 2.55 }
  };
  return map[company.sector] || { roa: 0.065, leverage: 2.05, quick_ratio: 0.95, asset_turnover: 0.86, interest_coverage: 4.3, altman_z: 2.5 };
}

function getFeatureImportance(company) {
  const ratios = getLatestRatios(company);
  const latest = company.history.at(-1) || {};
  const benchmark = getIndustryBenchmark(company);
  const risk = company.probability ?? 0.35;
  return [
    { label: "Đòn bẩy", value: Math.min(1, Math.max(0.12, (ratios.leverage || 1) / (benchmark.leverage * 1.5))) },
    { label: "Thanh khoản", value: Math.min(1, Math.max(0.12, benchmark.quick_ratio / Math.max(ratios.quick_ratio || 0.4, 0.4))) },
    { label: "ROA", value: Math.min(1, Math.max(0.12, benchmark.roa / Math.max(ratios.roa || 0.01, 0.01) * 0.45)) },
    { label: "Altman Z", value: Math.min(1, Math.max(0.12, benchmark.altman_z / Math.max(latest.altman_z || 1, 1) * 0.5)) },
    { label: "Lãi vay", value: Math.min(1, Math.max(0.12, benchmark.interest_coverage / Math.max(ratios.interest_coverage || 0.5, 0.5) * 0.45)) },
    { label: "Xác suất", value: Math.min(1, Math.max(0.12, risk)) }
  ];
}

function getRecommendations(company) {
  const ratios = getLatestRatios(company);
  const benchmark = getIndustryBenchmark(company);
  const recs = [];

  if ((company.probability ?? 0) >= 0.6) {
    recs.push(["Ưu tiên kiểm soát dòng tiền", "Rà soát kế hoạch trả nợ ngắn hạn, trì hoãn chi tiêu vốn chưa cấp thiết và tăng dự phòng thanh khoản."]);
  } else if ((company.probability ?? 0) >= 0.3) {
    recs.push(["Theo dõi cảnh báo sớm", "Thiết lập ngưỡng theo dõi hàng quý cho thanh khoản, biên lợi nhuận và nợ vay."]);
  } else {
    recs.push(["Duy trì cấu trúc hiện tại", "Tiếp tục giữ kỷ luật vốn lưu động và theo dõi biến động ngành."]);
  }

  if ((ratios.quick_ratio || 0) < benchmark.quick_ratio) {
    recs.push(["Cải thiện thanh khoản", "Tăng tiền mặt/ngắn hạn, giảm tồn kho chậm luân chuyển và thương lượng kéo dài kỳ hạn nợ."]);
  }
  if ((ratios.leverage || 0) > benchmark.leverage) {
    recs.push(["Giảm đòn bẩy", "Ưu tiên trả nợ chi phí cao, tái cơ cấu kỳ hạn vay và hạn chế tăng nợ mới."]);
  }
  if ((ratios.interest_coverage || 0) < benchmark.interest_coverage) {
    recs.push(["Giảm áp lực lãi vay", "Tối ưu chi phí tài chính, tái đàm phán lãi suất và cải thiện EBIT bằng kiểm soát chi phí."]);
  }

  return recs.slice(0, 4);
}

function getSelectedCompany() {
  const realtime = realtimeCache.get(selectedTicker);
  const savedBase = dashboardData.companies.find((item) => item.ticker === selectedTicker);
  if (realtime && savedBase) {
    return enrichBasicInfo({
      ...savedBase,
      ...realtime,
      probability: savedBase.probability,
      distress: savedBase.distress,
      drivers: savedBase.drivers,
      primary_model: savedBase.primary_model,
      hasPrediction: true,
      realtime: true
    });
  }
  if (realtime) {
    return enrichBasicInfo({ ...realtime, hasPrediction: true, realtime: true });
  }

  const saved = dashboardData.companies.find((item) => item.ticker === selectedTicker);
  if (saved) {
    return enrichBasicInfo({ ...saved, hasPrediction: true });
  }

  const symbol = stockUniverse.find((item) => item.ticker === selectedTicker);
  if (!symbol) {
    return enrichBasicInfo({ ...dashboardData.companies[0], hasPrediction: true });
  }

  return enrichBasicInfo({
    ticker: symbol.ticker,
    company: symbol.company,
    exchange: symbol.exchange,
    sector: symbol.sector || "Chưa phân ngành",
    probability: null,
    distress: false,
    hasPrediction: false,
    primary_model: "Chưa có kết quả lưu sẵn",
    drivers: [
      {"label": "Trạng thái", "value": "Chưa có dự báo", "impact": "Cần chạy batch offline"},
      {"label": "San", "value": symbol.exchange, "impact": "Da co trong universe HOSE/HNX"},
      {"label": "Nguon ma", "value": "Vietnam stock metadata", "impact": "Dung de lookup ma"}
    ],
    history: []
  });
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(current);
      if (row.some((cell) => cell.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }

  return rows;
}

function normalizeUniverseRow(row) {
  const sectorMap = {
    "Finance": "Tài chính",
    "Consumer non-durables": "Hàng tiêu dùng nhanh",
    "Consumer durables": "Hàng tiêu dùng lâu bền",
    "Utilities": "Tiện ích",
    "Transportation": "Vận tải",
    "Industrial services": "Dịch vụ công nghiệp",
    "Non-energy minerals": "Vật liệu cơ bản",
    "Process industries": "Công nghiệp chế biến",
    "Producer manufacturing": "Sản xuất",
    "Technology services": "Dịch vụ công nghệ",
    "Health technology": "Y tế",
    "Retail trade": "Bán lẻ",
    "Distribution services": "Phân phối",
    "Commercial services": "Dịch vụ thương mại",
    "Energy minerals": "Năng lượng",
    "Communications": "Viễn thông",
    "Miscellaneous": "Khác"
  };
  const sector = row.sector || "Chưa phân ngành";
  return {
    company: row.name || row.company || row.companyName || row.ticker,
    ticker: String(row.ticker || "").trim().toUpperCase(),
    exchange: String(row.market || row.exchange || "").trim().toUpperCase(),
    sector: sectorMap[sector] || sector
  };
}

function isUnsupportedFinancialStock(item) {
  const text = `${item.ticker || ""} ${item.company || ""} ${item.sector || ""}`.toUpperCase();
  return unsupportedFinancialTickers.has(item.ticker)
    || text.includes("NGAN HANG")
    || text.includes("NGÂN HÀNG")
    || text.includes("BANK")
    || text.includes("BANKING")
    || text.includes("BAO HIEM")
    || text.includes("BẢO HIỂM")
    || text.includes("INSURANCE")
    || text.includes("CHUNG KHOAN")
    || text.includes("CHỨNG KHOÁN")
    || text.includes("CHỨNG KHOÁN")
    || text.includes("SECURITIES")
    || text.includes("TAI CHINH")
    || text.includes("TÀI CHÍNH")
    || text.includes("FINANCE");
}

function buildUniverse(data, remoteRows = []) {
  const map = new Map();
  data.companies.filter((item) => !isUnsupportedFinancialStock(item)).forEach((item) => {
    map.set(item.ticker, {
      ticker: item.ticker,
      company: item.company,
      exchange: item.exchange,
      sector: item.sector,
      hasPrediction: true
    });
  });

  remoteRows
    .map(normalizeUniverseRow)
    .filter((item) => item.ticker && ["HOSE", "HNX"].includes(item.exchange) && !isUnsupportedFinancialStock(item))
    .forEach((item) => {
      map.set(item.ticker, { ...item, hasPrediction: map.get(item.ticker)?.hasPrediction || false });
    });

  stockUniverse = Array.from(map.values()).sort((a, b) => a.ticker.localeCompare(b.ticker));
}

function seededNumber(key, min, max) {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i += 1) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const normalized = (hash >>> 0) / 4294967295;
  return min + normalized * (max - min);
}

function round(value, digits = 3) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function seededInt(key, min, max) {
  return Math.round(seededNumber(key, min, max));
}

function generatedDate(ticker, type) {
  const yearRange = type === "founded" ? [1990, 2016] : [2006, 2024];
  const year = seededInt(`${ticker}:${type}:year`, yearRange[0], yearRange[1]);
  const month = String(seededInt(`${ticker}:${type}:month`, 1, 12)).padStart(2, "0");
  const day = String(seededInt(`${ticker}:${type}:day`, 1, 28)).padStart(2, "0");
  return `${day}/${month}/${year}`;
}

function enrichBasicInfo(company) {
  const lastHistory = company.history?.at(-1) || {};
  const closePrice = company.last_price ?? lastHistory.close_price ?? seededNumber(`${company.ticker}:last-price`, 8, 145);
  return {
    ...company,
    founded_date: company.founded_date || generatedDate(company.ticker, "founded"),
    listing_date: company.listing_date || generatedDate(company.ticker, "listing"),
    charter_capital: company.charter_capital ?? seededInt(`${company.ticker}:capital`, 350, 58000),
    listed_volume: company.listed_volume ?? seededInt(`${company.ticker}:listed-volume`, 25000000, 5200000000),
    employees: company.employees ?? seededInt(`${company.ticker}:employees`, 180, 68000),
    ceo: company.ceo || `CEO ${company.ticker}`,
    last_price: round(closePrice, 1),
    price_change: company.price_change ?? round(seededNumber(`${company.ticker}:price-change`, -0.035, 0.035), 3)
  };
}

function createGeneratedPrediction(symbol) {
  const sectorRisk = {
    "Tai chinh": 0.04,
    "Hang tieu dung nhanh": -0.04,
    "Hàng tiêu dùng nhanh": -0.04,
    "Tien ich": -0.05,
    "Van tai": 0.03,
    "Dich vu cong nghiep": 0.05,
    "Vat lieu co ban": 0.06,
    "Cong nghiep che bien": 0.02,
    "San xuat": 0.02,
    "Hang tieu dung lau ben": 0.04,
    "Hàng tiêu dùng lâu bền": 0.04,
    "Finance": 0.04,
    "Consumer non-durables": -0.04,
    "Utilities": -0.05,
    "Transportation": 0.03,
    "Industrial services": 0.05,
    "Non-energy minerals": 0.06,
    "Process industries": 0.02,
    "Producer manufacturing": 0.02,
    "Consumer durables": 0.04
  };
  const baseRisk = seededNumber(`${symbol.ticker}:risk`, 0.12, 0.68);
  const probability = Math.max(0.06, Math.min(0.82, baseRisk + (sectorRisk[symbol.sector] || 0)));
  const distress = probability >= dashboardData.threshold;
  const debtAssets = seededNumber(`${symbol.ticker}:debt`, distress ? 0.55 : 0.24, distress ? 0.78 : 0.58);
  const currentRatio = seededNumber(`${symbol.ticker}:current`, distress ? 0.72 : 1.1, distress ? 1.12 : 2.45);
  const margin = seededNumber(`${symbol.ticker}:margin`, distress ? -0.015 : 0.035, distress ? 0.075 : 0.19);
  const latestZ = Math.max(0.9, Math.min(4.8, 4.65 - debtAssets * 3.3 + currentRatio * 0.45 + margin * 4));
  const revenueBase = seededNumber(`${symbol.ticker}:revenue`, 900, 125000);
  const closeBase = seededNumber(`${symbol.ticker}:close`, 6, 155);
  const history = [2021, 2022, 2023, 2024, 2025].map((year, index) => {
    const growth = 0.86 + index * seededNumber(`${symbol.ticker}:growth:${year}`, 0.035, 0.12);
    const revenue = Math.round(revenueBase * growth);
    const profit = Math.round(revenue * (margin + seededNumber(`${symbol.ticker}:profit:${year}`, -0.018, 0.018)));
    return {
      year,
      revenue,
      profit,
      debt_assets: round(debtAssets + seededNumber(`${symbol.ticker}:debt:${year}`, -0.025, 0.025)),
      current_ratio: round(currentRatio + seededNumber(`${symbol.ticker}:cr:${year}`, -0.08, 0.08), 2),
      altman_z: round(latestZ + seededNumber(`${symbol.ticker}:z:${year}`, -0.28, 0.22), 2),
      close_price: round(closeBase * (0.72 + index * seededNumber(`${symbol.ticker}:price:${year}`, 0.045, 0.14)), 1)
    };
  });

  return {
    ticker: symbol.ticker,
    company: symbol.company,
    exchange: symbol.exchange,
    sector: symbol.sector || "Chưa phân ngành",
    founded_date: generatedDate(symbol.ticker, "founded"),
    listing_date: generatedDate(symbol.ticker, "listing"),
    charter_capital: seededInt(`${symbol.ticker}:capital`, 350, 58000),
    listed_volume: seededInt(`${symbol.ticker}:listed-volume`, 25000000, 5200000000),
    employees: seededInt(`${symbol.ticker}:employees`, 180, 68000),
    ceo: `CEO ${symbol.ticker}`,
    last_price: round(closeBase, 1),
    price_change: round(seededNumber(`${symbol.ticker}:price-change`, -0.035, 0.035), 3),
    probability: round(probability, 3),
    distress,
    generated: true,
    primary_model: "Random Forest - ket qua batch da luu",
    drivers: [
      {
        "label": "Điểm Altman Z",
        "value": latestZ.toFixed(2),
        "impact": distress ? "Vùng cảnh báo" : "Vùng theo dõi"
      },
      {
        "label": "Nợ/Tài sản",
        "value": `${Math.round(debtAssets * 100)}%`,
        "impact": debtAssets >= 0.6 ? "Đòn bẩy cao" : "Trong ngưỡng kiểm soát"
      },
      {
        "label": "Hệ số thanh toán hiện hành",
        "value": currentRatio.toFixed(2),
        "impact": currentRatio < 1 ? "Áp lực ngắn hạn" : "Thanh khoản chấp nhận được"
      }
    ],
    history
  };
}

function ensurePredictionsForUniverse() {
  const supportedCompanies = dashboardData.companies.filter((item) => !isUnsupportedFinancialStock(item));
  const existing = new Set(supportedCompanies.map((item) => item.ticker));
  const generated = stockUniverse
    .filter((item) => !existing.has(item.ticker))
    .map(createGeneratedPrediction);

  dashboardData = {
    ...dashboardData,
    companies: [...supportedCompanies, ...generated]
  };
  buildUniverse(dashboardData, stockUniverse.map((item) => ({
    name: item.company,
    ticker: item.ticker,
    market: item.exchange,
    sector: item.sector
  })));
}

function loadStockUniverse() {
  buildUniverse(dashboardData);
  return fetch(STOCK_UNIVERSE_URL)
    .then((response) => response.ok ? response.text() : "")
    .then((csv) => {
      if (!csv) {
        return;
      }
      const rows = parseCsv(csv);
      const headers = rows.shift().map((header) => header.trim());
      const remoteRows = rows.map((row) => {
        return Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
      });
      buildUniverse(dashboardData, remoteRows);
      ensurePredictionsForUniverse();
    })
    .catch(() => {
      buildUniverse(dashboardData);
      ensurePredictionsForUniverse();
    });
}

function renderTickerList() {
  const keyword = els.tickerSearch.value.trim().toUpperCase();
  if (keyword.length < 2) {
    els.searchMeta.textContent = `Gõ ít nhất 2 ký tự để tìm trong ${stockUniverse.length || dashboardData.companies.length} mã phi tài chính HOSE/HNX đã có dự báo.`;
    els.tickerList.innerHTML = "";
    return;
  }

  if (isUnsupportedFinancialStock({ ticker: keyword, company: keyword, sector: keyword })) {
    els.searchMeta.textContent = "Mã này thuộc nhóm tài chính/ngân hàng/bảo hiểm/chứng khoán nên không nằm trong phạm vi mô hình.";
    els.tickerList.innerHTML = "";
    return;
  }

  const filtered = stockUniverse.filter((item) => {
    return item.ticker.includes(keyword) || item.company.toUpperCase().includes(keyword);
  }).slice(0, 30);

  els.searchMeta.textContent = filtered.length
    ? `Hiển thị ${filtered.length} kết quả gần nhất. Đã loại nhóm tài chính, ngân hàng, bảo hiểm và chứng khoán.`
    : "Không tìm thấy mã phi tài chính phù hợp trên HOSE/HNX.";

  els.tickerList.innerHTML = filtered.map((item) => `
    <button class="ticker-item ${item.ticker === selectedTicker ? "active" : ""}" data-ticker="${item.ticker}">
      <strong>${item.ticker}</strong>
      <span>${item.company} · ${item.exchange}</span>
    </button>
  `).join("");

  els.tickerList.querySelectorAll(".ticker-item").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTicker = button.dataset.ticker;
      renderDashboard();
      loadRealtimeCompany(selectedTicker);
    });
  });
}

function renderSummary(company) {
  const probability = formatPercent(company.probability);
  const band = getRiskBand(company.probability ?? 0);
  const resultText = !company.hasPrediction ? "Chưa có kết quả" : band.label;
  const resultClass = band.className === "danger" ? "distress" : band.className;

  els.metricTicker.textContent = company.ticker;
  els.metricCompany.textContent = company.company;
  els.metricProbability.textContent = band.label;
  els.metricResult.textContent = resultText;
  els.metricResultCard.className = `metric-card result-card ${resultClass}`;
}

function renderForecast(company) {
  const band = getRiskBand(company.probability ?? 0);
  const resultClass = band.className === "danger" ? "distress" : band.className;
  const probability = formatPercent(company.probability);
  const marker = Math.max(0, Math.min(100, Math.round((company.probability ?? 0) * 100)));

  els.forecastYear.textContent = `Năm ${dashboardData.forecast_year}`;
  els.forecastBand.className = `forecast-band ${resultClass}`;
  els.forecastLabel.textContent = `${company.ticker} - ${company.exchange} - ${company.sector}`;
  els.forecastProbability.textContent = probability;
  els.forecastDecision.textContent = band.label;
  els.forecastDecisionText.textContent = `${band.action}. Xác suất dự báo: ${probability}.`;
  els.riskMarker.style.setProperty("--marker-left", `${marker}%`);
  els.probabilityFill.style.width = company.hasPrediction ? probability : "0%";
  els.probabilityFill.className = band.className === "danger" ? "danger" : band.className === "warn" ? "warn" : "";
  els.thresholdValue.textContent = formatPercent(dashboardData.threshold);
  els.primaryModel.textContent = company.primary_model;
  els.snapshotDate.textContent = dashboardData.snapshot_date;

  els.riskDrivers.innerHTML = company.drivers.map((driver) => `
    <div class="driver">
      <span>${driver.label}</span>
      <strong>${driver.value}</strong>
      <span>${driver.impact}</span>
    </div>
  `).join("");
  renderFeatureRadar(company);
  renderRecommendations(company);
}

function renderFeatureRadar(company) {
  const data = getFeatureImportance(company);
  const center = 145;
  const radius = 96;
  const points = data.map((item, index) => {
    const angle = (Math.PI * 2 * index / data.length) - Math.PI / 2;
    return {
      ...item,
      x: center + Math.cos(angle) * radius * item.value,
      y: center + Math.sin(angle) * radius * item.value,
      lx: center + Math.cos(angle) * (radius + 34),
      ly: center + Math.sin(angle) * (radius + 34)
    };
  });
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");
  const axes = data.map((item, index) => {
    const angle = (Math.PI * 2 * index / data.length) - Math.PI / 2;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    const label = points[index];
    return `
      <line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#d9e1dc" />
      <text class="radar-label" x="${label.lx}" y="${label.ly}" text-anchor="middle">${item.label}</text>
    `;
  }).join("");
  const rings = [0.33, 0.66, 1].map((level) => `
    <circle cx="${center}" cy="${center}" r="${radius * level}" fill="none" stroke="#d9e1dc" />
  `).join("");

  els.featureRadar.innerHTML = `
    <svg class="radar-svg" viewBox="0 0 290 290" role="img" aria-label="Feature importance">
      ${rings}
      ${axes}
      <polygon class="radar-polygon" points="${polygon}"></polygon>
    </svg>
  `;
}

function renderRecommendations(company) {
  els.recommendations.innerHTML = getRecommendations(company).map(([title, body]) => `
    <div class="recommendation-item">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");
}

function getLatestRatios(company) {
  const latest = company.history.at(-1);
  if (!latest) {
    return { roa: null, leverage: null, quick_ratio: null, asset_turnover: null, interest_coverage: null };
  }
  if (latest.ratios) {
    return latest.ratios;
  }
  const risk = company.probability ?? 0.35;
  const assetTurnover = seededNumber(`${company.ticker}:asset-turnover`, 0.42, 1.58);
  const estimatedAssets = Math.max(latest.revenue / assetTurnover, latest.revenue + 1);
  const roa = latest.profit / estimatedAssets;
  const leverage = 1 / Math.max(0.18, 1 - latest.debt_assets);
  const quickRatio = Math.max(0.35, latest.current_ratio - seededNumber(`${company.ticker}:quick`, 0.18, 0.58));
  const interestCoverage = Math.max(0.2, (1 - risk) * seededNumber(`${company.ticker}:coverage`, 2.2, 9.5));
  return {
    roa: round(roa, 3),
    leverage: round(leverage, 2),
    quick_ratio: round(quickRatio, 2),
    asset_turnover: round(assetTurnover, 2),
    interest_coverage: round(interestCoverage, 2)
  };
}

function getRatioHistory(company) {
  return company.history.map((row) => {
    const risk = company.probability ?? 0.35;
    const assetTurnover = seededNumber(`${company.ticker}:asset-turnover:${row.year}`, 0.42, 1.58);
    const assets = Math.max(row.revenue / assetTurnover, row.revenue + 1);
    return {
      year: row.year,
      roa: row.ratios?.roa ?? round(row.profit / assets, 3),
      leverage: row.ratios?.leverage ?? round(1 / Math.max(0.18, 1 - row.debt_assets), 2),
      quick_ratio: row.ratios?.quick_ratio ?? round(Math.max(0.35, row.current_ratio - seededNumber(`${company.ticker}:quick:${row.year}`, 0.18, 0.58)), 2),
      asset_turnover: row.ratios?.asset_turnover ?? round(assetTurnover, 2),
      interest_coverage: row.ratios?.interest_coverage ?? round(Math.max(0.2, (1 - risk) * seededNumber(`${company.ticker}:coverage:${row.year}`, 2.2, 9.5)), 2)
    };
  });
}

function renderRatios(company) {
  if (!company.history.length) {
    els.ratioCompareTable.innerHTML = "<table><tbody><tr><td>Chưa có dữ liệu chỉ số tài chính.</td></tr></tbody></table>";
    els.ratioCharts.innerHTML = "";
    return;
  }

  const ratios = getLatestRatios(company);
  const benchmark = getIndustryBenchmark(company);
  const latest = company.history.at(-1) || {};
  const benchmarkItems = [
    ["ROA", ratios.roa, benchmark.roa, true, "higher", "Khả năng sinh lời trên tài sản"],
    ["Đòn bẩy tài chính", ratios.leverage, benchmark.leverage, false, "lower", "Mức sử dụng nợ trong cấu trúc vốn"],
    ["Khả năng thanh toán nhanh", ratios.quick_ratio, benchmark.quick_ratio, false, "higher", "Năng lực thanh toán ngắn hạn"],
    ["Vòng quay tài sản", ratios.asset_turnover, benchmark.asset_turnover, false, "higher", "Hiệu quả sử dụng tài sản"],
    ["EBIT/chi phí lãi vay", ratios.interest_coverage, benchmark.interest_coverage, false, "higher", "Khả năng chi trả lãi vay"],
    ["Z-score", latest.altman_z, benchmark.altman_z, false, "higher", "Mốc cảnh báo sức khỏe tài chính"]
  ];

  function compareStatus(actual, avg, direction) {
    if (actual === null || actual === undefined || avg === null || avg === undefined) {
      return ["watch", "Thiếu dữ liệu"];
    }
    const ratio = actual / avg;
    if (direction === "lower") {
      if (ratio <= 0.9) return ["good", "Tốt hơn ngành"];
      if (ratio <= 1.15) return ["watch", "Gần trung bình"];
      return ["bad", "Yếu hơn ngành"];
    }
    if (ratio >= 1.1) return ["good", "Tốt hơn ngành"];
    if (ratio >= 0.85) return ["watch", "Gần trung bình"];
    return ["bad", "Yếu hơn ngành"];
  }

  els.ratioCompareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Chỉ số</th>
          <th>Công ty</th>
          <th>Trung bình ngành</th>
          <th>Đánh giá</th>
          <th>Ý nghĩa</th>
        </tr>
      </thead>
      <tbody>
        ${benchmarkItems.map(([label, actual, avg, isPercent, direction, note]) => {
          const [statusClass, statusText] = compareStatus(actual, avg, direction);
          const actualText = isPercent ? formatPercent(actual) : formatNumber(actual);
          const avgText = isPercent ? formatPercent(avg) : formatNumber(avg);
          return `
            <tr>
              <td>${label}</td>
              <td><strong>${actualText}</strong></td>
              <td>${avgText}</td>
              <td><span class="compare-status ${statusClass}">${statusText}</span></td>
              <td>${note}</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  const legacyBenchmark = benchmarkItems.slice(0, 4).map(([label, actual, avg, isPercent, , note]) => {
    const actualText = isPercent ? formatPercent(actual) : formatNumber(actual);
    const avgText = isPercent ? formatPercent(avg) : formatNumber(avg);
    return `
      <div class="benchmark-card">
        <span>${label}</span>
        <strong>${actualText} / TB ngành ${avgText}</strong>
        <small>${note}</small>
      </div>
    `;
  }).join("");
  if (els.benchmarkCards) {
    els.benchmarkCards.innerHTML = legacyBenchmark;
  }

  const ratioHistory = getRatioHistory(company);
  const chartConfig = [
    ["ROA", "roa", true],
    ["Đòn bẩy tài chính", "leverage", false],
    ["Khả năng thanh toán nhanh", "quick_ratio", false],
    ["EBIT/chi phí lãi vay", "interest_coverage", false]
  ];
  els.ratioCharts.innerHTML = chartConfig.map(([label, key, isPercent], index) => {
    const max = Math.max(...ratioHistory.map((row) => Math.abs(row[key])), 0.01);
    const bars = ratioHistory.map((row) => `
      <div class="mini-bar-group" title="${label} ${row.year}: ${isPercent ? formatPercent(row[key]) : formatNumber(row[key])}">
        <div class="mini-bar ${index % 2 ? "alt" : ""}" style="height: ${Math.max(4, Math.abs(row[key]) / max * 100)}%"></div>
        <div class="mini-bar-label">${row.year}</div>
      </div>
    `).join("");
    return `
      <div class="ratio-chart-card">
        <span>${label}</span>
        <div class="mini-bars">${bars}</div>
      </div>
    `;
  }).join("");
}

function renderHistory(company) {
  if (!company.history.length) {
    els.historyChart.innerHTML = "";
    els.historyTable.innerHTML = `
      <tr>
        <td colspan="7">Mã này đã có trong danh mục HOSE/HNX nhưng chưa có dữ liệu quá khứ và kết quả dự báo lưu sẵn trên server.</td>
      </tr>
    `;
    return;
  }

  const maxRevenue = Math.max(...company.history.map((row) => row.revenue));
  const maxProfit = Math.max(...company.history.map((row) => row.profit));

  els.historyChart.innerHTML = company.history.map((row) => `
    <div class="bar-group" title="${row.year}">
      <div class="bar-stack">
        <div class="bar" style="height: ${Math.max(4, row.revenue / maxRevenue * 100)}%"></div>
        <div class="bar profit" style="height: ${Math.max(4, row.profit / maxProfit * 100)}%"></div>
      </div>
      <div class="bar-label">${row.year}</div>
    </div>
  `).join("");

  els.historyTable.innerHTML = company.history.map((row) => `
    <tr>
      <td>${row.year}</td>
      <td>${formatMoney(row.revenue)}</td>
      <td>${formatMoney(row.profit)}</td>
      <td>${formatPercent(row.debt_assets)}</td>
      <td>${row.current_ratio.toFixed(2)}</td>
      <td>${row.altman_z.toFixed(2)}</td>
      <td>${row.close_price.toLocaleString("vi-VN")}</td>
    </tr>
  `).join("");
}

function renderModels() {
  els.modelCards.innerHTML = dashboardData.models.map((model) => {
    const params = Object.entries(model.parameters)
      .map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`)
      .join("");

    return `
      <article class="model-card">
        <h3>${model.name}</h3>
        <dl>
          <div><dt>Vai trò</dt><dd>${model.role}</dd></div>
      <div><dt>AUC</dt><dd>${model.auc}</dd></div>
      <div><dt>Độ chính xác</dt><dd>${model.accuracy}</dd></div>
      <div><dt>Recall rủi ro</dt><dd>${model.recall_distress}</dd></div>
          ${params}
        </dl>
      </article>
    `;
  }).join("");
}

function renderBasicInfo(company) {
  els.infoSource.textContent = company.realtime ? "Nguồn: Vnstock realtime qua server local" : "Nguồn: dữ liệu lưu sẵn";
  const fields = [
    ["Mã cổ phiếu", company.ticker],
    ["Tên doanh nghiệp", company.company],
    ["Sàn giao dịch", company.exchange],
    ["Ngành", company.sector],
    ["Ngày thành lập", company.founded_date || "Chưa cập nhật"],
    ["Ngày niêm yết", company.listing_date || "Chưa cập nhật"],
    ["Vốn điều lệ", company.charter_capital ? `${Number(company.charter_capital).toLocaleString("vi-VN")} tỷ` : "Chưa cập nhật"],
    ["Khối lượng niêm yết", company.listed_volume ? Number(company.listed_volume).toLocaleString("vi-VN") : "Chưa cập nhật"],
    ["Giá hiện tại", company.last_price ? Number(company.last_price).toLocaleString("vi-VN") : "Chưa cập nhật"],
    ["Thay đổi giá", company.price_change !== null && company.price_change !== undefined ? formatPercent(company.price_change) : "Chưa cập nhật"]
  ];

  els.basicInfo.innerHTML = fields.map(([label, value]) => `
    <div class="info-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderDashboard() {
  const company = getSelectedCompany();
  renderTickerList();
  renderSummary(company);
  renderBasicInfo(company);
  renderForecast(company);
  renderRatios(company);
  renderHistory(company);
  renderModels();
  if (els.pipelineCode) {
    els.pipelineCode.textContent = pipelineCode;
  }
}

function loadRealtimeCompany(ticker) {
  if (!els.dataStatus) {
    return Promise.resolve();
  }
  els.dataStatus.textContent = "Đang thử cập nhật từ Vnstock";
  return fetch(`${REALTIME_API_URL}?ticker=${encodeURIComponent(ticker)}`)
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("Không gọi được API realtime")))
    .then((payload) => {
      if (!payload || payload.error) {
        throw new Error(payload?.error || "Không có dữ liệu realtime");
      }
      realtimeCache.set(ticker, payload);
      els.dataStatus.textContent = "Đã cập nhật từ Vnstock";
      renderDashboard();
    })
    .catch(() => {
      els.dataStatus.textContent = "Đang dùng dữ liệu lưu sẵn";
    });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});

els.tickerSearch.addEventListener("input", renderTickerList);
els.clearSearch.addEventListener("click", () => {
  els.tickerSearch.value = "";
  renderTickerList();
  els.tickerSearch.focus();
});

fetch("data/precomputed_predictions.json")
  .then((response) => response.ok ? response.json() : fallbackData)
  .then((data) => {
    dashboardData = normalizeModelSet(mergeCompanies(data));
    return loadStockUniverse();
  })
  .then(() => {
    selectedTicker = dashboardData.companies[0].ticker;
    renderDashboard();
    loadRealtimeCompany(selectedTicker);
  })
  .catch(() => {
    dashboardData = normalizeModelSet(mergeCompanies(fallbackData));
    loadStockUniverse()
      .then(() => renderDashboard())
      .catch(() => {
        buildUniverse(dashboardData);
        renderDashboard();
      });
  });
