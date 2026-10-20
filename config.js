// ============================================================
//  SUCROCAN CANADA INC — WAREHOUSE TRACKER CONFIGURATION
//  Separate from the refinery Shift Tracker: its own Sheet,
//  its own Apps Script, its own GitHub repo.
// ============================================================

const CONFIG = {

  company: "Sucrocan Canada Inc.",
  plant:   "Sherman Refinery — Warehouse",

  // 12-hour shifts
  shifts: {
    Day:   { start: "07:00", end: "19:00" },
    Night: { start: "19:00", end: "07:00" },
  },

  // Crew on every shift (one person per role)
  crew: [
    { key: "supervisor", label: "Shift Supervisor" },
    { key: "loader1",    label: "Loader 1 — rail car / liquid truck / bulk truck" },
    { key: "loader2",    label: "Loader 2 — rail car / liquid truck / bulk truck" },
    { key: "bagger",     label: "Bagger — 1 MT totes" },
    { key: "packaging",  label: "Packaging Operator" },
  ],

  // Load types in the load log. Changing these names also needs Code.gs (calcTotals).
  loadTypes: [
    "Liquid truck",
    "Dry bulk truck",
    "Dry rail car",
    "1 MT tote truck",
    "Bagged product truck",
    "Final molasses rail car",
  ],

  delayReasons: [
    "Truck / driver late",
    "Rail car not spotted / not ready",
    "Equipment breakdown",
    "Product not available / silo low",
    "Waiting on QC / lab release",
    "Paperwork / BOL / scale issue",
    "Weather",
    "Short staffed",
    "Other",
  ],

  downtimeCategories: ["Equipment failure", "Operations failure", "Other"],

  equipmentAreas: [
    "Liquid loading station",
    "Bulk truck loadout",
    "Rail car loadout",
    "Truck scale",
    "Tote bagger (1 MT)",
    "Packaging line — 20 kg / 50 lb",
    "Packaging line — 2 kg",
    "Powder sugar line",
    "Sifter",
    "Conveyors / elevators",
    "Dome reclaim",
    "Forklift",
    "Molasses unloading",
    "Control room / PLC",
    "Other",
  ],

  // ----------------------------------------------------------
  //  GOOGLE APPS SCRIPT WEB APP URL (the warehouse one — NOT the refinery tracker's)
  // ----------------------------------------------------------
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzgpOyR6HxvE3CEOH2U8X0JZjvUKLFza8chP80Vsu7dM3sBXvWR_PtdpCeYqmKiVWyD/exec",

};
