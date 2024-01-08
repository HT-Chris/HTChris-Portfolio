const BASE_STATS = [
    [
        'Eirika', '1', 'Lord',
        '16', '4', '8',
        '9', '5', '3',
        '1', '5', '5',
        ' E'
    ],
    [
        'Seth', '1',
        'Paladin', '30',
        '14', '13',
        '12', '13',
        '11', '8',
        '8', '11',
        ' A,  A'
    ],
    [
        'Franz', '1',
        'Cavalier', '20',
        '7', '5',
        '7', '2',
        '6', '1',
        '7', '9',
        ' E,  D'
    ],
    [
        'Gilliam', '4',
        'Knight', '25',
        '9', '6',
        '3', '3',
        '9', '3',
        '4', '14',
        ' C'
    ],
    [
        'Vanessa',
        '1',
        'Pegasus Knight',
        '17',
        '5',
        '7',
        '11',
        '4',
        '6',
        '5',
        '7',
        '5',
        ' D'
    ],
    [
        'Moulder', '3',
        'Priest', '20',
        '4', '6',
        '9', '1',
        '2', '5',
        '5', '9',
        ' C'
    ],
    [
        'Ross', '1',
        'Journeyman', '15',
        '5', '2',
        '3', '8',
        '3', '0',
        '4', '8',
        ' E'
    ],
    [
        'Garcia', '4',
        'Fighter', '28',
        '8', '7',
        '7', '3',
        '5', '1',
        '5', '14',
        ' C'
    ],
    [
        'Neimi', '1', 'Archer',
        '17', '4', '5',
        '6', '4', '3',
        '2', '5', '5',
        ' D'
    ],
    [
        'Colm', '2', 'Thief',
        '18', '4', '4',
        '10', '8', '3',
        '1', '6', '6',
        ' E'
    ],
    [
        'Artur', '2', 'Monk',
        '19', '6', '6',
        '8', '2', '2',
        '6', '5', '6',
        ' E'
    ],
    [
        'Lute', '1', 'Mage',
        '17', '6', '6',
        '7', '8', '3',
        '5', '5', '3',
        ' C'
    ],
    [
        'Natasha', '1',
        'Cleric', '18',
        '2', '4',
        '8', '6',
        '2', '6',
        '5', '4',
        ' D'
    ],
    [
        'Joshua', '5',
        'Myrmidon', '24',
        '8', '13',
        '14', '7',
        '5', '2',
        '5', '8',
        ' C'
    ],
    [
        'Ephraim', '4',
        'Lord', '23',
        '8', '9',
        '11', '8',
        '7', '2',
        '5', '8',
        ' D'
    ],
    [
        'Forde', '6',
        'Cavalier', '24',
        '7', '8',
        '8', '7',
        '8', '2',
        '7', '9',
        ' D,  C'
    ],
    [
        'Kyle', '5',
        'Cavalier', '25',
        '9', '6',
        '7', '6',
        '9', '1',
        '7', '10',
        ' D,  C'
    ],
    [
        'Orson', '3',
        'Paladin', '34',
        '15', '13',
        '11', '4',
        '13', '7',
        '8', '12',
        ' A,  A'
    ],
    [
        'Tana',
        '4',
        'Pegasus Knight',
        '20',
        '7',
        '9',
        '13',
        '8',
        '6',
        '7',
        '7',
        '5',
        ' D'
    ],
    [
        'Amelia', '1',
        'Recruit', '16',
        '4', '3',
        '4', '6',
        '2', '3',
        '4', '6',
        ' E'
    ],
    [
        'Innes', '1', 'Sniper',
        '31', '14', '13',
        '15', '14', '10',
        '9', '6', '9',
        ' A'
    ],
    [
        'Gerik', '10',
        'Mercenary', '32',
        '14', '13',
        '13', '8',
        '10', '4',
        '5', '13',
        ' C'
    ],
    [
        'Tethys', '1', 'Dancer',
        '18', '1', '2',
        '12', '10', '5',
        '4', '5', '5',
        '–'
    ],
    [
        'Marisa', '5',
        'Myrmidon', '23',
        '7', '12',
        '13', '9',
        '4', '3',
        '5', '5',
        ' D'
    ],
    [
        'L’Arachel', '3',
        'Troubadour', '18',
        '6', '6',
        '10', '12',
        '5', '8',
        '6', '5',
        ' D'
    ],
    [
        'Dozla', '1',
        'Berserker', '43',
        '16', '11',
        '9', '4',
        '11', '6',
        '6', '16',
        ' B'
    ],
    [
        'Saleh', '1',
        'Sage', '30',
        '16', '18',
        '14', '11',
        '8', '13',
        '6', '8',
        ' A,  B,  C'
    ],
    [
        'Ewan', '1', 'Pupil',
        '15', '3', '2',
        '5', '5', '0',
        '3', '4', '5',
        ' E'
    ],
    [
        'Cormag', '9',
        'Wyvern Rider', '30',
        '14', '9',
        '10', '4',
        '12', '2',
        '7', '11',
        ' C'
    ],
    [
        'Rennac', '1', 'Rogue',
        '28', '10', '16',
        '17', '5', '9',
        '11', '6', '7',
        ' B'
    ],
    [
        'Duessel', '8',
        'Great Knight', '41',
        '17', '12',
        '12', '8',
        '17', '9',
        '6', '15',
        ' A,  A,  A'
    ],
    [
        'Knoll', '10', 'Shaman',
        '22', '13', '9',
        '8', '0', '2',
        '10', '5', '7',
        ' C'
    ],
    [
        'Myrrh', '1',
        'Manakete', '15',
        '3', '1',
        '5', '3',
        '2', '7',
        '6', '5',
        '–'
    ],
    [
        'Syrene', '1',
        'Falcoknight', '27',
        '12', '13',
        '15', '12',
        '10', '12',
        '8', '7'
    ]
]

