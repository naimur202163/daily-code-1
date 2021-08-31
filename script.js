const students={
    name:'Naimur RAhman D',
    class:'nine',
    age:32,
    sex:"male",
    bestFriendInfo:{
        name:"Rony",
        class:"nine",
        Roll:12,

    },
    subjects:['Bangla','English','Maths'],
    takeExam:function student(){
        console.log(this.name,`taking Exam`)
    },

};


console.log('hello World')

students.takeExam('Naimur Rahman D');

