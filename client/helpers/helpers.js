export function Random(array) {
  const element = Math.floor(Math.random() * array.length);
  return array[element];
}

class MlmWords {
  constructor() {
    this.words = [
      "2",
      "Advertising",
      "America",
      "Another",
      "Ariix",
      "Auto",
      "Automatic",
      "Avant",
      "Beach",
      "Better",
      "Big",
      "Biz",
      "BizSystem",
      "Blueprint",
      "Boom",
      "Brilliant",
      "Builder",
      "Builders",
      "Building",
      "Business",
      "CEO",
      "Cellars",
      "Central",
      "Central",
      "Clarify",
      "Cleanse",
      "Dialer",
      "Direct",
      "EV",
      "Eagle",
      "Easy",
      "Empower",
      "Enhance",
      "Enhancing",
      "Epic",
      "Essential",
      "Even",
      "Exchange",
      "Faster",
      "Fearless",
      "Figures",
      "Force",
      "Four",
      "Freedom",
      "Fun",
      "GIG",
      "Global",
      "Go",
      "Green",
      "Group",
      "Harvest",
      "Health",
      "Income",
      "Incredible",
      "Innovative",
      "Into",
      "Invoice",
      "Java",
      "Lead",
      "Leads",
      "Level",
      "Life",
      "Lightyear",
      "Live",
      "Lives",
      "M5",
      "MCA",
      "MDM",
      "MLM",
      "Making",
      "Manager",
      "Marketing",
      "Meetings",
      "Mela",
      "Mentoring",
      "Mission",
      "Moms",
      "My",
      "National",
      "Network",
      "Networker",
      "Networkers",
      "Office",
      "On",
      "One",
      "Online",
      "Organized",
      "Panel",
      "Pilot",
      "Plan",
      "Point",
      "Portal",
      "Power",
      "PowerX",
      "Powerful",
      "Pro",
      "Profit",
      "Prospect",
      "Prospector",
      "Prospects",
      "Prosperity",
      "Pure",
      "Q",
      "Quick",
      "Responsive",
      "Revolution",
      "Sales",
      "Sea",
      "Secrets",
      "Six",
      "Store",
      "Success",
      "System",
      "TV",
      "Team",
      "Time",
      "Tools",
      "Travel",
      "Tribe",
      "Trump",
      "Trump",
      "Trump",
      "Trump",
      "Trump",
      "Trump",
      "Trump",
      "USA",
      "Ultimate",
      "Pros",
      "Stream",
      "Verified",
      "Virtual",
      "Walk",
      "Warriors",
      "Wealth",
      "Wellness",
      "Wireless",
      "Worldwide",
      "ZONE",
      "dialer",
      "freedom",
      "iGo",
      "iWealth",
      "power"
    ];

    this.length = this.words.length;
  }

  get() {   
    return Random(this.words).toUpperCase();
  }
}

export default MlmWords;