const GROWTH_RATES = [
    [
        'Name', 'HP',
        'S/M', 'Skl',
        'Spd', 'Lck',
        'Def', 'Res'
    ],
    [
        'Eirika', '70',
        '40', '60',
        '60', '60',
        '30', '30'
    ],
    [
        'Seth', '90',
        '50', '45',
        '45', '25',
        '40', '30'
    ],
    [
        'Franz', '80',
        '40', '40',
        '50', '40',
        '25', '20'
    ],
    ['Gilliam', '90', '45', '35', '30', '30', '55', '20'],
    ['Moulder', '70', '40', '50', '40', '20', '25', '25'],
    ['Vanessa', '50', '35', '55', '60', '50', '20', '30'],
    [
        'Ross', '70',
        '50', '35',
        '30', '40',
        '25', '20'
    ],
    [
        'Garcia', '80',
        '65', '40',
        '20', '40',
        '25', '15'
    ],
    [
        'Neimi', '55',
        '45', '50',
        '60', '50',
        '15', '35'
    ],
    [
        'Colm', '75',
        '40', '40',
        '65', '45',
        '25', '20'
    ],
    [
        'Artur', '55',
        '50', '50',
        '40', '25',
        '15', '55'
    ],
    [
        'Lute', '45',
        '65', '30',
        '45', '45',
        '15', '40'
    ],
    ['Natasha', '50', '60', '25', '40', '60', '15', '55'],
    [
        'Joshua', '80',
        '35', '55',
        '55', '30',
        '20', '20'
    ],
    ['Ephraim', '80', '55', '55', '45', '50', '35', '25'],
    [
        'Forde', '85',
        '40', '50',
        '45', '35',
        '20', '25'
    ],
    [
        'Kyle', '90',
        '50', '40',
        '40', '20',
        '25', '20'
    ],
    [
        'Tana', '65',
        '45', '40',
        '65', '60',
        '20', '25'
    ],
    [
        'Amelia', '60',
        '35', '40',
        '40', '50',
        '30', '15'
    ],
    [
        'Innes', '75',
        '40', '40',
        '45', '45',
        '20', '25'
    ],
    ['Character', 'HP', 'S/M ', 'Skl', 'Spd', 'Lck', 'Def', 'Res'],
    [
        'Gerik', '90',
        '45', '40',
        '30', '30',
        '35', '25'
    ],
    [
        'Tethys', '85',
        '5', '10',
        '70', '80',
        '30', '75'
    ],
    [
        'Marisa', '75',
        '30', '55',
        '60', '50',
        '15', '25'
    ],
    ['L’Arachel', '45', '50', '45', '45', '65', '15', '50'],
    [
        'Dozla', '85',
        '50', '35',
        '40', '30',
        '30', '25'
    ],
    [
        'Saleh', '50',
        '30', '25',
        '40', '40',
        '30', '35'
    ],
    [
        'Ewan', '50',
        '45', '40',
        '35', '50',
        '15', '40'
    ],
    [
        'Cormag', '85',
        '55', '40',
        '45', '35',
        '25', '15'
    ],
    [
        'Rennac', '65',
        '25', '45',
        '60', '25',
        '25', '30'
    ],
    ['Duessel', '85', '55', '40', '30', '20', '45', '30'],
    [
        'Knoll', '70',
        '50', '40',
        '35', '20',
        '10', '45'
    ],
    [
        'Myrrh', '130',
        '90', '85',
        '65', '30',
        '150', '30'
    ],
    [
        'Syrene', '70',
        '40', '50',
        '60', '30',
        '20', '50'
    ],
    ['Caellach', '85', '50', '45', '45', '20', '30', '20'],
    [
        'Orson', '80',
        '55', '45',
        '40', '25',
        '45', '30'
    ],
    [
        'Riev', '75',
        '45', '50',
        '40', '15',
        '20', '45'
    ],
    ['Ismaire', '75', '30', '60', '55', '30', '20', '25'],
    [
        'Selena', '85',
        '40', '55',
        '40', '25',
        '20', '30'
    ],
    [
        'Glen', '85',
        '45', '50',
        '45', '20',
        '35', '40'
    ],
    [
        'Hayden', '70',
        '40', '45',
        '45', '40',
        '25', '25'
    ],
    [
        'Valter', '80',
        '40', '55',
        '50', '15',
        '20', '20'
    ],
    [
        'Fado', '85',
        '55', '40',
        '30', '25',
        '45', '25'
    ],
    [
        'Lyon', '85',
        '50', '55',
        '55', '30',
        '45', '55'
    ],
    ['Knoll Phantom', '0', '50', '50', '40', '55', '0', '0'],
    ['Ewan Phantom', '0', '70', '40', '20', '40', '0', '0'],
    ['Lyon Phantom', '0', '60', '45', '30', '60', '0', '0'],
]


