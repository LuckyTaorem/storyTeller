story = {
    Start: {
        title: "The Time Traveler's Adventure",
        text: "You adjust your lab coat and walk through the halls of the main laboratory, heading for the experimental technology lab. You nod to Jennings, the security guard, and walk in." +
            "Today is the day of the main experiment. A newly developed time machine, never tested with a human being before. You have volunteered to be the first to test the machine. Sweat beads on your forehead as you walk in, and you pull nervously at your cuffs.\n\n" +
            "\"Are you ready?\" The overseer says.\n\n" +
            "\"Yes, yes, of course. Where is it set to?\" You reply, trying to keep your voice from trembling. The overseer looks down at his notes.\n\n" +
            "\"Medieval England,\" he says, \"And don't worry. As soon as you arrive, all you have to do is take a picture, and return here. Now, please step into the machine and we will begin.\n\n",
        choices: [{
            text: "Swallow your nervousness and step into the machine.",
            next: "a"
        }],
        image: ["../images/Start.jpg"]
    },
    a: {
        text: "You step into the machine, and the overseer hands you a camera.\n\n" +
            "\"Come straight back once you have taken a picture,\" the man informs you. He then closes the door, and you sit down and strap yourself in. The overseer's voice comes across the communication systems.\n\n" +
            "\"All systems are functioning normally. Give signal for countdown.\"\n\n" +
            "You press a button on the panel in front of you to signal that you are ready, and the countdown begins.\n\n" +
            "\"10, 9, 8, 7, 6, 5, 4, 3, 2, 1.\"\n\n" +
            "On the last number, you feel as if your stomach has just jumped and done three somersaults. The single screen showing the outside of the machine is black, and there is a roaring noise in your ears.\n\n" +
            "As quickly as it has begun, it is over, and you feel the machine come to a standstill. Warily, you unstrap yourself and open the door. You are greeted by birdsong and the wind rustling through the trees. You appear to be in a forest. You look around you in awe. You are actually here! You pull out the camera, and wonder what to do next. A forest is not evidence of a successful time travelling experience. You need to get a picture of a medieval castle, or people. What do you think you should do?\n\n",
        choices: [{
                text: "Step out of the machine and creep warily through the forest in the hope there might be something to take a picture of.",
                next: "b1"
            },
            {
                text: "Or do you wait around for a while in the hope something will come along?",
                next: "b2"
            }
        ],
        image: ["../images/a.jpg"]
    },
    b1: {
        text: "You carefully walk through the forest, trying not to make any sound. The lab coat you are wearing is gleaming brightly, so you take it off, and put it over your shoulder. Your clothes are not of this time, so it is important that you are not spotted. Eventually, after two or three minutes of walking, you come to the edge of the forest, and find that you have been on a hill. In amazement, you look down upon a medieval village. The thatched roofs and busy people are only a short walk away.\n\n" +
            "You could take a picture from here, and it would be enough, but you could also get closer and take a better, more authentic picture.\n\n" +
            "What do you do?\n\n",
        choices: [{
                text: "Take a picture from where you are.",
                next: "c1"
            },
            {
                text: "Try to get closer for a better picture.",
                next: "c2"
            }
        ],
        image: ["../images/b1.jpg"]
    },
    b2: {
        text: "After a few minutes of waiting, a group of people dressed in medieval clothes appears. They stare at you in terror.\n\n" +
            "\"Who are you?\" They say in fright.\n\n" +
            "What will you reply?\n\n",
        choices: [{
                text: "\"I am a messenger from a far land\"",
                next: "c3"
            },
            {
                text: "\"I am from the future\"",
                next: "c4"
            }
        ]
    },
    c1: {
        text: "You carefully aim the camera at the village and take three pictures. With a feeling of triumph, you turn to walk back to your machine, and come face to face with an armoured man on a horse.\n\n" +
            "\"What, pray, are ye? You are dressed in strange garb, peasant!\"\n\n" +
            "The man levels a lance at you, apparently awaiting an answer. Your heart rises into your throat.\n\n" +
            "What on Earth should you do?\n\n",
        choices: [{
                text: "Try to bluff your way out of it.",
                next: "d1"
            },
            {
                text: "Make a run for it back into the forest.",
                next: "d2"
            }
        ]
    },
    c2: {
        text: "You scramble down the hill and walk into the village. You get some very strange looks, and a man with a sword stares at you threateningly and walks up to you.\n\n" +
            "\"What do ye want here?\" He snarls into your face.\n\n" +
            "What should you do?\n\n",
        choices: [{
                text: "Bluff your way out of it.",
                next: "d3"
            },
            {
                text: "Ignore the man and stride on.",
                next: "d4"
            }
        ]
    },
    c3: {
        text: "\"I am a messenger from a far land. Please, do not fear me!\"\n\n" +
            "They seem to relax a little, and one of them, a stocky man who looks a bit like a bulldog, comes and prods your machine.\n\n" +
            "\"What is this?\" The man asks.\n\n" +
            "\"Simply a very scholarly instrument,\" you reply, hoping he will leave it at that. He does.\n\n" +
            "\"So, what's your message?\" One of the other men asks.\n\n" +
            "\"I am afraid I cannot tell you that.\"\n\n" +
            "\"Oh, yeah, well maybe we can make you tell us.\" One of the men, to your horror, pulls out a very nasty-looking rusty dagger.\n\n" +
            "What will you do?\n\n",
        choices: [{
                text: "Take a quick picture and rush back into the machine and head back to your own time.",
                next: "d5"
            },
            {
                text: "Run back into the trees and try to lose them.",
                next: "d6"
            }
        ]
    },
    c4: {
        text: "The people stare at you for a few seconds and then one of them narrows his eyes.\n\n" +
            "\"I don't know who you are, but we don't want you here!\"\n\n" +
            "He pulls out a rusty knife. What will you do?\n\n",
        choices: [{
                text: "Fight them!",
                next: "d7"
            },
            {
                text: "Run for it!",
                next: "d8"
            }
        ]
    },
    d1: {
        text: "\"I am from a far land, my friend,\" you say, your heart racing, \"I came here to find shelter and food.\"\n\n" +
            "The man lowers his lance.\n\n" +
            "\"You are most strange, but you are welcome here if you are no foe of my lord,\" he says.\n\n" +
            "\"I assure you, I come only in peace.\"\n\n" +
            "\"Very well then. Be wary in this land though, for we are at war, and soon the enemy may arrive.\" The man rides off without another word to you, and you breathe a sigh of relief.\n\n" +
            "What do you do now?\n\n",
        choices: [{
                text: "Head back to the machine and get out of here.",
                next: "e1"
            },
            {
                text: "Try to get closer to the village and take pictures.",
                next: "e2"
            }
        ]
    },
    d2: {
        text: "You make a break for it, and run into the forest, dodging branches and roots. You are nearly at the machine when you trip over a tree root. The armoured man has caught up with you before you know it, and presuming you are a threat, the man stabs you through the back with a sword. Your adventure ends here\n\n" +
            "THE END",
        choices: [{
            text: "Start Over.",
            next: "Start"
        }]
    },
    d3: {
        text: "You stand tall and glare into the man's face.\n\n" +
            "\"I am a messenger, and I have been instructed not to let anyone get in my way!\" You say. The man peers at you strangely.\n\n" +
            "\"You talk funny.\" He says. \"Get out of the village afore I slit your throat!\"\n\n" +
            "You pull out the camera and point it at him.\n\n" +
            "\"This is a weapon of which you have never seen before. It is deadly and will kill you quicker than you can speak.\"\n\n" +
            "The man's face goes pale and he steps backwards.\n\n" +
            "\"You wouldn't.\" He stammers. You turn on the zoom of the camera and it zooms at the man. He falls over into the dirt and scrambles backwards.\n\n" +
            "\"No, please!\"\n\n" +
            "You take a picture, and the flash lights up the man's face. He screams.\n\n" +
            "\"That was only a warning shot,\" you say. \"Now get out of here!\"\n\n" +
            "The man stands and runs away. People in the village are staring at you in awe now, and some are looking out of their windows in fear. You walk straight through the village and are confident that you can take a picture with no problems now. What do you take a picture of?\n\n",
        choices: [{
                text: "The tavern?",
                next: "g3"
            },
            {
                text: "The main street?",
                next: "e4"
            },
            {
                text: "The people?",
                next: "e5"
            }
        ],
        image: ["../images/d3.jpg"]
    },
    d4: {
        text: "You stride on, ignoring the man entirely.\n\n" +
            "\"I wasn't finished!\" The man says, walking up and putting his sword around your throat. Terror rises up inside you.\n\n" +
            "\"Who are you?\" The man demands in a deadly voice. Suddenly, you think of something. You pull out your mobile phone and turn on the ring tone. The cheerful music floats around you, and the crowd gasps and steps back. The man holding you releases his grip.\n\n" +
            "\"Y-your hand! It's playing a tune! Please, mighty stranger, do not hurt me!\" The man throws his sword on the floor. You turn and glare at him.\n\n" +
            "\"Begone, and do not attack strangers again!\"\n\n" +
            "The man runs away in fright, and you are free to stride down the main street. You pull out your camera and prepare to take a picture.\n\n" +
            "What will you take a picture of?\n\n",
        choices: [{
                text: "The tavern?",
                next: "g3"
            },
            {
                text: "The main street?",
                next: "e4"
            },
            {
                text: "The people?",
                next: "e5"
            }
        ]
    },
    d5: {
        text: "You quickly take a picture, which terrifies the people, and while they are cowering, you dive into your machine and press the buttons on the panel. With a lurch, and blackness across the screen, you land back in the lab.\n\n" +
            "The overseer greets you delightedly.\n\n" +
            "\"Very well done!\" He says. \"Did you get some good pictures?\"\n\n" +
            "\"Yes, I did,\" you say, still panting from your escape. You hand him the camera so he can develop the pictures later.\n\n" +
            "\"The others will be wanting to congratulate you! You're national news!\"\n\n" +
            "You head with the overseer towards the canteen, amid cheers from everyone in the building.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/d5.jpg"]
    },
    d6: {
        text: "You make a run for it, dodging through the trees and leaping over tree roots. Eventually, after some minutes of running, you lose them, and can head back to your machine. Your breath comes in ragged gasps, but a surge of relief washes over you as the sight of the time machine glimmers through the foliage. You waste no time climbing inside and securing the door. The buttons and dials of the machine are a comforting sight as you prepare for your return journey.\n\n",
        choices: [{
            text: "Head back to the machine",
            next: "e6"
        }]
    },
    e1: {
        text: "Your heart thumping from your encounter with the armoured horseman, you run back to the machine, but to your horror, it is surrounded by peasants dressed in brown and green clothes. You quickly hide in a bush and listen to what they are saying.\n\n" +
            "\"What do ye suppose it is?\" One of them says.\n\n" +
            "\"I don't know, but I don't like it,\" a woman whispers, backing away from it. One of the men prods the machine and frowns.\n\n" +
            "\"Made of some kinda metal.\"\n\n" +
            "\"Don't touch it! It could be anything.\"\n\n" +
            "This could go on for a long time. You could rush up to the machine and get in, and head back to your own time as quickly as possible, or perhaps wait until these people go away. What are you going to do?\n\n",
        choices: [{
                text: "Rush headlong to the machine and make your escape?",
                next: "f1"
            },
            {
                text: "Wait patiently for the people to leave?",
                next: "f2"
            }
        ]
    },
    e2: {
        text: "You scramble down the hill, and walk into the village. You get some very strange looks, and a man with a sword stares at you threateningly and walks up to you.\n\n" +
            "\"What do ye want here?\" He snarls into your face.\n\n" +
            "What should you do?\n\n",
        choices: [{
                text: "Bluff your way out of it?",
                next: "f3"
            },
            {
                text: "Ignore the man and stride on?",
                next: "f4"
            }
        ]
    },
    e4: {
        text: "You take some pictures of the main street, turning off the flash so as not to scare the people. Still, some of them run and hide in their houses. Happy with your pictures, what should you do?",
        choices: [
            { text: "Try to find the castle around here and take pictures?", next: "f5" },
            { text: "Head back to the machine and get out of here?", next: "f6" }
        ]
    },
    
    e6: {
        text: "Deciding it is not a good idea to wait to see if they come back, you head off into the forest.\n\n",
        choice: [{
            text: "Into the forest",
            next: "b1"
        }]
    },
    f1: {
        text: "You run directly at the people, waving your lab coat wildly while screaming. In abject terror, the people make a run for it, falling over themselves in their hurry to get away from you. You leap into the machine and press the button that will take you back to your own time. Again, your stomach lurches, and the screen goes black, and suddenly, you are back in the laboratory.\n\n" +
            "The overseer greets you with delight and takes the camera from you.\n\n" +
            "\"Very well done! How was it?\"\n\n" +
            "\"Very eventful,\" you reply. You are feeling hungry, and your adventure has left you feeling tired.\n\n" +
            "\"You want to head to the cafeteria?\"\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/f1.jpg"]
    },
    f2: {
        text: "You sit and watch the villagers in the forest poking at the time machine with branches and tossing rocks at it. You decide it's time to go, this probably can go on all day and you want to get back to the lab.\n\n" +
            "You have a plan. You take out your sunglasses and put them on then cover your head with the hood from your sweater. You grab a couple of tree branches with leaves and jump out of the bush at them.\n\n" +
            "You wave the branches at them furiously while jumping up and down. \"Bogada, bogada, bogada!\" you yell as you jump and skip your way to them. \"You have awakened the tree keeper! Leave my forest Now! Before I take your souls and turn you into trees.\"\n\n" +
            "The villagers run in fear falling over each other trying to get away. It's finally clear to get in the time machine.\n\n",
        choices: [{
                text: "Head back to the lab",
                next: "g1"
            },
            {
                text: "Set the time machine for another time and come back with extra pictures from another time",
                next: "g2"
            }
        ]
    },
    f3: {
        text: "You stand tall and glare into the man's face.\n\n" +
            "\"I am a messenger, and I have been instructed not to let anyone get in my way!\" you say. The man peers at you strangely.\n\n" +
            "\"You talk funny,\" he says. \"Get out of the village afore I slit your throat!\"\n\n" +
            "You pull out the camera and point it at him.\n\n" +
            "\"This is a weapon of which you have never seen before. It is deadly and will kill you quicker than you can speak.\"\n\n" +
            "The man's face goes pale and he steps backward.\n\n" +
            "\"You wouldn't,\" he stammers. You turn on the zoom of the camera and it zooms at the man. He falls over into the dirt and scrambles backward.\n\n" +
            "\"No, please!\"\n\n" +
            "You take a picture, and the flash lights up the man's face. He screams.\n\n" +
            "\"That was only a warning shot,\" you say. \"Now get out of here!\"\n\n" +
            "The man stands and runs away. People in the village are staring at you in awe now, and some are looking out of their windows in fear. You walk straight through the village and are confident that you can take a picture with no problems now.",
        image: ["../images/f3.jpg"],
        choices: [{
                text: "The tavern?",
                next: "g3"
            },
            {
                text: "The main street?",
                next: "g4"
            },
            {
                text: "The people?",
                next: "g5"
            }
        ]
    },
    f5: {
        text: "You wander through the village and walk for a long time until you reach a majestic-looking castle. You take a few pictures, but just as you are putting your camera away, there is a whistling noise, and an arrow lands a few feet from you. They are shooting at you!\n\nWhat should you do?",
        choices: [
            { text: "Make a run for it?", next: "h3" },
            { text: "Walk forwards with your hands up to show that you have peaceful intentions?", next: "h4" }
        ]
    },    

    g1: {
        text: "You clamber in the machine and set the panel to take you back to the lab in your own time. After a lurch and a horrible sick feeling, you climb out.\n\n" +
            "The overseer greets you delightedly.\n\n" +
            "\"Very well done!\" He says. \"Did you get some good pictures?\"\n\n" +
            "\"Yes, I did,\" you say. You hand him the camera so he can develop the pictures later.\n\n" +
            "\"The others will be wanting to congratulate you! You're national news!\"\n\n" +
            "You head with the overseer towards the canteen, amid cheers from everyone in the building.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/g1.gif"]
    },
    g2: {
        text: "You decide that the Overseer may not be too satisfied with the pictures you had taken from the Medieval era so you set the time machine for 1941, the year of WWII. If you get pictures here, he's gotta be happy.\n\n" +
            "A push of the button and 2 seconds later, the lights flash and a quick bump signals your arrival. The door slides open. You're on a beach and there are soldiers everywhere firing their rifles. You recognize the scene from history class—you've landed on the beach of Iwo Jima.\n\n" +
            "\"Get down, Get down,\" one Marine yells. Sand flies up from the gunfire as Marines fall, crying out in pain from being shot.\n\n" +
            "\"Medic! I need a Medic, Johnson's been shot!\"\n\n" +
            "You remember the first aid kit in the Machine and the first aid class when you were a summer lifeguard, but you may just want to grab some photos and get out of here—this is dangerous.\n\n",
        image: ["../images/g2.jpg"],
        choices: [{
                text: "Grab the first aid kit",
                next: "h1"
            },
            {
                text: "Snap some shots and get goin!",
                next: "h2"
            }
        ]
    },
    g3: {
        text: "You point the camera at the village tavern and a few people scream as you take the picture.\n\n" +
            "Suddenly, two knights in armour ride up behind you and grab you.\n\n" +
            "\"Right, troublemaker, you are coming with us!\" they say. You kick and try to throw them off but it is no use; they heave you onto the back of one of their horses and tie you to the saddle.\n\n" +
            "\"Where are you taking me?\" you shout angrily. They might take you away from the machine, and you will never get home if that happens.\n\n" +
            "\"To see the lord,\" one of them says. They will not say any more after that. After an hour's ride, you arrive at a great castle. The guard at the gates lets the knights in.\n\n" +
            "\"What's that you have there?\" he asks.\n\n" +
            "\"A troublemaker from a far land. He was scaring the villagers. We have to take him to the lord immediately.\"\n\n" +
            "The men ride to the castle stables and wrench you off the horse. You are propelled before them up countless stone stairways and hallways until you reach an intricately decorated throne room.\n\n" +
            "There is a man seated on the throne. He doesn't look a day above 20.\n\n" +
            "\"What is this?\" he demands.\n\n" +
            "\"My liege, we found him in the village causing trouble with this strange device,\" one of the knights says, pointing at your camera. The Lord looks at it in interest.\n\n" +
            "\"What is your business here, stranger?\" he asks you.",
        image: ["../images/g3.jpg"],
        choices: [{
                text: "I apologise, my liege. I came only looking for shelter and food.",
                next: "h3"
            },
            {
                text: "I have heard that you are at war and I come to provide my services to you.",
                next: "h4"
            }
        ]
    },
    h1: {
        text: "\"Someone get me a damn medic now!\" yells a Marine.\n\n" +
            "You can't stand to see someone hurt when there is something you can do about it. You grab the first aid kit and run over to him. Johnson is lying on the beach, bleeding from the chest. You roll him gently on his back and apply gauze to his gunshot wound.\n\n" +
            "\"I don't know who the hell you are, but if you can help, I don't care,\" says the Marine.\n\n" +
            "Bullets are flying and bombs are crashing all around as you work to help Johnson. You apply pressure to his wound and raise his legs. He looks a little calmer and less in pain. You lift him onto your shoulders and run him over to a big chunk of metal, setting him down where he will be safe for now. Another Marine rushes over, holding two rifles. You snap a quick photo as he runs toward you.\n\n" +
            "\"Can you shoot a rifle, Hero?\" he asks you.\n\n" +
            "You probably got a good couple of photos, but maybe staying safe with Johnson behind the barrier is a smart move, or perhaps you can become part of history and help these Marines take this beach.\n\n",
        image: ["../images/h1.jpg"],
        choices: [{
                text: "Take the beach!",
                next: "i1"
            },
            {
                text: "Stay with Johnson and get a couple of photos.",
                next: "i2"
            }
        ]
    },
    h2: {
        text: "You decide to grab some photos and get your butt out of there. You run and dive next to a big chunk of metal where you'll be safe, then you'll get in the Machine and get back to the lab.\n\n" +
            "You begin to start taking photos as bullets are piercing the beach all over the place and bombs explode all around you.\n\n" +
            "On Iwo Jima, the few hundred Japanese troops remaining on the island mount a final suicide attack. They are being wiped out one by one by elements of the 5th Marine Division, which have been assigned the task of reducing the last pockets of resistance. (true fact)\n\n" +
            "A Marine runs up to you and dives as an explosion nearly takes him out. He crouches next to you. \"I gotta get up to that hill with the others. If you charge the hill with me, we should make it, newsman.\" He gestures to hand you a spare rifle from a fallen Marine, thinking you're from the news taking pictures.",
        image: ["../images/h2.jpg"],
        choices: [{
                text: "Take the rifle and charge the hill",
                next: "i3"
            },
            {
                text: "Tell him he will be safer hiding with you",
                next: "i4"
            }
        ]
    },
    h3: {
        text: "\"I am sorry, my liege. I came only looking for shelter and food.\"\n\n" +
            "\"Then why did you attack the tavern?\" the man says. \"Take him away!\"\n\n" +
            "The two knights drag you through more hallways and eventually dump you in a cell with a wooden seat and solid oak door.\n\n" +
            "\"You will stay there for a few days, to teach you some manners!\" one of the men says to you. You slump on the seat in despair. How will you ever get back to your time machine now?\n\n" +
            "You spend some hours waiting, and night comes. You are trying to sleep when there is a sudden commotion outside. There is a stifled yell, and then the sound of a body hitting the floor. The solid oak door swings open and there is a woman standing there, sword in hand. You stand up and she points her sword at you.\n\n" +
            "\"Where are you really from?\" she demands.",
        image: ["../images/h3.jpg"],
        choices: [{
                text: "\"You would not believe me if I told you.\"",
                next: "i5"
            },
            {
                text: "\"Who are you?\"",
                next: "i6"
            }
        ]
    },

    h4: {
        text: "The Lord speaks slowly,\n\n\"So, you think you can aid us in this war, yes?\" his tone changes to a slightly doubtful one, \"what can YOU do for us?\"\n\nWhat do you say?",
        choices: [
            { text: "I am a healer, I can heal your men!", next: "healerPath" },
            { text: "I am a weaponsmith, I can create powerful weapons which can defeat your foes", next: "weaponsmithPath" },
            { text: "I am an expert spy, and can spy on your enemies!", next: "spyPath" },
            { text: "I am a man of many talents, tell me of this war and what you need the most, I will aid you!", next: "versatileAidPath" },
            { text: "I cannot help you with this war, I lied", next: "liedPath" }
        ]
    },    


    i1: {
        text: "\"Can a dolphin swim?\" you ask, confirming your ability to shoot the rifle.\n\n" +
            "\"Here, you better put this on,\" the Marine says, handing you a green olive overcoat and a helmet to help camouflage you and identify you as one of them.\n\n" +
            "You slip into the uniform and grab the rifle. You poke your head over the metal chunk and fire off a couple of shots. A few of the Japanese soldiers fall from your gunfire.\n\n" +
            "\"That's pretty good shootin', Hero. Now let's take this beach and charge that hill,\" the Marine shouts.\n\n" +
            "You both rush up from the shore, shooting your way to the top of the beach and diving down beside a row of Marines near the base. Automatic gunfire from the Japanese pierces the sand as bombs and grenades explode, sending waves of sand into the air. You feel a mix of adrenaline and fear, knowing from history that they will eventually take this beach, but at a tremendous cost of lives. You can only hope the Time Machine remains unharmed.\n\n" +
            "Hours seem to pass as you continue shooting, ducking, and holding your breath. Finally, the command is given, and the Marines, including yourself, decide to push forward, jumping up from the sand and charging into the gunfire.\n\n",
        image: ["../images/i1.jpg"],
        choices: [{
                text: "Turn and run for the machine; this is too much.",
                next: "j1"
            },
            {
                text: "Charge forward.",
                next: "j2"
            }
        ]
    },
    i2: {
        text: "You stay with Johnson and take a few pictures. Johnson looks up at you and thanks you for what you have done. You feel proud of your actions.\n\n" +
            "You continue to take photos of the war. After taking several shots, you crawl back to the machine, set the gauges, and with a flashing of the lights and a rumbling of the machine, the door slides open, and there stands the overseer.\n\n" +
            "\"Did you get any photos?\" he asks excitedly.\n\n" +
            "\"Yes, plus I also went and explored WWII,\" you tell the overseer, who is most pleased as you recount your adventures in time while sitting over a cup of coffee in the canteen, reviewing the photos you had taken.\n\n" +
            "The next morning, you, the overseer, and the lab make headline news.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/i2.jpg"]
    },
    i3: {
        text: "You grab the rifle and charge the hill. Shots are fired as you charge heroically up the hill, taking out soldiers as you go. Then you suddenly encounter a heroic explosion. As you turn around, you see the machine has been blown up from a rocket. You realize you are now stuck in the 1940s.\n\n" +
            "After the war, you settle and buy a home. It is now a lonely life you live, for you cannot have personal contact with anyone or get involved with anyone, as it may affect the time paradox in the future where you are supposed to live.\n\n" +
            "Every now and then, you take a walk past your old neighborhood and see yourself as a child playing in the yard. If only you could tell yourself when you grow older not to charge that hill.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/i3.jpg"]
    },
    i4: {
        text: "\"No, stay with me. You will be safer here behind this metal than you would charging up that hill.\"\n\n" +
            "\"I don't know whose side you're on, kid, or even who the heck you are for that matter, but I have a war to fight.\" He charges up the hill as bullets zip and ding against the metal barrier you crawled up behind.\n\n" +
            "You look around and take a couple of photos as Marines charge past you. One Marine dives down to where you are hiding and begins shooting. He gets up and bumps you as he takes off running toward the hill. Just as he does, you drop your camera, and another Marine runs past, stepping on it and crushing all your photos from the Medieval Era and WWII.\n\n" +
            "Maybe if you come back with an item from this time, the Overseer will be happy.",
        image: ["../images/i4.jpg"],
        choices: [{
                text: "Grab a rifle",
                next: "j3"
            },
            {
                text: "Grab a helmet",
                next: "j4"
            }
        ]
    },
    h5: {
        text: "\"You wouldn't believe me if I told you.\" You say, fed up of acting you are from this time. In a split second, she has the sword at your throat.\n\n" +
            "\"You will tell me, or you shall die.\"\n\n" +
            "\"I am from the future. Many centuries ahead.\"\n\n" +
            "The woman pulls the sword away from your throat.\n\n" +
            "\"Why should I believe you?\"\n\n" +
            "\"Why did you come here?\"\n\n" +
            "\"Because if you are as powerful as they think you are, then you can fight for us.\"\n\n" +
            "\"Who is us?\" You ask her.\n\n" +
            "\"The enemies of these people. They destroyed our lands, and now they call us their enemy. I have been a spy in this castle for a month now, but the time to act has arrived.\"\n\n" +
            "You say nothing. You are much too stunned to speak. Suddenly, there is the sound of running feet in the hallway.\n\n" +
            "\"I will believe your story for now. We must leave. Will you join me?\"",
        choices: [{
                text: "Yes, let's get out of here!",
                next: "j5"
            },
            {
                text: "No, I'm staying!",
                next: "j6"
            }
        ]
    },


    j1: {
        text: "You turn and run for the machine just as sand explodes from a grenade around you, killing several nearby Marines. You run as fast as you can, your heart pounding like a drum, telling yourself that this isn't your fight to be involved in.\n\n" +
            "Diving into the time machine, you frantically press several buttons, trying to start the process to escape. Your eyes dart outside as you notice machine gun fire peppering the ground around the machine. The Japanese soldiers, believing it to be some kind of weapon, prepare to launch a rocket at it.\n\n" +
            "You watch in horror as a soldier takes aim and launches the rocket. The moment seems to stretch out, and before the machine can complete the time jump, the rocket slams into it with a deafening explosion. The blast consumes everything in a flash, and darkness overtakes you.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/j1.jpg"]
    },
    j2: {
        text: "You decide to charge forward. You're no coward, and you want to make your mark in WWII history. Alongside several other Marines, you leap from the sands and press forward through the chaos. You grab a couple of snapshots while running until a bullet whizzes by, barely missing you. The shock knocks you to the ground, but you rise again, determined.\n\n" +
            "Your camera slips from your grasp, but there's no time to retrieve it. You and the Marines push on and finally take the beach, capturing several Japanese soldiers. A wave of exhaustion and triumph washes over you as you spot a group of Marines standing up a flag. Without hesitation, you rush over to help them.\n\n" +
            "As the flag stands tall, a Marine approaches with your camera in hand. 'Hope you don't mind, Hero, but I took a picture of you and the guys setting up the flag,' he says with a grin.\n\n" +
            "You glance at the digital screen and can hardly believe your eyes. The image mirrors the famous photograph you've seen in history books, with you as one of the figures immortalized in it. The Overseer will be most pleased with this.",
        image: ["../images/j2.jpg"],
        choices: [{
            text: "Head back to the Lab",
            next: "k1"
        }]
    },
    j3: {
        text: "You see the lifeless body of a fallen Marine a couple of feet away with a rifle that lays beside his body. From the looks of it, it's a Mauser 98K, which would be perfect to take back.\n\n" +
            "You crawl over to the rifle and grab a hold of it. Just as you stand in your accomplishment of having retrieved it, you are shot by a Japanese soldier who is convinced you are a Marine carrying a rifle. Your body now joins the unfortunate lost souls of this tragic war.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/j3.jpg"]
    },
    j4: {
        text: "You see the unfortunate lifeless body of a fallen Marine. You crawl over to him, first shaking him to see if there is a possibility you could help save him, but his life has been taken. You remove his helmet and put it on your own head. Bullets whiz by, zinging across your shoulder and kicking up sand around where you kneel.\n\n" +
            "Once you grab the helmet, you crawl in a hurry back to the machine with it on your head. You climb back into the time machine and set the time gauge, but you know that if you set the time gauge to a new time besides that of your own, you will have to collect items instead of pictures. However, maybe returning to the lab will mean the overseer will give you a new camera.",
        choices: [{
                text: "Return to the lab and report to the overseer",
                next: "k2"
            },
            {
                text: "Set the time gauge for another time",
                next: "k3"
            }
        ]
    },
    j5: {
        text: "She nods and throws you a sword, which you catch very deftly for someone who has never used one before. You follow her out into the hallway, and three soldiers charge at you. What should you do?",
        choices: [{
                text: "Let the woman deal with them?",
                next: "k4"
            },
            {
                text: "Fight!",
                next: "k5"
            }
        ]
    },


    k1: {
        text: "You secretly depart from the hill back to the beach area and climb into the time machine, setting it to return to your present time at the lab. After a quick shake, the lights flash, and the door slides open — you’re safely back.\n\n" +
            "The Overseer rushes up to you, eyes wide with anticipation. 'Did you get the pictures? Did you get the pictures?'\n\n" +
            "'Yes,' you reply with a mix of exhaustion and pride. 'I visited the medieval period, and I even took an extra trip to WWII.'\n\n" +
            "He eagerly takes the camera, plugs it into the computer, and starts reviewing the photos on the monitor. His expression shifts from excitement to confusion as he spots one particular image.\n\n" +
            "'Very good... but who is this soldier with the bandages?' he asks, eyeing you with concern.\n\n" +
            "'He was a Marine I helped. He was hurt badly, and I saved his life,' you explain, chest puffed with pride.\n\n" +
            "'YOU DID WHAT!?' the Overseer shouts, rushing to another computer and typing frantically. 'What was his name? What was his name!?' he demands.\n\n" +
            "'David Johnson,' you say, frowning as the seriousness of the situation sinks in. 'He thanked me for helping him. Is something wrong?'\n\n" +
            "The Overseer's face falls as he reads the information on the screen. 'Yes, something is very wrong. You’ve affected the Space-Time Continuum. Johnson was supposed to have died that day. Now I have to check what has changed since he survived.'\n\n" +
            "The screen fills with a timeline showing Johnson’s life and the significant impacts his survival has had on history. Your heart sinks as you see the consequences unfold.",
        image: ["../images/l1.jpg"],
        choices: [{
            text: "The screen pops up a history of Johnson's life, showing what has happened because of his survival",
            next: "l1"
        }]
    },
    k2: {
        text: "You punch at the date set timing gauge but not soon enough. Several Marines charge forward after finding Johnson lying dead in the sand, after you had been with him. They know that you must have had something to do with his death.\n\n" +
            "You believe that reporting back to the overseer would be your best choice, so you set the timing gauge back to your present time and type in the launch code sequence.\n\n" +
            "Within 2 seconds, with a flashing of the lights from the gauges, you arrive at the lab. As the door slides open, you see the overseer anxiously awaiting your arrival.\n\n" +
            "\"Did you get me pictures?\" he asks.\n\n" +
            "\"No, the camera was destroyed, but I did get you this helmet from WWII. I felt after going through the Medieval Era that some WWII pictures would also be worth obtaining, but the battle was too drastic, and the camera was crushed.\"\n\n" +
            "The overseer is displeased with not having any pictures but does take an interest in the helmet. He turns and hands you another digital camera with an idea floating in his head.\n\n" +
            "\"I would now like for you to enter the time machine and go to either of two time zones. 1 - I have always taken an interest in the Jack the Ripper case, or 2 - I have researched the future and found that the US has strangely divided its country in two, almost involved in another revolution. I would like to know what it is all about.\"",
        choices: [{
                text: "Go investigate the Jack the Ripper murder case",
                next: "l2"
            },
            {
                text: "Go and investigate the newly developed US Revolution",
                next: "l3"
            }
        ],
        image: ["../images/k2.jpg"]
    },
    k3: {
        text: "You crawl into the Time Machine and are about to set the time gauge when you notice the energy booster which fuels the machine is low, only enough for one more trip. You decide to set the gauge back to your current present time at the lab. Within seconds of flashing lights and a quick rumble, the doors slide open and there, waiting anxiously, is the overseer.\n\n" +
            "\"Did you get the pictures?\" he asks.\n\n" +
            "\"No, but I did get this,\" you tell him as you reach into the machine and pull out the WWII helmet. He takes the helmet and looks most pleased.\n\n" +
            "You continue to tell him all about your adventures in time in the Medieval Era and WWII. The next evening, you turn on the TV, and on News Channel 13, they are covering news about your recent Time Travel that you and the overseer had made possible. You become internationally known as the first time traveler.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/k3.jpg"]
    },

    k4: {
        text: "You stand back. There is no need for you to fight. The woman catches the first man on the tip of her sword, and spins to stab another one. The third one is faster, and moves around her. She clashes against his sword a couple of times but she is clearly the better fighter, and she soon gets a stab in that drops the man to the floor.\n\n" +
            "\"Come on!\" she shouts to you, and you follow her through stone corridors and out into the courtyard. To your horror, you see that there are soldiers coming at you from every direction. You only have a few seconds to choose what to do!",
        choices: [{
                text: "Run up onto the battlements?",
                next: "l4"
            },
            {
                text: "Pull out your camera and try to bluff them?",
                next: "l5"
            },
            {
                text: "Ask the woman what to do?",
                next: "l6"
            }
        ]
    },



    l1: {
        text: "The screen displays the timeline, and the Overseer reads from the printout with a grave expression.\n\n" +
            "'D. Johnson, born 1917, dies 1982. After returning home from the war, he married and had a son, Thomas Johnson, in 1944. Thomas married and had a son, Richard Johnson, in 1971. Richard, now 32, will die on Oct. 17, 2003, at 6 pm during a bank robbery where he kills five people. One of those victims will be a doctor who would have discovered the cure for heart disease in 2004.'\n\n" +
            "The Overseer looks at you with urgent eyes as the realization hits. 'If Richard goes through with this, the cure will be lost, altering countless lives.'\n\n" +
            "You glance at your watch and see that it is 5:54 pm. The future hangs in the balance, and there are only six minutes to act. The weight of the decision bears down on you.\n\n" +
            "You have two choices:\n",
        image: ["../images/l1.jpg"],
        choices: [{
                text: "Head back to WWII minutes after you save Johnson and kill him",
                next: "m1"
            },
            {
                text: "Let history stand as it is",
                next: "m2"
            }
        ]
    },
    l2: {
        text: "You strap yourself into the Time Machine as the overseer checks the harness and the Energy Fuel Boosters.\n\n" +
            "\"You are all set. But please be careful of the Time Paradox. If you interrupt time as we know it, it will be changed, and time as we know it now may not even exist.\"\n\n" +
            "You nod your head in agreement as you set the timing gauge to Aug. 31, 1888, the day of the first murder. It would be nice to figure out the true story of what actually occurred that still to this day has gone unsolved.\n\n" +
            "\"The machine is ready!\" the overseer announces to several other researchers who had gathered in the research area. They take a step back as the doors slide closed.\n\n" +
            "You enter the key launch sequence. The machine spins as the lights flicker and flash, almost creating an untimely strobe light effect. The outside has an almost transparent quality. Within a couple of seconds, the machine no longer stands based in the research center lab room but now stands in a dark alley in Whitechapel's Buck's Row in London.",
        image: ["../images/l2.jpg"],
        choices: [{
            text: "Slide the machine over to a dark corner of the alley and begin the research",
            next: "m3"
        }]
    },
    l3: {
        text: "You strap yourself into the Time Machine, as the overseer checks the harness and the Energy Fuel Boosters.\n\n" +
            "\"You are all set. But please be careful of the Time Paradox. If interrupted, time as we know it will be changed and time as we know it now may not even exist.\"\n\n" +
            "You nod your head in agreement as you set the timing gauge to July 10th, 2030, ten days after the revolution of the states. What makes this assignment especially personal is that your great grandson, now 45 years old, has led one side of the revolution dividing the entire United States, the Eastern States from the Western States. Which side he is fighting for remains unclear.\n\n" +
            "\"The machine is ready!\" the overseer announces to several other researchers who had gathered in the research area. They take a step back as the doors slide closed.\n\n" +
            "You enter the key launch sequence. The machine spins as the lights flicker and flash almost to an untimely strobe light effect. The outside has an almost transparent appearance. Within a couple of seconds, the machine no longer stands in the research center lab room but now stands somewhere in the Western Middle of the Country of the US.",
        image: ["../images/l2.jpg"],
        choices: [{
            text: "Research 'The Great US Divide'",
            next: "m4"
        }]
    },
    l4: {
        text: "You rush up onto the battlements, but come face to face with a soldier. He looks angry and makes a stab with his sword. You block it and nearly fall from the precarious battlements. Unexpectedly, another soldier comes up from the right and stabs you through the side. You stagger backwards and fall from the battlements.\n\n" +
            "Your adventure is over.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }]
    },
    l5: {
        text: "You pull out your camera and lift it high in the air. All the approaching soldiers stop in terror. You keep it held high above your head, as you walk through the motionless soldiers. The sentry at the gate wordlessly lets you through, and you follow the woman out. Then you begin to run, following her, and you don't stop until you reach the village again.\n\n" +
            "\"We need a horse to reach safety,\" the woman says.\n\n" +
            "Where are you going to get one?",
        choices: [{
                text: "Ask a nearby villager for one?",
                next: "m5"
            },
            {
                text: "Borrow one of the ones standing outside the tavern?",
                next: "m6"
            }
        ]
    },
    m1: {
        text: "\"You must go back, as terrible as it seems,\" says the Overseer, taking off his glasses in distress, \"You will be responsible for either the death of a doctor if you don't or you will be responsible for the death of a Marine if you do.\"\n\n" +

            "You climb back into the time machine and set the time clock but before you press the launch code, the professor walks over to the machine where you sit.\n\n" +

            "\"But careful,\" he says, \"For you will be arriving 1 or 2 minutes after you had saved him and you cannot come into contact with yourself or even be seen by yourself.\"\n\n" +

            "You click the launch code and arrive instantly at the beach once more. You see yourself helping Johnson and then taking cover from gunfire. Johnson is laying behind a metal chunk. You feel yourself getting nervous not knowing surely if this is something you can do but you will be responsible for the death of not only a doctor but 1000's of others who need this cure he later develope's.\n\n" +

            "You walk over to where Johnson is lying. Marines are laying wounded and killed as others take cover to not even notice you crawl over to him. You slip out your boot knife and whisper to him. \"I'm sorry, but this must be done. May God speed, and be with you.\"\n\n" +

            "You take the knife and stab him in a way he dies instantly. You crawl back to the time machine through the gunfire and explosions that impact around you until you finally make it back and get back in, a tear runs down the side of your face for the life you had just laid to rest.\n\n",
        image: ["../images/m1.jpg"],
        choices: [{
                text: "Set a new date and get out of here.",
                next: "n1"
            },
            {
                text: "Head back to the lab and notify the overeer that you have completed the Johnson Task",
                next: "n2"
            }
        ]

    },
    m2: {
        text: "\"I cannot do this anymore, I have no desire to be a part in killing a human being,\" you tell the overseer.\n\n" +
            "You lay down your lab jacket and walk out of the experimental lab room and to the restroom, where you lean over the sink looking into the mirror, seeing someone who is responsible for a doctor and thousands of others who did not receive the cure he later invented for their illness. You lower your head, unable to look at yourself, having lost total confidence in your ability to provide a better life for those who would benefit from your laboratory experimentation. Today, you realize, will be your last.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/m2.jpg"]
    },
    m3: {
        text: "The doors slide open to the time machine. You set your watch to the current time displayed on the timing gauge. It's 4 AM Friday morning, Aug. 31, 1888, and the current location gauge shows a location of what appears to be Buck's Row. You sit up out of the time machine and slide it over to a dark corner that seems to have been overlooked and will be during your research here. You walk down the alley, which appears to be dark and deserted. It feels chilly and damp, not unusual for London even in the summer, especially before dawn.\n\n" +
            "You look up ahead and see someone crouched down over what looks to be someone lying on the ground at the entrance to some sort of stable yard. As you approach the two, you wonder if this could possibly start out to be the beginning link to your research.\n\n" +
            "As you walk closer, you see a woman lying on her back, her skirts lifted almost to her waist. The man crouched down turns and sees you approaching, \"Come and look over here,\" he asks of you, assuming that the woman was either drunk or the victim of an assault. You are most happy that the overseer has had you dressed this time to fit in. As you both try to help her in the darkened street, neither of you notices the awful wounds that had nearly decapitated her.\n\n" +
            "You help fix her skirt for modesty's sake as the other gentleman leaves, looking for a policeman.",
        choices: [{
                text: "Stay with the woman",
                next: "n3"
            },
            {
                text: "Leave, you don't want to get blamed for whatever has happened to this poor woman",
                next: "n4"
            }
        ],
        image: ["../images/m3.jpg"]
    },
    m4: {
        text: "When your head has stopped spinning, you cautiously untangle yourself and peer groggily outside. Your eyes widen at the sight that greets you.\n\n" +
            "You have landed directly in the middle of a neglected basketball court nestled between immense, gleaming skyscrapers and intricate, weaving highways threading their way between them. Gawping, you estimate that the skyscraper directly overhead must be three hundred stories high. Down here in the deep shadows cast by those monstrous edifices, the basketball court is deserted; great bushes of weeds are growing up through cracks in the tarmac, the chain-link fence is brown with rust and most of the bleachers are shattered. No one is around.\n\n" +
            "Carefully, you cross the court and stare out across the road. No traffic is moving; cars and vans are parked haphazardly across the street, abandoned and rusting, doors hanging off, as if they were left in a hurry. A cold wind is howling between the skyscrapers - you wrap your coat around yourself and shiver.\n\n" +
            "There must be someone in this ghost city. It might be worth a bit of exploration. Then again, it might also drop you into hot water.",
        choices: [{
                text: "Set off down the abandoned street to see if you can find human life?",
                next: "waiting"
            },
            {
                text: "Investigate the base of the massive skyscraper behind you, see if there's an entrance?",
                next: "waiting"
            },
            {
                text: "Try to find a way up to the highway that is winding its way above your head?",
                next: "waiting"
            }
        ]
    },
    m5: {
        text: "You stop a nearby villager.\n\n" +
            "\"Excuse me, please, could we borrow a horse?\"\n\n" +
            "\"A horse? Not to people who talk funny like you!\"\n\n" +
            "You pull out your mobile phone angrily and make it ring while advancing towards the villager. The man backs away, his eyes wide in terror.\n\n" +
            "\"Yes, yes, I have a horse!!! There is one in the blacksmith's!\"\n\n" +
            "You turn off the phone and head for the blacksmith's, being watched warily by all the peasants. You climb upon the horse, to the surprise of the blacksmith, and ride away into the forest.\n\n" +
            "You follow the directions of the woman until the sky is dark and you are exhausted. Eventually, you come into a village and are greeted by cheers by the people.\n\n" +
            "\"Go and get some sleep, my friend,\" the woman says, laying a hand on your shoulder. \"The battle begins tomorrow.\"\n\n" +
            "She thumps a hand to her chest in a salute and then you lose her in the crowd. You head to the nearest building, and are welcomed by the people, and given a bed. You find it strange that they know who you are, but you are too exhausted to think about it too much.",
        image: [""],
        choices: [{
            text: "Rest",
            next: "endGame"
        }]
    },


    n1: {
        text: "One Marine kneels down with some sort of weapon you have not seen before and triggers it off. A huge monstrous flame engulfs the machine. You desperately punch at the launch code but nothing happens. Soon the machine and yourself are pounded with gunfire. As a rocket impacts the side of the machine, the machine explodes with you in it. But at least you die knowing that several thousand people with heart disease will live now that you had killed Johnson.\n\n" +
            "But if you had just let history stand as it should have been, you would never have had to take such action.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }]
    },
    n2: {
        text: "You switch on the launch code and a swift second later you are deported back into the lab. You notify the overseer that you have completed the task. He is disappointed that it had ever occurred as so are you.\n\n" +
            "The overseer goes over to the computer and sets in what has occurred in the past. The minor changes to Johnson's death have not affected the future or caused any other deaths.\n\n" +
            "The overseer excuses you from your duties as you hang your lab coat up. You then inform the overseer that you are not yet ready to handle the responsibility that comes with time travel and the effects that could occur from it. You resign as part of the lab research team and leave the lab, saying goodbye to Jennings as you exit.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/n2.jpg"]
    },
    n3: {
        text: "You decide to stay with the poor woman, not only may she be a clue in your research, but in your heart, you feel that if this was your own family, you would want someone to be with her too. You take some photos before noticing the man return with a policeman.\n\n" +
            "The policeman introduces himself as Constable John Neil. From the light of his lantern, you all can see that blood is oozing from her throat, which had been slashed from ear to ear. Her eyes were wide open and staring. Even though her hands and wrists were cold, Neil felt warmth in her arms. Soon Dr. Rees Llewellyn arrived on the scene and examined the woman, pronouncing her dead no longer than a half-hour's time.\n\n" +
            "You take a couple of photos while backed into the shadows. You hear the policeman and the doctor trying to discover the identity of the body but finding none. You know from the history database onboard the machine she will later be identified as Mary Ann 'Polly' Nichols, age 42.\n\n" +
            "The murderer of Polly Nichols left nothing behind in the way of witnesses, weapon, or any other type of clue. None of the residents nearby heard any kind of disturbance, nor did any of the workmen in the area notice anything unusual.\n\n" +
            "Even though Polly had been found very shortly after her death, no vehicle or person was seen escaping the scene of the crime.",
        image: ["../images/n3.jpg"],
        choices: [{
                text: "Maybe you should offer a clue as to where the investigation may lead",
                next: "o1"
            },
            {
                text: "Say nothing and return to the machine's database and enter your retrieved information",
                next: "o2"
            }
        ]
    },
    n4: {
        text: "You leave, walking back down Buck's Row, deciding you don't want to be blamed for the crime committed here.\n\n" +
            "Later, the gentleman from earlier returns with a policeman. After examining the body and declaring a murder scene, the gentleman looks around for you.\n\n" +
            "Not being able to find you, he gives the officer a description of you. Subsequently, you are picked up on the streets of Buck's Row during your research, and you are blamed for the murder of the woman killed.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/n4.jpg"]
    },

    o1: {
        text: "You talk to the policeman, offering information on what may occur and who to investigate that may have committed the crime.\n\n" +
            "The policeman thanks you, and later that day, Jack the Ripper is brought in for investigation and interrogation. No evidence is found, but in fear of capture, Jack holds off on any more murders until several years later, which does not correlate with what is supposed to happen.\n\n" +
            "You walk back to the machine, but it is no longer there. You have interrupted the Time Paradox and are now possibly trapped in 1888.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }]
    },
    o2: {
        text: "You remember the words from the overseer who had earlier passed on some wise information: 'But please be careful of the Time Paradox; if interrupted, time as we know it will be changed and time as we know it now may not even exist.' You take these words in deep perspective and choose not to take the chance of interfering with the present as you know it.\n\n" +
            "You walk back down Buck's Row toward the machine, knowing that the murder that occurred is too late to investigate and that another will happen sometime in September—nearly a month later. You slide into the darkened corridor of the alley, pulling off the blackened tarp of the Time Machine. You sit back in and type into the computer's database. The computer displays information on when the next occurrence of a murder is going to take place. The computer also identifies the next victim of The Ripper to be Annie 'Dark Annie' Chapman, murdered on September 7th, 1888.\n\n" +
            "You realize the murder will occur in seven days from this day. You begin to think about which course will better contribute to your research: teleporting to that date or staying for the next seven days until the murder occurs, checking back with the computer.",
        choices: [{
                text: "Teleport 7 days ahead",
                next: "p1"
            },
            {
                text: "Stay and research for the seven days",
                next: "p2"
            }
        ],
        image: ["../images/o2.jpg"]
    },
    p1: {
        text: "No sense in wasting time. You log into the information you had found along with some photos you took at the scene, and download them into the computer to prevent any future loss of information.\n\n" +
            "You strap yourself in and type in the launch code, which shortly after a slight jolt, brings you to London. The date: September 7th, 1888. You look at the time gauge, which shows a time of 11:30 PM. You exit the machine and throw the darkened tarp over it once again to help conceal it. After further examination of the area, you see some female prostitutes across the street, who you know were the targets of The Ripper.\n\n" +
            "Also across the way, you notice a lodging house with a sign that reads 'Crossingham's Lodging House.' Perhaps some residents there may have information to follow on.",
        choices: [{
                text: "Go across the street and talk with the ladies",
                next: "q1"
            },
            {
                text: "Head into the lodging house",
                next: "q2"
            }
        ]
    },
    p2: {
        text: "You decide to stay and research during your time; you may find more information in doing so. You discover from word on the street that the inspector in charge of the investigation was a police veteran named Frederick George Abberline who had been on the force 25 years, most of which had been spent in the Whitechapel area.\n\n" +
            "The murderer of Polly Nichols left nothing behind in the way of witnesses, weapon, or any other type of clue. None of the residents nearby heard any kind of disturbance nor did any of the workmen in the area notice anything unusual.\n\n" +
            "You try cracking your brain looking for any answer which may come to mind as to why such hideous crimes were committed and the links from one murder to the other, or were they just a random spree of murder on prostitutes.\n\n" +
            "Seven days pass and you find yourself during the night on the streets of Whitechapel. Across the road, you notice several prostitutes and wonder if Annie may be among them.",
        image: ["../images/p2.jpg"],
        choices: [{
            text: "Look for Annie amongst the group of ladies",
            next: "q3"
        }]
    },

    q1: {
        text: "You walk over to the group of ladies across the way, hoping to gain some knowledge about where these murders may lead.\n\n" +
            "As you approach, the ladies begin propositioning you for the night. You think that you may gain more information if you take one of the ladies into the alley to speak privately, where she might feel safer.\n\n" +
            "You look to the lady who introduces herself as Mary Jane Kelly and ask for a bit of her time. She informs you that it will cost, but you pay what she requests and lead her to the alley. As she begins to grab you, you clarify that your intentions are not of that nature. You explain that you are a private investigator looking into the recent murders.\n\n" +
            "Mary Jane starts to share her insights, telling you that Polly never seemed to have trouble in the past, but now all the girls are scared. They still must work to provide food and shelter for their children and themselves.\n\n" +
            "You thank her for her time and give her a bit more money, not just for her assistance but mostly for the help she needs to provide for her children.",
        choices: [{
            text: "Try another place and ask if she knows of 'Dark Annie'",
            next: "r1"
        }],
        image: ["../images/q1.jpg"]
    },
    q2: {
        text: "You walk into the lodge and up to the concierge at the desk. He introduces himself as Timothy Donovan. You advise him that you are a private investigator looking for information regarding the murder of Polly Nichols.\n\n" +
            "\"Well, I don't really know much,\" he says, looking back into the kitchen area of the lodge, \"but she may know of something that may help.\"\n\n" +
            "You look into the kitchen and see a woman who looks as though she is taking some pills. As she walks out of the kitchen thanking Mr. Donovan, the pill box she holds breaks apart at the hinges and the pills scatter about the floor. You crouch down and help gather the small blue pills. She pulls out an envelope marked with an \"M,\" and you put the pills into the envelope. She thanks you and moves toward the door. You try to ask for a moment's time from her, but she pays you no mind and walks out the door.\n\n" +
            "\"Be careful, Ms. Chapman,\" Mr. Donovan announces out to her as she leaves.\n\n" +
            "\"Did you say Ms. Chapman?\" you ask, astonished at what he had just called her.\n\n" +
            "\"Yes, that's Annie Chapman. Some like to call her Dark Annie.\"\n\n" +
            "Then it hits you...she is Annie Chapman, the next murder victim.\n\n",
        choices: [{
            text: "Head off after her.",
            next: "r2"
        }]
    },
    q3: {
        text: "You walk over to the group of ladies and ask for a bit of time, but unless you're paying, they pay you no mind. Just then, a policeman walks up and arrests you, believing you are trying to pay them money for their illegal line of work.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }]
    },

    r1: {
        text: "Just as you're about to try another place, your signal reader flashes. It's the Overseer trying to get hold of you. You run back to the machine and turn on the monitor, which reads a message to you.\n\n" +
            "URGENT...URGENT....URGENT\n\n" +
            "Must return at once, New discovery has been made.\n\n" +
            "You start to wonder what kind of discovery has been made. You enter the launch sequence and are immediately transported back to your current year.\n\n" +
            "It appears that the Overseer has developed a new Time Machine. Everyone congratulates you on your progress, and you are excited to see what other experiments may be involved with the Overseer's research.\n\n" +
            "The next morning, while watching the news, you see the research center is on TV talking about new discoveries. You become an international sensation and are famous, appearing on all the latest talk shows.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }],
        image: ["../images/r1.jpg"]
    },
    r2: {
        text: "You run out of the lodge, your trench coat billowing behind you as you dash toward the darkened alley.\n\n" +
            "As you enter the alley, you spot a figure that resembles Annie fleeing from the entrance. Behind her stands a tall man dressed in black, wearing a gentleman's top hat, and he appears to be holding a blade.\n\n" +
            "You recognize him—it must be Jack the Ripper. Annie turns the corner, and you realize there is nothing you can do to stop what is about to happen.\n\n" +
            "You feel a sense of helplessness as you watch another innocent soul about to become a victim of this monstrous killer. You start to lose faith, torn between the desire to continue your research and the urge to return to the lab and report your findings.\n\n" +
            "You have 2 choices:",
        image: ["../images/r2.jpg"],
        choices: [{
                text: "Proceed on with your research",
                next: "s1"
            },
            {
                text: "Back to the Lab for another possible assignment",
                next: "s2"
            }
        ]
    },
    s1: {
        text: "Two possibilities present themselves:\n\n",
        choices: [{
                text: "Follow the Ripper. You can't stop him, but maybe you can follow him?",
                next: "t1"
            },
            {
                text: "Head back to the house and book a room.",
                next: "waiting"
            }
        ]
    },
    s2: {
        text: "You decide this task is too dangerous to become involved in. You make your way silently back to the Machine and punch the present date into the computer. After typing in the entrance code, the machine shakes and lights up. Soon you find yourself back at the lab.\n\n" +
            "The overseer is excited to see your return as you and he both sit at his desk and review your computer log of all the places you had seen so far. Evidence is taken from the machine and placed into a private room in the lab.\n\n" +
            "The overseer begins to question whether or not there should be any more trips taken on the time machine due to the fact that it may stall out and leave you stranded in time.\n\n" +
            "You begin to wonder if you have it in you for such a dangerous job that could have so much effect on the way current time develops.",
        choices: [{
                text: "Ask to reset the time machine for another trip.",
                next: "t3"
            },
            {
                text: "Perhaps you should let the experimental team run tests on the machine before trying to launch.",
                next: "t4"
            }
        ]
    },

    t1: {
        text: "As stealthily as you can, you take off after the Ripper and the fleeing girl. The Ripper is little more than a blacker shadow against the night, but enough for you to follow. Your heart goes into your mouth as the lantern light from a window glints off the wicked knife he is carrying.\n\n" +
            "Eventually, the girl's stamina gives out in a deserted street that runs behind some houses. Gasping, she backs away from the black hulk of the Ripper, who advances as if he hasn't been running at all.\n\n" +
            "A lichen-covered wall provides a decent hiding place, while still giving you a line of sight. You are feeling sick; you're about to watch the brutal murder that you can do nothing to stop. But maybe, if you get a glimpse of his face, historians will finally be able to close the case.\n\n" +
            "As the murderer advances on the young woman, you find yourself debating what to do; you COULD save her. Surely rescuing this poor victim and seeing off the Ripper wouldn't change time that badly? Some more people might be alive, that's all.\n\n" +
            "But the Ripper is a lot fitter than you and deadly. If you do something, you'll need to use surprise.\n\n" +
            "Whatever you choose to do, you'll have to do it quickly!",
        image: ["../images/t1.jpg"],
        choices: [{
                text: "Restrain yourself and wait to see if you can get a glimpse of the Ripper's face.",
                next: "waiting"
            },
            {
                text: "Rescue the girl.",
                next: "u2"
            }
        ]
    },

    t3: {
        text: "Despite the risks, you are high on the excitement of your journeys and decide that the possibility of discovering something about the future is far too tantalizing to pass up. You finish your coffee and inform the Overseer of your intent. He is anxious but just as excited as you.\n\n" +
            "Climbing back into the machine, you take a deep breath. Back into the myriad channels of time for you then. But will you visit the nearer future, where the Overseer tells you there has been some kind of 'Revolution?' Or will you head into the distant future, which no amount of tinkering can tell you about?",
        choices: [{
                text: "Travel to the near future.",
                next: "u3"
            },
            {
                text: "Travel into the distant future.",
                next: "u4"
            }
        ]
    },
    t4: {
        text: "Erring on the side of caution, you decide to let the engineers who worked out how this device works make sure it's in reasonable working order before you use it again.\n\n" +
            "You lounge at the Overseer's desk, pawing through the data you recovered while on the other side of the lab the technicians are fiddling, hammering, tinkering and swearing.\n\n" +
            "Suddenly, there is a hiss of something escaping from the many tendrils of the machine's engine. One of the technicians swears loudly, kicks it and it stops. The Overseer raises an eyebrow.\n\n" +
            "\"I think it's ready,\" one of the technicians announces two hours later, wiping sweat on his sleeve. \"But she's a bit testy. A LOT testy. I don't advise any really lengthy trips. Short jumps only.\"\n\n" +
            "Nodding your understanding, you climb inside and let your fingers rest on the controls. It is time, you think, that you examined the future. But you remember the words of caution: short jumps. Even so, the idea of travelling into the distant future to see what has become of the human race is tantalising.\n\n" +
            "Or you can heed the advice and head into the nearer future, where the Overseer has told you some kind of revolution is happening.",
        choices: [{
                text: "Travel to the near future?",
                next: "u3"
            },
            {
                text: "Travel into the distant future, despite the warnings?",
                next: "u5"
            }
        ]
    },

    u2: {
        text: "Throwing caution to the winds, you grit your teeth and look around frantically for anything you might use as a weapon. Your questing hands find half a brick that has dropped out of the wall. You grimace. It'll have to do.\n\n" +
            "Rushing out, you dash up behind the dark figure and crash the brick down upon the Ripper's head. There is a sickening wet thump and the black-cloaked figure goes down in a heap. The knife clatters to the cobbles.\n\n" +
            "Disgusted, you toss the brick away. You've just murdered one of the world's most famous murderers. But now the girl is kneeling there on the cold stone, weeping. You've saved the life of Dark Annie.\n\n" +
            "\"I-is he dead, sir?\" she asks you, eyeing your strange clothing. She is shaking violently.\n\n" +
            "You bend and roll the figure over. The cloak falls open and the hat rolls off to display a narrow face with a moustache and a thin neck. The eyes are lifeless and staring, caught in an expression of surprise.\n\n" +
            "\"Oh my lord,\" Dark Annie gasps, gazing down upon the body. \"That there's the Prince, sir, the Prince!\"\n\n" +
            "\"What?\" you demand, \"Which Prince?\"\n\n" +
            "\"That's Prince Albert, sir.\"\n\n" +
            "\"So,\" you breathe to yourself, \"The Ripper is uncovered at last.\"\n\n" +
            "Prince Albert was one of the forefront suspects in the Ripper case, though no definitive evidence could be found. But here's the evidence right here, bleeding onto London's cobbles. You've killed the Ripper and killed a Prince! You figure it's time to go. You take a surreptitious photograph of the body.\n\n" +
            "\"Annie, get somewhere safe and stay there,\" you tell her.\n\n" +
            "\"How d'you know my name?\" she calls, but you've already vanished into the night, heading back for where you concealed the machine.\n\n" +
            "Clambering inside, you quickly set it for your home time; the Overseer needs to see this evidence immediately!",
        choices: [{
            text: "Return home.",
            next: "waiting"
        }]
    },
    u3: {
        text: "Hammering the details into the machine's internal computer with practiced speed, you set the date for 2030. Conscious of the problems you've gotten yourself into so far, you have the machine analyze the near future, but all it can come up with are the words: 'America' and 'Revolution.'\n\n" +
            "Intrigued, you once again throw caution to the winds and set the machine in motion. The familiar nausea swoops through your body as it spirals through reality and occasionally outside of it. It is quite a long ride, and you settle into your rumbling, thrumming vessel as comfortably as possible.\n\n" +
            "When the machine reaches 2030, though, it lands so violently that you are thrown painfully against the walls before ending up in a groaning heap in your safety harness.\n\n" +
            "When your head has stopped spinning, you cautiously untangle yourself and peer groggily outside. Your eyes widen at the sight that greets you.\n\n" +
            "You have landed directly in the middle of a neglected basketball court nestled between immense, gleaming skyscrapers and intricate, weaving highways threading their way between them. Gawping, you estimate that the skyscraper directly overhead must be three hundred stories high. Down here in the deep shadows cast by those monstrous edifices, the basketball court is deserted; great bushes of weeds are growing up through cracks in the tarmac, the chain-link fence is brown with rust, and most of the bleachers are shattered. No-one is around.\n\n" +
            "Carefully, you cross the court and stare out across the road. No traffic is moving; cars and vans are parked haphazardly across the street, abandoned and rusting, doors hanging off, as if they were left in a hurry. A cold wind is howling between the skyscrapers - you wrap your coat around yourself and shiver.\n\n" +
            "There must be someone in this ghost city. It might be worth a bit of exploration. Then again, it might also drop you into hot water.",
        choices: [{
                text: "Set off down the abandoned street to see if you can find human life.",
                next: "v2"
            },
            {
                text: "Investigate the base of the massive skyscraper behind you, see if there's an entrance.",
                next: "waiting"
            },
            {
                text: "Try to find a way up to the highway that is winding its way above your head.",
                next: "waiting"
            }
        ]
    },
    u4: {
        text: "Hammering the controls, you take a deep breath and set the destination date for 2200 - as far into the future as you dare. Who knows what is awaiting you there; it's too distant even for the machine's internal computer to decipher. At least you can't change the timeline there, you reflect.\n\n" +
            "The machine lurches between spaces with the nauseating shunt you are beginning to get used to, and you hold on tightly as it hurtles its way through the probabilities and output factors of space-time. The journey is much, much longer than any of your previous ones and by the time it begins to slow down, you are feeling ready to be sick and your head is pounding. Eventually, thankfully, it comes to a juddering halt.\n\n" +
            "After getting your breath back, you reach for the exit, but it is yanked open from the other side. You recoil with a yell as a bearded human head shoves its way in.\n\n" +
            "\"Schnilack ohf norb?\" The face says, squinting at you and then sighs heavily, \"Oh yashnon, schnak ramrom.\"\n\n" +
            "\"I...I don't understand!\" you stammer, still cowering against the far side of the machine. The face sighs again and then a thick arm is stuck in. It is holding a tiny black pebble.\n\n" +
            "\"Nashnak! Oph nok!\" The man grins jovially, and gestures at his own hairy ear. Gingerly, you take the tiny stone and raise it to your ear. The man nods encouragingly. You push it in, feeling foolish, and suddenly there is a white-hot pain that lasts all of a split-second. You scream in pain.\n\n" +
            "\"Ah, yes. Sorry about that, friend,\" the man says, smiling sheepishly, \"Translators aren't designed for pastmen's ears, by rights.\"\n\n" +
            "\"Pastmen's ears... you mean, I'm not the first?\" You goggle at the man and his beard jiggles with laughter.\n\n" +
            "\"First? Son, you're the eighteenth this month. Always getting tourists from the past, we are. It's like you're bored of your own time!\"\n\n" +
            "The head pulls out of the machine and you cautiously follow. You step out onto hard-packed grey dust and a warm yellowish light. Peering upwards, you can see the curvature of a transparent dome lined with globes and beyond that... the blackness of space?\n\n" +
            "\"Yes indeed,\" the man is continuing, eyeing your machine with interest; \"Oh, the technology and the timezone changes, of course it does, but it's all the same; tourists braving the future frontier, you know.\"\n\n" +
            "\"No, actually,\" you say, more than a little overwhelmed \"I really don't. Where am I?\"\n\n" +
            "\"Betsy Orwell Recreational Moonbase, stranger, or Ol' Betsy to the likes of us engineers. Whole base is a tourist metropolis. You just happened to land in Biofuel Control, where I work. Nothing interesting here.\"\n\n" +
            "\"Why can't I understand you without this... this thing?\"\n\n" +
            "\"Because I'm speaking Lunarian, stranger. Oh, sure, people still use English and Spanish and whathaveyou out in the backwaters, but Lunarian's what most of us use. Say,\" he stares at you, \"You want me to give you a quick looksee around here? You look a bit off-colour.\"\n\n" +
            "\"Uh...yes, yes, that would be good\" you say, \"Pleased to meet you, Mr...?\"\n\n" +
            "\"Mister? Hah!\" the old man gives you a lopsided grin, \"I ain't no mister, sonny.\" He sticks out a gnarled hand. \"I'm 347BFMD - engineer android at your disposal!\"",
        choices: [{
            text: "Shake the android's hand.",
            next: "waiting"
        }]
    },
    u5: {
        text: "Erring on the side of caution, you decide to let the engineers who worked out how this device works make sure it's in reasonable working order before you use it again.\n\n" +
            "You lounge at the Overseer's desk, pawing through the data you recovered while on the other side of the lab the technicians are fiddling, hammering, tinkering and swearing.\n\n" +
            "Suddenly, there is a hiss of something escaping from the many tendrils of the machine's engine. One of the technicians swears loudly, kicks it and it stops. The Overseer raises an eyebrow.\n\n" +
            "\"I think it's ready,\" one of the technicians announces two hours later, wiping sweat on his sleeve. \"But she's a bit testy. A LOT testy. I don't advise any really lengthy trips. Short jumps only.\"\n\n" +
            "Nodding your understanding, you climb inside and let your fingers rest on the controls. It is time, you think, that you examined the future. But you remember the words of caution: short jumps. Even so, the idea of travelling into the distant future to see what has become of the human race is tantalising.\n\n" +
            "Or you can heed the advice and head into the nearer future, where the Overseer has told you some kind of revolution is happening.",
        choices: [{
            text: "Wake Up!",
            next: "v6"
        }]
    },
    v2: {
        text: "Steeling yourself against the eeriness of the ghost city with its howling wind, you set off down the wide road. It obviously hasn't been used in a long time - weeds are coming up through myriad cracks in the ground here too. Some of the cars are models you've never seen before - well, that's to be expected. They have a sweeping, almost dolphin-like design and on closer inspection, no exhausts. Strange. Some of them have obviously been here a long time. There are older models here too - namely beaten up old taxis from your own time and decrepit, hollowed-out vans. Right down one side, as if parked, is a long, dented old coach, its windows shattered and once-plush seats open to the sky.\n\n" +
            "You are beginning to hear the sounds of activity now - faint shouts and the stark clatter of gunfire. Not good activity then, but it's better than this seemingly-empty metropolis.\n\n" +
            "Suddenly, there is the unmistakable thwack of rotor blades, appearing out of nowhere and resounding off the sheer, glass walls around you. The helicopter is not in sight yet, but your instincts tell you it's probably not a good idea to be standing in a deserted street when it does.\n\n" +
            "You have a few moments to decide on the best place to lay low.",
        image: ["../images/v2.jpg"],
        choices: [{
                text: "Clamber into the nearest car - a ruined old yellow taxi cab.",
                next: "waiting"
            },
            {
                text: "Make for the battered coach.",
                next: "waiting"
            }
        ]
    },
    waiting: {
        text: "Waiting for story to submit"
    },
    v6: {
        text: "You wake slowly to a cluster of concerned faces, all peering over the top of their glasses.\n\n" +
            "\"There you are, look, he's awake!\" You recognise the voice of the technician, filled with relief.\n\n" +
            "\"Are you alright?\" says the familiar face of the Overseer, leaning over you. \"I checked the machine records. You went to the year 100 000. What was there?\"\n\n" +
            "\"Nothing,\" you say in a voice croaky from strain, \"There's nothing there. Earth's gone.\"\n\n" +
            "The scientists look at you dumbfounded. You sit up, your head spinning.\n\n" +
            "\"I'm not going in again,\" you say firmly, maybe to convince yourself more than anyone else. \"That's enough.\"\n\n" +
            "The Overseer helps you up. \"That's alright. You've done it, in any case. Because in the here and now there still is an Earth, and you're the first person on it to ever travel through time!\"\n\n" +
            "You smile, weakly, trying to get the sight of the shattered Earth out of your mind. Tomorrow, you will be a hero. But today, you must recover.\n\n" +
            "THE END",
            choices: [{
                text: "Start Over.",
                next: "Start"
            }]
    }



};