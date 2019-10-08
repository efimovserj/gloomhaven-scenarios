export const worldMap = [
  {
    id: 1,
    code: "G-10",
    title: "Black Barrow",
    requirements: null,
    requirementsText: "None",
    dependedBy: null,
    links: null,
    produce: [2],
    partyAchievement: "First Steps",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/1.png"
  },
  {
    id: 2,
    code: "G-11",
    title: "Barrow Lair",
    requirements: [
      {
        achievement: "First Steps",
        complete: true
      }
    ],
    requirementsText: "First Steps (Party) COMPLETE",
    dependedBy: [1],
    links: [1],
    produce: [3, 4],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/2.png"
  },
  {
    id: 3,
    code: "G-3",
    title: "Inox Encampment",
    requirements: [
      {
        achievement: "The Merchant Flees",
        complete: false
      }
    ],
    requirementsText: "The Merchant Flees (Global) INCOMPLETE",
    dependedBy: [2],
    links: null,
    produce: [8, 9],
    partyAchievement: "Jekserah’s Plans",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/3.png"
  },
  {
    id: 4,
    code: "E-11",
    title: "Crypt of the Damned",
    requirements: null,
    requirementsText: "None",
    dependedBy: [2],
    links: null,
    produce: [5, 6],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/4.png"
  },
  {
    id: 5,
    code: "D-6",
    title: "Ruinous Crypt",
    requirements: null,
    requirementsText: "None",
    dependedBy: [4],
    links: [10],
    produce: [10, 14, 19],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/5.png"
  },
  {
    id: 6,
    code: "F-10",
    title: "Decaying Crypt",
    requirements: null,
    requirementsText: "None",
    dependedBy: [4],
    links: null,
    produce: [8],
    partyAchievement: ["Jekserah’s Plans", "Dark Bounty"],
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/6.png"
  },
  {
    id: 7,
    code: "C-12",
    title: "Vibrant Grotto",
    requirements: [
      {
        achievement: "The Power of Enhancement",
        complete: true
      },
      {
        achievement: "The Merchant Flees",
        complete: true
      }
    ],
    requirementsText:
      "The Power of Enhancement (Global) and The Merchant Flees (Global) COMPLETE",
    dependedBy: [8, 14],
    links: null,
    produce: [20],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/7.png"
  },
  {
    id: 8,
    code: "C-18",
    title: "Gloomhaven Warehouse",
    requirements: [
      {
        achievement: "Jekserah’s Plans",
        complete: true
      },
      {
        achievement: "The Dead Invade",
        complete: false
      }
    ],
    requirementsText:
      "Jekserah’s Plans (Party) COMPLETE and The Dead Invade (Global) INCOMPLETE",
    dependedBy: [3, 6],
    links: ["Gloomhaven"],
    produce: [7, 13, 14],
    partyAchievement: "The Merchant Flees",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/8.png"
  },
  {
    id: 9,
    code: "L-2",
    title: "Diamond Mine",
    requirements: [
      {
        achievement: "The Merchant Flees",
        complete: false
      }
    ],
    requirementsText: "The Merchant Flees (Global) INCOMPLETE",
    dependedBy: [3],
    links: null,
    produce: [11, 12],
    partyAchievement: "The Dead Invade",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/9.png"
  },
  {
    id: 10,
    code: "C-7",
    title: "plane of elemental power",
    requirements: [
      {
        achievement: "The Rift Neutralized",
        complete: false
      }
    ],
    requirementsText: "The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [5],
    links: [5, 21],
    produce: [21, 22],
    partyAchievement: "A Demon’s Errand",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/10.png"
  },
  {
    id: 11,
    code: "B-16",
    title: "Gloomhaven Square A",
    requirements: [
      {
        achievement: "End of the Invasion",
        complete: false
      }
    ],
    requirementsText: "End of the Invasion (Global) INCOMPLETE",
    dependedBy: [9],
    links: ["Gloomhaven"],
    produce: [16, 18],
    partyAchievement: ["City Rule: Economic", "End of the Invasion"],
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/11-12.png"
  },
  {
    id: 12,
    code: "B-16",
    title: "Gloomhaven Square B",
    requirements: [
      {
        achievement: "End of the Invasion",
        complete: false
      }
    ],
    requirementsText: "End of the Invasion (Global) INCOMPLETE",
    dependedBy: [9],
    links: ["Gloomhaven"],
    produce: [16, 18, 28],
    partyAchievement: "End of the Invasion",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/11-12.png"
  },
  {
    id: 13,
    code: "N-3",
    title: "Temple of the Seer",
    requirements: null,
    requirementsText: "None",
    dependedBy: null,
    links: null,
    produce: [15, 17, 20],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/13.png"
  },
  {
    id: 14,
    code: "C-10",
    title: "Frozen Hollow",
    requirements: null,
    requirementsText: "None",
    dependedBy: [5, 8, 18],
    links: null,
    produce: [7, 19, 31, 43],
    partyAchievement: "The Power of Enhancement",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/14.png"
  },
  {
    id: 15,
    code: "B-11",
    title: "Shrine of Strength",
    requirements: null,
    requirementsText: "None",
    dependedBy: [13, 39],
    links: null,
    produce: null,
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/15.png"
  },
  {
    id: 16,
    code: "B-6",
    title: "Mountain Pass",
    requirements: null,
    requirementsText: "None",
    dependedBy: [11, 12, 20],
    links: [24],
    produce: [24, 25],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/16.png"
  },
  {
    id: 17,
    code: "K-17",
    title: "Lost Island",
    requirements: null,
    requirementsText: "None",
    dependedBy: [13],
    links: ["Gloomhaven"],
    produce: null,
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/17.png"
  },
  {
    id: 18,
    code: "C-14",
    title: "Abandoned Sewers",
    requirements: null,
    requirementsText: "None",
    dependedBy: [11, 12, 20],
    links: ["Gloomhaven"],
    produce: [14, 23, 26, 43],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/18.png"
  },
  {
    id: 19,
    code: "M-7",
    title: "Forgotten Crypt",
    requirements: [
      {
        achievement: "The Power of Enhancement",
        complete: true
      }
    ],
    requirementsText: "The Power of Enhancement (Global) COMPLETE",
    dependedBy: [5, 14],
    links: null,
    produce: [27],
    partyAchievement: "Stonebreaker’s Censer",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/19.png"
  },
  {
    id: 20,
    code: "H-13",
    title: "Necromancer's Sanctum",
    requirements: [
      {
        achievement: "The Merchant Flees",
        complete: true
      }
    ],
    requirementsText: "The Merchant Flees (Global) COMPLETE",
    dependedBy: [7, 13],
    links: null,
    produce: [16, 18, 28],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/20.png"
  },
  {
    id: 21,
    code: "C-7",
    title: "Infernal Throne",
    requirements: [
      {
        achievement: "The Rift Neutralized",
        complete: false
      }
    ],
    requirementsText: "The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [10],
    links: [10],
    produce: null,
    partyAchievement: [
      "The Rift Neutralized",
      {
        condition: {
          achievement: "Artifact: Lost",
          complete: true
        },
        achievement: "Artifact: Recovered"
      }
    ],
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/21.png"
  },
  {
    id: 22,
    code: "K-8",
    title: "Temple of the Elements",
    requirements: [
      {
        achievement: ["A Demon’s Errand", "Following Clues"],
        complete: true
      }
    ],
    requirementsText:
      "A Demon’s Errand (Party) or Following Clues (Party) COMPLETE",
    dependedBy: [10, 26],
    links: null,
    produce: [31, 35, 36],
    partyAchievement: "Artifact: Recovered",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/22.png"
  },
  {
    id: 23,
    code: "C-15",
    title: "Deep Ruins",
    requirements: null,
    requirementsText: "None",
    dependedBy: [18],
    links: ["Gloomhaven"],
    produce: null,
    partyAchievement: ["Ancient Technology", "Through the Ruins"],
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/23.png"
  },
  {
    id: 24,
    code: "C-6",
    title: "Echo Chamber",
    requirements: null,
    requirementsText: "None",
    dependedBy: [16],
    links: [16],
    produce: [30, 32],
    partyAchievement: "The Voice’s Command",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/24.png"
  },
  {
    id: 25,
    code: "A-5",
    title: "Icecrag Ascent",
    requirements: null,
    requirementsText: "None",
    dependedBy: [16],
    links: [34],
    produce: [33, 34],
    partyAchievement: "The Drake’s Command",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/25.png"
  },
  {
    id: 26,
    code: "D-15",
    title: "Ancient Cistern",
    requirements: [
      {
        achievement: ["Water-Breathing (Global)", "Through the Ruins"],
        complete: true
      }
    ],
    requirementsText:
      "Water-Breathing (Global) or Through the Ruins (Party) COMPLETE",
    dependedBy: [18],
    links: ["Gloomhaven"],
    produce: [22],
    partyAchievement: "Following Clues",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/26.png"
  },
  {
    id: 27,
    code: "E-6",
    title: "Ruinous Rift",
    requirements: [
      {
        achievement: "Artifact: Lost",
        complete: false
      },
      {
        achievement: "Stonebreaker’s Censer",
        complete: true
      }
    ],
    requirementsText:
      "Artifact: Lost INCOMPLETE (Global) and Stonebreaker’s Censer (Party) COMPLETE",
    dependedBy: [19],
    links: null,
    produce: null,
    partyAchievement: "The Rift Neutralized",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/27.png"
  },
  {
    id: 28,
    code: "E-4",
    title: "Outer Ritual Chamber",
    requirements: [
      {
        achievement: "Dark Bounty",
        complete: true
      }
    ],
    requirementsText: "Dark Bounty (Party) COMPLETE",
    dependedBy: [12, 20],
    links: [29],
    produce: [29],
    partyAchievement: "An Invitation",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/28.png"
  },
  {
    id: 29,
    code: "E-3",
    title: "Sanctuary of Gloom",
    requirements: [
      {
        achievement: "An Invitation",
        complete: true
      }
    ],
    requirementsText: "An Invitation (Party) COMPLETE",
    dependedBy: [28],
    links: [28],
    produce: null,
    partyAchievement: "The Edge of Darkness",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/29.png"
  },
  {
    id: 30,
    code: "N-15",
    title: "Shrine of the Depths",
    requirements: [
      {
        achievement: "The Voice’s Command",
        complete: true
      }
    ],
    requirementsText: "The Voice’s Command (Party)",
    dependedBy: [24],
    links: null,
    produce: [42],
    partyAchievement: "The Scepter and the Voice",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/30.png"
  },
  {
    id: 31,
    code: "A-16",
    title: "Plane of Night",
    requirements: [
      {
        achievement: "The Power of Enhancement",
        complete: true
      },
      {
        achievement: "Artifact: Recovered",
        complete: true
      }
    ],
    requirementsText:
      "The Power of Enhancement (Global) and Artifact: Recovered (Global) COMPLETE",
    dependedBy: [14, 22],
    links: ["Gloomhaven"],
    produce: [37, 38, 39, 43],
    partyAchievement: "Artifact: Cleansed",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/31.png"
  },
  {
    id: 32,
    code: "L-11",
    title: "Decrepit Wood",
    requirements: [
      {
        achievement: "The Voice’s Command",
        complete: true
      }
    ],
    requirementsText: "The Voice’s Command (Party) COMPLETE",
    dependedBy: [24],
    links: null,
    produce: [33, 40],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/32.png"
  },
  {
    id: 33,
    code: "A-7",
    title: "Savvas Armory",
    requirements: [
      {
        achievement: ["The Voice’s Command", "The Drake’s Command"],
        complete: true
      }
    ],
    requirementsText:
      "The Voice’s Command (Party) or The Drake’s Command (Party) COMPLETE",
    dependedBy: [25, 32],
    links: null,
    produce: null,
    partyAchievement: ["The Voice’s Treasure", "The Drake’s Treasure"],
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/33.png"
  },
  {
    id: 34,
    code: "A-4",
    title: "Scorched Summit",
    requirements: [
      {
        achievement: "The Drake’s Command",
        complete: true
      },
      {
        achievement: "The Drake Aided",
        complete: true
      }
    ],
    requirementsText:
      "The Drake’s Command (Party) COMPLETE and The Drake Aided (Global) INCOMPLETE",
    dependedBy: [25],
    links: [25],
    produce: null,
    partyAchievement: "The Drake Slain",
    excludeAchievement: "The Drake’s Command",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/34.png"
  },
  {
    id: 35,
    code: "A-14",
    title: "Gloomhaven Battlements A",
    requirements: [
      {
        achievement: "A Demon’s Errand",
        complete: true
      },
      {
        achievement: "The Rift Neutralized",
        complete: false
      }
    ],
    requirementsText:
      "A Demon’s Errand (Party) COMPLETE and The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [22],
    links: ["Gloomhaven"],
    produce: [45],
    partyAchievement: ["City Rule: Demonic", "Artifact: Lost"],
    excludeAchievement: "A Demon’s Errand",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/35-36.png"
  },
  {
    id: 36,
    code: "B-14",
    title: "Gloomhaven Battlements B",
    requirements: [
      {
        achievement: "A Demon’s Errand",
        complete: true
      },
      {
        achievement: "The Rift Neutralized",
        complete: false
      }
    ],
    requirementsText:
      "A Demon’s Errand (Party) COMPLETE and The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [22],
    links: ["Gloomhaven"],
    produce: null,
    partyAchievement: "The Rift Neutralized",
    excludeAchievement: "The Demon’s Errand",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/35-36.png"
  },
  {
    id: 37,
    code: "G-18",
    title: "Doom Trench",
    requirements: [
      {
        achievement: "Water-Breathing",
        complete: true
      }
    ],
    requirementsText: "Water-Breathing (Global) COMPLETE",
    dependedBy: [31],
    links: ["Gloomhaven"],
    produce: [47],
    partyAchievement: "Through the Trench",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/37.png"
  },
  {
    id: 38,
    code: "G-2",
    title: "Slave Pens",
    requirements: null,
    requirementsText: "None",
    dependedBy: [31],
    links: [44],
    produce: [44, 48],
    partyAchievement: "Redthorn’s Aid",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/38.png"
  },
  {
    id: 39,
    code: "B-11",
    title: "Treacherous Divide",
    requirements: null,
    requirementsText: "None",
    dependedBy: [31],
    links: [46],
    produce: [15, 46],
    partyAchievement: "Across the Divide",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/39.png"
  },
  {
    id: 40,
    code: "F-12",
    title: "Ancient Defense Network",
    requirements: [
      {
        achievement: "The Voice’s Command",
        complete: true
      },
      {
        achievement: "The Voice’s Treasure",
        complete: true
      }
    ],
    requirementsText:
      "The Voice’s Command (Party) and The Voice’s Treasure (Party) COMPLETE",
    dependedBy: [32],
    links: [41],
    produce: [41],
    partyAchievement: "Ancient Technology",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/40.png"
  },
  {
    id: 41,
    code: "aaa-1",
    title: "timeworn tomb",
    requirements: null,
    requirementsText: "None",
    dependedBy: [40],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/41.png"
  },
  {
    id: 42,
    code: "aaa-1",
    title: "realm of the voice",
    requirements: null,
    requirementsText: "None",
    dependedBy: [30],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/42.png"
  },
  {
    id: 43,
    code: "aaa-1",
    title: "drake nest",
    requirements: null,
    requirementsText: "None",
    dependedBy: [14, 18, 31],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/43.png"
  },
  {
    id: 44,
    code: "aaa-1",
    title: "tribal assault",
    requirements: null,
    requirementsText: "None",
    dependedBy: [38],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/44.png"
  },
  {
    id: 45,
    code: "aaa-1",
    title: "rebel swamp",
    requirements: null,
    requirementsText: "None",
    dependedBy: [35],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/45.png"
  },
  {
    id: 46,
    code: "aaa-1",
    title: "nightmare peak",
    requirements: null,
    requirementsText: "None",
    dependedBy: [39],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/46.png"
  },
  {
    id: 47,
    code: "aaa-1",
    title: "lair of the unseeing eye",
    requirements: null,
    requirementsText: "None",
    dependedBy: [37],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/47.png"
  },
  {
    id: 48,
    code: "aaa-1",
    title: "shadow weald",
    requirements: null,
    requirementsText: "None",
    dependedBy: [38],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/48.png"
  },
  {
    id: 49,
    code: "aaa-1",
    title: "rebel's stand",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/49.png"
  },
  {
    id: 50,
    code: "aaa-1",
    title: "ghost fortress",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/50.png"
  },
  {
    id: 51,
    code: "aaa-1",
    title: "the void",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/51.png"
  },
  {
    id: 52,
    code: "aaa-1",
    title: "noxious cellar",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/52.png"
  },
  {
    id: 53,
    code: "aaa-1",
    title: "crypt basement",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/53.png"
  },
  {
    id: 54,
    code: "aaa-1",
    title: "palace of ice",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/54.png"
  },
  {
    id: 55,
    code: "aaa-1",
    title: "foggy thicket",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/55.png"
  },
  {
    id: 56,
    code: "aaa-1",
    title: "bandit's wood",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/56.png"
  },
  {
    id: 57,
    code: "aaa-1",
    title: "investigation",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/57.png"
  },
  {
    id: 58,
    code: "aaa-1",
    title: "bloody shack",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/58.png"
  },
  {
    id: 59,
    code: "aaa-1",
    title: "forgotten grove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/59.png"
  },
  {
    id: 60,
    code: "aaa-1",
    title: "alchemy lab",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/60.png"
  },
  {
    id: 61,
    code: "aaa-1",
    title: "fading lighthouse",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/61.png"
  },
  {
    id: 62,
    code: "aaa-1",
    title: "pit of souls",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/62.png"
  },
  {
    id: 63,
    code: "aaa-1",
    title: "magma pit",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/63.png"
  },
  {
    id: 64,
    code: "aaa-1",
    title: "underwater lagoon",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/64.png"
  },
  {
    id: 65,
    code: "aaa-1",
    title: "sulfur mine",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/65.png"
  },
  {
    id: 66,
    code: "aaa-1",
    title: "clockwork cove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/66.png"
  },
  {
    id: 67,
    code: "aaa-1",
    title: "arcane library",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/67.png"
  },
  {
    id: 68,
    code: "aaa-1",
    title: "toxic moor",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/68.png"
  },
  {
    id: 69,
    code: "aaa-1",
    title: "well of the unfortunate",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/69.png"
  },
  {
    id: 70,
    code: "aaa-1",
    title: "chained isle",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/70.png"
  },
  {
    id: 71,
    code: "aaa-1",
    title: "windswept highlands",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/71.png"
  },
  {
    id: 72,
    code: "aaa-1",
    title: "oozing grove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/72.png"
  },
  {
    id: 73,
    code: "aaa-1",
    title: "rockslide ridge",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/73.png"
  },
  {
    id: 74,
    code: "aaa-1",
    title: "merchant ship",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/74.png"
  },
  {
    id: 75,
    code: "aaa-1",
    title: "overgrown graveyard",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/75.png"
  },
  {
    id: 76,
    code: "aaa-1",
    title: "harrower hive",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/76.png"
  },
  {
    id: 77,
    code: "aaa-1",
    title: "vault of secrets",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/77.png"
  },
  {
    id: 78,
    code: "aaa-1",
    title: "sacrifice pit",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/78.png"
  },
  {
    id: 79,
    code: "aaa-1",
    title: "lost temple",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/79.png"
  },
  {
    id: 80,
    code: "aaa-1",
    title: "vigil keep",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/80.png"
  },
  {
    id: 81,
    code: "aaa-1",
    title: "temple of the eclipse",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/81.png"
  },
  {
    id: 82,
    code: "aaa-1",
    title: "burning mountain",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/82.png"
  },
  {
    id: 83,
    code: "aaa-1",
    title: "shadows within",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/83.png"
  },
  {
    id: 84,
    code: "aaa-1",
    title: "crystalline cave",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/84.png"
  },
  {
    id: 85,
    code: "aaa-1",
    title: "sun temple",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/85.png"
  },
  {
    id: 86,
    code: "aaa-1",
    title: "harried village",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/86.png"
  },
  {
    id: 87,
    code: "aaa-1",
    title: "corrupted cove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/87.png"
  },
  {
    id: 88,
    code: "aaa-1",
    title: "plane of water",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/88.png"
  },
  {
    id: 89,
    code: "aaa-1",
    title: "syndicate hideout",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/89.png"
  },
  {
    id: 90,
    code: "aaa-1",
    title: "demonic rift",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/90.png"
  },
  {
    id: 91,
    code: "aaa-1",
    title: "wild melee",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/91.png"
  },
  {
    id: 92,
    code: "aaa-1",
    title: "back alley brawl",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/92.png"
  },
  {
    id: 93,
    code: "aaa-1",
    title: "sunken vessel",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/93.png"
  },
  {
    id: 94,
    code: "aaa-1",
    title: "vermling nest",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/94.png"
  },
  {
    id: 95,
    code: "aaa-1",
    title: "payment due",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: [600],
    produce: [100],
    partyAchievement: "AZAZAZAZAZAZA",
    excludeAchievement: "WEWEWEWEWEWE",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/95.png"
  }
];
