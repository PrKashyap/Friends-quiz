var username = prompt("What is your name?");

console.log("Hi " + username + " !");
let score = 0;

var highScore = [
  {
    name: "Prasansha",
    score: 5,
  },
  {
    name: "Pragya",
    score: 6,
  },
];

let arr = [
  {
    ques: `Where do Rachel and Ross go on their first date?
     a) The cinema
     b) Ross museum
     c) Central Perk
     d) The Empire State Building`,

    ans: "b",
  },

  {
    ques: `What's the first thing Ross says at the beginning of the opening episode?

   a) 'Has anyone seen my fossil collection?'
   b) 'How YOU doin?'
   c) 'Could I be wearing any more clothes?'
   d) 'Hi..' `,
    ans: "a",
  },

  {
    ques: `What pet did Ross own?

  a)  A dog named Keith
  b)  A rabbit called Lancelot
  c)  A monkey named Marcel
  d)  A lizard named Alistair`,
    ans: "c",
  },

  {
    ques: `What song is Phoebe best known for?

  a) Smelly Cat
  b) Smelly Dog
  c) Smelly Rabbit
  d) Smelly Worm`,
    ans: "a",
  },

  {
    ques: `What does Joey never share?

  a)His books
  b)His information
  c)His food
  d)His DVDs`,
    ans: "c",
  },

  {
    ques: `Which Friends character plays Dr. Drake Ramoray on the show 
 Days Of Our Lives?

  a)Ross Geller
  b)Pete Becker
  c)Eddie Menuek
  d)Joey Tribbiani`,
    ans: "d",
  },

  {
    ques: `What's the name of the grumpy person who works at the coffee shop?

a)Herman
b)Gunther
c)Frasier
d)Eddie`,
    ans: "b",
  },

  {
    ques: `What hangs on Monica's purple door?

a)A key hook
b)A coat hook
c)A yellow picture frame
d)A cap`,
    ans: "c",
  },

  {
    ques: `What's the title of the Friends theme song?

a)I'll Be There For Them
b)I'll Be There For Those
c)I'll Be There For You
d)I'll Be There For That`,
    ans: "c",
  },
];

let arr2 = [
  {
    ques: `What is Janice most likely to say?

a)Talk to the hand!
b)Get me a coffee!
c)Oh... my... God!
d)No way!`,
    ans: "c",
  },
  {
    ques: `What job did Chandler do?

a)Data processor
b)Stand-up comedian
c)Journalist
d)Social media influencer`,

    ans: "a",
  },

  {
    ques: `What is Chandler's middle name?

a)Muriel
b)Jason
c)Kim
d)Zachary`,

    ans: "a",
  },
];

function questonaire(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].ques);
    var ans = prompt("What is your answer? ");

    if (ans == arr[i].ans) {
      console.log("Right!");
      score = score + 1;
      console.log(score);
    } else {
      console.log("Wrong!");
      score = score - 1;
      console.log(score);
    }
  }
}

questonaire(arr);

console.log("Your total score is " + score);
console.log("Checkout the high scores:");

for (let i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " " + highScore[i].score);
  console.log("\n");
}

function levelTwo(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i].ques);
    var ans = prompt("What is your answer? ");

    if (ans == arr[i].ans) {
      console.log("Right!");
      score = score + 1;
      console.log(score);
    } else {
      console.log("Wrong!");
      score = score - 1;
      console.log(score);
    }
  }
}

if (score > 5) {
  console.log("You have entered Level 2");
  levelTwo(arr2);
} else {
  console.log("You have not cleared for Level 2");
}
