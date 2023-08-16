function Perceptron(no, learningRate = 0.00001) {

// Set Initial Values
this.learnc = learningRate;
this.bias = 1;

// Compute Random Weights
this.weights = [];
for (let i = 0; i <= no; i++) {
  this.weights[i] = Math.random() * 2 - 1;
}

// End Perceptron Object
}


console.log (Perceptron(111, 111))