(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["My New School", "School vocabulary: classroom, library, canteen, subject, uniform. Present simple describes routines: I/you/we/they + base verb; he/she/it + verb-s/-es. Frequency adverbs usually come before main verbs and after be.", "school"],
    ["My House", "Home vocabulary: bedroom, kitchen, bathroom, living room, furniture. Use 's for possession. There is + singular noun; there are + plural noun. Prepositions of place include in, on, under, next to, behind and between.", "house"],
    ["My Friends", "Describe people with words such as friendly, clever, helpful and funny. Present continuous describes actions happening now: am/is/are + V-ing. Add not for negatives and invert be to form questions.", "friends"],
    ["My Neighbourhood", "Vocabulary for places in town: market, hospital, park, museum and post office. Use comparative adjectives to compare two people or places: short adjective + -er, or more + long adjective + than.", "neighbourhood"],
    ["Natural Wonders of Viet Nam", "Nature vocabulary: island, cave, waterfall, mountain and forest. Use must/mustn't for rules. Countable nouns have singular/plural forms; use many with countable plurals and much with uncountable nouns.", "nature"],
    ["Our Tet Holiday", "Tet vocabulary: celebrate, decorate, visit, lucky money and special food. Use should/shouldn't for advice. Use will + base verb for predictions about the future.", "tet"],
    ["Television", "TV vocabulary: programme, channel, cartoon, viewer and remote control. Use and to add, but to contrast, so to show result and because to give a reason. Wh-words ask for specific information.", "television"],
    ["Sports and Games", "Sports vocabulary: badminton, football, swimming and chess. The past simple describes completed past actions. Regular verbs take -ed; learn irregular forms such as go-went, have-had and see-saw.", "sports"],
    ["Cities of the World", "City vocabulary: famous, beautiful, exciting and crowded. Use the + superlative to compare three or more things. Present perfect: have/has + past participle; use ever/never for experience.", "cities"],
    ["Our Houses in the Future", "Future-home vocabulary: smart home, solar energy, robot and automatic. Use will/won't + base verb for predictions; might + base verb expresses possibility.", "future-house"],
    ["Our Greener World", "Environmental vocabulary: recycle, reuse, reduce, rubbish and reusable. First conditional: If + present simple, will + base verb; it describes a possible future result.", "green"],
    ["Robots", "Robot vocabulary: helpful, intelligent, useful and automatic. Use can/could/be able to for ability. Form superlatives with -est for short adjectives and the most for long adjectives.", "robots"]
  ];
  const units = ["nhan-biet", "thong-hieu", "van-dung", "van-dung-cao"];

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

    if (topic === "school") {
      if (stage === 0) {
        const items = [
          ["We borrow books from the ___.", "library"],
          ["We have lessons in a ___.", "classroom"],
          ["We eat lunch in the ___.", "canteen"],
          ["A person who teaches students is a ___.", "teacher"],
          ["Maths and English are school ___.", "subjects"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["bedroom", "kitchen", "river"], "The word fits the school context in the sentence.");
      } else if (stage === 1) {
        const items = [
          ["My brother ___ to school at seven.", "goes"],
          ["Linh ___ English every day.", "studies"],
          ["Our teacher ___ the lesson clearly.", "explains"],
          ["Nam ___ breakfast before school.", "has"],
          ["The bus ___ near my house.", "stops"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["go", "going", "is go"], "A singular third-person subject takes the present simple -s/-es form.");
      } else if (stage === 2) {
        const items = [
          ["Choose the correct position: She ___ gets up early. (always)", "always"],
          ["Choose the correct sentence.", "He is usually friendly."],
          ["Choose the correct sentence.", "They often play football after school."],
          ["Choose the correct sentence.", "I am never late for class."],
          ["Choose the correct sentence.", "Mai sometimes reads in the library."]
        ];
        const [stem, answer] = pick(items);
        const wrong = answer === "always" ? ["gets always", "is always gets", "always is get"] :
          ["He usually is friendly.", "They plays often football.", "I never am late for class."];
        set(stem, answer, wrong, "Frequency adverbs usually go before a main verb and after the verb be.");
      } else {
        const items = [
          ["Choose the correct sentence.", "My friends are always helpful."],
          ["Choose the correct sentence.", "She goes to school by bus."],
          ["Choose the correct sentence.", "We have English on Mondays."],
          ["Choose the correct sentence.", "He doesn't like History."],
          ["Choose the correct question.", "How often do you read books?"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["She go to school by bus.", "He don't likes History.", "How often you do read books?"], "Check subject-verb agreement, auxiliary verbs and adverb position.");
      }
    } else if (topic === "house") {
      if (stage === 0) {
        const items = [
          ["This is ___ bedroom. (Lan)", "Lan's"],
          ["The books belong to the boys. They are the ___ books.", "boys'"],
          ["This is ___ house. (my parents)", "my parents'"],
          ["The room belongs to Tom. It is ___.", "Tom's room"],
          ["The toys belong to the children. They are the ___ toys.", "children's"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Lans", "Lan is", "Lans'"], "Use the possessive form to show who owns something.");
      } else if (stage === 1) {
        const items = [
          ["The cat is ___ the table. (below it)", "under"],
          ["The picture is ___ the wall.", "on"],
          ["The shoes are ___ the bed, not on it.", "under"],
          ["The bank is ___ the school and the park.", "between"],
          ["The sofa is ___ the television, facing it.", "opposite"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["in", "on", "under", "behind", "between"].filter((choice) => choice !== answer).slice(0, 3), "The preposition describes the stated position.");
      } else if (stage === 2) {
        const items = [
          ["There ___ a kitchen and two bedrooms.", "is"],
          ["There ___ three chairs in the dining room.", "are"],
          ["The lamp is ___ the desk, not beneath it.", "on"],
          ["My room is ___ the bathroom and my sister's room.", "between"],
          ["The garden is ___ the house; it is at the back.", "behind"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["is", "are", "on", "between", "behind", "in", "under"].filter((choice) => choice !== answer).slice(0, 3), "Use there is with a singular subject and there are with plural subjects; choose the preposition matching the clue.");
      } else {
        const items = [
          ["Choose the correct sentence.", "There is a desk next to the window."],
          ["Choose the correct sentence.", "There are two bathrooms in our house."],
          ["Choose the correct sentence.", "My mother's room is upstairs."],
          ["Choose the correct sentence.", "The clock is on the wall."],
          ["Choose the correct sentence.", "There is a sofa between the two chairs."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["There are a desk next to the window.", "There is two bathrooms.", "The clock is under the wall."], "The sentence uses the correct possessive, there is/are form or preposition.");
      }
    } else if (topic === "friends") {
      if (stage === 0) {
        const items = [
          ["Look! Mai ___ to her friend now.", "is talking"],
          ["They ___ basketball at the moment.", "are playing"],
          ["I ___ a message right now.", "am writing"],
          ["The boys ___ their homework now.", "are doing"],
          ["Nam ___ a picture at present.", "is drawing"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["talks", "are talk", "is talked"], "Now, at the moment and right now signal present continuous: be + V-ing.");
      } else if (stage === 1) {
        const items = [
          ["She ___ (not / listen) to music now.", "isn't listening"],
          ["We ___ (not / watch) TV at the moment.", "aren't watching"],
          ["I ___ (not / sleep) now.", "am not sleeping"],
          ["Tom ___ (not / run) in the park now.", "isn't running"],
          ["The children ___ (not / study) at present.", "aren't studying"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["doesn't listen", "isn't listen", "not watching"], "The present continuous negative uses am/is/are + not + V-ing.");
      } else if (stage === 2) {
        const items = [
          ["___ your friends ___ (swim) now?", "Are / swimming"],
          ["___ Lan ___ (read) at the moment?", "Is / reading"],
          ["What ___ you ___ (do) right now?", "are / doing"],
          ["___ I ___ (speak) too loudly?", "Am / speaking"],
          ["Where ___ the boys ___ (go) now?", "are / going"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Do / swim", "Is / swimming", "Are / swim"], "Questions in the present continuous put am/is/are before the subject.");
      } else {
        const items = [
          ["Choose the correct sentence for an action happening now.", "My friend is helping me with this exercise."],
          ["Choose the correct sentence for an action happening now.", "They are waiting for the bus."],
          ["Choose the correct sentence for an action happening now.", "I am learning a new song."],
          ["Choose the correct sentence for an action happening now.", "The dog is running after a ball."],
          ["Choose the correct sentence for an action happening now.", "We are having lunch at the moment."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["My friend helping me now.", "They is waiting for the bus.", "I am learn a new song."], "Use be + verb-ing for an action in progress.");
      }
    } else if (topic === "neighbourhood") {
      const comparisons = [
        ["The park is ___ (quiet) than the market.", "quieter"],
        ["This street is ___ (wide) than that one.", "wider"],
        ["The new shopping centre is ___ (modern) than the old one.", "more modern"],
        ["My neighbourhood is ___ (busy) than it was last year.", "busier"],
        ["This route is ___ (convenient) than the other route.", "more convenient"]
      ];
      const [stem, answer] = pick(comparisons);
      if (stage === 0) set(stem, answer, ["quietest", "more quietest", "as quiet"], "Use -er with many short adjectives and more with many longer adjectives.");
      else if (stage === 1) set(stem, answer, ["the quieter", "more quieter", "quiet"], "The comparative form is followed by than when comparing two things.");
      else if (stage === 2) {
        const items = [
          ["A is 5 minutes away; B is 15 minutes away. A is ___ than B.", "closer"],
          ["Road A has less traffic than Road B. Road A is ___ than Road B.", "less crowded"],
          ["The new library has more books than the old one. It is ___.", "better stocked"],
          ["The park is not as noisy as the station. The park is ___ than the station.", "quieter"],
          ["The market is farther from school. It is ___ than the shop.", "more distant"]
        ];
        const [question, correct] = pick(items);
        set(question, correct, ["the closest", "more crowdedest", "quietest"], "Choose a comparative adjective that matches the information given.");
      } else set("Choose the correctly formed comparative sentence.", `This neighbourhood is ${answer} than the next one.`,
        ["This neighbourhood is more quieter than the next one.", "This neighbourhood is the quiet than the next one.", "This neighbourhood is quietest than the next one."], "Do not use more with an adjective that already takes -er.");
    } else if (topic === "nature") {
      if (stage === 0) {
        const items = [
          ["You ___ keep the cave clean. It is a park rule.", "must"],
          ["You ___ leave rubbish on the beach.", "mustn't"],
          ["Visitors ___ follow the signs.", "must"],
          ["You ___ feed wild animals.", "mustn't"],
          ["We ___ protect the forest.", "must"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["must", "mustn't", "might", "are"].filter((choice) => choice !== answer).slice(0, 3), "Must expresses an obligation; mustn't expresses a prohibition.");
      } else if (stage === 1) {
        const items = [
          ["How ___ water do we need for the trip?", "much"],
          ["How ___ islands can you see?", "many"],
          ["We need some ___ for the picnic. (uncountable)", "rice"],
          ["There are a few ___ near the bay. (countable)", "caves"],
          ["We don't have ___ bottles of water.", "many"]
        ];
        const [stem, answer] = pick(items);
        if (answer === "caves") {
          set(stem, answer, ["cave", "much caves", "many cave"], "A few is followed by a countable plural noun.");
        } else if (answer === "rice") {
          set(stem, answer, ["rices", "many rice", "a rice"], "Rice is uncountable in this meaning; use some rice.");
        } else {
          set(stem, answer, ["many", "much", "a", "any"].filter((choice) => choice !== answer).slice(0, 3), "Use many with countable plural nouns and much with uncountable nouns.");
        }
      } else if (stage === 2) {
        const items = [
          ["There isn't ___ pollution in this clean area.", "much"],
          ["We saw ___ beautiful waterfalls on our trip.", "many"],
          ["You ___ touch the animals in the wildlife centre.", "mustn't"],
          ["You ___ take a map when you explore the cave.", "must"],
          ["How ___ luggage should we bring?", "much"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["many", "must", "are", "much"].filter((choice) => choice !== answer).slice(0, 3), "Match the modal or quantifier to the meaning and noun type.");
      } else {
        const items = [
          ["Choose the sentence that gives a correct rule and uses a countable noun.", "You mustn't take stones from the cave."],
          ["Choose the sentence with the correct quantifier.", "There isn't much water in the bottle."],
          ["Choose the sentence with the correct quantifier.", "How many beaches are there on the island?"],
          ["Choose the correct park rule.", "Visitors must keep to the marked path."],
          ["Choose the sentence with a correct uncountable noun.", "We need some information about the mountain."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["You mustn't to take stones.", "There isn't many water.", "How much beaches are there?"], "Check must/mustn't patterns and countable or uncountable nouns.");
      }
    } else if (topic === "tet") {
      if (stage === 0) {
        const items = [
          ["You ___ visit your grandparents at Tet. It is good advice.", "should"],
          ["You ___ stay up too late before the first day of school.", "shouldn't"],
          ["Children ___ say “Happy New Year” to their family.", "should"],
          ["You ___ spend all your lucky money at once.", "shouldn't"],
          ["We ___ help our parents decorate the house.", "should"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["should", "shouldn't", "will", "are"].filter((choice) => choice !== answer).slice(0, 3), "Should gives advice; shouldn't gives advice against an action.");
      } else if (stage === 1) {
        const items = [
          ["I think people ___ have a happy holiday.", "will"],
          ["It ___ rain during the holiday, I think.", "will"],
          ["Our family ___ visit Hue next Tet. (prediction)", "will"],
          ["Many people ___ travel home for Tet.", "will"],
          ["I believe the children ___ enjoy the festival.", "will"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["are", "did", "has"], "Will + base verb is used for a prediction about the future.");
      } else if (stage === 2) {
        const items = [
          ["Your room is untidy before Tet. You ___ clean it.", "should"],
          ["The fireworks are loud. Young children ___ stand too close.", "shouldn't"],
          ["We have many guests. We ___ prepare enough food.", "should"],
          ["The floor is wet. You ___ run across it.", "shouldn't"],
          ["Your grandparents are waiting. You ___ visit them.", "should"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["will", "are", "did"], "Choose should or shouldn't according to the situation.");
      } else {
        const items = [
          ["Choose the correct sentence.", "I think our family will have a wonderful Tet."],
          ["Choose the correct sentence.", "You shouldn't eat too many sweets."],
          ["Choose the correct sentence.", "They will visit their relatives tomorrow."],
          ["Choose the correct sentence.", "We should help clean the house."],
          ["Choose the correct sentence.", "She won't forget to buy flowers."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["She will visits her relatives.", "You should to help your parents.", "They won't goes home."], "After should, will and won't, use the base form of the verb.");
      }
    } else if (topic === "television") {
      if (stage === 0) {
        const items = [
          ["I like cartoons ___ they are funny.", "because"],
          ["The programme was short, ___ it was interesting.", "but"],
          ["We finished dinner, ___ we watched the news.", "so"],
          ["Mai likes music ___ films.", "and"],
          ["The TV is on, ___ nobody is watching it.", "but"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["because", "so", "and", "but", "or"].filter((x) => x !== answer).slice(0, 3), "Choose the conjunction that expresses the intended relationship.");
      } else if (stage === 1) {
        const items = [
          ["___ do you watch TV? — In the living room.", "Where"],
          ["___ is your favourite programme? — A cartoon.", "What"],
          ["___ do you watch the news? — At seven o'clock.", "When"],
          ["___ often does Nam watch films? — Twice a week.", "How"],
          ["___ is on TV tonight? — A football match.", "What"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Who", "Where", "How much", "When", "How"].filter((x) => x !== answer).slice(0, 3), "Choose the Wh-word that asks for the information in the answer.");
      } else if (stage === 2) {
        const items = [
          ["The film was exciting, ___ I watched it to the end.", "so"],
          ["I stayed home ___ it was raining.", "because"],
          ["The show is popular ___ my brother doesn't like it.", "but"],
          ["Would you like tea ___ coffee?", "or"],
          ["The programme is educational ___ entertaining.", "and"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["because", "but", "so", "and", "or"].filter((x) => x !== answer).slice(0, 3), "The conjunction links the clauses with the stated meaning.");
      } else {
        const items = [
          ["Choose the correct question for “I watch cartoons because they are funny.”", "Why do you watch cartoons?"],
          ["Choose the correct question for “The remote is on the table.”", "Where is the remote?"],
          ["Choose the correct question for “The programme starts at 8 p.m.”", "When does the programme start?"],
          ["Choose the correct question for “Lan watches TV twice a week.”", "How often does Lan watch TV?"],
          ["Choose the correct question for “A sports show is my favourite.”", "What is your favourite show?"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Why you watch cartoons?", "Where the remote is?", "How often Lan watches TV?"], "Use the correct Wh-word and auxiliary verb order in questions.");
      }
    } else if (topic === "sports") {
      if (stage === 0) {
        const items = [
          ["Yesterday, we ___ football after school.", "played"],
          ["Lan ___ badminton last Sunday.", "played"],
          ["I ___ my grandparents last weekend.", "visited"],
          ["They ___ a swimming competition yesterday.", "watched"],
          ["Nam ___ his room last night.", "cleaned"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["play", "plays", "playing"], "Past simple regular verbs usually end in -ed.");
      } else if (stage === 1) {
        const items = [
          ["We ___ to the sports centre yesterday.", "went"],
          ["She ___ a new racket last week.", "bought"],
          ["They ___ a great match on TV.", "saw"],
          ["I ___ a swimming lesson on Saturday.", "had"],
          ["He ___ home after the game.", "came"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["go", "goed", "goes"], "Use the irregular past form after a finished past-time expression.");
      } else if (stage === 2) {
        const items = [
          ["___ you ___ the match last night?", "Did / watch"],
          ["What ___ she ___ after school yesterday?", "did / do"],
          ["___ they ___ tennis on Sunday?", "Did / play"],
          ["Where ___ Nam ___ last weekend?", "did / go"],
          ["___ your team ___ the game?", "Did / win"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Do / watched", "Did / watched", "Were / play"], "Questions in the past simple use did + subject + base verb.");
      } else {
        const items = [
          ["Choose the correct negative sentence.", "We didn't go swimming yesterday."],
          ["Choose the correct sentence.", "Mai won the chess game last week."],
          ["Choose the correct question.", "Did you play basketball on Saturday?"],
          ["Choose the correct sentence.", "They were tired after the match."],
          ["Choose the correct sentence.", "He had a tennis lesson yesterday."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["We didn't went swimming.", "Did Mai won the game?", "They was tired after the match."], "Use did + base verb in questions and negatives; use was/were with be.");
      }
    } else if (topic === "cities") {
      if (stage === 0) {
        const items = [
          ["Tokyo is one of the ___ cities in the world. (large)", "largest"],
          ["This is the ___ museum in the city. (famous)", "most famous"],
          ["Mount Everest is the ___ mountain in the world. (high)", "highest"],
          ["It is the ___ building on this street. (modern)", "most modern"],
          ["This is the ___ park in our town. (beautiful)", "most beautiful"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["larger", "more largest", "largest than"], "Use the + superlative to compare one item with a whole group.");
      } else if (stage === 1) {
        const items = [
          ["Have you ever ___ London?", "visited"],
          ["She has never ___ sushi before.", "tried"],
          ["We have ___ finished our city project.", "already"],
          ["Has Tom arrived ___?", "yet"],
          ["They have lived here ___ 2020.", "since"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["visit", "visiting", "did visit"], "Present perfect uses have/has + past participle; choose the appropriate time word.");
      } else if (stage === 2) {
        const items = [
          ["This is the ___ city I have ever visited. (exciting)", "most exciting"],
          ["Have you ___ been to Singapore?", "ever"],
          ["We haven't seen the old town ___.", "yet"],
          ["My family has stayed here ___ three days.", "for"],
          ["Has she ___ tried local food?", "ever"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["more exciting", "since", "never yet"], "Use present perfect with the correct participle and time expression.");
      } else {
        const items = [
          ["Choose the correct sentence.", "Have you ever seen the Eiffel Tower?"],
          ["Choose the correct sentence.", "This is the oldest part of the city."],
          ["Choose the correct sentence.", "They have lived in Hue for five years."],
          ["Choose the correct sentence.", "She has never travelled abroad."],
          ["Choose the correct sentence.", "It is the most crowded market in town."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Have you ever saw the tower?", "This is the most old part.", "They have lived here since five years."], "Check the present perfect form, since/for and superlative structure.");
      }
    } else if (topic === "future-house") {
      if (stage === 0) {
        const items = [
          ["I think our future house ___ use solar energy.", "will"],
          ["The smart home ___ turn off the lights automatically.", "will"],
          ["People ___ live in more energy-efficient houses.", "will"],
          ["Our future home ___ have a robot helper.", "will"],
          ["Houses ___ use less electricity in the future.", "will"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["did", "has", "is"], "Use will + base verb for a prediction about the future.");
      } else if (stage === 1) {
        const items = [
          ["A future home ___ have a swimming pool, but I am not sure.", "might"],
          ["People ___ use smart devices to control lights.", "might"],
          ["My house ___ have a robot cleaner one day.", "might"],
          ["Some homes ___ produce their own electricity.", "might"],
          ["We ___ live under the sea in the future.", "might"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["mustn't", "did", "are"], "Might expresses possibility, not certainty.");
      } else if (stage === 2) {
        const items = [
          ["Choose the correct prediction: The house has solar panels.", "It will use sunlight to make electricity."],
          ["Choose the correct prediction: The lights are automatic.", "They will turn on when someone enters."],
          ["Choose the correct prediction: The robot is a home helper.", "It might help with simple housework."],
          ["Choose the correct prediction: The house saves water.", "It will use water more efficiently."],
          ["Choose the correct prediction: The house is very modern.", "It might have smart controls."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["It did use sunlight tomorrow.", "It will turns on automatically.", "It might to help at home."], "Use a future modal followed by the base verb and a logical prediction.");
      } else {
        const items = [
          ["Choose the grammatically correct sentence.", "People won't need to switch on the lights manually."],
          ["Choose the grammatically correct sentence.", "Our house might have an automatic kitchen."],
          ["Choose the grammatically correct sentence.", "Smart homes will save energy."],
          ["Choose the grammatically correct sentence.", "The robot won't do all the housework."],
          ["Choose the grammatically correct sentence.", "We might live in a more comfortable home."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Our house might has a robot.", "Smart homes will saves energy.", "The robot won't does the work."], "Will, won't and might are followed by the base form of a verb.");
      }
    } else if (topic === "green") {
      if (stage === 0) {
        const items = [
          ["If we recycle paper, we ___ fewer trees.", "will cut down"],
          ["If you leave rubbish on the ground, the park ___ dirty.", "will become"],
          ["If people use reusable bags, they ___ plastic waste.", "will reduce"],
          ["If we save water, there ___ more for everyone.", "will be"],
          ["If the school plants trees, the playground ___ greener.", "will look"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["would", "are", "did"], "First conditional uses if + present simple, then will + base verb.");
      } else if (stage === 1) {
        const items = [
          ["If it rains tomorrow, we ___ the clean-up outside.", "won't do"],
          ["If you ___ the tap, you will save water.", "turn off"],
          ["If people recycle cans, they ___ useful materials.", "will save"],
          ["Plants will grow well if they ___ enough water.", "get"],
          ["If we walk to school, we ___ less pollution.", "will make"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["will turn off", "got", "would save"], "Do not use will in the if-clause of the first conditional.");
      } else if (stage === 2) {
        const items = [
          ["The bin is full. If we don't empty it, rubbish ___.", "will overflow"],
          ["If Mai brings a reusable bottle, she ___ fewer plastic bottles.", "will use"],
          ["We will have cleaner air if cars ___ less smoke.", "produce"],
          ["If you sort the rubbish, recycling ___ easier.", "will be"],
          ["If people plant more trees, the city ___ greener.", "will become"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["would overflow", "will produce", "be"], "Use present simple in the if-clause and will + base verb in the result clause.");
      } else {
        const items = [
          ["Choose the correct first conditional sentence.", "If we use less plastic, we will protect the environment."],
          ["Choose the correct first conditional sentence.", "If it is sunny, we will walk to the park."],
          ["Choose the correct first conditional sentence.", "The river will be cleaner if people stop throwing rubbish into it."],
          ["Choose the correct first conditional sentence.", "If you turn off the lights, you will save electricity."],
          ["Choose the correct first conditional sentence.", "If everyone helps, the school will become greener."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["If we will use less plastic, we protect nature.", "If it is sunny, we walked to the park.", "The river be cleaner if people stop rubbish."], "The if-clause uses present simple; the result clause uses will + base verb.");
      }
    } else if (topic === "robots") {
      if (stage === 0) {
        const items = [
          ["A robot can ___ simple tasks.", "do"],
          ["Robots ___ help people in the future.", "can"],
          ["My robot is ___ than the old one. (intelligent)", "more intelligent"],
          ["This is the ___ robot in the competition. (fast)", "fastest"],
          ["A robot ___ carry heavy boxes. (ability)", "can"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["does", "to do", "doing"], "Can is followed by the base verb; use the correct adjective form for comparisons.");
      } else if (stage === 1) {
        const items = [
          ["When she was five, she ___ already read simple books.", "could"],
          ["The robot is ___ to recognise my voice.", "able"],
          ["This is the ___ useful robot in the home. (useful)", "most"],
          ["My new robot is ___ than my old one. (good)", "better"],
          ["The robot ___ clean the room yesterday. (past ability)", "could"]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["can", "more", "gooder"], "Could describes past ability; be able to follows a form of be; long adjectives use most.");
      } else if (stage === 2) {
        const items = [
          ["Choose the correct sentence.", "Robots can help people with housework."],
          ["Choose the correct sentence.", "This is the most intelligent robot in the lab."],
          ["Choose the correct sentence.", "My robot was able to move the box yesterday."],
          ["Choose the correct sentence.", "The blue robot is faster than the red one."],
          ["Choose the correct sentence.", "Robots could do simple jobs in the past."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["Robots can helps people.", "This is the intelligenter robot.", "My robot able move the box."], "Use modal + base verb, be able to + verb and the correct comparative or superlative.");
      } else {
        const items = [
          ["Choose the correct sentence about ability and comparison.", "The most helpful robot can carry the books."],
          ["Choose the correct sentence about past ability.", "My grandfather could repair simple machines."],
          ["Choose the correct sentence about possibility.", "The robot might be able to speak Vietnamese."],
          ["Choose the correct sentence about a superlative.", "This is the fastest robot in the team."],
          ["Choose the correct sentence about ability.", "The robot was able to find the way."]
        ];
        const [stem, answer] = pick(items);
        set(stem, answer, ["The most helpful robot can carries books.", "My grandfather could repaired machines.", "This is the more fastest robot."], "Check modal verb patterns, be able to and superlative forms.");
      }
    } else {
      throw new Error(`Chưa có bộ câu hỏi cho Unit Tiếng Anh 6: ${topic}`);
    }

    const options = [correct, ...wrong].map(String);
    if (options.length !== 4 || new Set(options).size !== 4) {
      throw new Error(`Lựa chọn không hợp lệ: e6-u${unitIndex + 1}-q${index + 1}`);
    }
    return q(
      `e6-u${String(unitIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`,
      levels[index],
      prompt,
      options,
      0,
      explanation
    );
  }

  const lessons = curriculum.map(([title, theory, topic], unitIndex) => ({
    id: `tienganh6-unit-${unitIndex + 1}`,
    title: `Unit ${unitIndex + 1}: ${title}`,
    theory,
    exercises: Array.from({ length: 20 }, (_, index) =>
      makeQuestion(unitIndex, topic, index)
    )
  }));
  const course = {
    title: "Tiếng Anh 6 · Global Success",
    lessons,
    exams: [
      { id: "e6-15p", type: "15p", title: "15-minute test · English 6", duration: 15, questionIds: ["e6-u01-q01", "e6-u04-q02", "e6-u06-q03", "e6-u08-q04", "e6-u11-q05"], rubric: "Each correct answer earns 2 points; total 10 points." },
      { id: "e6-giuaki", type: "giuaki", title: "Mid-term test · English 6", duration: 45, questionIds: ["e6-u02-q11", "e6-u05-q12", "e6-u07-q13", "e6-u09-q14", "e6-u12-q15"], rubric: "Each correct answer earns 2 points; total 10 points. Check grammar and context." },
      { id: "e6-cuoiki", type: "cuoiki", title: "End-of-term test · English 6", duration: 60, questionIds: ["e6-u03-q16", "e6-u06-q17", "e6-u08-q18", "e6-u10-q19", "e6-u12-q20"], rubric: "Each correct answer earns 2 points; total 10 points. Answers include concise explanations." }
    ]
  };
  register(6, "tienganh", course);
})();
