//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// constants
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ACTS = {
    act_0_0_introduce_status_quo: 'introduce, world, introduce setting, introduce theme, show character flaws',
    act_0_1_inciting_incident: 'event, attack, important discovery, character leaves status quo, has new goals, tense future, new excitement',
    act_1_0_setting_and_predicament: 'show reader new world, what is happening, how is character involved, who does character meet, introduce antagonists, what new goals does character have',
    act_1_1_predicament_is_too_hard: 'goal is far beyond reach of character, much improvement is needed: overcome flaws, skill barriers, items of power that might help',
    act_1_2_character_is_thrust_into_center: 'only the character can accomplish something, they are unique somehow, magic blood, special skill, special birth, chosen, unlucky/lucky',
    act_1_3_character_accepts_their_role: 'the goal propels the character, they hide from their responsibility, starts journey of self discovery and growth, journey the reader is a part of, character finally accepts their role in the story, scared, not ready, but brave',
    act_2_0_minor_obstacles: 'character gets introduced to mini quests, gets to know companions, tasks and learning from mentors, battles with antagonist',
    act_2_1_rising_action: 'character has completed mini quests, starting to understand new world, growth is happening, wins start coming in, starts to believe they can accomplish main quest',
    act_2_2_subplots_more_action: 'starts to coast, side quests surface, other story promises appear, romantic moments, antagonist grows as well and blocks character in new ways',
    act_2_3_turning_point: 'main character tries to take on a main obstacle, loses, doubt creeps in, friends try to help and fail',
    act_2_4_setup_for_finale: 'make the stakes clear to the reader, make it clear what the character has to do, create doubt and anxiety about the climax',
    act_3_0_tensions_twists_turns: 'make sure reader is at the edge of their seat, story swings into full action, main character starts following plan',
    act_3_1_initial_obstacles : 'faces own insecurities, ready to make sacrifice, battles antagonist, close to evolution, final bitter battle',
    act_3_2_overcome: 'reflects on where they started and how far they have come, just a little further, character pushes through, decides on one last try',
    act_3_3_climax: 'everything comes to a head, character sacrifices something, battles to their last breath, and wins',
    act_4_0_climax_aftermath: 'battle is over, main character has won, a cost has been paid for winning, the victory is bittersweet and the character feels loss',
    act_4_1_relax: 'character accepts their place in this new world, they enjoy the person they have become, other characters see the change, minor skirmish with antagonist, some subplots tie up',
    act_4_2_the_next_adventure: 'character heads back home having changed, ready for the next adventure'
}

const SCENE_1 = {}
const SCENE_2 = {}