const MAX_STATS = [
    [
        'Class', 'HP',
        'S/M', 'Skl',
        'Spd', 'Lck',
        'Def', 'Res',
        'Mov', 'Con'
    ],
    [
        'Non-promoted (foot)',
        '60',
        '20',
        '20',
        '20',
        '30',
        '20',
        '20',
        '15',
        '20'
    ],
    [
        'Non-promoted (mounted)',
        '60',
        '20',
        '20',
        '20',
        '30',
        '20',
        '20',
        '15',
        '25'
    ],
    [
        'Great Lord (Ephraim)',
        '60',
        '27',
        '26',
        '24',
        '30',
        '23',
        '23',
        '15',
        '25'
    ],
    [
        'Great Lord (Eirika)',
        '60',
        '24',
        '29',
        '30',
        '30',
        '22',
        '25',
        '15',
        '25'
    ],
    [
        'Dancer', '60',
        '10', '10',
        '30', '30',
        '24', '26',
        '15', '20'
    ],
    [
        'Paladin (M)',
        '60',
        '25',
        '26',
        '24',
        '30',
        '25',
        '25',
        '15',
        '25'
    ],
    [
        'Paladin (F)',
        '60',
        '23',
        '27',
        '25',
        '30',
        '24',
        '26',
        '15',
        '25'
    ],
    [
        'Great Knight (M)',
        '60',
        '28',
        '24',
        '24',
        '30',
        '29',
        '25',
        '15',
        '25'
    ],
    [
        'Great Knight (F)',
        '60',
        '26',
        '26',
        '25',
        '30',
        '28',
        '26',
        '15',
        '25'
    ],
    [
        'General (M)',
        '60',
        '29',
        '27',
        '24',
        '30',
        '30',
        '25',
        '15',
        '25'
    ],
    [
        'General (F)',
        '60',
        '27',
        '28',
        '25',
        '30',
        '29',
        '26',
        '15',
        '25'
    ],
    [
        'Hero (M)', '60',
        '25', '30',
        '26', '30',
        '25', '22',
        '15', '25'
    ],
    [
        'Hero (F)', '60',
        '24', '30',
        '26', '30',
        '24', '24',
        '15', '25'
    ],
    [
        'Swordmaster (M)',
        '60',
        '24',
        '29',
        '30',
        '30',
        '22',
        '23',
        '15',
        '20'
    ],
    [
        'Swordmaster (F)',
        '60',
        '22',
        '29',
        '30',
        '30',
        '22',
        '25',
        '15',
        '20'
    ],
    [
        'Assassin (M)',
        '60',
        '20',
        '30',
        '30',
        '30',
        '20',
        '20',
        '15',
        '20'
    ],
    [
        'Assassin (F)',
        '60',
        '20',
        '30',
        '30',
        '30',
        '20',
        '20',
        '15',
        '20'
    ],
    [
        'Rogue', '60',
        '20', '30',
        '30', '30',
        '20', '20',
        '15', '20'
    ],
    [
        'Sniper (M)',
        '60',
        '25',
        '30',
        '28',
        '30',
        '25',
        '23',
        '15',
        '20'
    ],
    [
        'Sniper (F)',
        '60',
        '24',
        '30',
        '29',
        '30',
        '24',
        '24',
        '15',
        '20'
    ],
    [
        'Class', 'HP',
        'S/M', 'Skl',
        'Spd', 'Lck',
        'Def', 'Res',
        'Mov', 'Con'
    ],
    [
        'Ranger (M)',
        '60',
        '25',
        '28',
        '30',
        '30',
        '24',
        '23',
        '15',
        '25'
    ],
    [
        'Ranger (F)',
        '60',
        '23',
        '28',
        '30',
        '30',
        '22',
        '25',
        '15',
        '25'
    ],
    [
        'Wyvern Lord (M)',
        '60',
        '27',
        '25',
        '23',
        '30',
        '28',
        '22',
        '15',
        '25'
    ],
    [
        'Wyvern Lord (F)',
        '60',
        '25',
        '26',
        '24',
        '30',
        '27',
        '23',
        '15',
        '25'
    ],
    [
        'Wyvern Knight (M)',
        '60',
        '25',
        '26',
        '28',
        '30',
        '24',
        '22',
        '15',
        '25'
    ],
    [
        'Wyvern Knight (F)',
        '60',
        '24',
        '27',
        '29',
        '30',
        '23',
        '23',
        '15',
        '25'
    ],
    [
        'Sage (M)', '60',
        '28', '30',
        '26', '30',
        '21', '25',
        '15', '20'
    ],
    [
        'Sage (F)', '60',
        '30', '28',
        '26', '30',
        '21', '25',
        '15', '20'
    ],
    [
        'Mage Knight (M)',
        '60',
        '24',
        '26',
        '25',
        '30',
        '24',
        '25',
        '15',
        '25'
    ],
    [
        'Mage Knight (F)',
        '60',
        '25',
        '24',
        '25',
        '30',
        '24',
        '28',
        '15',
        '25'
    ],
    [
        'Bishop (M)',
        '60',
        '25',
        '26',
        '24',
        '30',
        '22',
        '30',
        '15',
        '20'
    ],
    [
        'Bishop (F)',
        '60',
        '25',
        '25',
        '26',
        '30',
        '21',
        '30',
        '15',
        '20'
    ],
    [
        'Druid (M)', '60',
        '29', '26',
        '26', '30',
        '21', '28',
        '15', '20'
    ],
    [
        'Druid (F)', '60',
        '29', '26',
        '26', '30',
        '20', '29',
        '15', '20'
    ],
    [
        'Summoner (M)',
        '60',
        '27',
        '27',
        '26',
        '30',
        '20',
        '28',
        '15',
        '20'
    ],
    [
        'Summoner (F)',
        '60',
        '27',
        '27',
        '26',
        '30',
        '20',
        '28',
        '15',
        '20'
    ],
    [
        'Journeyman (3)',
        '60',
        '26',
        '29',
        '28',
        '30',
        '23',
        '23',
        '15',
        '20'
    ],
    [
        'Recruit (3)',
        '60',
        '23',
        '30',
        '29',
        '30',
        '22',
        '26',
        '15',
        '20'
    ],
    [
        'Pupil (3)', '60',
        '29', '28',
        '27', '30',
        '21', '26',
        '15', '20'
    ],
    [
        'Manakete (M)',
        '60',
        '20',
        '20',
        '20',
        '30',
        '20',
        '20',
        '15',
        '25'
    ],
    [
        'Class', 'HP',
        'S/M', 'Skl',
        'Spd', 'Lck',
        'Def', 'Res',
        'Mov', 'Con'
    ],
    [
        'Manakete (F)',
        '60',
        '20',
        '20',
        '20',
        '30',
        '20',
        '20',
        '15',
        '20'
    ],
    [
        'Warrior', '60',
        '30', '28',
        '26', '30',
        '26', '22',
        '15', '25'
    ],
    [
        'Berserker', '60',
        '30', '29',
        '28', '30',
        '23', '21',
        '15', '25'
    ],
    [
        'Falcoknight',
        '60',
        '23',
        '25',
        '28',
        '30',
        '23',
        '26',
        '15',
        '25'
    ],
    [
        'Valkyrie', '60',
        '25', '24',
        '25', '30',
        '24', '28',
        '15', '25'
    ],
    [
        'Necromancer',
        '60',
        '30',
        '25',
        '25',
        '30',
        '30',
        '30',
        '15',
        '25'
    ],
    [
        'Fleet', '60',
        '20', '20',
        '20', '30',
        '30', '20',
        '15', '25'
    ],
    [
        'Phantom', '60',
        '20', '20',
        '20', '30',
        '0', '0',
        '15', '20'
    ],
    [
        'Entombed', '60',
        '25', '22',
        '21', '30',
        '24', '22',
        '15', '25'
    ],
    [
        'Wight (Sword/Lance)',
        '60',
        '24',
        '28',
        '26',
        '30',
        '22',
        '23',
        '15',
        '25'
    ],
    [
        'Wight (Bow)',
        '60',
        '25',
        '30',
        '28',
        '30',
        '25',
        '23',
        '15',
        '20'
    ],
    [
        'Bael', '60', '30',
        '28', '26', '30',
        '26', '22', '15',
        '25'
    ],
    [
        'Elder Bael',
        '60',
        '30',
        '28',
        '26',
        '30',
        '26',
        '22',
        '15',
        '25'
    ],
    [
        'Cyclops', '60',
        '29', '29',
        '28', '30',
        '30', '25',
        '15', '25'
    ],
    [
        'Gwyllgi', '60',
        '24', '29',
        '30', '30',
        '22', '23',
        '15', '20'
    ],
    [
        'Maelduin', '60',
        '25', '26',
        '24', '30',
        '25', '25',
        '15', '25'
    ],
    [
        'Arch Mogall',
        '60',
        '29',
        '26',
        '26',
        '30',
        '20',
        '29',
        '15',
        '20'
    ],
    [
        'Gorgon', '60',
        '29', '26',
        '26', '30',
        '21', '28',
        '15', '25'
    ],
    [
        'Gorgon Egg',
        '60',
        '30',
        '30',
        '30',
        '30',
        '30',
        '30',
        '15',
        '30'
    ],
    [
        'Deathgoyle',
        '60',
        '27',
        '25',
        '23',
        '30',
        '28',
        '22',
        '15',
        '25'
    ],
    [
        'Draco Zombie',
        '60',
        '50',
        '50',
        '50',
        '30',
        '50',
        '50',
        '15',
        '25'
    ],
    [
        'Class', 'HP',
        'S/M', 'Skl',
        'Spd', 'Lck',
        'Def', 'Res',
        'Mov', 'Con'
    ],
    ['Demon King', '60', '50', '50', '50', '30', '50', '50', '15', '25'],

]

