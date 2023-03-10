//mock database meant to store array of envelopes
//each envelope object has: id,title,and budget
const envelopeArray =  [
    {
      id: 1,
      title: "Rent",
      budget: 1000,
    },
    {
      id: 2,
      title: "Groceries",
      budget: 300,
    },
    {
      id: 3,
      title: "Entertainment",
      budget: 400,
    },
];

//used for creating new envelope
const nextIndex = () => {
    return envelopeArray.length + 1;
};
//check if id is in envelopeArray
const findById = (id) => {
  const record = envelopeArray.find((element) => element.id === parseInt(id));
  if(!record) {
    console.log("Envelope Not Found");
  }
  return record;
};
//remove object from envelopeArray
const deleteById = (id) => {
  const record = findById(id);
  if(record){
    const index = envelopeArray.indexOf(record);
    envelopeArray.splice(index,1);
    console.log(envelopeArray);
    console.log("Envelope deleted")
  }
  return record;
};
//edit title and/or budget of envelopes in envelopeArray
const updateDb = (title, budget, id) => {
  const record = findById(id);
  
  if(record){
    //if title or budget is undifined dont update 
    if(title != undefined){
      console.log("Title Appended")
      record.title = title;
    }
    if(budget != undefined){
      console.log("Budget Appended")
      record.budget = parseInt(budget);
    }
  }
  return record;
}

//move portion/all of budget in one envelope to another
const transferEnvelope = (fromId, toId, amount) => {
  const from = findById(fromId);
  const to = findById(toId);

  if(from && to) {
    //budget cannot be less than zero
    if(from.budget > amount){
      from.budget -= amount;
      to.budget += amount;
      console.log("Transfer successful");
    }
    if(from.budget < amount){
      to.budget += from.budget;
      from.budget -= from.budget;     
      console.log("Transfering all of envelope");
    }
    
  }
  return to;
}
module.exports = {envelopeArray, nextIndex, findById, deleteById,updateDb,transferEnvelope};
