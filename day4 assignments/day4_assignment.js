var languages=[
    {
        name:'JavaScript',
        creater:'Netscape',
        First_appeared:1995,
        latest_version:'ECMAScript2021'
    },

    {
        name:'PHP',
        creater:'Rasmus_Lerdorf',
        First_appeared:1995,
        latest_version:8
    },

    {
        name:'C++',
        creater:'Bjarne_Stroustrup',
        First_appeared:1985,
        latest_version:20
    },

    {
        name:'Java' ,
        creater:'James Gosling',
        First_appeared:1995,
        latest_version:17
    },

    {
        name:'Python' ,
        creater:'Guido van Rossum',
        First_appeared:1991,
        latest_version:3
    }
];


for(let i=0;i<languages.length;i++){
console.log("Name: "+languages[i].name+", latest version: "+languages[i].latest_version);
}

languages.forEach(function(object,index){
    console.log((index+1)+": Language:",object.name+", first appeared: "+object.First_appeared);
})