export const classTree = [{
        baseClass: 'Lord',
        promoteOne: 'Great Lord'
    },
    {
        baseClass: 'Myrmidon',
        promoteOne: 'Swordmaster',
        promoteTwo: 'Assassin'
    },
    {
        baseClass: 'Thief',
        promoteOne: 'Assassin',
        promoteTwo: 'Rouge'
    },
    {
        baseClass: 'Journeyman',
        promoteOne: 'Pirate',
        promoteTwo: 'Fighter'
    },
    {
        baseClass: 'Pirate',
        promoteOne: 'Berserker',
        promoteTwo: 'Warrior'
    },
    {
        baseClass: 'Fighter',
        promoteOne: 'Warrior',
        promoteTwo: 'Hero'
    },
    {
        baseClass: 'Mercenary',
        promoteOne: 'Hero',
        promoteTwo: 'Ranger'
    },
    {
        baseClass: 'Archer',
        promoteOne: 'Ranger',
        promoteTwo: 'Sniper'
    },
    {
        baseClass: 'Pupil',
        promoteOne: 'Mage',
        promoteTwo: 'Shaman'
    },
    {
        baseClass: 'Mage',
        promoteOne: 'Sage',
        promoteTwo: 'Mage Knight'
    },
    {
        baseClass: 'Shaman',
        promoteOne: 'Druid',
        promoteTwo: 'Summoner'
    },
    {
        baseClass: 'Monk',
        promoteOne: 'Sage',
        promoteTwo: 'Bishop'
    },
    {
        baseClass: 'Priest',
        promoteOne: 'Sage',
        promoteTwo: 'Bishop'
    },
    {
        baseClass: 'Troubadour',
        promoteOne: 'Mage Knight',
        promoteTwo: 'Valkyrie'
    },
    {
        baseClass: 'Cleric',
        promoteOne: 'Bishop',
        promoteTwo: 'Valkyrie'
    },
    {
        baseClass: 'Recruit',
        promoteOne: 'Knight',
        promoteTwo: 'Cavalier'
    },
    {
        baseClass: 'Knight',
        promoteOne: 'General',
        promoteTwo: 'Great Knight'
    },
    {
        baseClass: 'Cavalier',
        promoteOne: 'Great Knight',
        promoteTwo: 'Paladin'
    },
    {
        baseClass: 'Pegasus Knight',
        promoteOne: 'Falcoknight',
        promoteTwo: 'Wyvern Knight'
    },
    {
        baseClass: 'Wyvern Rider',
        promoteOne: 'Wyvern Knight',
        promoteTwo: 'Wyvern Lord'
    },

]


