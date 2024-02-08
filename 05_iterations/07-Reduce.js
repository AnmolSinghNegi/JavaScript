const myNums=[1,2,3]
const mytotoal=myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc+currval
},0)//return final value
console.log(mytotoal);

const shoppingcart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"cpp course",
        price:999
    },
    {
        itemName:"java course",
        price:7999
    }
]
let pricetopay =shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log(pricetopay);
