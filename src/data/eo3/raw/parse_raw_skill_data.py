from collections import defaultdict
from pprint import pprint
import json
from math import ceil

LINKED_SKILLS = {
    "Call Elephant": ["Reckless Rush (Initial)", "Reckless Rush (Follow-Up)"],
    "Call Cow": ["Bull Run (Initial)", "Bull Run (Follow-Up)"],
    "Call Bird": ["Bind Feather (Initial)", "Bind Feather (Follow-Up)"],
    "Call Snake": ["Wind Wrap (Initial)", "Wind Wrap (Follow-Up)"],
    "Call Mole": ["Scratch (Initial)", "Scratch (Follow-Up)"],
    "Call Insect": ["Poison Dust (Initial)", "Poison Dust (Follow-Up)"],
    "Call Owl": ["Sleep Powder"],
    "Call Tiger": ["Death Fang", "Fierce Counter"],
    "Call Lion": ["Regal Authority"],
    "Call Ooze": ["Plague Gunk"],
    "Red Bot": ["Red Module"],
    "Blue Bot": ["Blue Module"],
    "Yellow Bot": ["Yellow Module"],
    "Strange Seeds": ["Strange Seed"],
    "Shoot": ["Fire All"]
}

def generate_skill_output(skill_datum:dict, linked_skill_id:str=None, linked_skill_name:str=None) -> dict:
    ## Flags from EO2U skillsim so code can stay mostly the same
    skill_output = {
        "force_boost": False,
        "force_break": False,
        "transform_only": False,
        "mastery": False,
        "linked_skill": None,
        "no_level": False
    }

    ## Misc Skill Info
    skill_output["_id"] = skill_datum["_id"]
    skill_output["name"] = skill_datum["name"]
    skill_output["description"] = skill_datum.get("details", "")
    skill_output["max_level"] = int(skill_datum["max_level"])
    skill_output["uses"] = skill_datum.get("uses", "N/A")
    skill_output["class_skill"] = skill_datum["class_skill"]

    ## Prerequisites
    skill_prereqs = []
    for prereq_name in skill_datum.get("prerequisites", {}):
        prereq_id = parsed_skills[prereq_name]["_id"]
        skill_prereqs.append({
            "_id": prereq_id,
            "level": skill_datum["prerequisites"][prereq_name]
        })

    skill_output["prerequisites"] = skill_prereqs

    ## Skill Level Info
    skill_output["levels"] = [{"label": "Level", "width": "20%"}]
    for lvl in range(1, 1 + skill_output["max_level"]):
        skill_output["levels"].append({"label": lvl, "width": "8%"})


    skill_output["growth_order"] = []
    skill_output["growth"] = defaultdict(list)

    max_level = skill_output["max_level"]
    for attrib_info in skill_datum["data"]:
        attribute = attrib_info["attribute"]

        if attribute == "Cannot miss":
            skill_output["description"] = "{} Cannot miss.".format(skill_output["description"])
            continue
        elif attribute == "Uncounterable":
            skill_output["description"] = "{} Uncounterable.".format(skill_output["description"])
            continue

        if attribute in skill_output["growth_order"]:
            continue

        if attribute == "Target mod":
            attribute = "Target"

        skill_output["growth_order"].append(attribute)
        idx = 0
        while idx < max_level:
            ## Chaser skills
            if attribute == "Maximum chases":
                true_max_val = int(attrib_info["levels"][idx])
                if "Chase chance red." in skill_output["growth"].keys():
                    chase_chance_red = int(skill_output["growth"]["Chase chance red."][idx]["value"])
                    attrib_info["levels"][idx] = min(true_max_val, ceil(100 / chase_chance_red))
                print(skill_datum["_id"], idx, chase_chance_red, attrib_info["levels"][idx])

            levelspan = 1
            if idx + 1 < max_level:
                while attrib_info["levels"][idx] == attrib_info["levels"][idx+1]:
                    levelspan += 1
                    idx += 1
                    if (idx + 1 >= max_level):
                        break

            ## Refresh/Unbind
            if attribute == "Target":
                if attrib_info["levels"][idx] == "1":
                    attrib_info["levels"][idx] = "Single"
                elif attrib_info["levels"][idx] == "16":
                    attrib_info["levels"][idx] = "Row"
                elif attrib_info["levels"][idx] == "2":
                    attrib_info["levels"][idx] = "All"
                else:
                    raise RuntimeError("INVALID Target mod: {}".format(attrib_info["levels"][idx]))

            skill_output["growth"][attribute].append({
                "levelspan": levelspan,
                "value": attrib_info["levels"][idx]
            })
            idx += 1

    # pprint(skill_output["growth"])
    skill_output["growth"] = dict(skill_output["growth"])

    ## For linked skills
    if linked_skill_id is not None:
        skill_output["linked_skill"] = linked_skill_id
        skill_output["no_level"] = True
        skill_output["prerequisites"] = [{"_id": linked_skill_id, "level": 1}]
        skill_output["description"] = "See {} for details.".format(linked_skill_name)

    return skill_output