const STORY = [
    {ACT: 'ACT 1', SCENE: SCENE_1},
    {ACT: 'ACT 2', SCENE: SCENE_2},
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// interfaces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


interface Scene {
    character_pov_synopsis: string
    objective_synopsis: string

    setting: Setting
    characters: Character[]
    promises: Promise_Fulfillment[]
    fulfillments: Promise_Fulfillment[]
    
}

interface Character {
    name: string
    abilities: Ability[]    
}

interface Setting {
    date: string

}

interface Ability {
    type: string
    power_level: number
    power_unlock_date: string
}

interface Promise_Fulfillment {
    promise: string
    fulfillment: string
}







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// turner fantasy novel framework
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

a book is just a collection of scenes one after another that tell a coherent story

each scene can jump in time, setting, characters, narration style, etc

each scene is its own thing, should be informative and entertaining in its own way

each scene MUST contribute something to the overall story, even in passing
- character development
- advancement of the plot or subplots
- reader understanding of the world and magic systems

a scene must decide 
- how much dialog it needs
- how much description it needs
- how much action it needs

a good scene will use a characters perceptions and biases to alter the meaning of the scene
there should be a truer meaning underneath the perception of what is actually happening

*/


// https://www.turnerstories.com/blog/2019/9/12/a-great-framework-for-plotting-a-fantasy-novel
export const turner_fantasy_novel_framework = () => {
    // MC is, a happy go lucky fun youth who tries to be good at everything and fails often, his flaws are in the open, he tries but he fails, he is lovable in defeat, when he is against someone its easy to join him
    step_1_introduce_status_quo: () => {
        // MC and MTee go to plant ivy to hide the entrance to a lair they carved behind a waterfall
        // MTee forgot seed pouch, MC makes him get it, MC is a dick about it
        // on the way they run across two girls, decide spy on them, they get caught
        // older GIRL gives them a hard time for her own amusement, asks them if they want to join in on a PSY trip, they are embarrassed and decline
        introduce_world: () => {}
        introduce_setting: () => {}
        introduce_theme: () => {}
        show_character_flaws: () => {}
    }
    step_2_inciting_incident: () => {
        // MC and MTee are reclining on metallic hammocks over water and when they see geese flying overhead signalling the end of summer
        // MTee is excited to go south and tell his first story
        // MC is worried/concerned because he feels he has not lived a story worth telling over the summer
        // MC is does not consider any of the mentoring experiences with MTee worth telling
        attack: () => {}
        important_discovery: () => {}
        leaves_status_quo: () => {}
        character_has_new_goals: () => {}
        tease_future_add_excitement: () => {}
    }
    step_3_act_1_setting_and_predicament: () => {
        // MC and MTee meet up with friends as they migrate south
        // they show off for each other, some friends are with older MTors and have learned lots of cool new things, MC is grumpy about having to teach and not getting to learn any cool new things, MTee is oblivious
        // girls they spied on join crew and have fun at boys expense
        // ANT shows up with ANTMTor and has learned many new things much to MC's dismay
        // ANT shows off new skills to GIRL and MC doesnt like it, ANTMTor is proud of ANT, MC sees this as haughty and superior
        // ANT talks about story he will tell, flaunts mystic iot, MC is insecure about his own story, needs to find a story to tell
        show_reader_new_world: () => {
            what_is_happening: () => {}
            how_is_main_character_involved: () => {}
            who_does_main_character_meet: () => {}
            introduce_antagonists: () => {}
            what_new_goals_does_character_have: () => {}
        }
        // MC is young, heading opposite direction of mystic beasts, unprepared to try to find or fight them, needs a story
        // around the fire two older men talk of elusive and highly intelligent mystical beast that they came across 
        // the beast leaves a series of logic puzzles and riddles, no one has been able to gain any of this beast's iot
        // MC leaves party that night to go find the first clue they talked about, meets beast at clue, they engage in a battle of wits, and then a battle of strength when he gets frustrated, the beast is entertained and easily beats him 
        // MC, manages to cut off a single large feather in the process before the beast kicks him to the ground and then flies away
        // MC wakes in the morning and notices the feather, he picks it up and it disintegrates into iot, he can feel it pull on his consciousness, like regular iot but also not, he is more aware of the tiny amount than the rest of his iot, it is very distinct
        // he  puts it in his pack and rushes to catch up with others, determined to catch mystic beast, hides tiny amount of mystic later when he experiments with it he finds that its power is invisibility, he's never heard of that, he was going to tell the others about it but decides against it
        goal_is_far_beyond_reach_of_character: () => {
            much_improvement_needed_to_achieve_goals: () => {
                overcome_flaws: () => {}
                skills_to_master: () => {}
                items_to_get: () => {}
            }
        }
        // they reach south and as they enter the CITADEL(make new name) they each touch the token giver which shoots their story position and duel positions into the sky like fireworks, MC is very low ranked, he hasn't ever tried to be good at either
        // MC gets THE prime story spot, ANT is let down and sad that he didnt get the spot, he is jealous of MC
        // ANTMtor points out that MC has no story and will only embarrass himself, they snicker and walk off together
        
        // they all go to see the classes that will be available that summer
        // MC chooses the classes he will enter into and helps MTee choose his, convincing him that he should go with his passion rather than what is popular, brief flash of the good person that MC could become if he put aside his immaturity and insecurity
        main_character_is_put_in_central_position_of_the_story: () => {
            only_they_can_do_something: () => {}
            something_is_unique_about_them: () => {
                magic_blood: () => {}
                special_skill: () => {}
                special_birth: () => {}
                chosen_by_ruling_cast: () => {}
                unlucky_or_lucky: () => {}
            }
        }
    }
    step_4_act_1_lock_in_reader: () => {
        // MC is constantly fiddling with mystic iot but hides it from everyone else, he has figured out several unique things to do with it, even in a small amount
        // he can stretch it very thin and almost make himself completely invisible from one side, he can make a shield with it and hide behind the shield, he wears it as a set of vambrace underneath his shirt that no one notices because his shirt covers it
        
        // MC, who is prodigy level smart despite his hormones and insecurity tries to go into the easiest classes with the hottest girls, MTee asks him why he isn't doing classes for the things he talked about all summer, asks him why he isn't doing a battle class given how much fun MC had teaching him to duel all summer, executes a flawless iot spear thrust that splashes off MC's chest to emphasize his point
        // GIRL is nearby and laughs, joining in to cajole MG to at least try some of the classes he is interested in even if they aren't seen as cool
        // MC goes to first day of classes, gets berated or laughed at by multiple profs for not learning anything over the summer, exactly what he was worried about
        
        // to top off a perfectly horrible day RIXA is starting up and MC notices that his usual team has accepted ANT who is pointing to him and smiling while the rest of them giggle, GIRL calls him over and asks MC if he wants to be a part of her team, he reluctantly agrees
        
        // after classes MC decides to skip the stories and leave CITADEL to search out mystic creatures and new iot, he has to have a good story, he just has to
        // MC wanders around all night and finds nothing, there are no traces of any mystics anywhere close to the CITADEL, he heads home dejectedly and falls into his bed exhausted
        the_goal_propels_main_character: () => {}
        main_character_does_not_want_to_do_goal: () => {}
        starts_journey_of_self_discovery_and_growth: () => {}
        journey_that_reader_is_excited_to_be_part_of: () => {}
        main_character_accepts_their_role_in_the_story: () => {
            scared_as_hell: () => {}
            unsure_of_themself: () => {}
            about_to_start_trials: () => {
                is_not_skilled_enough_to_overcome_them: () => {}
            }
        }
    }
    step_5_act_2_throw_in_some_obstacles: () => {
        // MC is getting into his classes, he hates several of the easy ones but is good at them and pushes through
        // ANT flaunts his progress and puts down MC for being lazy in front of everyone in a class MC doesn't even like, MC tries to fights back but is clearly in the wrong
        // in an advanced logic class MC meets new mentor, a teacher, theRICK, who hilariously and dispassionately destroys ANT because he doesnt understand some of the finer and more intricate points of logic, says he will never be able to move iot properly unless he can focus better, MC finds the exercise easy and executes it flawlessly, ANT glares daggers at MC and uses his mystic iot to leaves the class in style
        
        // MC stays after class and asks RICK how to catch an entire mystic, RICK laughs and says to let it go, very few people catch mystics, 
        // MC points that ANT and ANTmtor caught one and then points out RICK's hidden mystic iot 
        // RICKS eyes widened in surprise and he asks why MC thinks it's mystic and MC explains, MC begs for MTorship
        // RICK reluctantly agrees to teach MC, MC leaves class and is elated as he walks to the RIXA arena    
    
        // first RIXA match, MC is not used to new team's tactics gets thinks entire team is attacking and charges alone headfirst into 5 enemies, gets destroyed spectacularly, MC takes a beating GIRL uses his distraction to win it for the team, is annoyed at him in victory
        main_character_is_on_mission: () => {}
        get_to_know_companions: () => {}
        tasks_and_learning_from_mentor: () => {}
        antagonist_throws_obstacles_at_main_character: () => {}
        obstacles_appear_everywhere: () => {
            main_character_is_not_strong_enough_to_overcome_them: () => {}
            antagonist_is_too_strong: () => {}
        }
    }
    step_6_act_2_rising_action: () => {
        // after weeks of losing sleep to his hunt, with the help of RICK, MC has managed to locate and track a mystic, MC finally catches up with the mystic and manages to cut off a whole foot, it screams and flees
        // when MC brings back the iot RICK is excited and pumped for MC, says its rare that any iot is gained at all, very very few actually manage to kill the monster and get all the iot
        // at this point MC has small amounts of 2 types of mystic iot, he is starting to understand how they work at a fundamental level
        // at night in his hammock MC swirls a combination of all the regular types of iot with his two mystic iot and starts to see new uses for them all, new ways to combine them
        main_character_has_some_mini_quests_under_their_belt: () => {
            starting_to_understand_world: () => {}
            growth_is_happening: () => {}
            wins_start_to_happen: () => {}
        }
        main_character_starts_to_believe_they_can_accomplish_ultimate_goal: () => {}
    }
    step_7_act_2_subplots_and_more_action: () => {
        // MC fights his third mystic, he loses again but this time he lops off its huge horns and gets their iot
        // MC searches for the trail of the original mystic, the invisibility mystic, he has no leads, he uses new powers to quickly go back to where he met it before
        // MC finds a cryptic clue that feels just for him and brings it back and goes back to classes
        // MC sees emergency flairs in the distance and flies to help, finds killed men and women, speared through with iot
        // MC flees back to CITADEL and reports deaths, CITADEL sends best warriors out, they find no bodies, they say MC has taken too much PSY
        // it's ANT's story time and he kills it his slithery way, MC is appalled at how gullable the crowd is to fall for his act
        smooth_sailing: () => {}
        side_quests_surface: () => {}
        other_story_promises_appear: () => {}
        romantic_climax_happens: () => {}
        side_quest_that_will_be_main_quest_in_future_book_surfaces: () => {}
        antagonist_is_growing_as_well: () => {
            tries_to_block_main_characters_path: () => {}
        }
    }
    step_8_act_2_the_turning_point: () => {
        // MC solves the first clue of the MYSTICinvisible and rushes to find it, instead he finds a second clue
        // RIXA vs ANT and his old team, ANT and MC stalemate and GIRL wins again, MC is annoyed that he didn't win, GIRL points out that he would have lost a month ago
        // MC's story date looms, he still has not killed a mystic
        // MC is excelling in his classes but several things are looming in the background all at once, the MSYSTICinvisible, the STORY, beating ANT
        // RICK is preoccupied, MC has no external help, friends are only interested in RIXA, no one cares to help with stories except annoying professor
        // MC is annoyed and taking it out on his surroundings, he accidentally kills a tree with mystic tipped iot, thats when he realizes how the people were killed
        // MC realizes how easy everything is with mystic tipped iot, a thin layer of invisibility, heat, freezing, darkness, light, etc works wonders for anything
        // there is a big test the next day but MC figures out second clue and runs out of exam hall
        // MC leaves during exam, RIXA teammate notices and messages other teammates and they rush to meet him as he goes to search for MYSTICinvisible
        main_character_is_ready_to_take_on_main_obstacle: () => {}
        minor_setback: () => {
            loses_to_an_antagonist: () => {}
            doubt_creeps_in: () => {}
        }
        main_character_must_learn_they_are_only_one_that_can_succeed: () => {
            friends_try_to_help: () => {}
            no_one_can_do_it_for_them: () => {}
        }
        set_up_grand_finale: () => {
            help_reader_understand_plan: () => {}
            make_it_clear_what_main_character_has_to_do: () => {}
            create_doubt_and_anxiety_about_climax: () => {}
        }
    }
    step_9_act_3_tensions_twists_turns: () => {
        // MC's duel with ANT looms, his fights with teams, instructors, mystics, older friends, all have him beaten down, he is used to losing, he is used to growing as a result, this time he doesn't want to lose, his usual good humor is gone
        // ANT tries to goad MC, he says the same things that have worked in the past, MC is reborn, MC is new, MC is strong now, they fight, MC surprises everyone but still loses to older, more superior foe
        // MCs story spot looms
        // MC comes up with plan for killing mythic beast so he can have a story
        reader_is_at_edge_of_seat: () => {
            cant_put_book_down_must_know: () => {}
        }
        story_swings_into_full_action: () => {}
        main_character_takes_action_follows_plan: () => {
            main_character_doesnt_feel_ready: () => {}
            faces_own_insecurities_and_flaws_and_bravely_goes_anyway: () => {}
            ready_to_make_sacrifice: () => {}
        }
        main_character_battles_main_antagonist: () => {
            main_character_is_close_to_changing_to_evolving: () => {}
            they_fight_a_bitter_battle: () => {}
        }
        reflects_on_everything_they_have_gone_through: () => {
            main_character_changes_and_overcomes_their_own_demons_and_the_antagonist: () => {}
        }
    }
    step_10_act_3_the_climax: () => {
        // MC's story spot looms, he has nothing outside of RIXA and dueling, he has won nothing, he has done nothing right
        // MC walks up to the stage, he looks around, he bows his head and sits, talking lowly, telling his story, the iot around him raised up
        // MC tells a compelling story of defeat and growth. his four types of mystic iot fly above his head and form into several shapes (he hides the invisible iot as it's un-talked about)
        // MC tells of losing, honorably to a superior opponent - ANT has tears in his eyes, he finally sees MC
        // MC's iot all drop to the ground and he stands up, the CITADEL is silent, then there is thunderous applause
        // MC has lost some of his innocence, immaturity, and arrogance
        // famous story teller gets up and says that overcoming weakness is the ultimate form of strength
        // RICK whisks a stunned MC off the stage and congratulates him
        
        // CITADEL season is over and MC has a new mentor, an smart and simple guy, they head back north
        the_battle_is_over_main_character_has_won: () => {}
        now_there_is_a_cost_to_pay_for_winning: () => {
            sacrifice_of_freedom: () => {}
            physical_sacrifice: () => {
                lost_limb: () => {}
                lost_sence: () => {}
                lost_wealth: () => {}
            }
            sacrifice_of_who_main_character_was: () => {
                loss_of_innocence: () => {}
                burden_of_new_responsibility: () => {}
            }
        }
        main_character_accepts_their_place_in_the_new_world: () => {}
        make_it_clear_to_reader_main_character_has_reached_external_goal: () => {}
        subplots_are_tied_up: () => {}
    }
}

