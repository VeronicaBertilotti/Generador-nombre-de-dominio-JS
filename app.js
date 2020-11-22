
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (let i = 0;i <= adj.length -1; i++) {

    for(let j=0;j<=pronoun.length-1;j++){

        for(let h=0; h <= noun.length -1; h++){
            
            console.log(pronoun[j]+adj[i]+noun[h]+".com");

        }
    }
}