def output_js(data, filename, var_name):
    new_file_data = """// AUTOMATICALLY GENERATED FILE; DO NOT MODIFY!;
    var {variable} = {data};
    export default {variable};
    """
    data = json.dumps(data, indent=2)

    with open(filename, 'w') as nf:
        nf.write(new_file_data.format(variable=var_name,
                                      data=data))


if __name__ == "__main__":
    with open("FULL EO3 Skill Data - Skills.csv", "r") as in_file:
      raw_skill_rows = in_file.readlines()

    with open("subheaders.json", "r") as in_file:
        skill_subheaders = json.load(in_file)

    raw_skill_rows = [x.strip().split(",") for x in raw_skill_rows]
    
    ## Parse Shiri's skill file
    parsed_skills = {}
    id_counter = 0
    id_data_map = {}
    id_name_map = {}
    for skill_datum in raw_skill_rows:
        name = skill_datum[0]
        if not name or name.startswith("--"):
            continue

        max_level = skill_datum[1]
        offset = 24
        max_len = len(skill_datum)

        skill_data_levels = []
        while offset + 11 < max_len:
           header_idx = offset + 1
           values_range = [x for x in range((header_idx+1), (header_idx+11))]
           
           subheader = skill_datum[header_idx]
           if subheader not in ["0", "59", "52", "136", "135", "113", "128", "107", "106", "158", "110",
                                "111", "71", "134", "126", "127", "150", "241", "242", "161", "228", "281",
                                "282", "215", "216", "73", "151", "256", "205", "206", "244", "245", "83", "84",
                                "274", "18", "279", "27", "160", "130", "235", "240", "249", "250", "251", "78",
                                "169", "142", "28", "149", "144", "164", "165", "166", "167", "168", "29", "30"]:
                """
                0 - Empty
                59 - Unknown59
                52 - Valid kill target
                136 - Use Weapon Animation/Sound
                135 - Cannot Repeat
                113 - Weapon Type
                128 - Link on Ally Hit
                107 - Link on Summon
                106 - Beast to summon
                158 - Normal Death Anim
                110/111 - Link after use
                71 - Self-destruct
                134 - Cannot miss
                126 - Link when attacked
                127 - Block and link W.A.
                150 - Join clones after
                241/242 - Use on death
                161 - Provoke flag
                228 - Full DMG from back
                281 - Use on buff expire
                282 - Fail if this ailment
                215 - Cast when buffed
                216 - Cast on buff
                256 - Heal at battle end
                205/206 - Ailment immunity
                244/245 - Use on ally death
                83/84 - Ailment/Bind mod
                274 - Use on DEFEND
                18 - Swap on row hit
                279 - Use on DMG skill
                27 - Use Weapon Damage Type
                160 - Flee to pole
                130 - Link on line hit
                235 - Use on evade
                240 - Use on skill use
                249/250/251 - HP/TP/ATK on kill
                78 - Link after turns
                169 - Unknown169
                142 - Ignore DEF Buffs
                28 - Bot chase elem.
                149 - Dispel Arms Buff
                144 - Use Ailment on Self
                164 - Defrag flag
                165 - Yggdroid Bind Flag
                166 - Restrict to bots
                167 - Kill bots after use
                168 - Check for bot
                29 - Dmg type from Bot
                30 - Elem from attack
                """
                try:
                    skill_data_levels.append({
                        "subheader_val": subheader,
                        "attribute": skill_subheaders[str(subheader)],
                        "levels": [skill_datum[x] for x in values_range]
                    })
                except KeyError as exc:
                    print(name, subheader)
                    raise exc

           offset = offset + 11

        id_data_map[str(id_counter)] = skill_data_levels
        id_name_map[str(id_counter)] = name
        if name not in parsed_skills.keys():
            parsed_skills[name] = {
                "name": name,
                "max_level": max_level,
                "data": skill_data_levels,
                "skill_id": id_counter
            }
        else:
           parsed_skills[name]["data"].extend(skill_data_levels)

        id_counter += 1

    ## Handle Linked Skills in data
    LINK_SKILL_SUBHEADERS = ["77", "114", "172"]
    for skill_id in parsed_skills:        
        skill_data = dict(parsed_skills[skill_id]) ## deepcopy
        link_attrib_idx = 0
        idx_to_delete = []
        for attrib_info in skill_data["data"]:
            if attrib_info["subheader_val"] in LINK_SKILL_SUBHEADERS:
                ## Logic to add linked skill
                linked_skill_id = attrib_info["levels"][0]
                print("Linking {_id} {name} with skill {_id2} {name2}".format(
                    _id=skill_data["skill_id"], name=skill_id,
                    _id2=linked_skill_id, name2=id_name_map[linked_skill_id]))
                linked_skill_data = id_data_map[linked_skill_id]
                parsed_skills[skill_id]["data"].extend(linked_skill_data)
                idx_to_delete.append(link_attrib_idx)

            link_attrib_idx += 1

        idx_to_delete.reverse()
        for idx in idx_to_delete:
            del parsed_skills[skill_id]["data"][idx]

    ## Combine Linked Skills
    for skill_name in LINKED_SKILLS:
        for linked_name in LINKED_SKILLS[skill_name]:
            linked_data = parsed_skills[linked_name]
            prefix = ""
            if "(Initial)" in linked_name:
                prefix = "Initial "
            elif "(Follow-Up)" in linked_name:
                prefix = "Subsequent "

            for attrib_data in linked_data["data"]:
                attrib_data["attribute"] = "{pfx}{atb}".format(pfx=prefix,
                                                               atb=attrib_data["attribute"])
                parsed_skills[skill_name]["data"].append(attrib_data)

    ## Now we get the old skillsim data to match our skillsim data
    with open("skills.json", "r", encoding="utf8") as in_file:
        old_class_skills = json.load(in_file)
    
    with open("levels.json", "r", encoding="utf8") as in_file:
        old_skill_levels = json.load(in_file)

    ## Build maps from skill IDs to the English Names
    old_key_name_map = {}
    class_skill_map = defaultdict(list)
    for class_key in old_class_skills:
       for skill_key in old_class_skills[class_key]:
            skill_datum = old_class_skills[class_key][skill_key]
            eng_name = skill_datum["name_en"]
            matches = eng_name in parsed_skills.keys()
            class_skill_map[class_key].append(eng_name)

            old_key_name_map[skill_key] = eng_name
            parsed_skills[eng_name]["skillsim_data"] = skill_datum

            if not matches:
                err_msg = "'{key}' does not match with name '{name_en}'".format(key=skill_key, name_en=eng_name)
                raise ValueError(err_msg)              

    ## Pull out info from skillsim data
    for skill_name in parsed_skills.keys():
        skill_name_new = skill_name.replace("(Follow-Up)", "followup")
        skill_name_new = skill_name_new.replace("(Initial)", "")
        parsed_skills[skill_name]["_id"] = str(skill_name_new).lower().strip().replace(" ", "_")
        skill_datum = parsed_skills[skill_name].get("skillsim_data")
        if skill_datum is None:
            continue

        parsed_skills[skill_name]["class_skill"] = skill_datum.get("unique", False)
        parsed_skills[skill_name]["passive"] = not skill_datum["active"]
        parsed_skills[skill_name]["uses"] = skill_datum["requires"]
        parsed_skills[skill_name]["details"] = skill_datum["details"]
        skill_deps = skill_datum.get("dep", {})
        parsed_skills[skill_name]["prerequisites"] = {old_key_name_map[x]: skill_deps[x] for x in skill_deps.keys()}

    
    ## OK Now we put it all together
    class_skill_data_output = []
    prereq_data_output = []
    default_skill_data = {}
    for class_name in class_skill_map.keys():
        class_obj = {
            "source": None,
            "class": class_name,
            "branches": [{
                "branch_name": class_name,
                "skill_data": []
            }]
        }

        class_skills = class_skill_map[class_name]
        class_prereqs = {}
        for skill_name in class_skills:
            skill_datum = parsed_skills[skill_name]
            
            skill_output = generate_skill_output(skill_datum)
            class_obj["branches"][0]["skill_data"].append(skill_output)

            # if skill_name in LINKED_SKILLS:
            #     for linked_skill in LINKED_SKILLS[skill_name]:
            #         class_obj["branches"][0]["skill_data"].append(generate_skill_output(
            #             parsed_skills[linked_skill],
            #             skill_output["_id"],
            #             skill_name
            #         ))

            class_prereqs[skill_output["_id"]] = skill_output["prerequisites"]

        if class_name == "Default":
            default_skill_data = class_obj
        else:
            class_skill_data_output.append(class_obj)
            prereq_data_output.append(class_prereqs)

    class_skill_data_output.append(default_skill_data)
    prereq_data_output.append({})

    output_js(default_skill_data, "common_skills.js", "commonSkills")
    output_js(class_skill_data_output, 'pre_skill_data.js', 'skillData')
    output_js(prereq_data_output, "prereq_data.js", "prereqData")