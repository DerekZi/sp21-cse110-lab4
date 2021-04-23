let student={
    name: 'Dadian',
    major: 'CS',
    'Grad Year':'2022',
    greeting:function(){
        console.log('Hello');
    },
    'Favorite prof':{
        name:'a',
        course:'b',
    },
    courseLoad:['b','c','d']};
    console.log(student.name);
    console.log(student['Grad Year']);
    console.log(student['Favorite prof'].name);
    console.log(student.courseLoad[0]);
    