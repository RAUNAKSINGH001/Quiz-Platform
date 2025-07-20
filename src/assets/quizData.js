const quizData = {
  machineLearning: [
    {
      question:
        "What is the primary goal of supervised learning in machine learning?",
      options: [
        "To predict outcomes for new data based on labeled training data",
        "To cluster data into groups without labels",
        "To reduce the dimensionality of the dataset",
        "To generate new data samples",
      ],
      answer: "To predict outcomes for new data based on labeled training data",
    },
    {
      question:
        "Which algorithm is commonly used for classification tasks in machine learning?",
      options: [
        "K-Means Clustering",
        "Linear Regression",
        "Logistic Regression",
        "Principal Component Analysis",
      ],
      answer: "Logistic Regression",
    },
    {
      question: "What is overfitting in the context of machine learning?",
      options: [
        "When a model performs well on training data but poorly on unseen data",
        "When a model is too simple to capture patterns",
        "When a model is trained on too little data",
        "When a model is trained without validation",
      ],
      answer:
        "When a model performs well on training data but poorly on unseen data",
    },
    {
      question:
        "Which of the following is a common technique to prevent overfitting?",
      options: [
        "Increasing model complexity",
        "Regularization",
        "Reducing training data",
        "Ignoring validation sets",
      ],
      answer: "Regularization",
    },
    {
      question:
        "What does the term 'gradient descent' refer to in machine learning?",
      options: [
        "A method to cluster data points",
        "An optimization algorithm to minimize the loss function",
        "A technique to visualize high-dimensional data",
        "A way to preprocess input features",
      ],
      answer: "An optimization algorithm to minimize the loss function",
    },
    {
      question:
        "Which evaluation metric is commonly used for classification problems?",
      options: [
        "Mean Squared Error",
        "R-squared",
        "Accuracy",
        "Mean Absolute Error",
      ],
      answer: "Accuracy",
    },
    {
      question: "What is the purpose of a validation set in machine learning?",
      options: [
        "To train the model",
        "To test the final model performance",
        "To tune hyperparameters and prevent overfitting",
        "To preprocess the data",
      ],
      answer: "To tune hyperparameters and prevent overfitting",
    },
    {
      question:
        "Which of the following is an example of an unsupervised learning algorithm?",
      options: [
        "Support Vector Machine",
        "Decision Tree",
        "K-Means Clustering",
        "Linear Regression",
      ],
      answer: "K-Means Clustering",
    },
    {
      question: "What is the role of a loss function in machine learning?",
      options: [
        "To measure the accuracy of a model’s predictions",
        "To cluster similar data points",
        "To reduce the dimensionality of data",
        "To generate synthetic data",
      ],
      answer: "To measure the accuracy of a model’s predictions",
    },
    {
      question: "Which algorithm is best suited for text classification tasks?",
      options: [
        "K-Nearest Neighbors",
        "Naive Bayes",
        "DBSCAN",
        "Linear Regression",
      ],
      answer: "Naive Bayes",
    },
    {
      question: "What is the purpose of feature scaling in machine learning?",
      options: [
        "To increase the size of the dataset",
        "To normalize or standardize input features for better model performance",
        "To reduce the number of features",
        "To visualize data in lower dimensions",
      ],
      answer:
        "To normalize or standardize input features for better model performance",
    },
    {
      question:
        "What does the term 'epoch' mean in the context of neural networks?",
      options: [
        "The number of layers in the network",
        "One complete pass through the training dataset",
        "The learning rate of the model",
        "The size of the validation set",
      ],
      answer: "One complete pass through the training dataset",
    },
    {
      question:
        "Which of the following is a popular activation function in neural networks?",
      options: ["Sigmoid", "K-Means", "Gradient Boosting", "PCA"],
      answer: "Sigmoid",
    },
    {
      question:
        "What is the main advantage of using a Random Forest algorithm?",
      options: [
        "It is computationally inexpensive",
        "It reduces overfitting by averaging multiple decision trees",
        "It works only with numerical data",
        "It requires no preprocessing",
      ],
      answer: "It reduces overfitting by averaging multiple decision trees",
    },
    {
      question: "What is the purpose of cross-validation in machine learning?",
      options: [
        "To split the data into training and testing sets",
        "To evaluate model performance on different subsets of the data",
        "To increase the size of the dataset",
        "To preprocess the input features",
      ],
      answer: "To evaluate model performance on different subsets of the data",
    },
    {
      question:
        "Which of the following is a hyperparameter in a machine learning model?",
      options: [
        "Learning rate",
        "Model weights",
        "Input features",
        "Output predictions",
      ],
      answer: "Learning rate",
    },
    {
      question:
        "What is the main difference between supervised and unsupervised learning?",
      options: [
        "Supervised learning uses labeled data, while unsupervised learning does not",
        "Supervised learning is faster than unsupervised learning",
        "Unsupervised learning requires more data",
        "Supervised learning cannot handle numerical data",
      ],
      answer:
        "Supervised learning uses labeled data, while unsupervised learning does not",
    },
    {
      question:
        "What is the purpose of a confusion matrix in classification tasks?",
      options: [
        "To visualize the dataset",
        "To evaluate the performance of a classification model",
        "To reduce the number of features",
        "To cluster similar data points",
      ],
      answer: "To evaluate the performance of a classification model",
    },
    {
      question: "Which algorithm is commonly used for regression tasks?",
      options: [
        "K-Means Clustering",
        "Linear Regression",
        "Naive Bayes",
        "DBSCAN",
      ],
      answer: "Linear Regression",
    },
    {
      question: "What is the purpose of the bias term in a neural network?",
      options: [
        "To shift the activation function",
        "To reduce the number of layers",
        "To cluster data points",
        "To normalize input data",
      ],
      answer: "To shift the activation function",
    },
  ],
};

export default quizData;