const promotionGains = [
    [
        'Class', 'Promotion',
        'HP', 'S/M',
        'Skl', 'Spd',
        'Def', 'Res',
        'Con', 'Mov',
        'Weapon Ranks '
    ],
    [
        'Lord (Eirika)',
        'Great Lord (Eirika)',
        '+4',
        '+2',
        '+2',
        '+1',
        '+3',
        '+5',
        '+2',
        '+2',
        ' +70'
    ],
    [
        'Lord (Ephraim)',
        'Great Lord (Ephraim)',
        '+4',
        '+2',
        '+3',
        '+2',
        '+2',
        '+5',
        '+2',
        '+2',
        ' +40'
    ],
    [
        'Recruit', 'Cavalier (F)',
        '+1', '+0',
        '+2', '+2',
        '+0', '+2',
        '+3', '+3',
        ' E,  +30'
    ],
    [
        'Recruit', 'Knight (F)',
        '+2', '+1',
        '+1', '+1',
        '+2', '+0',
        '+4', '+0',
        ' +30'
    ],
    [
        'Recruit', 'Recruit (2)',
        '+2', '+1',
        '+1', '+1',
        '+2', '+1',
        '+0', '+1',
        ' +30'
    ],
    [
        'Cavalier (M)', 'Paladin (M)',
        '+2', '+1',
        '+1', '+1',
        '+2', '+1',
        '+2', '+1',
        ' +30'
    ],
    [
        'Cavalier (F)', 'Paladin (F)',
        '+1', '+1',
        '+1', '+2',
        '+1', '+2',
        '+0', '+1',
        ' +30'
    ],
    [
        'Cavalier (M)',
        'Great Knight (M)',
        '+3',
        '+2',
        '+1',
        '+2',
        '+2',
        '+1',
        '+4',
        '-1',
        ' D'
    ],
    [
        'Cavalier (F)',
        'Great Knight (F)',
        '+3',
        '+1',
        '+1',
        '+2',
        '+2',
        '+2',
        '+1',
        '-1',
        ' D'
    ],
    [
        'Knight (M)', 'General (M)',
        '+4', '+2',
        '+2', '+3',
        '+2', '+3',
        '+2', '+1',
        ' E,  +40,  E'
    ],
    [
        'Knight (F)', 'General (F)',
        '+3', '+2',
        '+3', '+2',
        '+3', '+3',
        '+1', '+1',
        ' E,  +40,  E'
    ],
    [
        'Knight (M)',
        'Great Knight (M)',
        '+3',
        '+2',
        '+1',
        '+2',
        '+2',
        '+1',
        '+0',
        '+2',
        ' E,  D'
    ],
    [
        'Knight (F)',
        'Great Knight (F)',
        '+3',
        '+1',
        '+1',
        '+2',
        '+2',
        '+2',
        '+0',
        '+2',
        ' E,  D'
    ],
    [
        'Recruit (2)', 'Paladin (F)',
        '+1', '+1',
        '+1', '+2',
        '+1', '+2',
        '+3', '+3',
        ' D'
    ],
    [
        'Recruit (2)', 'Recruit (3)',
        '+2', '+2',
        '+1', '+1',
        '+2', '+1',
        '+0', '+1',
        ' +40'
    ],
    [
        'Thief', 'Assassin',
        '+3', '+1',
        '+0', '+0',
        '+2', '+2',
        '+2', '+0',
        ' +30'
    ],
    [
        'Thief', 'Rogue',
        '+2', '+1',
        '+1', '+0',
        '+2', '+2',
        '+1', '+0',
        '–'
    ],
    [
        'Mercenary', 'Hero',
        '+4', '+1',
        '+2', '+2',
        '+2', '+2',
        '+2', '+1',
        ' +40,  D'
    ],
    [
        'Mercenary', 'Ranger (M)',
        '+3', '+2',
        '+1', '+1',
        '+3', '+3',
        '+0', '+2',
        ' D'
    ],
    [
        'Myrmidon (M)',
        'Swordmaster (M)',
        '+5',
        '+2',
        '+0',
        '+0',
        '+2',
        '+1',
        '+1',
        '+1',
        ' +40'
    ],
    [
        'Class', 'Promotion',
        'HP', 'S/M',
        'Skl', 'Spd',
        'Def', 'Res',
        'Con', 'Mov',
        'Weapon Ranks'
    ],
    [
        'Myrmidon (F)',
        'Swordmaster (F)',
        '+4',
        '+2',
        '+1',
        '+0',
        '+2',
        '+1',
        '+2',
        '+1',
        ' +40'
    ],
    [
        'Myrmidon (M)', 'Assassin (M)',
        '+3', '+1',
        '+0', '+0',
        '+2', '+2',
        '+0', '+1',
        '–'
    ],
    [
        'Myrmidon (F)', 'Assassin (F)',
        '+2', '+1',
        '+1', '+1',
        '+2', '+1',
        '+1', '+1',
        '–'
    ],
    [
        'Archer (M)', 'Sniper (M)',
        '+3', '+1',
        '+2', '+2',
        '+2', '+3',
        '+1', '+1',
        ' +40'
    ],
    [
        'Archer (F)', 'Sniper (F)',
        '+4', '+3',
        '+1', '+1',
        '+2', '+2',
        '+1', '+1',
        ' +40'
    ],
    [
        'Archer (M)', 'Ranger (M)',
        '+3', '+2',
        '+1', '+1',
        '+3', '+3',
        '+2', '+2',
        ' D'
    ],
    [
        'Archer (F)', 'Ranger (F)',
        '+2', '+2',
        '+2', '+1',
        '+3', '+3',
        '+3', '+2',
        ' D'
    ],
    [
        'Wyvern Rider', 'Wyvern Lord',
        '+4', '+2',
        '+2', '+0',
        '+2', '+0',
        '+1', '+1',
        ' D,  +40'
    ],
    [
        'Wyvern Rider',
        'Wyvern Knight (M)',
        '+3',
        '+1',
        '+2',
        '+3',
        '+0',
        '+1',
        '+0',
        '+1',
        ' +40'
    ],
    [
        'Pupil', 'Mage (M)',
        '+1', '+0',
        '+1', '+2',
        '+1', '+2',
        '+1', '+1',
        ' +30'
    ],
    [
        'Pupil', 'Shaman (M)',
        '+1', '+2',
        '+0', '+1',
        '+1', '+2',
        '+2', '+1',
        ' = 0,  D'
    ],
    [
        'Pupil', 'Pupil (2)',
        '+2', '+1',
        '+1', '+0',
        '+2', '+2',
        '+0', '+1',
        ' +30'
    ],
    [
        'Mage (M)', 'Sage (M)',
        '+4', '+1',
        '+0', '+0',
        '+3', '+3',
        '+1', '+1',
        ' D,  +40,  D'
    ],
    [
        'Mage (F)', 'Sage (F)',
        '+3', '+1',
        '+1', '+0',
        '+3', '+3',
        '+1', '+1',
        ' D,  +40,  D'
    ],
    [
        'Mage (M)',
        'Mage Knight (M)',
        '+4',
        '+2',
        '+0',
        '+0',
        '+2',
        '+2',
        '+2',
        '+2',
        ' D,  +40'
    ],
    [
        'Mage (F)',
        'Mage Knight (F)',
        '+3',
        '+2',
        '+1',
        '+0',
        '+2',
        '+2',
        '+3',
        '+2',
        ' D,  +40'
    ],
    [
        'Shaman', 'Druid',
        '+4', '+0',
        '+0', '+3',
        '+2', '+2',
        '+1', '+1',
        ' E,  D  +40'
    ],
    [
        'Shaman', 'Summoner',
        '+3', '+0',
        '+1', '+3',
        '+1', '+3',
        '+1', '+1',
        ' E,  +40'
    ],
    [
        'Pupil (2)', 'Sage (M)',
        '+4', '+1',
        '+0', '+0',
        '+3', '+3',
        '+2', '+1',
        ' D,  +40,  D'
    ],
    [
        'Pupil (2)', 'Pupil (3)',
        '+4', '+2',
        '+0', '+1',
        '+3', '+3',
        '+0', '+1',
        ' +40,  D,  E'
    ],
    [
        'Class', 'Promotion',
        'HP', 'S/M',
        'Skl', 'Spd',
        'Def', 'Res',
        'Con', 'Mov',
        'Weapon Ranks'
    ],
    [
        'Priest', 'Bishop (M)',
        '+3', '+2',
        '+1', '+0',
        '+3', '+2',
        '+2', '+1',
        ' +40,  D'
    ],
    [
        'Priest', 'Sage (M)',
        '+4', '+1',
        '+0', '+0',
        '+3', '+3',
        '+2', '+1',
        ' C,  D'
    ],
    [
        'Monk', 'Bishop (M)',
        '+3', '+2',
        '+1', '+0',
        '+3', '+2',
        '+1', '+1',
        ' C,  +30'
    ],
    [
        'Monk',
        'Sage (M)',
        '+4',
        '+1',
        '+0',
        '+0',
        '+3',
        '+3',
        '+1',
        '+1',
        ' D,  C,   +30'
    ],
    [
        'Cleric', 'Bishop (F)',
        '+3', '+1',
        '+2', '+1',
        '+2', '+2',
        '+1', '+1',
        ' + 40,  D'
    ],
    [
        'Cleric', 'Valkyrie',
        '+3', '+2',
        '+1', '+0',
        '+2', '+3',
        '+2', '+2',
        ' D'
    ],
    [
        'Journeyman', 'Fighter',
        '+2', '+2',
        '+1', '+0',
        '+0', '+1',
        '+3', '+1',
        ' +30'
    ],
    [
        'Journeyman', 'Pirate',
        '+2', '+2',
        '+0', '+1',
        '+1', '+0',
        '+2', '+1',
        ' +30'
    ],
    [
        'Journeyman',
        'Journeyman (2)',
        '+2',
        '+0',
        '+2',
        '+0',
        '+2',
        '+2',
        '+0',
        '+1',
        ' +30'
    ],
    [
        'Fighter', 'Warrior',
        '+3', '+1',
        '+2', '+0',
        '+3', '+3',
        '+2', '+1',
        ' +40,  E'
    ],
    [
        'Fighter', 'Hero',
        '+4', '+1',
        '+2', '+2',
        '+2', '+2',
        '+0', '+1',
        ' C'
    ],
    [
        'Pirate', 'Berserker',
        '+4', '+1',
        '+1', '+1',
        '+2', '+2',
        '+3', '+1',
        ' +40'
    ],
    [
        'Pirate', 'Warrior',
        '+3', '+1',
        '+2', '+0',
        '+3', '+3',
        '+3', '+1',
        ' +40,  E'
    ],
    [
        'Journeyman (2)',
        'Hero',
        '+4',
        '+1',
        '+2',
        '+2',
        '+2',
        '+2',
        '+3',
        '+1',
        ' C'
    ],
    [
        'Journeyman (2)', 'Journeyman (3)',
        '+4', '+1',
        '+2', '+2',
        '+2', '+2',
        '+0', '+1',
        ' +40'
    ],
    [
        'Pegasus Knight', 'Falcoknight',
        '+5', '+2',
        '+0', '+2',
        '+2', '+2',
        '+1', '+1',
        ' E,  +40'
    ],
    [
        'Pegasus Knight',
        'Wyvern Knight (F)',
        '+3',
        '+2',
        '+1',
        '+2',
        '+1',
        '+1',
        '+4',
        '+1',
        ' +40'
    ],
    [
        'Troubadour', 'Valkyrie',
        '+3', '+2',
        '+1', '+0',
        '+2', '+3',
        '+1', '+1',
        ' D'
    ],
    [
        'Troubadour',
        'Mage Knight (F)',
        '+3',
        '+2',
        '+1',
        '+0',
        '+2',
        '+2',
        '+1',
        '+1'
    ],

]

