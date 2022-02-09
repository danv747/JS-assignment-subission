//1)print table of 5:

    console.log('using while loop');
    var x=5;
        while(x<=50)
        {
            console.log(x);
            x+=5;
        }

        console.log('using do while loop');
        var x=5;
            do
            {
                console.log(x);
                x+=5;
            }
            while(x<=50);

            console.log('using for loop');
            
            for(let i=5;i<=50;i+=5)
            {
                console.log(i);
            }