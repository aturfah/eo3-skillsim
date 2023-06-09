const treeData = [
    [// Prince
        {
            skillID: 'royal_lineage',
            baseSkill: true,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'royal_veil',
            baseSkill: true,
            coords: {x: 1, y: 0},
            barSize: 1
        },
        {
            skillID: 'triumphant_cry',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: 'monarch_march',
            baseSkill: false,
            coords: {x: 2, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'nobility_proof',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 3
        },
        {
            skillID: 'negotiation',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'inspire',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'knighthood',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'guard_order',
            baseSkill: true,
            coords: {x: 0, y: 4},
            barSize: 4
        },
        {
            skillID: 'reinforce',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'prevent_order',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'rally_order',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'protect_order',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: undefined,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 7
        },
        {
            skillID: 'attack_order',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 5
        },
        {
            skillID: 'fire_arms',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'freeze_arms',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'shock_arms',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'regal_radiance',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: undefined,
            baseSkill: undefined,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: "ad_nihilo",
            coords: {x: 1, y: 11},
            numBefore: 1
        }

    ],
    [// Gladiator
        {
            skillID: 'endless_battle',
            baseSkill: true,
            classSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 6
        },
        {
            skillID: 'break',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'bind_cut',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'rush',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 3,
            postReqLevels: [5]
        },
        {
            skillID: 'rampage',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
        },
        {
            skillID: 'blade_rave',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'club_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 5
        },
        {
            skillID: 'crushing_blow',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'freezing_blow',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'arm_breaker',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
        },
        {
            skillID: 'nine_smashes',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            afterSkip: 1,
            preReqLevels: [5],
            numAfter: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            afterSkip: 1,
        },
        {
            skillID: 'wild_swings',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 7,
            beforeStyle: 'centered'
        },
        {
            skillID: 'berserker_vow',
            baseSkill: true,
            coords: {x: 0, y: 13},
            barSize: 2
        },
        {
            skillID: 'avenger',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'wolf_howl',
            baseSkill: true,
            coords: {x: 2, y: 13},
            barSize: 1
        },
        {
            skillID: 'charge',
            baseSkill: false,
            coords: {x: 2, y: 14},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'white_flame',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'stun_attack',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
    ],
    [// Hoplite
        {
            skillID: 'guardian',
            baseSkill: true,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'provoke',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 2
        },
        {
            skillID: 'parry',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'magic_parry',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'shrug_off',
            baseSkill: true,
            coords: {x: 1, y: 0},
            barSize: 1
        },
        {
            skillID: 'recuperate',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'vigilance',
            baseSkill: false,
            coords: {x: 1, y: 2},
        },
        {
            skillID: 'spear_mastery',
            baseSkill: true,
            coords: {x: 0, y: 3},
            barSize: 3
        },
        {
            skillID: 'switch_stab',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'blitzritter',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
        },
        {
            skillID: 'long_stride',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 3,
        },
        {
            skillID: 'shield_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 7
        },
        {
            skillID: 'line_guard',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'bodyguard',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'antifire',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'anticold',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'antivolt',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            afterSkip: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'overwatch',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            beforeSkip: 1,
            preReqLevels: [8],
        },
        {
            skillID: 'selflessness',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 2,
            postReqLevels: [3]
        },
    ],
    [// Buccaneer
        {
            skillID: 'trickster',
            baseSkill: false,
            classSkill: true,
            coords: {x: 2, y: 2}
        },
        {
            skillID: 'troublemaker',
            baseSkill: false,
            coords: {x: 1, y: 2}
        },
        {
            skillID: 'eagle_eye',
            baseSkill: false,
            coords: {x: 1, y: 0},
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'lady_luck',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'limit_boost',
            baseSkill: false,
            coords: {x: 2, y: 0},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'rapier_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 6
        },
        {
            skillID: 'lights_out',
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'chase_saber',
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'chase_blow',
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'chase_thrust',
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'hanging',
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'gun_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 6
        },
        {
            skillID: 'quick_draw',
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'chase_flame',
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'chase_ice',
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'chase_volt',
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'rapid_fire',
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 6},
            numBefore: 1,
            numAfter: 8,
            // preReqLevels: [10]
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 13},
            numBefore: 1,
            // preReqLevels: [10],
            numAfter: 1
        },
        {
            skillID: 'pincushion',
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'swashbuckling',
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [8]
        },
    ],
    [// Ninja
        {
            skillID: 'keburi_no_sue',
            baseSkill: false,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'tonsou_jutsu',
            baseSkill: false,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'knife_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 4
        },
        {
            skillID: 'kagenui',
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'izuna',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1
        },
        {
            skillID: 'takanoha',
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
            afterSkip: 1,
        },
        {
            skillID: 'tagen_battou',
            coords: {x: 2, y: 4},
            numBefore: 3,
        },
        {
            skillID: 'kagerou',
            coords: {x: 0, y: 5},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'otori',
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'bunshin',
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: 'nikudan',
            coords: {x: 1, y: 6},
            numBefore: 2,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'fukubari',
            coords: {x: 0, y: 8},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'suikyou',
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'makibishi',
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'kubikiri',
            coords: {x: 1, y: 9},
            numBefore: 2,
        },
        {
            skillID: 'senpuku',
            coords: {x: 0, y: 11},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'sarutobi',
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'kumogakure',
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'karuwaza',
            coords: {x: 1, y: 12},
            numBefore: 2,
        },
    ],
    [// Monk
        {
            skillID: 'form_qi',
            baseSkill: false,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'fire_walk',
            baseSkill: false,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'fist_mastery',
            coords: {x: 0, y: 0},
            baseSkill: true,
            barSize: 5
        },
        {
            skillID: 'kikouken',
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'breakfire_fist',
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: ["(Lv.3)"]
        },
        {
            skillID: 'waking_chakra',
            coords: {x: 1, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'counter',
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [8],
        },
        {
            skillID: 'retaliate',
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [8],
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [10],
            afterSkip: 1,
            numAfter: 1,
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'darkness_fist',
            coords: {x: 2, y: 4},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'healing',
            coords: {x: 0, y: 6},
            baseSkill: true,
            barSize: 4
        },
        {
            skillID: 'refresh',
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [2],
            numAfter: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'unbind',
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [2],
            numAfter: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'resurrect',
            coords: {x: 1, y: 7},
            numBefore: 2
        },
        {
            skillID: 'line_heal',
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [4],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'party_heal',
            coords: {x: 1, y: 9},
            numBefore: 1,
        },
        {
            skillID: 'full_heal',
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'ascetic_reward',
            coords: {x: 0, y: 11},
            baseSkill: true,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'blood_return',
            baseSkill: true,
            coords: {x: 0, y: 12},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'ascetic_deeds',
            coords: {x: 1, y: 11},
            numBefore: 2,
        },
    ],
    [// Zodiac
        {
            skillID: 'ether_mastery',
            coords: {x: 1, y: 0},
            classSkill: true,
            baseSkill: true
        },
        {
            skillID: 'fire_mastery',
            coords: {x: 0, y: 0},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'fire_star',
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'binary_fire',
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'fire_prophecy',
            coords: {x: 1, y: 1},
            numBefore: 2,
        },
        {
            skillID: 'ice_mastery',
            coords: {x: 0, y: 3},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'ice_star',
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'binary_ice',
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'ice_prophecy',
            coords: {x: 1, y: 4},
            numBefore: 2,
        },
        {
            skillID: 'volt_mastery',
            coords: {x: 0, y: 6},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'volt_star',
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'binary_thunder',
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'volt_prophecy',
            coords: {x: 1, y: 7},
            numBefore: 2,
        },
        {
            skillID: 'dark_ether',
            coords: {x: 0, y: 9},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'etheric_charge',
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'singularity',
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'etheric_return',
            coords: {x: 1, y: 10},
            numBefore: 2,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'horoscope',
            coords: {x: 1, y: 11},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'meteor',
            coords: {x: 2, y: 10},
            numBefore: 2,
        },
    ],
    [ // Wildling
        {
            skillID: 'beast_soul',
            baseSkill: true,
            classSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'wild_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 11
        },
        {
            skillID: 'dismiss_beast',
            baseSkill: false,
            numBefore: 1,
            preReqLevels: [1],
            coords: {x: 0, y: 1}
        },
        {
            skillID: 'call_bird',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_snake',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_mole',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_insect',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_elephant',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 2
        },
        {
            skillID: 'call_owl',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [5],
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_cow',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 2,
        },
        {
            skillID: 'nature_pact',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 3,
        },
        {
            skillID: 'sacrifice_i',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'sacrifice_ii',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'call_ooze',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [6],
            postReqLevels: ["(Lv.10)"]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'call_lion',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 1,
        },
        {
            skillID: 'call_tiger',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 1
        },
        {
            skillID: 'beast_roar',
            baseSkill: false,
            coords: {x: 0, y: 12},
        },
        {
            skillID: 'primal_drums',
            baseSkill: false,
            coords: {x: 1, y: 12},
        },
        {
            skillID: 'alertness',
            baseSkill: false,
            coords: {x: 2, y: 12},
        },
        
    ],
    [// Arbalist
        {
            skillID: 'giant_kill',
            baseSkill: true,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'ambush',
            baseSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'bolt_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 9
        },
        {
            skillID: 'heavy_shot',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'front_mortar',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [4]
        },
        {
            skillID: 'snipe',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'sharpshooter',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'strafe',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'fire_barrage',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'ice_barrage',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'volt_barrage',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'armor_piercer',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [4],
            afterSkip: 1
        },
        {
            skillID: 'cloudbuster',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'double_action',
            baseSkill: false,
            coords: {x: 2, y: 4.5},
            numBefore: 8,
            beforeStyle: 'centered'
        },
        {
            skillID: 'proper_form',
            coords: {x: 0, y: 10},
            baseSkill: true,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'extend',
            coords: {x: 1, y: 10},
            numBefore: 1,
        },
        {
            skillID: 'pop_flares',
            coords: {x: 0, y: 11},
            baseSkill: true,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'smoke_grenade',
            baseSkill: true,
            coords: {x: 0, y: 12},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'night_vision',
            coords: {x: 1, y: 11},
            numBefore: 2,
        },
    ],
    [ // Farmer
        {
            skillID: "earth's_bounty",
            baseSkill: true,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'horseplay',
            baseSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'lullaby',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 3
        },
        {
            skillID: 'play_possum',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'strange_seeds',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'persistence',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
        },
        {
            skillID: 'rotten_egg',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'sympathy_pain',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'brave_heart',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'keen_eye',
            baseSkill: true,
            coords: {x: 0, y: 4},
            barSize: 3
        },
        {
            skillID: 'to_market',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'rain_or_shine',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'safe_stroll',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'harvestry',
            coords: {x: 1, y: 4},
            baseSkill: false,
            numAfter: 1,
        },
        {
            skillID: 'keen_nose',
            coords: {x: 2, y: 4},
            numBefore: 2,
            preReqLevels: [3]
        },
        {
            skillID: 'double_crop',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'camp_mastery',
            coords: {x: 1, y: 6},
            baseSkill: false,
            numAfter: 1,
        },
        {
            skillID: 'waste_not',
            coords: {x: 2, y: 6},
            numBefore: 2,
            preReqLevels: [3]
        },
        {
            skillID: 'slap_awake',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numBefore: 1,
            preReqLevels: [5]
        },
    ],
    [ // Shogun
        {
            skillID: "second_sword",
            baseSkill: true,
            classSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'retreat',
            baseSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'morale_boost',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 4
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            afterSkip: 1,
            numAfter: 1,
        },
        {
            skillID: 'kaishaku',
            baseSkill: false,
            coords: {x: 2, y: 1},
            numBefore: 6,
        },
        {
            skillID: 'rear_dignity',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'fore_honor',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'ambush_stance',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'fusillade',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'blitz_command',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1
        },
        {
            skillID: 'endure',
            baseSkill: true,
            coords: {x: 0, y: 5},
            barSize: 4
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            afterSkip: 1,
            numAfter: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'unified_spirit',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'bloody_lance',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'warrior_might',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
        },
        {
            skillID: 'daifuhensha',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'katana_mastery',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 4
        },
        {
            skillID: 'hilt_strike',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'myoujou',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'magatoki',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
        },
        {
            skillID: '5-ring_sword',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 6,
        },
    ],
    [ // Yggdroid
        {
            skillID: 'sleep_mode',
            coords: {x: 2, y: 0},
            classSkill: true,
            baseSkill: false,
        },
        {
            skillID: 'infravision',
            coords: {x: 1, y: 0},
            baseSkill: false,
        },
        {
            skillID: 'virus_scanner',
            coords: {x: 1, y: 1},
            baseSkill: false,
        },
        {
            skillID: 'data_mining',
            coords: {x: 0, y: 0},
            baseSkill: true,
            barSize: 5
        },
        {
            skillID: 'red_bot',
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'blue_bot',
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'yellow_bot',
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'all_out',
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            afterSkip: 0.5,
            postReqLevels: ["Both Lv.3"]
        },
        {
            skillID: 'resupply',
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            afterSkip: 0.5,
            // TODO: Make this line connect
            postReqLevels: ["Both Lv.5"]
        },
        {
            skillID: 'reflector',
            coords: {x: 1.7, y: 4},
            numBefore: 1,
        },
        {
            skillID: 'shoot',
            coords: {x: 1.7, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'defrag',
            coords: {x: 0, y: 6},
            baseSkill: true,
            barSize: 4
        },
        {
            skillID: 'rocket_punch',
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'rocket_headbutt',
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'rocket_jump',
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'core_dump',
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [5],

        },
        {
            skillID: 'overheat',
            coords: {x: 0, y: 11},
            baseSkill: true,
            barSize: 2
        },
        {
            skillID: 'em_barrier',
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: undefined,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
            postReqLevels: [" "]
        },
        {
            skillID: 'hp_cannon',
            coords: {x: 1, y: 11.5},
            numBefore: 4,
            beforeStyle: 'centered'
        },

    ],
    [ // Everyone Skills
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 1}
        },
        {
            skillID: 'bandage',
            baseSkill: true,
            coords: {x: 0, y: 2}
        },
        {
            skillID: 'combat_study',
            baseSkill: true,
            coords: {x: 0, y: 3}
        },
        {
            skillID: 'take',
            baseSkill: true,
            coords: {x: 0, y: 4}
        },
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 0, y: 5}
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 0, y: 6}
        },
    ],
]

export default treeData;