let base = []
let growths = []
let max = []
let charaData = []
let gains = []
export const magicUser = ['Moulder', 'Artur', 'Lute', 'Natasha', "L'Arachel", 'Saleh', 'Ewan', 'Knoll']

function baseFunction() {

    for (let i = 0; i < BASE_STATS.length; i++) {
        let chara = {
            name: BASE_STATS[i][0],
            startingLv: BASE_STATS[i][1],
            class: BASE_STATS[i][2],
            hp: BASE_STATS[i][3],
            atk: BASE_STATS[i][4],
            skl: BASE_STATS[i][5],
            spd: BASE_STATS[i][6],
            lck: BASE_STATS[i][7],
            def: BASE_STATS[i][8],
            res: BASE_STATS[i][9],
            mov: BASE_STATS[i][10],
            con: BASE_STATS[i][11],
        }
        base.push(chara)
    }
}

function growthsFunction() {

    for (let i = 0; i < GROWTH_RATES.length; i++) {
        let chara = {
            name: GROWTH_RATES[i][0],
            hp: GROWTH_RATES[i][1],
            atk: GROWTH_RATES[i][2],
            skl: GROWTH_RATES[i][3],
            spd: GROWTH_RATES[i][4],
            lck: GROWTH_RATES[i][5],
            def: GROWTH_RATES[i][6],
            res: GROWTH_RATES[i][7]
        }
        growths.push(chara)
    }
}

