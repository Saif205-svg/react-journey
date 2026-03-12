export default function Cook({isHungry}){
    if(isHungry===true){
        return <h3 style={{color:'red'}}>I need Fooods bro!!</h3>
    } return <h3 style={{color:'green'}}>I need rest </h3>
}