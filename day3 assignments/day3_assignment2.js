//2) calculate percentage of 5 subject's total:
var maths=80;
var eng=77;
var physics=75;
var chemistry=87;
var biology=71;

var percentage=(maths+eng+physics+chemistry+biology)*100/500;

if(percentage>=35)
{
    if(percentage>=75)
    {
        console.log('Distinction');
    }
    else if(percentage<=74 && percentage>=60)
    {
        console.log('Grade A');
    }
    else if(percentage<=59 && percentage>=45)
    {
        console.log('Grade B');
    }
    else if(percentage<=44 && percentage>=35)
    {
        console.log('Pass');
    }
}
else
{
    console.log('Fail');
}