new Vue({
  el: "#app",
  data: {
    customQuestion: "",
    customAnswer: "",
    newCategory: "",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },

methods: {
        flip: function(index){
  this.cards[index].flipped=!this.cards[index].flipped;
},
  createCard: function(){
    this.cards.push({
      question:this.customQuestion,
      answer: this.customAnswer,
      category:this.newCategory,
      flipped:false
    });
    this.customQuestion="";
    this.customAnswer="";
  this.newCategory="";
  }   
}
});