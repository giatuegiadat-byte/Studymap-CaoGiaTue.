(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Hobbies", "Vocabulary: collecting stamps, gardening, cycling, making models. Use the present simple for habits and facts. Like, love, enjoy and hate are commonly followed by a verb ending in -ing.", "hobbies"],
    ["Healthy Living", "Use simple sentences to give health information and advice. Should/shouldn't express advice. The /f/ sound is unvoiced (fan); /v/ is voiced (van).", "healthy"],
    ["Community Service", "Vocabulary: volunteer, donate, clean up, help and community. Use the past simple for a finished time and the present perfect (have/has + past participle) for experiences or actions connected to the present.", "community"],
    ["Music and Arts", "Compare people and things with as + adjective + as, the same as and different from. Use the correct adjective form in each structure.", "arts"],
    ["Food and Drink", "Use a/an with singular countable nouns, some in many affirmative offers or statements, and any in questions and negatives. How many is used with countable plurals; how much with uncountable nouns.", "food"],
    ["A Visit to a School", "Use in with months and parts of the day, on with days and dates, and at with clock times. Place prepositions include in, on, under, next to, opposite and between.", "school"],
    ["Traffic", "Use 'It is ...' to state distance: It is about two kilometres. Used to + base verb describes past habits or states that are no longer true.", "traffic"],
    ["Films", "Adjectives ending in -ed describe how a person feels; adjectives ending in -ing describe the thing that causes the feeling. Although + clause; despite + noun phrase or V-ing.", "films"],
    ["Festivals Around the World", "Form yes/no questions with the correct auxiliary and subject order. Adverbial phrases of time, place and manner add information about an action.", "festivals"],
    ["Energy Sources", "Use the present continuous for arranged future plans: am/is/are + V-ing, often with a future time expression.", "energy"],
    ["Travelling in the Future", "The future continuous (will be + V-ing) describes an action in progress at a future time. Possessive pronouns include mine, yours, his, hers, ours and theirs.", "travel"],
    ["English-Speaking Countries", "Use a/an for a singular countable noun introduced for the first time, the for something specific or unique, and no article for many plural or uncountable nouns in general statements.", "countries"]
  ];

  function makeQuestion(unitIndex, topic, index) {
    const n = index + 1;
    const v = index % 5;
    const stage = Math.floor(index / 5);
    let prompt;
    let correct;
    let wrong;
    let explanation;
    const set = (p, answer, distractors, why) => {
      prompt = p;
      correct = answer;
      wrong = distractors;
      explanation = why;
    };
    const pick = (items) => items[v];

    if (topic === "hobbies") {
      if (stage === 0) {
        const items = [
          ["Collecting stamps is a popular ___.", "hobby"],
          ["A person who rides a bicycle enjoys ___.", "cycling"],
          ["You need a camera for ___.", "taking photos"],
          ["People grow flowers when they enjoy ___.", "gardening"],
          ["Making small toy cars is called making ___.", "models"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["homework", "traffic", "weather"], "The word names a hobby or an activity people do in their free time.");
      } else if (stage === 1) {
        const items = [
          ["I enjoy ___ comics in my free time.", "reading"],
          ["Mai loves ___ photos of flowers.", "taking"],
          ["They hate ___ up early on Sundays.", "getting"],
          ["Nam likes ___ his bike in the park.", "cycling"],
          ["My sister enjoys ___ the garden.", "working in"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["read", "to reading", "reads"], "Enjoy, love and like are followed by a verb in the -ing form here.");
      } else if (stage === 2) {
        const items = [
          ["My brother ___ model planes every weekend.", "makes"],
          ["We ___ badminton after school.", "play"],
          ["Lan ___ stamps from different countries.", "collects"],
          ["They ___ their plants every morning.", "water"],
          ["Tom ___ to music in the evening.", "listens"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["make", "is make", "making"], "Use the present simple for routines; a singular third-person subject takes -s/-es.");
      } else {
        const items = [
          ["Choose the correct sentence about a hobby.", "She enjoys making paper flowers."],
          ["Choose the correct sentence about a routine.", "He collects coins every month."],
          ["Choose the correct sentence about a hobby.", "We like playing chess together."],
          ["Choose the correct sentence about a routine.", "My friends go cycling on Sundays."],
          ["Choose the correct sentence about a hobby.", "Nam hates doing the washing-up."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["She enjoy making flowers.", "He collect coins every month.", "We likes play chess."], "Check present-simple agreement and the verb pattern after a verb of liking.");
      }
    } else if (topic === "healthy") {
      if (stage === 0) {
        const items = [
          ["Which is a healthy habit?", "doing regular exercise"],
          ["Which food is a good source of vitamins?", "fresh fruit"],
          ["What should you do before eating?", "wash your hands"],
          ["Which habit helps you sleep well?", "going to bed at a regular time"],
          ["Which drink is usually a healthy choice?", "water"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["eating only sweets", "staying up all night", "never drinking water"], "The correct choice supports a healthy lifestyle.");
      } else if (stage === 1) {
        const items = [
          ["Which word begins with the /f/ sound?", "fish"],
          ["Which word begins with the /v/ sound?", "vegetable"],
          ["Which pair begins with /f/ and /v/, respectively?", "fan — van"],
          ["Which word has the /f/ sound at the end?", "leaf"],
          ["Which word begins with the /v/ sound?", "very"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["van — fan", "book", "school"], "The /f/ sound is unvoiced; /v/ is voiced. Listen for the initial or final consonant.");
      } else if (stage === 2) {
        const items = [
          ["You have a bad toothache. You ___ see a dentist.", "should"],
          ["You want to stay healthy. You ___ eat too much fast food.", "shouldn't"],
          ["Tom feels tired. He ___ get enough sleep.", "should"],
          ["Your friend has a cold. He ___ drink more water.", "should"],
          ["You are ill. You ___ do strenuous exercise today.", "shouldn't"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["shouldn't", "can to", "did"], "Use should for good advice and shouldn't for advice against an action.");
      } else {
        const items = [
          ["Choose the correct simple sentence.", "We eat vegetables every day."],
          ["Choose the correct simple sentence.", "My sister exercises in the morning."],
          ["Choose the correct simple sentence.", "Drinking enough water is important."],
          ["Choose the correct simple sentence.", "You should wash your hands before meals."],
          ["Choose the correct simple sentence.", "He doesn't stay up late on school nights."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["We eats vegetables every day.", "My sister exercise every morning.", "You should to wash your hands."], "A simple sentence needs a correct subject and verb; should is followed by the base verb.");
      }
    } else if (topic === "community") {
      if (stage === 0) {
        const items = [
          ["We ___ the park last Saturday. (clean)", "cleaned"],
          ["Lan ___ food to the children yesterday. (donate)", "donated"],
          ["They ___ their neighbours last week. (help)", "helped"],
          ["I ___ in a community project in May. (join)", "joined"],
          ["Nam ___ old books to the library yesterday. (give)", "gave"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["clean", "cleans", "cleaning"], "A finished past-time expression takes the past simple form.");
      } else if (stage === 1) {
        const items = [
          ["I have ___ volunteered at the food bank. (experience)", "never"],
          ["She has ___ finished the charity poster.", "just"],
          ["Have you ever ___ a community garden?", "visited"],
          ["They have ___ this group for two years.", "been in"],
          ["We haven't collected enough books ___.", "yet"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["visit", "did", "last"], "Use have/has + past participle and the time word that matches the sentence.");
      } else if (stage === 2) {
        const items = [
          ["We ___ litter yesterday, but we ___ the park clean now.", "collected / have made"],
          ["Mai ___ the project last month; she ___ three projects so far.", "joined / has joined"],
          ["They ___ the food bank in 2022 and ___ there twice since then.", "visited / have volunteered"],
          ["I ___ my homework an hour ago, but I ___ the poster yet.", "finished / haven't made"],
          ["He ___ to the shelter last week and ___ there several times this year.", "went / has been"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["have collected / made", "joined / joined", "visit / volunteered"], "Use past simple with a finished past time; use present perfect for experience or a period continuing to now.");
      } else {
        const items = [
          ["Choose the correct sentence.", "We visited the nursing home last Sunday."],
          ["Choose the correct sentence.", "She has helped at the food bank many times."],
          ["Choose the correct sentence.", "Have you ever donated books to a school?"],
          ["Choose the correct sentence.", "They haven't finished the clean-up yet."],
          ["Choose the correct sentence.", "Nam joined the volunteer club in September."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["We have visited the home last Sunday.", "She has help many times.", "Did you ever donated books?"], "Finished past time uses past simple; present perfect uses have/has + past participle.");
      }
    } else if (topic === "arts") {
      if (stage === 0) {
        const items = [
          ["This song is ___ popular as that one.", "as"],
          ["Mai sings as ___ as her sister.", "well"],
          ["The two paintings are the same ___.", "size"],
          ["This picture is different ___ the one in the book.", "from"],
          ["The concert is not as ___ as the musical.", "exciting"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["more", "than", "most"], "Use as + adjective/adverb + as, the same + noun + as, and different from.");
      } else if (stage === 1) {
        const items = [
          ["The two singers have ___ voice.", "the same"],
          ["Jazz is different ___ classical music.", "from"],
          ["This film is not as ___ as the live show.", "exciting"],
          ["She plays the piano as ___ as her teacher.", "well"],
          ["The red poster is the same ___ the blue one.", "as"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["than", "more", "different"], "These comparison patterns have fixed forms: the same as, different from, as ... as.");
      } else if (stage === 2) {
        const items = [
          ["The violin is expensive. The guitar is expensive too.", "The guitar is as expensive as the violin."],
          ["This dance is not like that dance.", "This dance is different from that dance."],
          ["Both pictures are 30 centimetres wide.", "The pictures are the same width."],
          ["Mai sings beautifully. Lan sings beautifully too.", "Lan sings as beautifully as Mai."],
          ["The play is less exciting than the musical.", "The play is not as exciting as the musical."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["The guitar is more as expensive.", "This dance is same from that dance.", "Lan sings as beautiful as Mai."], "Choose the comparison structure that preserves the meaning and uses the correct adjective/adverb form.");
      } else {
        const items = [
          ["Choose the sentence with a correct comparison.", "The two songs are the same length."],
          ["Choose the sentence with a correct comparison.", "This painting is different from the one in the gallery."],
          ["Choose the sentence with a correct comparison.", "She dances as gracefully as her partner."],
          ["Choose the sentence with a correct comparison.", "The show is not as funny as the comedy film."],
          ["Choose the sentence with a correct comparison.", "The blue costume is the same colour as the green one."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["The songs are same length.", "This painting is different than from that one.", "She dances as graceful as her partner."], "Use the fixed comparison patterns and the correct adjective or adverb.");
      }
    } else if (topic === "food") {
      if (stage === 0) {
        const items = [
          ["How ___ apples do we need?", "many"],
          ["How ___ rice is there in the bowl?", "much"],
          ["Would you like ___ orange?", "an"],
          ["There are ___ eggs in the fridge.", "some"],
          ["We don't have ___ cheese.", "any"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["much", "a", "any", "many"].filter((choice) => choice !== answer).slice(0, 3), "Choose the article or quantifier that matches the noun and sentence type.");
      } else if (stage === 1) {
        const items = [
          ["There is ___ sugar in the jar.", "some"],
          ["Are there ___ tomatoes in the salad?", "any"],
          ["How ___ bottles of water should we buy?", "many"],
          ["How ___ oil do you need?", "much"],
          ["Would you like ___ sandwich?", "a"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["many", "much", "an", "some"].filter((choice) => choice !== answer).slice(0, 3), "Use many with countable plurals, much with uncountable nouns, and a/an with singular countable nouns.");
      } else if (stage === 2) {
        const items = [
          ["There isn't ___ butter, so we can't make the cake.", "any"],
          ["We need ___ bananas for the fruit salad.", "some"],
          ["How ___ flour does the recipe need?", "much"],
          ["How ___ sandwiches are for the picnic?", "many"],
          ["She bought ___ apple and two oranges.", "an"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["a", "much", "many", "any"].filter((choice) => choice !== answer).slice(0, 3), "Check whether the noun is countable and whether the sentence is affirmative, negative or a question.");
      } else {
        const items = [
          ["Choose the correct sentence.", "How much milk is in the fridge?"],
          ["Choose the correct sentence.", "There are some carrots on the table."],
          ["Choose the correct sentence.", "Would you like an egg?"],
          ["Choose the correct sentence.", "We don't have any bread left."],
          ["Choose the correct sentence.", "How many oranges did they buy?"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["How many milk is there?", "There is some carrots.", "Would you like a egg?"], "Check countability, article choice and subject-verb agreement.");
      }
    } else if (topic === "school") {
      if (stage === 0) {
        const items = [
          ["Our school year starts ___ September.", "in"],
          ["The English test is ___ Friday.", "on"],
          ["The lesson begins ___ 8 o'clock.", "at"],
          ["We have a break ___ the morning.", "in"],
          ["The school trip is ___ 15 May.", "on"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["at", "on", "in"].filter((choice) => choice !== answer), "Use in with months/parts of the day, on with days/dates, and at with clock times.");
      } else if (stage === 1) {
        const items = [
          ["The library is ___ the science lab and the computer room.", "between"],
          ["The clock is ___ the wall.", "on"],
          ["The teacher's desk is ___ the classroom.", "in"],
          ["The gym is ___ the canteen; they face each other.", "opposite"],
          ["The school garden is ___ the library, beside it.", "next to"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["under", "between", "behind"].filter((choice) => choice !== answer), "The preposition describes the location stated in the sentence.");
      } else if (stage === 2) {
        const items = [
          ["We have Science ___ Tuesday afternoon.", "on"],
          ["The club meets ___ 4:30 p.m.", "at"],
          ["The new students arrive ___ the autumn term.", "in"],
          ["The art room is ___ the first floor.", "on"],
          ["The principal's office is ___ the entrance, across the hall.", "opposite"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["in", "at", "under"].filter((choice) => choice !== answer), "Choose a time preposition or place preposition that fits the clue.");
      } else {
        const items = [
          ["Choose the correct sentence.", "The music room is next to the library."],
          ["Choose the correct sentence.", "We have PE on Thursday afternoon."],
          ["Choose the correct sentence.", "The first lesson starts at 7:30."],
          ["Choose the correct sentence.", "There is a science lab on the second floor."],
          ["Choose the correct sentence.", "The school festival is in December."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["The music room is next the library.", "We have PE in Thursday.", "The first lesson starts on 7:30."], "Use the correct preposition for time and place.");
      }
    } else if (topic === "traffic") {
      if (stage === 0) {
        const items = [
          ["___ is about two kilometres from my house to school.", "It"],
          ["How far is it ___ the station?", "from"],
          ["It is three kilometres ___ the museum to the park.", "from"],
          ["___ is a long way to the city centre.", "It"],
          ["It is only 500 metres ___ here to the bus stop.", "from"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["There", "They", "at"], "Use it as the subject in distance expressions; use from to name the starting point.");
      } else if (stage === 1) {
        const items = [
          ["I ___ walk to school, but now I take the bus.", "used to"],
          ["My father ___ ride a bike to work when he was young.", "used to"],
          ["We ___ have a car, but we do now.", "didn't use to"],
          ["Did you ___ play in the street as a child?", "use to"],
          ["There ___ be fewer cars in this town.", "used to"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["use to", "used", "would to"], "Used to describes a past habit or state; after did/didn't use the base form use to.");
      } else if (stage === 2) {
        const items = [
          ["It is 4 km from the station to the school. Ask about the distance.", "How far is it from the station to the school?"],
          ["Lan walked to school in the past; now she cycles.", "Lan used to walk to school."],
          ["We didn't have a traffic light here before.", "We didn't use to have a traffic light here."],
          ["Ask about an old habit: Did Nam ride a bike?", "Did Nam use to ride a bike?"],
          ["It is 10 minutes from here to the market. Ask how far.", "How far is it from here to the market?"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["How long is it from the station?", "Lan use to walked to school.", "Did Nam used to ride a bike?"], "Use it + be for distance and the correct used-to pattern for past habits.");
      } else {
        const items = [
          ["Choose the correct sentence about a past habit.", "My uncle used to cycle to work."],
          ["Choose the correct distance question.", "How far is it from your home to school?"],
          ["Choose the correct negative form.", "We didn't use to travel by train."],
          ["Choose the correct sentence.", "It is about five kilometres from here to the lake."],
          ["Choose the correct question about a past habit.", "Did they use to walk to the station?"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["My uncle used cycle to work.", "How far it is to school?", "Did they used to walk?"], "After did/didn't, use use to; distance questions begin with How far is it.");
      }
    } else if (topic === "films") {
      if (stage === 0) {
        const items = [
          ["The film was exciting. I was ___.", "excited"],
          ["The story was boring. We were ___.", "bored"],
          ["The ending surprised me. I was ___.", "surprised"],
          ["The comedy made us laugh. It was ___.", "funny"],
          ["The horror film frightened Lan. She was ___.", "frightened"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["exciting", "boring", "surprising"], "-ed adjectives commonly describe how a person feels.");
      } else if (stage === 1) {
        const items = [
          ["The film made me feel excited. It was ___.", "exciting"],
          ["The plot made us feel bored. It was ___.", "boring"],
          ["The ending surprised the audience. It was ___.", "surprising"],
          ["The story made children feel interested. It was ___.", "interesting"],
          ["The film scared the viewers. It was ___.", "frightening"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["excited", "bored", "interested"], "-ing adjectives describe the person or thing that causes the feeling.");
      } else if (stage === 2) {
        const items = [
          ["___ the film was long, we enjoyed it.", "Although"],
          ["___ the long film, we enjoyed it.", "Despite"],
          ["Although it was raining, they ___ to the cinema.", "went"],
          ["Despite ___ tired, Mai watched the film.", "being"],
          ["The film was funny, ___ the ending was sad.", "but"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Despite", "Although", "because"].filter((choice) => choice !== answer), "Although is followed by a clause; despite is followed by a noun phrase or V-ing.");
      } else {
        const items = [
          ["Choose the correct sentence.", "Although the film was sad, I liked it."],
          ["Choose the correct sentence.", "Despite being tired, he watched the whole film."],
          ["Choose the correct sentence.", "The ending was surprising, so we talked about it."],
          ["Choose the correct sentence.", "The film was frightening, but the children enjoyed it."],
          ["Choose the correct sentence.", "Although it was expensive, we bought the tickets."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Despite the film was sad, I liked it.", "Although being tired, he watched it.", "Despite it was expensive, we bought tickets."], "Although takes a clause; despite takes a noun phrase or V-ing.");
      }
    } else if (topic === "festivals") {
      if (stage === 0) {
        const items = [
          ["___ you enjoy the lantern festival?", "Do"],
          ["___ Mai visit the festival last year?", "Did"],
          ["___ they watching the parade now?", "Are"],
          ["___ your brother been to this festival?", "Has"],
          ["___ there a fireworks display tonight?", "Is"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Do", "Does", "Did", "Are", "Has"].filter((choice) => choice !== answer).slice(0, 3), "Use the auxiliary that agrees with the subject and tense in a yes/no question.");
      } else if (stage === 1) {
        const items = [
          ["The parade starts ___. (time)", "at 7 p.m."],
          ["The children danced ___. (manner)", "happily"],
          ["We watched the fireworks ___. (place)", "in the town square"],
          ["They celebrate the festival ___. (time)", "every spring"],
          ["The dancers moved ___. (manner)", "gracefully"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["quick", "in Monday", "at the park yesterdayly"], "An adverbial phrase gives information about time, place or manner.");
      } else if (stage === 2) {
        const items = [
          ["___ your family ___ the festival last year?", "Did / attend"],
          ["___ the dancers ___ in the square now?", "Are / performing"],
          ["___ she ever ___ the lantern festival?", "Has / visited"],
          ["___ people ___ traditional clothes at this festival?", "Do / wear"],
          ["___ the show ___ at 8 tonight?", "Does / start"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Did / attended", "Do / wears", "Has / visit"], "Form yes/no questions with auxiliary + subject + base verb or the correct participle.");
      } else {
        const items = [
          ["Choose the correct yes/no question.", "Did the festival attract many visitors last year?"],
          ["Choose the correct yes/no question.", "Are the musicians playing in the square now?"],
          ["Choose the correct yes/no question.", "Has Lan ever seen the dragon dance?"],
          ["Choose the correct sentence with an adverbial phrase.", "They celebrated the harvest festival in October."],
          ["Choose the correct sentence with an adverbial phrase.", "The children sang loudly during the parade."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Did the festival attracted visitors?", "Are the musicians play now?", "Has Lan ever saw the dance?"], "Use correct auxiliary-subject order and a complete verb phrase.");
      }
    } else if (topic === "energy") {
      if (stage === 0) {
        const items = [
          ["We ___ our teacher at the energy fair tomorrow.", "are meeting"],
          ["Lan ___ a solar energy project this Saturday.", "is presenting"],
          ["They ___ the wind farm next week.", "are visiting"],
          ["I ___ my science group at 9 a.m. on Sunday.", "am joining"],
          ["The students ___ a poster about saving energy tonight.", "are making"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["meet", "will meeting", "are meet"], "The present continuous can describe a future arrangement with a future time expression.");
      } else if (stage === 1) {
        const items = [
          ["What ___ you ___ tomorrow evening? (arrangement)", "are / doing"],
          ["___ Mai ___ the solar exhibition on Friday?", "Is / attending"],
          ["We ___ not ___ the power station this week.", "are / visiting"],
          ["When ___ they ___ the new wind turbines?", "are / seeing"],
          ["My class ___ ___ an energy expert next Monday.", "is / meeting"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["do / doing", "is / attend", "will / visiting"], "Future arrangements use am/is/are + subject + V-ing.");
      } else if (stage === 2) {
        const items = [
          ["The tickets are booked. We ___ the energy museum on Saturday.", "are visiting"],
          ["The group has an appointment. They ___ the engineer at 10.", "are meeting"],
          ["Our presentation is planned. I ___ about solar power tomorrow.", "am speaking"],
          ["The bus is arranged. The class ___ the wind farm next week.", "is visiting"],
          ["The date is fixed. Mai and I ___ the science fair on Friday.", "are attending"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["visit", "will visits", "are visit"], "A planned appointment or booked event can use the present continuous for the future.");
      } else {
        const items = [
          ["Choose the sentence that describes a future arrangement.", "We are meeting the guide at the gate at 8 tomorrow."],
          ["Choose the sentence that describes a future arrangement.", "My friends are presenting their project next Monday."],
          ["Choose the sentence that describes a future arrangement.", "The class is visiting the power station this Friday."],
          ["Choose the sentence that describes a future arrangement.", "I am having a discussion with my teacher after school tomorrow."],
          ["Choose the sentence that describes a future arrangement.", "They are travelling to the solar farm next week."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["We meeting the guide tomorrow.", "My friends is presenting next Monday.", "The class visit the station next Friday."], "Use be + V-ing and a future time expression for an arrangement.");
      }
    } else if (topic === "travel") {
      if (stage === 0) {
        const items = [
          ["At 8 tomorrow, I ___ to Da Nang.", "will be travelling"],
          ["This time next week, they ___ a new city.", "will be exploring"],
          ["At noon tomorrow, we ___ on the train.", "will be sitting"],
          ["At 9 p.m., Mai ___ to her family.", "will be talking"],
          ["This time tomorrow, Nam ___ across the country.", "will be flying"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["travel", "will travel", "will travelling"], "Future continuous is will be + V-ing for an action in progress at a future time.");
      } else if (stage === 1) {
        const items = [
          ["This suitcase belongs to me. It is ___.", "mine"],
          ["Those tickets belong to you. They are ___.", "yours"],
          ["The blue backpack belongs to Lan. It is ___.", "hers"],
          ["The passports belong to us. They are ___.", "ours"],
          ["The map belongs to the boys. It is ___.", "theirs"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["my", "your", "our"], "Possessive pronouns replace a possessive adjective and noun.");
      } else if (stage === 2) {
        const items = [
          ["At 10 a.m. tomorrow, the tourists ___ the old town.", "will be visiting"],
          ["This time next month, I ___ around Japan.", "will be travelling"],
          ["At midnight, she ___ on the plane.", "will be sleeping"],
          ["At 4 p.m., we ___ for the bus.", "will be waiting"],
          ["This time tomorrow, they ___ the museum.", "will be exploring"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["are visit", "will visiting", "will be visit"], "Use will be followed by the -ing form for an action in progress in the future.");
      } else {
        const items = [
          ["Choose the correct sentence.", "At this time tomorrow, we will be flying to Singapore."],
          ["Choose the correct sentence.", "The red suitcase is hers, and the blue one is mine."],
          ["Choose the correct sentence.", "Will they be staying at the hotel next weekend?"],
          ["Choose the correct sentence.", "Those travel documents are theirs."],
          ["Choose the correct sentence.", "At 7 tomorrow evening, he will be having dinner."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["We will flying tomorrow.", "The red suitcase is her.", "Will they staying at the hotel?"], "Check will be + V-ing and use possessive pronouns without a following noun.");
      }
    } else if (topic === "countries") {
      if (stage === 0) {
        const items = [
          ["Canberra is ___ capital of Australia.", "the"],
          ["She is ___ English teacher at my school.", "an"],
          ["They visited ___ United Kingdom last year.", "the"],
          ["He wants to study at ___ university in Canada.", "a"],
          ["___ Pacific Ocean lies between Asia and America.", "The"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["a", "an", "the", "no article"].filter((choice) => choice !== answer).slice(0, 3), "Use the for unique things and many country names with a plural or united form; use a/an for a singular countable noun.");
      } else if (stage === 1) {
        const items = [
          ["People speak ___ English in Australia.", "no article"],
          ["We saw ___ Big Ben when we visited London.", "no article"],
          ["She lives in ___ United States.", "the"],
          ["He ate ___ apple from the market.", "an"],
          ["They crossed ___ Atlantic Ocean by ship.", "the"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["a", "an", "the"].filter((choice) => choice !== answer).slice(0, 3), "Use no article for a language in general; use the with unique places and some country names.");
      } else if (stage === 2) {
        const items = [
          ["___ New Zealand is an island country.", "No article"],
          ["We visited ___ Tower of London.", "the"],
          ["He wants to learn ___ English.", "no article"],
          ["They crossed ___ River Thames.", "the"],
          ["She is ___ Australian student.", "an"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["a", "an", "the", "no article"].filter((choice) => choice.toLowerCase() !== answer.toLowerCase()).slice(0, 3), "Use articles according to whether the noun is specific, unique, countable or a language/country name.");
      } else {
        const items = [
          ["Choose the correct sentence.", "The United Kingdom is made up of four countries."],
          ["Choose the correct sentence.", "English is spoken in many countries."],
          ["Choose the correct sentence.", "The River Thames flows through London."],
          ["Choose the correct sentence.", "She is an American student."],
          ["Choose the correct sentence.", "We visited Australia in July."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["The Australia is a country.", "She is a American student.", "English is spoken in the many countries."], "Use the correct article with country names, languages and singular countable nouns.");
      }
    } else {
      throw new Error(`Chưa có bộ câu hỏi cho Unit Tiếng Anh 7: ${topic}`);
    }

    const options = [correct, ...wrong].map(String);
    if (options.length !== 4 || new Set(options).size !== 4) {
      throw new Error(`Lựa chọn không hợp lệ: e7-u${unitIndex + 1}-q${index + 1}`);
    }
    return q(
      `e7-u${String(unitIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`,
      levels[index],
      prompt,
      options,
      0,
      explanation
    );
  }

  const lessons = curriculum.map(([title, theory, topic], unitIndex) => ({
    id: `tienganh7-unit-${unitIndex + 1}`,
    title: `Unit ${unitIndex + 1}: ${title}`,
    theory,
    exercises: Array.from({ length: 20 }, (_, index) =>
      makeQuestion(unitIndex, topic, index)
    )
  }));
  const course = {
    title: "Tiếng Anh 7 · Global Success",
    lessons,
    exams: [
      { id: "e7-15p", type: "15p", title: "15-minute test · English 7", duration: 15, questionIds: ["e7-u01-q01", "e7-u04-q02", "e7-u06-q03", "e7-u08-q04", "e7-u11-q05"], rubric: "Each correct answer earns 2 points; total 10 points." },
      { id: "e7-giuaki", type: "giuaki", title: "Mid-term test · English 7", duration: 45, questionIds: ["e7-u02-q11", "e7-u05-q12", "e7-u07-q13", "e7-u09-q14", "e7-u12-q15"], rubric: "Each correct answer earns 2 points; total 10 points." },
      { id: "e7-cuoiki", type: "cuoiki", title: "End-of-term test · English 7", duration: 60, questionIds: ["e7-u03-q16", "e7-u06-q17", "e7-u08-q18", "e7-u10-q19", "e7-u12-q20"], rubric: "Each correct answer earns 2 points; total 10 points. Review the explanation after submitting." }
    ]
  };
  register(7, "tienganh", course);
})();