function maxFunction() {
    for (let i = 0; i < MAX_STATS.length; i++) {
        let chara = {
            class: MAX_STATS[i][0],
            hp: MAX_STATS[i][1],
            atk: MAX_STATS[i][2],
            skl: MAX_STATS[i][3],
            spd: MAX_STATS[i][4],
            lck: MAX_STATS[i][5],
            def: MAX_STATS[i][6],
            res: MAX_STATS[i][7],
            mov: MAX_STATS[i][8],
            con: MAX_STATS[i][9],
        }

        max.push(chara)

    }
}

function gainsFunction() {
    for (let i = 0; i < promotionGains.length; i++) {
        let chara = {
            baseClass: promotionGains[i][0],
            promotedClass: promotionGains[i][1],
            hp: promotionGains[i][2],
            atk: promotionGains[i][3],
            skl: promotionGains[i][4],
            spd: promotionGains[i][5],
            def: promotionGains[i][6],
            res: promotionGains[i][7],
            con: promotionGains[i][8],
            mov: promotionGains[i][9],
        }

        gains.push(chara)

    }
}


[{
    name: 'erika',
    startLv: 1,
    class: 'lord',
    promote: 'greatLord',
    images: {
        portrait: 'url',
        sprite: 'url'
    },
    base: [],
    growths: [],

}]



