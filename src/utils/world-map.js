export const worldMap = [
  {
    id: 0,
    code: null,
    name: "Gloomhaven",
    requirements: null,
    requirementsText: "None",
    dependedBy: null,
    links: null,
    produce: null,
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: null,
    image: null
  },
  {
    id: 1,
    code: "G-10",
    name: "Black Barrow",
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
    name: "Barrow Lair",
    requirements: [
      {
        name: "First Steps",
        type: "achievement",
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
    name: "Inox Encampment",
    requirements: [
      {
        name: "The Merchant Flees",
        type: "achievement",
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
    name: "Crypt of the Damned",
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
    name: "Ruinous Crypt",
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
    name: "Decaying Crypt",
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
    name: "Vibrant Grotto",
    requirements: [
      {
        name: "The Power of Enhancement",
        type: "achievement",
        complete: true
      },
      {
        name: "The Merchant Flees",
        type: "achievement",
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
    name: "Gloomhaven Warehouse",
    requirements: [
      {
        name: "Jekserah’s Plans",
        type: "achievement",
        complete: true
      },
      {
        name: "The Dead Invade",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText:
      "Jekserah’s Plans (Party) COMPLETE and The Dead Invade (Global) INCOMPLETE",
    dependedBy: [3, 6],
    links: [0],
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
    name: "Diamond Mine",
    requirements: [
      {
        name: "The Merchant Flees",
        type: "achievement",
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
    name: "plane of elemental power",
    requirements: [
      {
        name: "The Rift Neutralized",
        type: "achievement",
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
    name: "Gloomhaven Square A",
    requirements: [
      {
        name: "End of the Invasion",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText: "End of the Invasion (Global) INCOMPLETE",
    dependedBy: [9],
    links: [0],
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
    name: "Gloomhaven Square B",
    requirements: [
      {
        name: "End of the Invasion",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText: "End of the Invasion (Global) INCOMPLETE",
    dependedBy: [9],
    links: [0],
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
    name: "Temple of the Seer",
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
    name: "Frozen Hollow",
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
    name: "Shrine of Strength",
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
    name: "Mountain Pass",
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
    name: "Lost Island",
    requirements: null,
    requirementsText: "None",
    dependedBy: [13],
    links: [0],
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
    name: "Abandoned Sewers",
    requirements: null,
    requirementsText: "None",
    dependedBy: [11, 12, 20],
    links: [0],
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
    name: "Forgotten Crypt",
    requirements: [
      {
        name: "The Power of Enhancement",
        type: "achievement",
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
    name: "Necromancer's Sanctum",
    requirements: [
      {
        name: "The Merchant Flees",
        type: "achievement",
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
    name: "Infernal Throne",
    requirements: [
      {
        name: "The Rift Neutralized",
        type: "achievement",
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
          name: "Artifact: Lost",
          type: "achievement",
          complete: true
        },
        name: "Artifact: Recovered",
        type: "achievement"
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
    name: "Temple of the Elements",
    requirements: [
      {
        name: ["A Demon’s Errand", "Following Clues"],
        type: "achievement",
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
    name: "Deep Ruins",
    requirements: null,
    requirementsText: "None",
    dependedBy: [18],
    links: [0],
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
    name: "Echo Chamber",
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
    name: "Icecrag Ascent",
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
    name: "Ancient Cistern",
    requirements: [
      {
        name: ["Water-Breathing", "Through the Ruins"],
        type: "achievement",
        complete: true
      }
    ],
    requirementsText:
      "Water-Breathing (Global) or Through the Ruins (Party) COMPLETE",
    dependedBy: [18],
    links: [0],
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
    name: "Ruinous Rift",
    requirements: [
      {
        name: "Artifact: Lost",
        type: "achievement",
        complete: false
      },
      {
        name: "Stonebreaker’s Censer",
        type: "achievement",
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
    name: "Outer Ritual Chamber",
    requirements: [
      {
        name: "Dark Bounty",
        type: "achievement",
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
    name: "Sanctuary of Gloom",
    requirements: [
      {
        name: "An Invitation",
        type: "achievement",
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
    name: "Shrine of the Depths",
    requirements: [
      {
        name: "The Voice’s Command",
        type: "achievement",
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
    name: "Plane of Night",
    requirements: [
      {
        name: "The Power of Enhancement",
        type: "achievement",
        complete: true
      },
      {
        name: "Artifact: Recovered",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText:
      "The Power of Enhancement (Global) and Artifact: Recovered (Global) COMPLETE",
    dependedBy: [14, 22],
    links: [0],
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
    name: "Decrepit Wood",
    requirements: [
      {
        name: "The Voice’s Command",
        type: "achievement",
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
    name: "Savvas Armory",
    requirements: [
      {
        name: ["The Voice’s Command", "The Drake’s Command"],
        type: "achievement",
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
    name: "Scorched Summit",
    requirements: [
      {
        name: "The Drake’s Command",
        type: "achievement",
        complete: true
      },
      {
        name: "The Drake Aided",
        type: "achievement",
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
    name: "Gloomhaven Battlements A",
    requirements: [
      {
        name: "A Demon’s Errand",
        type: "achievement",
        complete: true
      },
      {
        name: "The Rift Neutralized",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText:
      "A Demon’s Errand (Party) COMPLETE and The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [22],
    links: [0],
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
    name: "Gloomhaven Battlements B",
    requirements: [
      {
        name: "A Demon’s Errand",
        type: "achievement",
        complete: true
      },
      {
        name: "The Rift Neutralized",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText:
      "A Demon’s Errand (Party) COMPLETE and The Rift Neutralized (Global) INCOMPLETE",
    dependedBy: [22],
    links: [0],
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
    name: "Doom Trench",
    requirements: [
      {
        name: "Water-Breathing",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "Water-Breathing (Global) COMPLETE",
    dependedBy: [31],
    links: [0],
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
    name: "Slave Pens",
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
    name: "Treacherous Divide",
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
    name: "Ancient Defense Network",
    requirements: [
      {
        name: "The Voice’s Command",
        type: "achievement",
        complete: true
      },
      {
        name: "The Voice’s Treasure",
        type: "achievement",
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
    code: "F-13",
    name: "Timeworn Tomb",
    requirements: [
      {
        name: "The Voice’s Command",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "The Voice’s Command (Party) COMPLETE",
    dependedBy: [40],
    links: [40],
    produce: null,
    partyAchievement: "The Voice Freed",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/41.png"
  },
  {
    id: 42,
    code: "C-5",
    name: "The Scepter and the Voice",
    requirements: [
      {
        name: "The Scepter and the Voice",
        type: "achievement",
        complete: true
      },
      {
        name: "The Voice Freed",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText:
      "The Scepter and the Voice (Party) COMPLETE and The Voice Freed (Global) INCOMPLETE",
    dependedBy: [30],
    links: null,
    produce: null,
    partyAchievement: "The Voice Silenced",
    excludeAchievement: "The Voice’s Command",
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/42.png"
  },
  {
    id: 43,
    code: "D-4",
    name: "Drake Nest",
    requirements: [
      {
        name: "The Power of Enhancement",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "The Power of Enhancement (Global) COMPLETE",
    dependedBy: [14, 18, 31],
    links: null,
    produce: null,
    partyAchievement: "Water-Breathing",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/43.png"
  },
  {
    id: 44,
    code: "F-3",
    name: "Tribal Assault",
    requirements: [
      {
        name: "Redthorn’s Aid",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "Redthorn’s Aid (Party) COMPLETE",
    dependedBy: [38],
    links: [38],
    produce: null,
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/44.png"
  },
  {
    id: 45,
    code: "M-9",
    name: "Rebel Swamp",
    requirements: [
      {
        name: "City Rule: Demonic",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "City Rule: Demonic (Global) COMPLETE",
    dependedBy: [35],
    links: null,
    produce: [49, 50],
    partyAchievement: null,
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/45.png"
  },
  {
    id: 46,
    code: "A-11",
    name: "Nightmare Peak",
    requirements: [
      {
        name: "Across the Divide",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "Across the Divide (Party) COMPLETE",
    dependedBy: [39],
    links: [39],
    produce: [51],
    partyAchievement: "End of Corruption1",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/46.png"
  },
  {
    id: 47,
    code: "H-18",
    name: "Lair of the Unseeing Eye",
    requirements: [
      {
        name: "Through the Trench",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "Through the Trench (Party) COMPLETE",
    dependedBy: [37],
    links: [0],
    produce: [51],
    partyAchievement: "End of Corruption2",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/47.png"
  },
  {
    id: 48,
    code: "E-1",
    name: "Shadow Weald",
    requirements: [
      {
        name: "Redthorn’s Aid",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "Redthorn’s Aid (Party) COMPLETE",
    dependedBy: [38],
    links: null,
    produce: [51],
    partyAchievement: "End of Corruption3",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/48.png"
  },
  {
    id: 49,
    code: "N-7",
    name: "Rebel’s Stand",
    requirements: [
      {
        name: "City Rule: Demonic",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "City Rule: Demonic (Global) COMPLETE",
    dependedBy: [45],
    links: null,
    produce: null,
    partyAchievement: "Annihilation of Order",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/49.png"
  },
  {
    id: 50,
    code: "C-17",
    name: "Ghost Fortress",
    requirements: [
      {
        name: "City Rule: Demonic",
        type: "achievement",
        complete: true
      },
      {
        name: "Annihilation of Order",
        type: "achievement",
        complete: false
      }
    ],
    requirementsText:
      "City Rule: Demonic (Global) COMPLETE and Annihilation of Order (Global) INCOMPLETE",
    dependedBy: [45],
    links: null,
    produce: null,
    partyAchievement: "City Rule: Militaristic",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/50.png"
  },
  {
    id: 51,
    code: "A-15",
    name: "The Void",
    requirements: [
      {
        name: "End of Corruption1",
        type: "achievement",
        complete: true
      },
      {
        name: "End of Corruption2",
        type: "achievement",
        complete: true
      },
      {
        name: "End of Corruption3",
        type: "achievement",
        complete: true
      }
    ],
    requirementsText: "End of Corruption (Global) x3 COMPLETE",
    dependedBy: [46, 47, 48],
    links: [0],
    produce: null,
    partyAchievement: "End of Gloom",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/51.png"
  },
  {
    id: 52,
    code: "D-14",
    name: "Noxious Cellar",
    requirements: false,
    requirementsText: "“Seeker of Xorn” personal quest",
    dependedBy: null,
    links: [0],
    produce: [53],
    partyAchievement: null,
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/52.png"
  },
  {
    id: 53,
    code: "F-11",
    name: "Crypt Basement",
    requirements: [
      {
        name: "Noxious Cellar",
        type: "scenario",
        complete: true
      }
    ],
    requirementsText: "“Seeker of Xorn” personal quest",
    dependedBy: [52],
    links: null,
    produce: [54],
    partyAchievement: "Staff of Xorn",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/53.png"
  },
  {
    id: 54,
    code: "D-8",
    name: "Palace of Ice",
    requirements: [
      {
        name: "Crypt Basement",
        type: "scenario",
        complete: true
      },
      {
        name: "Staff of Xorn",
        type: "personalQuest",
        complete: true
      }
    ],
    requirementsText:
      "“Seeker of Xorn” personal quest, “Staff of Xorn” item equipped",
    dependedBy: [53],
    links: null,
    produce: null,
    partyAchievement: "Envelope Seeker of Xorn",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/54.png"
  },
  {
    id: 55,
    code: "G-5",
    name: "Foggy Thicket",
    requirements: null,
    requirementsText: "“Take Back the Trees” personal quest",
    dependedBy: null,
    links: [56],
    produce: [56],
    partyAchievement: null,
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/55.png"
  },
  {
    id: 56,
    code: "G-4",
    name: "Bandit’s Wood",
    requirements: null,
    requirementsText: "“Take Back the Trees” personal quest",
    dependedBy: [55],
    links: [55],
    produce: null,
    partyAchievement: "Envelope Take Back the Trees",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/56.png"
  },
  {
    id: 57,
    code: "D-14",
    name: "Investigation",
    requirements: null,
    requirementsText: "“Vengeance” personal quest",
    dependedBy: null,
    links: [0],
    produce: [58],
    partyAchievement: null,
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/57.png"
  },
  {
    id: 58,
    code: "E-15",
    name: "Bloody Shack",
    requirements: null,
    requirementsText: "“Vengeance” personal quest",
    dependedBy: [57],
    links: [0],
    produce: null,
    partyAchievement: "Envelope X",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/58.png"
  },
  {
    id: 59,
    code: "F-1",
    name: "Forgotten Grove",
    requirements: null,
    requirementsText: "“Finding the Cure” personal quest",
    dependedBy: null,
    links: null,
    produce: [60],
    partyAchievement: null,
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/59.png"
  },
  {
    id: 60,
    code: "B-15",
    name: "Alchemy Lab",
    requirements: null,
    requirementsText: "“Finding the Cure” personal quest",
    dependedBy: [59],
    links: [0],
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/60.png"
  },
  {
    id: 61,
    code: "aaa-1",
    name: "fading lighthouse",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/61.png"
  },
  {
    id: 62,
    code: "aaa-1",
    name: "pit of souls",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "personalQuest",
    mapPosition: ["300%", "400%"],
    image: "world-map/62.png"
  },
  {
    id: 63,
    code: "aaa-1",
    name: "magma pit",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/63.png"
  },
  {
    id: 64,
    code: "aaa-1",
    name: "underwater lagoon",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/64.png"
  },
  {
    id: 65,
    code: "aaa-1",
    name: "sulfur mine",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/65.png"
  },
  {
    id: 66,
    code: "aaa-1",
    name: "clockwork cove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/66.png"
  },
  {
    id: 67,
    code: "aaa-1",
    name: "arcane library",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/67.png"
  },
  {
    id: 68,
    code: "aaa-1",
    name: "toxic moor",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/68.png"
  },
  {
    id: 69,
    code: "aaa-1",
    name: "well of the unfortunate",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/69.png"
  },
  {
    id: 70,
    code: "aaa-1",
    name: "chained isle",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/70.png"
  },
  {
    id: 71,
    code: "aaa-1",
    name: "windswept highlands",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/71.png"
  },
  {
    id: 72,
    code: "aaa-1",
    name: "oozing grove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/72.png"
  },
  {
    id: 73,
    code: "aaa-1",
    name: "rockslide ridge",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/73.png"
  },
  {
    id: 74,
    code: "aaa-1",
    name: "merchant ship",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/74.png"
  },
  {
    id: 75,
    code: "aaa-1",
    name: "overgrown graveyard",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/75.png"
  },
  {
    id: 76,
    code: "aaa-1",
    name: "harrower hive",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/76.png"
  },
  {
    id: 77,
    code: "aaa-1",
    name: "vault of secrets",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/77.png"
  },
  {
    id: 78,
    code: "aaa-1",
    name: "sacrifice pit",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/78.png"
  },
  {
    id: 79,
    code: "aaa-1",
    name: "lost temple",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/79.png"
  },
  {
    id: 80,
    code: "aaa-1",
    name: "vigil keep",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/80.png"
  },
  {
    id: 81,
    code: "aaa-1",
    name: "temple of the eclipse",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/81.png"
  },
  {
    id: 82,
    code: "aaa-1",
    name: "burning mountain",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/82.png"
  },
  {
    id: 83,
    code: "aaa-1",
    name: "shadows within",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/83.png"
  },
  {
    id: 84,
    code: "aaa-1",
    name: "crystalline cave",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/84.png"
  },
  {
    id: 85,
    code: "aaa-1",
    name: "sun temple",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/85.png"
  },
  {
    id: 86,
    code: "aaa-1",
    name: "harried village",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/86.png"
  },
  {
    id: 87,
    code: "aaa-1",
    name: "corrupted cove",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/87.png"
  },
  {
    id: 88,
    code: "aaa-1",
    name: "plane of water",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/88.png"
  },
  {
    id: 89,
    code: "aaa-1",
    name: "syndicate hideout",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/89.png"
  },
  {
    id: 90,
    code: "aaa-1",
    name: "demonic rift",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/90.png"
  },
  {
    id: 91,
    code: "aaa-1",
    name: "wild melee",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/91.png"
  },
  {
    id: 92,
    code: "aaa-1",
    name: "back alley brawl",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/92.png"
  },
  {
    id: 93,
    code: "aaa-1",
    name: "sunken vessel",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/93.png"
  },
  {
    id: 94,
    code: "aaa-1",
    name: "vermling nest",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/94.png"
  },
  {
    id: 95,
    code: "aaa-1",
    name: "payment due",
    requirements: null,
    requirementsText: "None",
    dependedBy: [200],
    links: null,
    produce: [100],
    partyAchievement: "500",
    excludeAchievement: null,
    type: "main",
    mapPosition: ["300%", "400%"],
    image: "world-map/95.png"
  }
];
