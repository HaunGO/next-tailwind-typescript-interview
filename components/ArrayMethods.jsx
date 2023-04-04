

export default function ArrayMethods() {

console.log('~~~~~~~~~ ArrayMethods.jsx ~~~~~~~~~~~~')
    const items = [
        {name:'Bike', price: 100 },
        {name:'TV', price: 200 },
        {name:'Album', price: 10 },
        {name:'Book', price: 5 },
        {name:'Phone', price: 500 },
        {name:'Computer', price: 1000 },
        {name:'Keyboard', price: 25 },
        {name:'Desk', price: 300 },
    ]


    const filteredItems = items.filter((item) => {
        return item.price <= 100
    })
    console.log("filteredItems", filteredItems)


    const itemNames = items.map(item =>{
        return item.name;
    })
    console.log("itemNames", itemNames);


    const foundItem = items.find(item => {
        return item.name === 'Album'
    })
    console.log('foundItem', foundItem);


    items.forEach( (item) => {
        console.log('forEach item.name', item.name)
    })


    const someItems = items.some((item) => {
        return item.price <= 100 //boolean
    })
    console.log('someItems', someItems); 


    const everyItem = items.every((item) =>{
        return item.price <= 100 //boolean
    })
    console.log('everyItem', everyItem)


    const totalPrice = items.reduce((currentTotal, item) => {
        return item.price + currentTotal // calculated
    }, 0)
    console.log('totalPrice reduce', totalPrice)
    
    
    const moreItems = [1,2,3,4,4,5]
    const includesTwo = moreItems.includes(2)
    console.log('includes', includesTwo)

    
    console.log('items', items)


    const textStr = "How are you?";
    const textArr = textStr.split(" ");
    const textArr2= textStr.split("");
    console.log('textStr', textStr)
    console.log('textArr', textArr)
    const removeSpaces = textArr2.filter((item) =>{
        return item != " "
    })
    console.log('removeSpaces', removeSpaces);
    // console.log('removeSpaces.toString()', removeSpaces.toString());

    const backToString = removeSpaces.toString().replaceAll(',','');
    console.log('backToString', backToString);
    console.log('backToString', backToString.length);







console.log('   ~~~~~~~~ Strings ')

let abc = 'abc';

console.log('string.repeat(2)', 'abc'.repeat(2))


// removes white space
console.log('string.trim()', '   abc   '.trim())
console.log('string.trimStart()', '   abc   '.trimStart())
console.log('string.trimEnd()', '   abc   '.trimEnd())


console.log('~~~~~~~~~ / ArrayMethods.jsx ~~~~~~~~~~~~')

// NEED TO REVIEW THESE:
// const dictionary = {
//     key: "value", 
//     name: "Bart",
// }
// new Map()




    return(
        <>
        <code>ArrayMedthods.js reference component (in console for now)</code>

        <section>
        {
            // console.log('!!!!!!!!!!!~~~~~~~~~~~~~~~~~~')
        }
        </section>












        {/* <form action="">
            <fieldset>
                <legend>Wow! cool I didn't know about Legend</legend>
                <label htmlFor=""></label>
                <input type="text"  list="my-list" />
                <datalist id="my-list">
                    <option value="as" ></option>
                    <option value="Dads" ></option>
                    <option value="aad" ></option>
                    <option value="dfaad" ></option>
                    <option value="dfbraad" ></option>
                    <option value="ht fbraasfaddaad" ></option>
                </datalist>
            </fieldset>
        </form> */}



        </>
    )
}