/**
 * find a way to see if unit is magic user to use str or mag
 * 
 *promote tree  
    add gender to classes for max
 */


const getGrowths = (c) => {
    for (let i of growths) {
        if (c === i.name) {
            return {
                hp: i.hp,
                atk: i.atk,
                skl: i.skl,
                spd: i.spd,
                lck: i.lck,
                def: i.def,
            }
        }
    }
}
const getBase = (c) => {
    for (let i of base) {
        if (c === i.name) {
            return {
                hp: i.hp,
                atk: i.atk,
                skl: i.skl,
                spd: i.spd,
                lck: i.lck,
                def: i.def,
                res: i.res,
                con: i.con
            }
        }
    }
}



const setData = () => {


    for (let chara of GROWTH_RATES) {
        for (let unit of BASE_STATS) {
            if (chara[0] === unit[0]) {

                const obj = {
                    name: chara[0],
                    startLv: unit[1],
                    class: unit[2],
                    images: {
                        portrait: 'url',
                        sprite: 'url'
                    },
                    base: getBase(chara[0]),
                    growths: getGrowths(chara[0]),
                }
                charaData.push(obj)
            }
        }
    }
}

// baseFunction()
// growthsFunction()
// maxFunction()
gainsFunction()

// setData()



console.log(gains)