// Created by Tyler Stephenson April 21st 2025

let t;

let assignmentOperators;

//----------------------------------------------------------
// PREPARING HASH TABLE OF WHAT VALUES MEAN WHAT
//----------------------------------------------------------

assignmentOperators = new Map();

/**
 * Maps L-system symbols (e.g., F, +, [, ]) to Turtle command indices.
 * Turtle uses this mapping to interpret the generated string.
 */

assignmentOperators.set("F", 0);
assignmentOperators.set("G", 0);
assignmentOperators.set("1", 0);
assignmentOperators.set("0", 0);
assignmentOperators.set("A", 0); //overwritten in hilberts curve
assignmentOperators.set("B", 2); //overwritten in hilberts curve
assignmentOperators.set("+", 3);
assignmentOperators.set("-", 4);
assignmentOperators.set("[", 5); //default values but these are changed in fern
assignmentOperators.set("]", 6); //default values but these are changed in fern
assignmentOperators.set("X", 7); //do nothing


function setup() {
  createCanvas(800, 600);
  background(255);
  stroke(0);

  //example2(10)
  //example3(1)
  //example4(4)
  //example5(1)
  //example6(5)
  example7(6)
  //hilbert(1)
  //myFractal(1)
  
  //bonusCoolOne(4)
  
}

function example2(stage) {
  resetMatrix();
  //BINARY TREE

  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(width / 2, height);

  t = new Turtle();

  let binTree = new LSystem("0", 45);

  binTree.distance = 500/(2**stage*4/5);

  binTree.addRule("1", "11");
  binTree.addRule("0", "1[0]0");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  binTree.processToStage(stage);

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(binTree);
  
  binTree.printDetails()
  
  greatReset()
}

function example3(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(45, height/2);
  rotate(PI / 2);

  t = new Turtle();

  let cantorSet = new LSystem("A", 0);

  cantorSet.distance = 700/(3**stage);

  cantorSet.addRule("A", "ABA");
  cantorSet.addRule("B", "BBB");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  cantorSet.processToStage(stage);
  cantorSet.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(cantorSet);
  greatReset()
}

function example4(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(width - 45, height - height / 4);
  rotate(-PI / 2);

  t = new Turtle();

  let koch = new LSystem("F", 90);
  koch.distance = 700/(3**stage);

  koch.addRule("F", "F+F-F-F+F");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  koch.processToStage(stage);
  koch.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(koch);
  greatReset()
}

function example5(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(100, height - 30);
  rotate(PI / 2);

  t = new Turtle();

  let sierpin = new LSystem("F-G-G", 120);
  
  sierpin.distance = 600/(2**stage)

  sierpin.addRule("G", "GG");
  sierpin.addRule("F", "F-G+F+G-F");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  sierpin.processToStage(stage);
  sierpin.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(sierpin);
  greatReset()
}

function example6(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(width/2, height/2);

  t = new Turtle();

  let dragon = new LSystem("F", 90);
  
  dragon.distance = (600/(1.5**((stage+1))))

  dragon.addRule("F", "F+G");
  dragon.addRule("G", "F-G");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  dragon.processToStage(stage);
  dragon.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(dragon);
  greatReset()
}

function example7(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(100, height - 20);

  t = new Turtle();

  let plant = new LSystem("-X", 25);

  //Fern has different views on these operators.

  assignmentOperators.set("+", 4);
  assignmentOperators.set("-", 3);
  assignmentOperators.set("[", 8);
  assignmentOperators.set("]", 9);

  plant.addRule("X", "F+[[X]-X]-F[-FX]+X");
  plant.addRule("F", "FF");

  plant.distance = 400/(2.17**stage);

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  plant.processToStage(stage);
  plant.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(plant);
  greatReset()
}

function hilbert(stage) {
  resetMatrix();
  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(125, height - 30);

  assignmentOperators.set("A", 7); //overwritten to do nothing
  assignmentOperators.set("B", 7); //overwritten to do nothing

  t = new Turtle();

  let hillbyCurve = new LSystem("A", 90);

  hillbyCurve.addRule("A", "+BF-AFA-FB+");
  hillbyCurve.addRule("B", "-AF+BFB+FA-");

  hillbyCurve.distance = 700/(2.1**stage);

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  hillbyCurve.processToStage(stage);
  hillbyCurve.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(hillbyCurve);
  greatReset()
}

function bonusCoolOne(stage) {
  
  resetMatrix();

  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(width / 2, height - 25);

  t = new Turtle();

  let bigBush = new LSystem("F", 35);
  bigBush.distance = 550/(3**stage);
  
  assignmentOperators.set("+", 4);
  assignmentOperators.set("-", 3);
  assignmentOperators.set("[", 8);
  assignmentOperators.set("]", 9);

  bigBush.addRule("F", "F[+FF][-FF]F[-F][+F]F");
  //bigBush.addRule("+", "+F[F+]")

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  bigBush.processToStage(stage);
  bigBush.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(bigBush);
  greatReset()
}

