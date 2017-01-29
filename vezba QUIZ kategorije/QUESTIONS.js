function Question (text,options,answer,points,category) {
  this.text = text;
  this.options = options;
  this.answer = answer;
  this.points = points;
  this.category = category;
}


var questions = [
new Question('programming: OOP jezik je?',['JS','CSS','AJAX','C'],'JS',5,'programming'),
new Question('programming: Array je u prevodu?',['nit','niz','klasa','objekat'],'niz',7,'programming'),
new Question('brojevi: prvi savrsen broj',['1','3','4','6'],'6',10,'brojevi'),
new Question('boje: boja neba',['zuta','bela','plava','zelena'],'plava',5,'boje'),
new Question('programming: OOP jezik je?',['fortran','PHP','basic','pascal'],'PHP',10,'programming'),
new Question('brojevi: prvi dvocifren broj',['10','3','4','6'],'10',5,'brojevi'),
new Question('boje: boja trave',['zuta','bela','plava','zelena'],'zelena',10,'boje'),
new Question('boje: boja zemlje',['zuta','crvena','braon','zelena'],'braon',5,'boje')
];

// var questions=[];
