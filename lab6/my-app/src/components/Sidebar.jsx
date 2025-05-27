
function Sidebar({ setStyle, textStyle }) {
    return (
        <div className="sidebar">
                <input type="text" value={[textStyle.fontSize]} onChange={(e) => setStyle({color: textStyle.color, fontSize: parseInt(e.target.value)})}/>
                <input type="text" value={[textStyle.color]} onChange={(e) => setStyle({color: e.target.value, fontSize: textStyle.fontSize})}/>
                <button onClick={()=> {setStyle({color: "pink", fontSize: 20})}}>Ustaw parametry tekstu na 20px i pink.</button>
            </div>
    )
}

export default Sidebar