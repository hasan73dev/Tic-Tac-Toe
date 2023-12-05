import React,{useState,useRef} from 'react';


const options = ["","","","","","","","",""]
export default function TicTacToe() {
  

  const [turn,setTurn] = useState("x")
  const [over,setOver] = useState(false)
  const [winner, setWinner] = useState("")
  const [winning,setWinning] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ])

  const checkWinner = () =>{
      for(let i = 0; i < winning.length; i++){
        const conditions = winning[i];
        const first = options[conditions[0]]
        const second = options[conditions[1]]
        const third = options[conditions[2]]
        
        if(first === "" || second === "" || third === ""){
          continue;
        }

        if(first === second && second === third){
          console.log(turn + " kazandi");
          setWinner(turn);
          setOver(true)
          }

         
          /*else if(first !== second && second !== third){
            setOver(true)
            setWinner("nobody")
          }*/
      }

  }
    const clicked = (e:React.MouseEvent<HTMLDivElement, MouseEvent>,index:number) => {
      if(options[index] === "" && over === false){
        options[index] = turn
        //console.log(options);
        e.currentTarget.textContent = turn;
        (turn === "x") ? setTurn("o") : setTurn("x")
        checkWinner()
      }
    
    }

    const reset = () =>{
     for(let i = 0; i < options.length; i++){
      options[i] = ""
     }
     setOver(false)
     document.querySelectorAll(".boxes").forEach(box =>{
      box.innerHTML = ""
    })
    setTurn("x")
  
    
    }
  return (
       
    <div  style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} /*style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}*/>
        <div>
      <div style={{textAlign:"center",fontSize:"1.8rem",marginBottom:"15px"}}>Tic Tac Toe</div>
      <div className="main">
        <div className='boxes' onClick={(e) => {clicked(e,0)}} ></div>  
        <div className='boxes' onClick={(e) => {clicked(e,1)}} ></div>
        <div className='boxes' onClick={(e) => {clicked(e,2)}} ></div>
        <div className='boxes' onClick={(e) => {clicked(e,3)}} ></div>   
        <div className='boxes' onClick={(e) => {clicked(e,4)}} ></div>
        <div className='boxes' onClick={(e) => {clicked(e,5)}} ></div>   
        <div className='boxes' onClick={(e) => {clicked(e,6)}} ></div>
        <div className='boxes' onClick={(e) => {clicked(e,7)}} ></div>
        <div className='boxes' onClick={(e) => {clicked(e,8)}} ></div>
      </div>
     {over && <button onClick={reset} style={{width:"300px",fontSize:"25px"}}>{winner} wins! click to reset</button>}
      </div>
      
    </div>
  )
}