function myFractal(stage) {
  // https://paulbourke.net/fractals/lsys/
  // Specifically Crystal by Paul Bourke
  
  resetMatrix();

  //---------------------------------------------------------------------------
  // SETUP
  //---------------------------------------------------------------------------

  // put the turtle where we want it
  translate(width / 6 + 10, height - 50);
  t = new Turtle();

  let crystal = new LSystem("F+F+F+F", 90);
  crystal.distance = 500/(3**stage);

  crystal.addRule("F", "FF+F++F+F");

  //---------------------------------------------------------------------------
  // CREATE THE STRING
  //---------------------------------------------------------------------------

  crystal.processToStage(stage);
  crystal.printDetails()

  //---------------------------------------------------------------------------
  // PROCESS INTO AN IMAGE
  //---------------------------------------------------------------------------

  t.process(crystal);
  greatReset()
}

function greatReset(stage) {
  assignmentOperators.set("F", 0);
  assignmentOperators.set("G", 0);
  assignmentOperators.set("1", 0);
  assignmentOperators.set("0", 0);
  assignmentOperators.set("A", 0); //overwritten in hilberts curve
  assignmentOperators.set("B", 2); //overwritten in hilberts curve
  assignmentOperators.set("+", 3);
  assignmentOperators.set("-", 4);
  assignmentOperators.set("[", 8); //default values but these are changed in fern
  assignmentOperators.set("]", 9); //default values but these are changed in fern
  assignmentOperators.set("X", 7); //do nothing

}

class LSystem {
  constructor(axiom, angle) {
    this.axiom = axiom;
    this.distance = 5;
    this.angle = angle;
    this.rules = [];
    this.startingAxiom = axiom;
  }
  
  printDetails() {
    print("Axiom: " + this.startingAxiom);
    print("Angle: " + this.angle)
    print("Forwards: " + this.gatherForwards())
    print("Rules: ")
    for(let i = 0; i < this.rules.length; i++) {
      print(this.rules[i][0] + " --> " + this.rules[i][1])
    }
    print("Current String: ")
    if (this.axiom.length > 10000) {
      print(this.axiom.length);
    } else {
      print(this.axiom);
    }
    
  }
          
  gatherForwards() {
      let result = "";
    
      let usedForward = new Set();
    
      for(let i = 0; i < this.rules.length; i++) {
        let assigned = assignmentOperators.get(this.rules[i][0])
        let operator = this.rules[i][0]
        if(assigned == 0 && !(usedForward.has(this.rules[i][0]))) {
           usedForward.add(this.rules[i][1])
          result += this.rules[i] + " ";
           }
      }
    
    return result;
    }


  addRule(character, replacement) {
    this.rules.push([character, replacement]);
  }

  applyRules() {
    //scan the current string, and if a character
    // has a replacement rule, apply that rule.
    // If a character doesn't have a replacement rule,
    // keep it.
    //Suggestion . . .
    let result = ""; // build you new string here
    let found = false;

    for (let i = 0; i < this.axiom.length; i++) {
      let value = this.axiom[i];
      for (let ruleIndex = 0; ruleIndex < this.rules.length; ruleIndex++) {
        if (value == this.rules[ruleIndex][0]) {
          result += this.rules[ruleIndex][1];
          found = true;
        }
      }
      if (!found) {
        result += value;
      }
      found = false;
    }

    this.axiom = result;
  }

  processToStage(stage) {
    for (let i = 0; i < stage; i++) {
      this.applyRules();
    }
    let result = this.axiom;
    
  }
}

// our turtle is always at (0, 0), and facing
// the -y axis.
class Turtle {
  constructor() {
    this.penDown = true;
    this.commandArray = [];

    this.commandArray.push(this.fd.bind(this));
    this.commandArray.push(this.bk.bind(this));
    this.commandArray.push(this.forwardPU.bind(this));
    this.commandArray.push(this.rt.bind(this));
    this.commandArray.push(this.lt.bind(this));
    this.commandArray.push(this.pu.bind(this));
    this.commandArray.push(this.pd.bind(this));
    this.commandArray.push(this.nada.bind(this));
  }

  process(inputModel) {
    let axiomList = inputModel.axiom;
    let angle = inputModel.angle;
    for (let i = 0; i < axiomList.length; i++) {
      let commandIndex = assignmentOperators.get(axiomList[i]);
      if (commandIndex < 3) {
        this.commandArray[commandIndex](inputModel.distance);
      } else if (commandIndex == 5) {
        push();
        this.lt(inputModel.angle);
      } else if (commandIndex == 6) {
        pop();
        this.rt(inputModel.angle);
      } else if (commandIndex == 8) {
        push();
      } else if (commandIndex == 9) {
        pop();
      } else {
        this.commandArray[commandIndex](inputModel.angle);
      }
    }
  }

  pu() {
    this.penDown = false;
  }

  pd() {
    this.penDown = true;
  }

  fd(d) {
    if (this.penDown) {
      line(0, 0, 0, -d);
    }
    translate(0, -d);
  }

  bk(d) {
    this.fd(-d);
  }

  rt(a) {
    rotate(radians(a));
  }

  lt(a) {
    this.rt(-a);
  }

  forwardPU(d) {
    this.pu();
    this.fd(d);
    this.pd();
  }

  nada() {
    //doing nothing
  }
}
